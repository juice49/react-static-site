import React from 'react'
import getDisplayName from 'react-display-name'
import Markdown from 'react-markdown'
import config from '../config'
import loadContent from '../lib/load-content'
import AnchorRouterLink from '../components/anchor-router-link'
import Layout from '../themes/default/components/layout'

const initialState = {
  content: '',
  title: null,
  date: null,
  tags: []
}

const pageContainer = (Component, props) => class extends React.Component {

  static get displayName () {
    return `PageContainer(${getDisplayName(Component)})`
  }

  constructor (props) {
    super(props)
    this.state = initialState
    this.loadContent = this.loadContent.bind(this)
  }

  componentWillMount () {
    this.loadContent(this.props.params.slug)
  }

  loadContent (slug) {
    loadContent(config.paths.content, slug)
      .then(this.setState.bind(this))
  }

  render () {
    const { title, date, tags, content } = props.__staticContent || this.state

    return (
      <Component
        {...this.props}
        Layout={Layout}
        title={title}
        date={date}
        tags={tags}>
        <Markdown
          source={content}
          renderers={{ Link: AnchorRouterLink }} />
      </Component>
    )
  }

}

export default pageContainer
