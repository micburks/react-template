/**
 * Loader will transform html string into:
 *
 * import dom from 'dom'
 *
 * // other imports
 *
 * export default function (props) {
 *   return (
 *
 *   // html file content
 *
 *   )
 * }
 */

const importDom = `
import dom from 'dom'
`

const functionDefinition = `
export default function (props) {
  return (
`

const functionEnd = `
  )
}
`

module.exports = function (content) {
  if (/<script>/.exec(content)) {
    content = content.replace(/<script>/, '')
    content = content.replace(/<\/script>/, functionDefinition)
    content = `
      ${importDom}
      ${content}
      ${functionEnd}
    `
  } else {
    content = `
      ${importDom}
      ${functionDefinition}
        ${content}
      ${functionEnd}
    `
  }

  return content
}
