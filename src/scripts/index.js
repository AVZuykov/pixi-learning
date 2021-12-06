import '../styles/index.scss';
import './app.js';
import './resources.js';
import './visual.js';
import './world.js';


if (process.env.NODE_ENV === 'development') {
  require('../index.html');
}

