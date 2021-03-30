import { takeLatest, call, put, select } from 'redux-saga/effects'
import axios, { AxiosResponse } from 'axios';
import { GOOGLE_LOGIN, GoogleLoginAction, JWTLoginAction, LOGIN, AppState, SignUpAction, SIGNUP } from '../../types'
import { addUser } from '../actions/user'


function* loginWithGoogle(action: GoogleLoginAction) {
  try {
    const result: AxiosResponse = yield call(axios.post, "/google/login", {
      id_token: action.response.tokenObj.id_token
    });
    const user = result.data.user
    const token = result.data.token
    yield put(addUser(user, token))
    yield action.history.push("/homepage")

  } catch (err) {
    console.log(err)
  }
}

function* loginJWT(action: JWTLoginAction) {
  try {
    const result: AxiosResponse = yield call(axios.post, "/users/signin", {
      userName: action.username, password: action.password
    })
    const user = result.data.user
    const token = result.data.token
    yield console.log(result)
    yield put(addUser(user, token))
    yield action.history.push("/homepage")
  } catch (err) {
    console.log(err)
  }
}

function* signUp(action: SignUpAction) {
  try {
    const result: AxiosResponse = yield call(axios.post, "/users/register", {
      userName: action.username,
      password: action.password,
      firstName: action.firstname,
      lastName: action.lastname,
      email: action.email,
    })
    yield action.history.push("/signin")


  } catch (err) {
    console.log(err)
  }
}
function* saveState() {
  const state: AppState = yield select();
  yield localStorage.setItem('state', JSON.stringify(state));
}
export default [takeLatest(GOOGLE_LOGIN, loginWithGoogle), takeLatest(LOGIN, loginJWT), takeLatest('*', saveState), takeLatest(SIGNUP, signUp)]