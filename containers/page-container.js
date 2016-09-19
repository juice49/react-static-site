import React from 'react'
import getDisplayName from 'react-display-name'
import fetch from 'isomorphic-fetch'
import Markdown from 'react-markdown'
import frontMatter from 'front-matter'
import Layout from '../themes/default/components/layout'

const config = {
  paths: {
    content: 'content'
  }
}

const initialState = {
  content: '',
  title: null,
  date: null,
  tags: []
}

const pageContainer = Component => class extends React.Component {

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

  loadContent (slug = 'index') {

    const { state } = this
    const url = `${config.paths.content}/${slug}.md` // TODO: Support HTML and React components

    fetch(url)
      .then(res => res.text())
      .then(content => {
        const { body, attributes } = frontMatter(content)
        console.log('parse', attributes)
        this.setState({
          content: body,
          title: attributes.title,
          tags: attributes.tags || initialState.tags,
          date: attributes.date
        })
      })
      .catch(console.error) // xxx

  }

  render () {

    const { title, date, tags, content } = this.state

    return (
      <Component
        {...this.props}
        Layout={Layout}
        title={title}
        date={date}
        tags={tags}>
        <Markdown source={content} />
      </Component>
    )

  }

}

export default pageContainer
