import React from 'react'
import {
  Switch,
  Route,
} from 'react-router-dom'

import Detail from './Detail'
import Equipments from './Equipments'
import Error from './Error'
import Home from './Home'
import Practice from './Practice'
import Practices from './Practices'

const Logged = () => (
  <Switch>
    <Route path='/logged/equipments' exact component={Equipments} />
    <Route path='/logged/equipments/:id' exact component={Detail} />
    <Route path='/logged/home' component={Home} />
    <Route path='/logged/practices' exact equipmentsequipments component={Practices} />
    <Route path='/logged/practices/:id' exact component={Practice} />
    <Route path='/logged/error' exact component={Error} />
  </Switch>
)

export default Logged
