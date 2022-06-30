import { applyMiddleware, createStore } from 'redux'
import thunk from 'redux-thunk'
import { rootReduser } from './Reduser'
export const configurStore = () =>{
    let store = createStore(rootReduser, applyMiddleware(thunk))
    return store
}