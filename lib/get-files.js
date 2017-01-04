import { readdir } from 'fs'
import { join as pathJoin } from 'path'
import config from '../config'

export default function getFiles () {
  return new Promise((resolve, reject) => {
    readdir(config.paths.content, (err, files) => {
      if (err) return reject(`Couldn't read files: ${err}`)
      resolve([
        'index.js',
        ...files.map(file => pathJoin(config.paths.content, file))
      ])
    })
  })
}
