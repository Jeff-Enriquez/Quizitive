import { createUseStyles } from 'react-jss'

const useStyles = createUseStyles({
  container: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    boxSizing: 'border-box',
    textAlign: 'center',
  },
  h1: {
    fontFamily: 'Space Mono',
    fontStyle: 'italic',
    letterSpacing: '.05em',
    margin: '0 0 20px 0',
    fontSize: '3em',
  },
  input: {
    display: 'block',
    margin: '0 auto 10px auto',
    appearance: 'none',
    fontFamily: 'Work Sans',
    fontSize: '1em',
    width: '200px',
    padding: '5px 2px',
    borderTop: 0,
    borderLeft: 0,
    borderRight: 0,
    borderBottom: '.5px solid #A9A9A9',
    outline: 'none',
    '&:focus': {
      borderBottom: '.5px solid black'
    }
  },
  button: {
    fontSize: '1em',
    padding: '5px 20px',
    borderRadius: '12px',
    border: '.5px solid black',
    marginTop: '5px',
    outline: 'none',
    backgroundColor: 'WhiteSmoke',
    '&:focus': {
      border: '.5px solid black',
      backgroundColor: 'LightGray',
    }
  },
  p: {
    fontSize: '.9em',
  },
  signUp: {
    color: 'blue',
    textDecoration: 'none',
    '&:hover': {
      color: '#6600cc',
      cursor: 'pointer', 
    },
  }
})

export default useStyles