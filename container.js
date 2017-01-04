const container = ({ title = 'React Static Site', body = '', styles = '', classNames = '' } = {}) => (
  `<!doctype html>
  <html lang='en'>
    <meta charset='utf-8'>
    <meta name='viewport' content='width=device-width, initial-scale=1'>
    <title>${title}</title>
    ${styles}
    <div id='app'>${body}</div>
    ${classNames}
    <script src='/dist/common.js'></script>
    <script src='/dist/index.js'></script>
  </html>`
)

export default container
