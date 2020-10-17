import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import useStyles from './styles.js'

const Header = () => {
  const classes = useStyles()
  
  return (
    <div className={classes.container}>
      <Link to='/home' className={classes.title}>Quizitive</Link>
      <p className={classes.logOut}>Log Out</p>
    </div>
  )
}

export default Header