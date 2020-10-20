import { createUseStyles } from 'react-jss'

const useStyles = createUseStyles({
  container: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    boxSizing: 'border-box',
    width: '100%',
    padding: '2px 8px 2px 8px',
    backgroundColor: '#b3d9ff',
  },
  title: {
    textDecoration: 'none',
    fontSize: '1.5em',
    margin: 0,
    color: 'black',
    fontFamily: 'Space Mono',
    fontStyle: 'italic',
    letterSpacing: '.05em',
  },
  logOut: {
    fontSize: '1em',
    margin: 0,
    cursor: 'pointer',
    fontFamily: 'Space Mono',
    fontStyle: 'italic',
    letterSpacing: '.05em',
  },
})

export default useStyles