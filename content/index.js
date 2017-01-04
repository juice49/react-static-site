import React from 'react'
import { Link } from 'react-router'
import content from '../lib/define-content'

const Index = () => (
  <div>
    <p>Home.</p>
    <Link to='/foo'>Foo!</Link>
  </div>
)

export default content('dist/content/index.js', {
  component: Index,
  title: 'home',
  tags: [ 'foo' ],
  date: '2016-11-21T09:35:13.746Z'
})
