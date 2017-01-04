import React from 'react'
import content from '../lib/define-content'

const Foo = () => (
  <p>Lorem ipsum dolor sit amet.</p>
)

export default content('dist/content/foo.js', {
  component: Foo,
  title: 'Foo',
  tags: [ 'foo' ],
  date: '2016-11-20T00:48:40.746Z'
})
