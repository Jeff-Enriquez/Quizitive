import { createUseStyles } from 'react-jss'

const useStyles = createUseStyles({
  container: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    boxSizing: 'border-box',
    width: '100%',
    padding: '2px 5px 0 5px',
  },
  title: {
    textDecoration: 'none',
    fontSize: '2em',
    margin: 0,
    color: 'black',
  },
  logOut: {
    fontSize: '1.2em',
    margin: 0,
    cursor: 'pointer',
  },
})

export default useStyles