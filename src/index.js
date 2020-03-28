import React from 'react'
import ReactDOM from 'react-dom'
import { HashRouter } from 'react-router-dom'
import ReactGA from 'react-ga'

import './index.css'
import Routes from './routes'
import * as serviceWorker from './serviceWorker'

ReactGA.initialize(process.env.REACT_APP_GA)

ReactDOM.render(
  <HashRouter>
    <Routes />
  </HashRouter>,
  document.getElementById('root'),
)

serviceWorker.register()
