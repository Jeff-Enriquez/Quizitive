import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import useStyles from './styles.js'

const Login = ({ firebase, setUser }) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  const classes = useStyles()

  const handleForm = async e => {
    e.preventDefault()
    try {
      const { user } = await firebase.doSignInWithEmailAndPassword(email, password)
      setUser(user.uid)
      console.log(user.uid)
    } catch (err) {
      setError(err.message)
    }
  }

  return (
    <div className={classes.container}>
      <h1 className={classes.h1}>Quizitive</h1>
      <form onSubmit={e => handleForm(e)}>
        <input className={classes.input} type='text' placeholder='Email' value={email} onChange={e => setEmail(e.target.value)}/>
        <input className={classes.input} type='password' placeholder='Password' value={password} onChange={e => setPassword(e.target.value)}/>
        <button type='submit' className={classes.button}>Login</button>
      </form>
      <p className={classes.p}>Don't have an account? <Link to='/sign-up' className={classes.signUp}>Sign Up</Link></p>
      {error 
        ? 
        <p className={classes.error}>{error}</p>
        :
        <></>
      }
    </div>
  )
}

export default Login