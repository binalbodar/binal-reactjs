import * as ActionTypes from "../ActionTypes";

export const setAlert= (user) => (dispach) =>{
    dispach({type: ActionTypes.SET_ALERT, payload:user})
}
export const resetAlert= () => (dispach)=>{
    dispach({type: ActionTypes.RESET_ALERT})
}