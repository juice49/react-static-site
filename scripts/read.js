'use strict'

/**
 * Read
 *
 * Read and analyse content to create React components for each output page.
 * For the moment, we'll:
 *
 * - Ignore content components, we don't support dynamic content (like
 *   related posts) for now. And we don't yet support markdown files.
 * - Generate components for the main list of posts.
 * - Generate components for the tags pages.
 */

import config from '../config'
import getFiles from '../lib/get-files'

const TYPE_INDEX = 'TYPE_INDEX';
const TYPE_TAG = 'TYPE_TAG';

;(async function() {
  const files = await getFiles()

  for (const foo of tree({ files })) {
    console.log(foo)
  }
})()

/**
 * Tree
 *
 * [
 *   {
 *     type: 'page',
 *     uri: '/foo'
 *   },
 *   {
 *     type: 'collection',
 *     uri: '/'
 *   }
 * ]
 */
function * tree ({ files } = {}) {
  for (const file of files) {
    yield 'read ' + file;
  }
}

function loadTemplateComponent (type = TYPE_INDEX, tag) {

}
