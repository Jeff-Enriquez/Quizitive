import React from 'react'
import useStyles from './styles.js'

const Home = () => {
  const classes = useStyles()

  return (
    <>
      <h1>Quizitive</h1>
      <input type='text' placeholder='Game Pin' />
      <button onClick=''>submit</button>
    </>
  )
}

export default Home