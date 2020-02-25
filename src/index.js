import React from 'react'
import ReactDOM from 'react-dom'
import { HashRouter } from 'react-router-dom'
import './index.css'
import Pages from './pages'
import * as serviceWorker from './serviceWorker'

ReactDOM.render(
  <HashRouter>
    <Pages />
  </HashRouter>,
  document.getElementById('root'),
)

serviceWorker.unregister()
