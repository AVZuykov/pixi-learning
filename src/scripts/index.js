import '../styles/index.scss'
import './utils/pixi'
import './app'
import './resources'
import './visual'
import './world'


if ( process.env.NODE_ENV === 'development' ) {
  require('../index.html')
}

