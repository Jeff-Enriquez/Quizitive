import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import useStyles from './styles.js'

const Home = () => {
  const classes = useStyles()
  
  return (
    <div className={classes.container}>
      <Link to='/create' className={classes.create}>create +</Link>
      {/* Render my quizzes */}
    </div>
  )
}

export default Home