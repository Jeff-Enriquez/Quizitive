import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import * as serviceWorker from './serviceWorker'

import { JssProvider } from 'react-jss'
import { SheetsRegistry } from 'react-jss'
import preset from 'jss-preset-default'
import jss from 'jss'

const setupJss = () => {
  jss.setup(preset())
  const sheetsRegistry = new SheetsRegistry()
  const globalStyleSheet = jss.createStyleSheet(
    {'@global': { 
        body: { 
          margin: '0',
        },
    }}
  ).attach()
  sheetsRegistry.add(globalStyleSheet)
  return sheetsRegistry
}

const sheets = setupJss()

ReactDOM.render(
  <React.StrictMode>
    <JssProvider registry={sheets}>
      <App />
    </JssProvider>
  </React.StrictMode>,
  document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
