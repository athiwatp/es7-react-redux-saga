import { createStore, applyMiddleware, compose } from 'redux'
import sagaMiddleware from 'redux-saga'
import reducer from '../reducers'
import rootSaga from '../sagas'
import DevTools from '../containers/DevTools'

const createStoreWithSaga = compose(
  applyMiddleware(sagaMiddleware(rootSaga)),
  DevTools.instrument()
)(createStore)

export default function configureStore (initialState) {
  return createStoreWithSaga(reducer, initialState)
}
