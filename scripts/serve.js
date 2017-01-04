'use strict'

import { createServer } from 'http'
import { createReadStream } from 'fs'
import { join as pathJoin } from 'path'
import st from 'st'
import config from '../config'

const publicPath = pathJoin(__dirname, '..', config.paths.public)
const indexPath = pathJoin(publicPath, 'index')

const mount = st({
  path: publicPath,
  url: '/',
  index: 'index',
  passthrough: true,
  cache: false // TODO: Only disbaled in dev
})

createServer((req, res) => {
  const miss = createReadStream(indexPath)
  mount(req, res, () => miss.pipe(res))
}).listen(1337)
