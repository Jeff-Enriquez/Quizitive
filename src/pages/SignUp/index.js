import React, { useState } from 'react'
import useStyles from './styles.js'

const SignUp = () => {
  const [email, setEmail] = useState('')
  const [password1, setPassword1] = useState('')
  const [password2, setPassword2] = useState('')
  const [error, setError] = useState(null)

  const classes = useStyles()

  const verifyPassword = () => {
    if(password1.length === 0){
      setError('Must include password')
    } else if(password1 !== password2){
      setError('Passwords do not match')
    } else {
      setError(null)
    }
  }

  return (
    <div className={classes.container}>
      <h1 className={classes.h1}>Quizitive</h1>
      <input className={classes.input} type='text' placeholder='Email' value={email} onChange={e => setEmail(e.target.value)}/>
      <input className={classes.input} type='password' placeholder='Password' value={password1} onChange={e => setPassword1(e.target.value)}/>
      <input className={classes.input} type='password' placeholder='Confirm password' value={password2} onChange={e => setPassword2(e.target.value)}/>
      <button className={classes.button} onClick={verifyPassword}>Sign Up</button>
      {error 
        ? 
        <p className={classes.error}>{error}</p>
        :
        <></>
      }
    </div>
  )
}

export default SignUp