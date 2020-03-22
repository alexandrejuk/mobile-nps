import React from 'react'
import {
  Switch,
  Route,
} from 'react-router-dom'

import Detail from './Detail'
import Equipments from './Equipments'
import Home from './Home'
import Practice from './Practice'
import Practices from './Practices'

const Logged = () => (
  <Switch>
    <Route path='/logged/Detail/:id' component={Detail} />
    <Route path='/logged/equipments' component={Equipments} />
    <Route path='/logged/home' component={Home} />
    <Route path='/logged/practices' exact component={Practices} />
    <Route path='/logged/practices/:id' exact component={Practice} />
  </Switch>
)

export default Logged
