import { parse as url } from 'url'
import React from 'react'
import { Link } from 'react-router'

const AnchorRouterLink = ({ href, ...props }) =>
  url(href).protocol
    ? <a href={href} {...props} />
    : <Link to={href} {...props} />

export default AnchorRouterLink
