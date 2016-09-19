import React, { PropTypes } from 'react'
import format from 'dateformat'

const Date = ({ children }) => children
  ? <span>{format(children, 'dd-mm-yy HH:MM')}</span>
  : null

Date.propTypes = {
  children: PropTypes.string
}

export default Date
