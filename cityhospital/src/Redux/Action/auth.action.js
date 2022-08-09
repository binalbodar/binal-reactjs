import * as ActionTypes from "../ActionTypes"

//SIGN UP
export const signupAction = (data) => (dispatch) => {
    dispatch({type: ActionTypes.SIGNUP_USER, payload:data})
}

export const emailVerificaton = (data) => (dispatch) => {
    dispatch({type: ActionTypes.EMAIL_VERYFICATON, payload:data})
}

//LOGIN
export const loginAction = (data) => (dispatch) => {
    dispatch({type: ActionTypes.LOGIN_USER, payload: data})
}

export const alertloginAction = (data) => (dispatch) => {
    dispatch({type: ActionTypes.LOGIN_LOGD, payload: data})
} 