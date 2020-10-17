import React from 'react'
import { Route, Redirect } from 'react-router-dom'

const PrivateRoute = ({ component: Component, user, path, firebase, signOut, ...rest}) => (
  user
    ?
    <Route exact path={path} render={() => (
    <>
      <Component firebase={firebase} user={user} {...rest} />
    </>
    )} />
    : 
    <Redirect to='/login' />
)

export default PrivateRoute