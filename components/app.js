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
      <Match pattern='/:slug' component={PageComponent} />
    </div>
  )
}

export default App
