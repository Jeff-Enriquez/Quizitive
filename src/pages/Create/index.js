import React, { useState, useEffect } from 'react'
import useStyles from './styles.js'

const Create = () => {
  const [allQuestions, setAllQuestions] = useState([{
    question: '',
    timeLimit: '',
    points: '',
    answers: ['', '', '', ''],
  }])
  const [currentQuestion, setCurrentQuestion] = useState(0)

  const [displayAllQuestions, setDisplayAllQuestions] = useState(null)

  const classes = useStyles()

  const updateQuestion = (key, value) => {
    if(key.includes('answer')){
      const idx = Number(key[key.length-1]) - 1
      setAllQuestions(prevState => {
        const newState = [...prevState]
        newState[currentQuestion].answers[idx] = value
        return newState
      })
    } else {
      setAllQuestions(prevState => {
        const newState = [...prevState]
        newState[currentQuestion][key] = value
        return newState
      })
    }
    return
  }

  useEffect(() => {
    const questions = []
    for(let i = 0; i < allQuestions.length; i++){
      console.log(allQuestions[i].question)
      questions.push(
        <div className={classes.questionContainer} key={i} onClick={() => setCurrentQuestion(i)}>
          <p>{allQuestions[i].question.substr(0, 20)}</p>
        </div>
      )
    }
    setDisplayAllQuestions(questions)
  }, [allQuestions])

  return (
    <>
      <main className={classes.mainContainer}>
        <input type='text' placeholder='Type your question...' value={allQuestions[currentQuestion].question} onChange={e => updateQuestion('question', e.target.value)}/>
        <div className={classes.answersContainer}>
          <div className={classes.answerContainer}>
            <input type='text' placeholder='Add answer 1' value={allQuestions[currentQuestion].answers[0]} onChange={e => updateQuestion('answer1', e.target.value)}/>
          </div>
          <div className={classes.answerContainer}>
            <input type='text' placeholder='Add answer 2' value={allQuestions[currentQuestion].answers[1]} onChange={e => updateQuestion('answer2', e.target.value)}/>
          </div>
          <div className={classes.answerContainer}>
            <input type='text' placeholder='Add answer 3' value={allQuestions[currentQuestion].answers[2]} onChange={e => updateQuestion('answer3', e.target.value)}/>
          </div>
          <div className={classes.answerContainer}>
            <input type='text' placeholder='Add answer 4' value={allQuestions[currentQuestion].answers[3]} onChange={e => updateQuestion('answer4', e.target.value)}/>
          </div>
        </div>
      </main>
      <footer className={classes.footerContainer}>
        {displayAllQuestions}
      </footer>
    </>
  )
}

export default Create