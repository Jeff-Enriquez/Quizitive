import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import useStyles from './styles.js'

const Home = () => {
  const classes = useStyles()
  
  return (
    <div className={classes.container}>
      <button className={classes.create}>create +</button>
      {/* Render my quizzes */}
    </div>
  )
}

export default Home