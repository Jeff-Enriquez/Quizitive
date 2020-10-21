import React, { useState } from 'react'
import useStyles from './styles.js'

const Home = () => {
  const [question, setQuestion] = useState('')
  const [answer1, setAnswer1] = useState('')
  const [answer2, setAnswer2] = useState('')
  const [answer3, setAnswer3] = useState('')
  const [answer4, setAnswer4] = useState('')


  const classes = useStyles()
  
  return (
    <>
      <main className={classes.mainContainer}>
        <input type='text' placeholder='Type your question...' value={question} onChange={e => setQuestion(e.target.value)}/>
        <div className={classes.answersContainer}>
          <div className={classes.answerContainer}>
            <input type='text' placeholder='Add answer 1' value={answer1} onChange={e => setAnswer1(e.target.value)}/>
          </div>
          <div className={classes.answerContainer}>
            <input type='text' placeholder='Add answer 2' value={answer2} onChange={e => setAnswer2(e.target.value)}/>
          </div>
          <div className={classes.answerContainer}>
            <input type='text' placeholder='Add answer 3' value={answer3} onChange={e => setAnswer3(e.target.value)}/>
          </div>
          <div className={classes.answerContainer}>
            <input type='text' placeholder='Add answer 4' value={answer4} onChange={e => setAnswer4(e.target.value)}/>
          </div>
        </div>
      </main>
      <footer className={classes.footerContainer}></footer>
    </>
  )
}

export default Home