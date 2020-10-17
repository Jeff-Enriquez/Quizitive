import { createUseStyles } from 'react-jss'

const useStyles = createUseStyles({
  container: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    textAlign: 'center',
    boxSizing: 'border-box',
  },
  title: {
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
    textAlign: 'center',
    fontFamily: 'Work Sans',
    fontSize: '1.5em',
    letterSpacing: '.2em',
    width: '200px',
    padding: '5px 0',
    border: '.5px solid black',
    '&::placeholder': {
      fontFamily: 'Space Mono',
      letterSpacing: 'normal',
    },
    '&::-webkit-outer-spin-button, &::-webkit-inner-spin-button': {
      '-webkit-appearance': 'none',
      '-moz-appearance': 'none',
      'margin': 0
    },
    '&[type=number]': {
      '-webkit-appearance': 'textfield',
      '-moz-appearance': 'textfield'
    }
  },
  button: {
    display: 'block',
    fontFamily: 'Space Mono',
    fontSize: '1.2em',
    width: '200px',
    margin: '0 auto',
    padding: '5px 0',
    border: '.5px solid black',
  },
  signIn: {
    fontFamily: 'Space Mono',
    fontSize: '14px',
    margin: 0,
  },
  or: {
    fontFamily: 'Space Mono',
    fontSize: '12px',
    margin: '4px 0 0 0',
    padding: 0,
  }
})

export default useStyles