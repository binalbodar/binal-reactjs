import { all, call, put, takeEvery } from 'redux-saga/effects'
import { signUpAPI } from '../../common/apis/auth.api';
import { setAlert } from '../Action/alert.action';
import { emailVerificaton } from '../Action/auth.action';
import * as ActionTypes from "../ActionTypes"

function* signUP(action) {
   try {
      const user = yield call(signUpAPI, action.payload);
      yield put(setAlert({text:user.payload, color:"success"}))
      yield put(emailVerificaton(user));
   } catch (e) {
      yield put (setAlert({text:e.payload, color:"error"}))
      yield put({type: "USER_FETCH_FAILED", message: e.message});
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