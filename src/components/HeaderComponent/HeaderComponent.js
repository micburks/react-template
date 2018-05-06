import dom from 'dom'
import html from './HeaderComponent.jsx.html'

export default class HeaderComponent extends dom.Component {
  render () {
    return dom.render(this, html)
  }
}
