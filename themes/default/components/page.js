import React, { PropTypes } from 'react'
import Date from './date'

const Page = ({ Layout, children, title, date, tags }) => (
  <Layout>
    <Title>{title}</Title>
    <Date>{date}</Date>
    <Tags>{tags}</Tags>
    {children}
  </Layout>
)

Page.propTypes = {
  Layout: PropTypes.func,
  title: PropTypes.string,
  date: PropTypes.string,
  tags: PropTypes.array
}

Page.defaultProps = {
  Layout: ({ children }) => children
}

const Title = ({ children }) => children
  ? <h1>{children}</h1>
  : null

const Tags = ({ children }) => (
  <ul>
    {children.map(tag =>
      <li key={tag}>{tag}</li>)}
  </ul>
)

export default Page
