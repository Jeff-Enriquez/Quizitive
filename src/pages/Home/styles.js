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
})

export default useStyles