import { createUseStyles } from 'react-jss'

const footerContainerHeight = '74px';

const useStyles = createUseStyles( theme => ({
  mainContainer: {
    height: `100vh`,
    width: '100vw',
    border: '1px solid red',
    boxSizing: 'border-box',
    marginBottom: theme.createFooterHeight,
    marginTop: theme.headerHeight,
  },
  footerContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    height: theme.createFooterHeight,
    width: '100%',
    border: '1px solid black',
    boxSizing: 'border-box',
  },
}))

export default useStyles