import React from 'react'
import {
  Switch,
  Route,
} from 'react-router-dom'

import Detail from './Detail'
import Equipments from './Equipments'
import Practices from './Practices'

const Logged = () => (
  <Switch>
    <Route path='/logged/equipments' component={Equipments} />
    <Route path='/logged/Detail/:id' component={Detail} />
    <Route path='/logged/practices' component={Practices} />

  </Switch>
)

export default Logged
