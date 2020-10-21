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
  const [isAsideOpen, setIsAsideOpen] = useState(false)

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
      questions.push(
        <div className={classes.asideQuestionContainer} key={i} onClick={() => setCurrentQuestion(i)}>
          <p className={classes.asideQuestionNumber}>Question {i+1}</p>
          <p className={classes.asideQuestion}>This is what my question would say{allQuestions[i].question.substr(0, 20)}</p>
        </div>
      )
    }
    setDisplayAllQuestions(questions)
  }, [allQuestions])

  useEffect(() => {
    setDisplayAllQuestions(prevState => {
      const newState = [...prevState]
      const highlightDiv = 
      <div className={`${classes.asideQuestionContainer} ${classes.highlightQuestion}`} key={currentQuestion}>
        <p className={classes.asideQuestionNumber}>Question {currentQuestion+1}</p>
        <p className={classes.asideQuestion}>This is what my question would say{allQuestions[currentQuestion].question.substr(0, 20)}</p>
      </div>
      return newState.slice(0, currentQuestion).concat([highlightDiv]).concat(newState.slice(currentQuestion))
    })
  }, [currentQuestion])

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
      <aside className={isAsideOpen ? `${classes.asideContainer} ${classes.slideInAsideContainer}` : classes.asideContainer}>
        <div className={classes.overflow}>
          {displayAllQuestions}
          <div className={classes.asideQuestionContainer}>
            <p className={classes.asideQuestionNumber}>Question 2</p>
            <p className={classes.asideQuestion}>This is what my question would say</p>
          </div>
          <div className={classes.asideQuestionContainer}>
            <p className={classes.asideQuestionNumber}>Question 3</p>
            <p className={classes.asideQuestion}>This is what my question would say</p>
          </div>
          <div className={classes.asideQuestionContainer}>
            <p className={classes.asideQuestionNumber}>Question 4</p>
            <p className={classes.asideQuestion}>This is what my question would say</p>
          </div>
          <div className={classes.asideQuestionContainer}>
            <p className={classes.asideQuestionNumber}>Question 5</p>
            <p className={classes.asideQuestion}>This is what my question would say</p>
          </div>
          <div className={classes.asideQuestionContainer}>
            <p className={classes.asideQuestionNumber}>Question 6</p>
            <p className={classes.asideQuestion}>This is what my question would say</p>
          </div>
          <div className={classes.asideQuestionContainer}>
            <p className={classes.asideQuestionNumber}>Question 7</p>
            <p className={classes.asideQuestion}>This is what my question would say</p>
          </div>
          <div className={classes.asideQuestionContainer}>
            <p className={classes.asideQuestionNumber}>Question 8</p>
            <p className={classes.asideQuestion}>This is what my question would say</p>
          </div>
          <div className={classes.asideQuestionContainer}>
            <p className={classes.asideQuestionNumber}>Question 9</p>
            <p className={classes.asideQuestion}>This is what my question would say</p>
          </div>
        </div>
        <div className={isAsideOpen ? `${classes.asideArrow} ${classes.asideArrowClose}` : classes.asideArrow}
          onClick={() => setIsAsideOpen(prevState => !prevState)}
        > 
          {'>'} 
        </div>
      </aside>
    </>
  )
}

export default Create