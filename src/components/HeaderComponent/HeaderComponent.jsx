import dom from 'dom'
import './HeaderComponent.css'

export default class HeaderComponent extends dom.Component {
  render () {
    return <div class="blue">{this.props.title}</div>
  }
}
