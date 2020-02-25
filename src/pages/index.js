import React from 'react'
import {
  Switch,
  Route,
  withRouter,
} from 'react-router-dom'

import Logged from './Logged'
import Login from './Login'

const Pages = () => {
  return (
    <Switch>
      <Route path='/logged' component={Logged}/>
      <Route path='/auth' component={Login}/>
    </Switch>
  )
}

export default withRouter(Pages)
