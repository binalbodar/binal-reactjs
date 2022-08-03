import { all, call, put, takeEvery } from 'redux-saga/effects'
import { signUpAPI } from '../../common/apis/auth.api';
import { resetAlert, setAlert } from '../Action/alert.action';
import { emailVerificaton } from '../Action/auth.action';
import * as ActionTypes from "../ActionTypes"

function* signUP(action) {
   try {
      const user = yield call(signUpAPI, action.payload);
      yield put(emailVerificaton(user));
      yield put(setAlert({text:user.payload, color:"Success"}))
   } catch (e) {
      yield put({type: "USER_FETCH_FAILED", message: e.message});
      yield put (resetAlert({text:e.payload, color:"error"}))
   }
}
function* watchSaga() {
  yield takeEvery(ActionTypes.SIGNUP_USER, signUP);
}
export function* authSaga() {
   yield all([
      watchSaga()
   ])
}