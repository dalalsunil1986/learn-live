import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import LandingPage from '../landing-page'
import SignUp from '../sign-up'

import CableContext from './cable-context'

export default function App({ cable }) {
  return (
    <CableContext.Provider value={{ cable }}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route exact path="/sign-up" component={SignUp} />
        </Switch>
      </BrowserRouter>
    </CableContext.Provider>
  )
}
