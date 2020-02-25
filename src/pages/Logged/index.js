import React from 'react'
import {
  Switch,
  Route,
} from 'react-router-dom'

import Equipments from './Equipments'
import Detail from './Detail'

const Logged = () => (
  <Switch>
    <Route path='/logged/equipments' component={Equipments} />
    <Route path='/logged/Detail/:id' component={Detail} />
  </Switch>
)

export default Logged
