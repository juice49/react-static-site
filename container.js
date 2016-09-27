const container = ({ title = 'React Static Site', body = '', styles = '', classNames = '' } = {}) => (
  `<!DOCTYPE html>
  <title>${title}</title>
  ${styles}
  <div id='app'>${body}</div>
  ${classNames}
  <script src='/dist/index.js'></script>`
)

export default container
