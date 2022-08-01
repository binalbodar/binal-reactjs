import { all, call, put, takeEvery } from 'redux-saga/effects'
import { signUpAPI } from '../../common/apis/auth.api';
import { emailVerificaton } from '../Action/auth.action';
import * as ActionTypes from "../ActionTypes"

function* signUP(action) {
   try {
      console.log(action.payload);
      const data = yield call(signUpAPI, action.payload);
      yield put(emailVerificaton(data));
   } catch (e) {
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