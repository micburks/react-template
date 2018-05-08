import dom from 'dom'
import HeaderComponent from '../HeaderComponent/HeaderComponent.jsx'
import ListComponent from '../ListComponent/ListComponent.jsx'
import TimerComponent from '../TimerComponent/TimerComponent.jsx'
import FooterComponent from '../FooterComponent/FooterComponent.jsx'

function listItem (item, index, props) {
  return <span>Here is the {index} value: {item.value}</span>
}

export default class App extends dom.Component {
  clicker () {
    console.log('clicker')
  }

  render () {
    return (
      <div class="App shopping-list another">
        <h1>Shopping List for {this.props.name}</h1>
        <small if={this.props.name === null}>Null name</small>
        <HeaderComponent title='Header title'/>
        <ul onClick={this.clicker}>
          <li each={this.props.values} id="id">
            {listItem}
          </li>
        </ul>
        <TimerComponent/>
        <FooterComponent text="Some text"/>
      </div>
    )
  }
}
