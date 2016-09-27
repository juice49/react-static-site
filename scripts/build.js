'use strict'

import { readdir, writeFile } from 'fs'
import { join as pathJoin } from 'path'
import basename from 'basename'
import React from 'react'
import { renderToString as render } from 'react-dom/server'
import { ServerRouter, createServerRenderContext } from 'react-router'
import { StyleSheetServer } from 'aphrodite'
import container from '../container'
import loadContent from '../lib/load-content'
import App from '../components/app'
import config from '../config'

const publicPath = pathJoin(__dirname, '../', config.paths.public)
const contentPath = pathJoin(publicPath, config.paths.content)

const buildPage = slug =>
  loadContent(contentPath, slug)
    .then(content => renderPage(slug, content))
    .then(content => writePage(slug, content))
    .catch(console.error)

readdir(contentPath, (err, files) => {
  if (err) {
    console.error('ohno', err)
    return
  }

  files
    .map(file => ({ slug: basename(file), file }))
    .filter(({ slug }) => slug !== 'index')
    .forEach(({ slug }) => buildPage(slug))
})

buildPage()

function renderPage (slug, content) {
  const context = createServerRenderContext()

  const { html, css } = StyleSheetServer.renderStatic(() => render(
    <ServerRouter location={`/${slug}`} context={context}>
      <App __staticContent={content} />
    </ServerRouter>
  ))

  const result = context.getResult()
  return { ...content, html, css }
}

function writePage (slug = 'index', { html, css }) {
  const content = container({
    body: `<div>${html}</div>`,
    styles: `<style data-aphrodite>${css.content}</style>`,
    classNames: `<script>window.css = ${JSON.stringify(css.renderedClassNames)}</script>`
  })

  writeFile(`${pathJoin(publicPath, slug)}`, content, err => {
    if (err) {
      console.error(err)
    }
  })
}
