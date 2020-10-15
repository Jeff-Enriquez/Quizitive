import React from 'react'
import { Route, Switch } from 'react-router-dom'
import SignIn from './pages/Login'
import Home from './pages/Home'

function App() {
  return (
    <Switch>
      <Route exact path='/' component={Home}/>
    </Switch>
  )
}

export default App;
