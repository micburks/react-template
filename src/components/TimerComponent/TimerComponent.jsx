import dom from 'dom'

export default class TimerComponent extends dom.Component {
  constructor (props) {
    super(props)
    this.state = { count: 0 }
  }

  componentDidMount () {
    setInterval(() => {
      this.setState({ count: this.state.count + 1 })
    }, 1000)
  }

  render () {
    return <li>{this.state.count}</li>
  }
}
