import isServer from 'detect-node'

export default function content (path, content) {
  if (!isServer) {
    window[path] = content
  }
  return content
}
