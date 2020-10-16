import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import useStyles from './styles.js'

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const classes = useStyles()

  return (
    <div className={classes.container}>
      <h1 className={classes.h1}>Quizitive</h1>
      <input className={classes.input} type='text' placeholder='Email' value={email} onChange={e => setEmail(e.target.value)}/>
      <input className={classes.input} type='password' placeholder='Password' value={password} onChange={e => setPassword(e.target.value)}/>
      <button className={classes.button} >Login</button>
      <p className={classes.p}>Don't have an account? <Link to='/sign-up' className={classes.signUp}>Sign Up</Link></p>
    </div>
  )
}

export default Login