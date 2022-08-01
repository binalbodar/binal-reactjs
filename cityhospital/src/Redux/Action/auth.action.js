import * as ActionTypes from "../ActionTypes"

export const signupAction = (data) => (dispatch) => {
    dispatch({type: ActionTypes.SIGNUP_USER, payload:data})
}

export const emailVerificaton = (data) => (dispatch) => {
    dispatch({type: ActionTypes.EMAIL_VERYFICATON, payload:data})
}