import { combineReducers } from "redux";
import { counterReducer } from "./Counter.reduce";

export const rootReduser = combineReducers({
    counter: counterReducer
})