import React from 'react'
import { Link } from 'react-router'
import { StyleSheet, css } from 'aphrodite/no-important'

const Layout = ({ children }) => (
  <div className={css(styles.container)}>
    <h1>Ash</h1>
    <Link to='/'>Home</Link>
    <section>
      {children}
    </section>
  </div>
)

const styles = StyleSheet.create({
  container: {
    fontFamily: '-apple-system, BlinkMacSystemFont'
  }
})

export default Layout
