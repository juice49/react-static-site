'use strict'

import React from 'react'
import Match from 'react-router/Match'
import Page from '../themes/default/components/page'
import pageContainer from '../containers/page-container'

const App = ({ __staticContent }) => {
  const PageComponent = pageContainer(Page, { __staticContent })

  return (
    <div>
      <Match exactly pattern='/' component={PageComponent} />
      <Match exactly pattern='/page-:pageNumber' component={PageComponent} />
      <Match exactly pattern='/tags' component={PageComponent} />
      <Match exactly pattern='/tags/page-:pageNumber' component={PageComponent} />
      <Match exactly pattern='/tags/:tag' component={PageComponent} />
      <Match exactly pattern='/tags/:tag/page-:pageNumber' component={PageComponent} />
      <Match pattern='/:slug' component={PageComponent} />
    </div>
  )
}

export default App
