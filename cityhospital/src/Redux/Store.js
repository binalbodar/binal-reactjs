import { applyMiddleware, createStore } from 'redux'
import thunk from 'redux-thunk'
import { rootReduser } from './Reduser'
import createSagaMiddleware from 'redux-saga'
import { rootSaga } from './saga/rootSaga'

const sagaMiddleware = createSagaMiddleware()

const middleware = [thunk, sagaMiddleware]

const configurStore = () =>{
    let store = createStore(rootReduser, applyMiddleware(...middleware))
    sagaMiddleware.run(rootSaga)
    return store
}
 
export const store = configurStore();