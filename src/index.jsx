import dom from 'dom'
import App from './components/App/App.jsx'

const values = [{
  id: 0,
  value: 'zero'
}, {
  id: 1,
  value: 'one'
}, {
  id: 2,
  value: 'two'
}]

dom.init(
  <App name="yo" values={values}/>,
  document.getElementById('app')
)
