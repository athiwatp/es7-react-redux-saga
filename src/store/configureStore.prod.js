import { createStore, applyMiddleware, compose } from 'redux'
import sagaMiddleware from 'redux-saga'
import reducer from '../reducers'
import rootSaga from '../sagas'

const createStoreWithSaga = compose(
  applyMiddleware(sagaMiddleware(rootSaga))
)(createStore)

export default function configureStore (initialState) {
  return createStoreWithSaga(reducer, initialState)
}
