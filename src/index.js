import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import * as serviceWorker from './serviceWorker'
import { BrowserRouter } from 'react-router-dom'

import { JssProvider } from 'react-jss'
import { SheetsRegistry } from 'react-jss'
import preset from 'jss-preset-default'
import jss from 'jss'

import WebFont from 'webfontloader'

import Firebase, { FirebaseContext } from './services/Firebase'


WebFont.load({
  google: {
    families: [
      'Work Sans:400,500,700', 'sans-serif',
      'Space Mono:400,500', 'monospace',
      'Source Code Pro:400', 'monospace'
    ]
  }
})

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
      <BrowserRouter>
        <FirebaseContext.Provider value={new Firebase()}>
          <FirebaseContext.Consumer>
            {firebase => <App firebase={firebase} />}
          </FirebaseContext.Consumer>
        </FirebaseContext.Provider>
      </BrowserRouter>
    </JssProvider>
  </React.StrictMode>,
  document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
