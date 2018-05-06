import React from 'react'
import ReactDOM from 'react-dom'

// let counter = 0
export default {
  init (...args) {
    return ReactDOM.render(...args)
  },

  render (that, html) {
    return html.call(that, that.props)
  },

  element (component, props, ...args) {
    if (props) {
      /*
      console.log(props)

      // Handle if statements as attribute
      if ('if' in props) {
        if (typeof props.if === 'function' && !props.if()) {
          return ''
        } else if (!props.if) {
          return ''
        }
      }

      // Handle iterating with attribute -- Not quite possible
      if (props.each) {
        const { each, item } = props
        delete props.each
        delete props.item

        const values = each()
        const elements = values.map(value => {
          const newProps = Object.assign({}, props, { key: counter++, [item]: value })
          const newArgs = args.map(arg => {
            if (typeof arg === 'function') {
              return arg(newProps)
            } else {
              return arg
            }
          })

          return this.element(component, newProps, ...newArgs)
        })

        return elements
      }
      */

      // Rename class to className for react
      if (props.class) {
        props.className = props.class
        delete props.class
      }
    }

    return React.createElement(component, props, ...args)
  },

  Component: class extends React.Component {}
}
