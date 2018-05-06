import dom from 'dom'
import iterateHtml from './Iterate.jsx.html'

function ifIsTrue (obj) {
  if ('if' in obj) {
    if (typeof obj.if === 'function') {
      return obj.if()
    } else {
      return obj.if
    }
  } else {
    return false
  }
}

export function IfComponent (props) {
  if (ifIsTrue(props)) {
    return props.children
  } else {
    return null
  }
}

export function IfNotComponent (props) {
  if (!ifIsTrue(props)) {
    return props.children
  } else {
    return null
  }
}

export function IterateComponent (props) {
  return props.list
    .map((item, index) => {
      const newProps = {
        [props.item]: item,
        index,
        key: index
      }

      return dom.render({
        component: props.listComponent,
        props: newProps
      }, iterateHtml)
    })
}
