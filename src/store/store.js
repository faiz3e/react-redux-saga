import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { reducers } from './reducer/reducers'
import mySaga from './sagas/mySaga'

// create the saga middleware
const sagaMiddleware = createSagaMiddleware()
// mount it on the Store
const store = createStore(
  reducers,
  applyMiddleware(sagaMiddleware)
)
store.subscribe(() => { 
  console.log("updated store")
})
// then run the saga
sagaMiddleware.run(mySaga)


export default store;