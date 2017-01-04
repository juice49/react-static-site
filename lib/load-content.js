import { readFile } from 'fs'
import { join as pathJoin } from 'path'
import fetch from 'isomorphic-fetch'
import isServer from 'detect-node'
import loadJS from 'fg-loadjs'

const loadContent = (contentPath, slug = 'index') => {
  return new Promise((resolve, reject) => {
    const url = `${pathJoin(contentPath, slug)}.js`

    if (isServer) {
      resolve(require(pathJoin(url)).default)
      return
    }

    loadJS(url, () => resolve(window[url]))
  })
}

export default loadContent
