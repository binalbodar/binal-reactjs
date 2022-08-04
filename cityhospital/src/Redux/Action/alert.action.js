import * as ActionTypes from "../ActionTypes";

export const setAlert= (data) => (dispach) =>{
    dispach({type: ActionTypes.SET_ALERT, payload:data})
}
export const resetAlert= () => (dispach)=>{
    dispach({type: ActionTypes.RESET_ALERT})
}