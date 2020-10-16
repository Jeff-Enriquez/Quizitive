import React, { useState, useEffect } from 'react'
import { Route, Switch } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import SignUp from './pages/SignUp'

function App({ firebase }) {
  const [user, setUser] = useState(null)

  const signOut = () => {
    setUser(null)
  }
  
  useEffect(() => {
    firebase.auth.onAuthStateChanged(user => {
      if(user){
        setUser(user)
      } else {
        setUser(undefined)
      }
    })
    console.log(user)
    return
  }, [])

  return (
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route exact path='/login' render={() =>
        <Login setUser={setUser} firebase={firebase}/> 
      }/>
      <Route exact path='/sign-up' render={() =>
        <SignUp setUser={setUser} firebase={firebase}/>
      }/>
    </Switch>
  )
}

export default App;
