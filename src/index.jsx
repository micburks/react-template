import dom from 'dom'
import App from './components/App/App.js'

dom.init(
  <App name="yo" values={['one', 'two', 'three']}/>,
  document.getElementById('app')
)
