'use strict'

import React from 'react'
import { render } from 'react-dom'
import Router from 'react-router/BrowserRouter'
import Match from 'react-router/Match'
import Page from './themes/default/components/page'
import pageContainer from './containers/page-container'

const PageComponent = pageContainer(Page)

const App = () => (
  <Router>
    <div>
      <Match exactly pattern='/' component={PageComponent} />
      <Match pattern='/:slug' component={PageComponent} />
    </div>
  </Router>
)

render(<App />, document.getElementById('app'))
