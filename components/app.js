'use strict'

import React, { Component, PropTypes } from 'react'
import Match from 'react-router/Match'
import Page from '../themes/default/components/page'
import pageContainer from '../containers/page-container'

export default class App extends Component {

  constructor (props) {
    super(props)
    this.state = { cache: {} }
    this.onLoadContent = this.onLoadContent.bind(this)
  }

  onLoadContent (slug = 'index', content) {
    this.setState({
      cache: {
        ...this.state.cache,
        [slug]: content
      }
    })
  }

  render () {
    const cache = this.props.cache || this.state.cache

    const PageComponent = pageContainer(Page, {
      onLoadContent: this.onLoadContent,
      cache
    })

    return (
      <div>
        <Match exactly pattern='/' component={PageComponent} />
        <Match pattern='/:slug' component={PageComponent} />
      </div>
    )
  }

}

App.propTypes = {
  cache: PropTypes.object
}
