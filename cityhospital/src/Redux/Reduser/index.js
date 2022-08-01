import { combineReducers } from "redux";
import { authReducer } from "./auth.reducer";
import { counterReducer } from "./Counter.reduce";

export const rootReduser = combineReducers({
    counter: counterReducer,
    auth: authReducer
})