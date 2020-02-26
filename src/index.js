import React from 'react'
import ReactDOM from 'react-dom'
import { HashRouter } from 'react-router-dom'
import './index.css'
import Routes from './routes'
import * as serviceWorker from './serviceWorker'

ReactDOM.render(
  <HashRouter>
    <Routes />
  </HashRouter>,
  document.getElementById('root'),
)

serviceWorker.unregister()
