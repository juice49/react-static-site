import { readFile } from 'fs'
import { join as pathJoin } from 'path'
import fetch from 'isomorphic-fetch'
import isServer from 'detect-node'
import frontMatter from 'front-matter'

const loadContent = (contentPath, slug = 'index') => {
  return new Promise((resolve, reject) => {
    const url = `${pathJoin(contentPath, slug)}.md`

    if (isServer) {
      return readFile(url, 'utf8', (err, content) => {
        if (err) {
          return reject(err)
        }
        resolve(parse(content))
      })
    }

    fetch(url)
      .then(res => res.text())
      .then(content => {
        resolve(parse(content))
      })
      .catch(reject)
  })
}

const parse = content => {
  const { body, attributes } = frontMatter(content)

  return {
    content: body,
    title: attributes.title,
    tags: attributes.tags || [],
    date: attributes.date
  }
}

export default loadContent
