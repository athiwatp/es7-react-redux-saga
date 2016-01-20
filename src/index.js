import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import App from './containers/App'
import configureStore from './store/configureStore'
import DevTools from './containers/DevTools'
import { speech } from './services/speech'

const store = configureStore()

speech.initSpeechRecognition(store)

let mainContainer = document.getElementById('main-container')
render(
  <Provider store={store}>
    <div>
      <App />
      <DevTools/>
    </div>
  </Provider>,
  mainContainer
)
