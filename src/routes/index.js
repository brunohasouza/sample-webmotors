import React, { FC } from 'react'
import { Switch, Route } from 'react-router-dom'

import Home from './../views/Home'
import VehicleStorage from '../views/VehicleStorage'
import NotFound from './../views/NotFound'

const AppRouter = () => {
  return (    
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/:type/estoque" component={VehicleStorage} />
      <Route path="*" component={NotFound} />
    </Switch>
  )
}

export default AppRouter