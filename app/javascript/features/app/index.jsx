import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import LandingPage from '../landing-page'
import SignUp from '../sign-up'

export default function App({}) {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={LandingPage} />
        <Route exact path='/sign-up' component={SignUp} />
      </Switch>
    </BrowserRouter>
  )
}
