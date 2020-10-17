import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import Header from '../Header'

const PrivateRoute = ({ component: Component, user, path, firebase, signOut, ...rest}) => (
  user
    ?
    <Route exact path={path} render={() => (
    <>
      <Header />
      <Component firebase={firebase} user={user} {...rest} />
    </>
    )} />
    : 
    <Redirect to='/login' />
)

export default PrivateRoute