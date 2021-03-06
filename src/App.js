import React, { useState, useEffect } from 'react'
import { Route, Switch } from 'react-router-dom'
import PrivateRoute from './components/PrivateRoute'
import GamePin from './pages/GamePin'
import Login from './pages/Login'
import SignUp from './pages/SignUp'
import Home from './pages/Home'
import Create from './pages/Create'

function App({ firebase }) {
  const [user, setUser] = useState(null)

  const signOut = () => {
    setUser(null)
  }
  
  useEffect(() => {
    firebase.auth.onAuthStateChanged(user => {
      if(user){
        setUser(user.uid)
      } else {
        setUser(undefined)
      }
    })
    return
  }, [])

  return (
    <>
      { user === null ?
      <h1>loading</h1>
      :
      <Switch>
        <Route exact path='/' component={GamePin}/>
        <Route exact path='/login' render={() =>
          <Login setUser={setUser} firebase={firebase}/> 
        }/>
        <Route exact path='/sign-up' render={() =>
          <SignUp setUser={setUser} firebase={firebase}/>
        }/>
        <PrivateRoute 
          exact path='/home'
          component={Home} 
          user={user}
          signOut={signOut}
          firebase={firebase}
        />
        <PrivateRoute 
          exact path='/create'
          component={Create} 
          user={user}
          signOut={signOut}
          firebase={firebase}
        />
      </Switch>
      }
    </>
  )
}

export default App;
