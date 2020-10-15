import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import useStyles from './styles.js'

const Home = () => {
  const classes = useStyles()

  const [gamePIN, setGamePIN] = useState('')

  return (
    <div className={classes.container}>
      <h1 className={classes.title}>Quizitive</h1>
      <input className={classes.input} type='number' placeholder='Game PIN' value={gamePIN} onChange={e => setGamePIN(e.target.value)}/>
      <button className={classes.button} onClick=''>Enter</button>
      <p className={classes.or}>or</p>
      <Link className={classes.signIn} to='/'>sign in</Link>
    </div>
  )
}

export default Home