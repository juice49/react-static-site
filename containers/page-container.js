import React from 'react'
import getDisplayName from 'react-display-name'
import config from '../config'
import loadContent from '../lib/load-content'
import Layout from '../themes/default/components/layout'

const loadingState = {
  component: () => <div>Loading&hellip;</div>,
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
    this.loadContent = this.loadContent.bind(this)
    this.getSlug = this.getSlug.bind(this)
  }

  componentWillMount () {
    const cache = props.cache || {}
    if (!cache[this.getSlug()]) {
      this.loadContent(this.getSlug())
    }
  }

  loadContent (slug) {
    const { onLoadContent } = props

    loadContent(`${config.paths.dist}/content`, slug)
      .then(content => onLoadContent(slug, content))
  }

  getSlug () {
    return this.props.params.slug || 'index'
  }

  render () {
    const cache = props.cache || {}

    const {
      component: PageComponent,
      title,
      date,
      tags
    } = cache[this.getSlug()] || loadingState

    return (
      <Component
        {...this.props}
        Layout={Layout}
        title={title}
        date={date}
        tags={tags}>
        <PageComponent />
      </Component>
    )
  }

}

export default pageContainer
