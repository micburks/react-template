import React from 'react'
import ReactDOM from 'react-dom'

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

function isFunction (arg) {
  return typeof arg === 'function'
}

let counter = 0
export default {
  init (...args) {
    return ReactDOM.render(...args)
  },

  element (component, props, ...args) {
    if (props) {
      // console.log('props', props)

      // Handle if statements as attribute
      if ('if' in props) {
        if (!ifIsTrue(props)) {
          return null
        }

        delete props.if
      }

      // Handle iterating with attribute
      // Children that are functions will be called with item from array
      if (props.each) {
        const { each, id, item } = props
        delete props.each
        delete props.id
        delete props.item

        let iterable = each
        if (isFunction(iterable)) {
          iterable = iterable()
        }

        const elements = iterable.map((value, index) => {
          const newProps = Object.assign({}, props)

          if (id) {
            newProps.key = value[id]
          } else {
            newProps.key = index
          }

          const children = args.map(arg => {
            if (isFunction(arg)) {
              return arg(value, index, props)
            } else {
              return arg
            }
          })

          return this.element(component, newProps, ...children)
        })

        return elements
      }

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
