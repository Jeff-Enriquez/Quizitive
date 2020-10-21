import { createUseStyles } from 'react-jss'

const useStyles = createUseStyles( theme => ({
  mainContainer: {
    height: `100vh`,
    width: '100vw',
    border: '1px solid red',
    boxSizing: 'border-box',
    paddingBottom: theme.createFooterHeight,
    paddingTop: theme.headerHeight,
  },
  footerContainer: {
    position: 'absolute',
    bottom: 0,
    left: '100vw',
    border: '1px solid black',
    boxSizing: 'border-box',
    height: '100vw',
    width: theme.createFooterHeight,
    overflowY: 'auto',
    overflowX: 'hidden',
    transform: 'rotate(-90deg)',
    transformOrigin: 'bottom left',
  },
  questionContainer: {
    transform: 'rotate(90deg)',
    transformOrigin: 'center',
    height: 50,
    width: 50,
    border: '1px solid gray',
  }
}))

export default useStyles