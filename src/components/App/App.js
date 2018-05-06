import dom from 'dom'
import html from './App.jsx.html'

export default class App extends dom.Component {
  clicker () {
    console.log('clicker')
  }

  render () {
    return dom.render(this, html)
  }
}
