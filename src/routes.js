import React from 'react'
import {
  Redirect,
  Route,
  Switch,
} from 'react-router-dom'

import Auth from './authentication'
import Login from './pages/Login'
import Logged from './pages/Logged'

const PrivateRoute = ({
  component: Component,
  ...rest
}) => (
  <Route
    {...rest}
    render={props =>
      Auth()
      ? (
        <Component {...props} />
      )
      : (
        <Redirect
          to={{
            pathname: '/',
            state: { from: props.location },
          }}
        />
      )
    }
  />
)

const Routes = () => (
  <Switch>
    <Route exact path="/" component={Login} />
    <PrivateRoute path="/logged" component={Logged} />
  </Switch>
)

export default Routes
