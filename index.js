'use strict'

import React from 'react'
import { render } from 'react-dom'
import Router from 'react-router/BrowserRouter'
import { StyleSheet } from 'aphrodite/no-important'
import App from './components/app'

if (window.css) {
  StyleSheet.rehydrate(window.css)
}

render(
  <Router>
    <App />
  </Router>,
  document.getElementById('app')
)
