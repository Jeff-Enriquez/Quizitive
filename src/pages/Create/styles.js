import { createUseStyles } from 'react-jss'

const useStyles = createUseStyles( theme => ({
  mainContainer: {
    height: `100vh`,
    width: '100vw',
    boxSizing: 'border-box',
    paddingBottom: theme.createFooterHeight,
    paddingTop: theme.headerHeight,
    backgroundColor: 'rgb(242, 242, 242)',
  },
  asideContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    boxSizing: 'border-box',
    width: 200,
    height: '100vh',
    paddingTop: theme.headerHeight,
    backgroundColor: 'white',
    transition: 'transform 1s',
    transform: 'translateX(-100%)',
  },
  asideQuestionContainer: {
    fontFamily: 'Work Sans',
    width: '90%',
    margin: '15px auto',
    padding: '5px 10px',
    boxSizing: 'border-box',
    textAlign: 'center',
  },
  asideQuestionNumber: {
    fontSize: '1.2em',
    fontWeight: 'bold',
    margin: 0,
  },
  asideQuestion: {
    fontSize: '.8em',
    margin: 0,
  },
  highlightQuestion: {
    backgroundColor: '#ebf4fc',
  },
  slideInAsideContainer: {
    transition: 'transform 1s',
    transform: 'translateX(0)',
  },
  asideArrow: {
    position: 'absolute',
    top: '50%',
    right: 0,
    transform: 'translate(100%, -50%)',
    fontFamily: 'Source Code Pro',
    fontSize: '32px',
    zIndex: 20,
    backgroundColor: 'rgba(168, 215, 255, .6)',
    color: 'rgba(0,0,0,.6)',
    cursor: 'pointer',
    paddingTop: 4.5,
    paddingLeft: 6,
    height: 50,
    width: 33,
    boxSizing: 'border-box',
    borderBottomRightRadius: 90,
    borderTopRightRadius: 90,
    transformOrigin: 'center',
    transition: 'transform 1s',
    '&:hover': {
      backgroundColor: 'rgba(168, 215, 255, .85)',
      color: 'rgba(0,0,0,.85)',
    }
  },
  asideArrowClose: {
    transform: 'translate(0, -50%) scale(-1)',
    transition: 'transform 1s',
  },
  overflow: {
    overflow: 'scroll',
    height: '100%',
  }
}))

export default useStyles