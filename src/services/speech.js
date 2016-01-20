import * as actions from '../actions'

export const speech = {
  initSpeechRecognition (store) {
    let SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition || null
    window.recognition = new SpeechRecognition()
    window.recognition.continuous = false
    window.recognition.interimResults = false
    window.recognition.onstart = function () {}
    window.recognition.onresult = function (event) {
      store.dispatch(actions.reciveVoice(event.results[0][0].transcript))
    }
    window.recognition.onerror = function (event) {
      store.dispatch(actions.reciveVoice('Error!'))
    }
    window.recognition.onend = function () {
      store.dispatch(actions.checkTranscript())
    }
  },
  startSpeechRecognition () {
    window.recognition.start()
    return new Promise(resolve =>
      resolve()
    )
  },
  stopSpeechRecognition () {
    window.recognition.stop()
    return new Promise(resolve =>
      resolve()
    )
  },
  delay (timeout) {
    return new Promise(resolve =>
      setTimeout(() => resolve(), timeout)
    )
  }
}
