import { call, takeEvery, put } from 'redux-saga/effects'
import { authActions } from './auth'
import { sagaActions } from './sagaActions'
import axios from 'axios'

const addUserToLocalStorage = ({ user, token }) => {
  localStorage.setItem('user', JSON.stringify(user))
  localStorage.setItem('token', token)
}
const { setUser } = authActions

export function* userSetupSaga(action) {
  try {
    const data = yield call(() => {
      return axios.post('http://localhost:5000/register', { ...action.payload })
    })
    const { user, token } = data.data
    yield put(setUser({ user, token }))
    addUserToLocalStorage({ user, token })
  } catch (error) {
    console.log(error)
  }
}
export function* userLoginSaga(action) {
  try {
    console.log({ ...action.payload })
    console.log('hello')
    const data = yield call(() => {
      return axios.post('http://localhost:5000/login', { ...action.payload })
    })
    console.log(data)
    const { user, token } = data.data
    console.log({ user, token })
    yield put(setUser({ user, token }))
    addUserToLocalStorage({ user, token })
  } catch (error) {
    console.log(error)
  }
}

export default function* rootSaga() {
  yield takeEvery(sagaActions.USER_SETUP_SAGA, userSetupSaga)
  yield takeEvery(sagaActions.USER_LOGIN_SAGA, userLoginSaga)
}
