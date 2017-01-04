'use strict'

import { join as pathJoin } from 'path'
import { createWriteStream } from 'fs'
import mkdirp from 'mkdirp'
import browserify from 'browserify'
import watchify from 'watchify'
import config from '../config'
import getFiles from '../lib/get-files'

const publicPath = pathJoin(__dirname, '..', config.paths.public)
const distPath = pathJoin(publicPath, config.paths.dist)
const commonPath = pathJoin(distPath, config.paths.commonBundle)
const distContentPath = pathJoin(distPath, config.paths.content)

Promise.all([ setupBundler(), mkdir() ])
  .then(([ bundle ]) => bundle())

async function setupBundler () {
  const files = await getFiles()

  const bundler = browserify(files, {
   transform: 'babelify',
   cache: {},
   packageCache: {}
  })

  const bundle = () => bundler
   .bundle()
   .pipe(createWriteStream(commonPath))

  bundler.plugin('factor-bundle', {
    outputs: files.map(file =>
      pathJoin(distPath, file))
  })

  bundler.plugin(watchify)
  bundler.on('update', bundle)
  bundler.on('log', message => console.log(message))

  return bundle
}

function mkdir () {
  return new Promise((resolve, reject) => {
    mkdirp(distContentPath, err => {
      if(err) return reject(err)
      resolve()
    })
  })
}
