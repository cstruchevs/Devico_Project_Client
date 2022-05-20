import { call, takeEvery, put } from 'redux-saga/effects'
import { authActions } from './auth'
import { sagaActions } from './sagaActions'
import axios from 'axios'

const addUserToLocalStorage = ({ user, token }) => {
  localStorage.setItem('user', JSON.stringify(user))
  localStorage.setItem('token', token)
}
const { setUser, setCar } = authActions

export function* userSetupSaga(action) {
  try {
    const data = yield call(() => {
      return axios.post('http://localhost:5000/register', { ...action.payload })
    })
    console.log(data)
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

export function* addCarSaga(action) {
  try {
    console.log({ ...action.payload })
    const data = yield call(() => {
      return axios.post('http://localhost:5000/cars/post', { ...action.payload })
    })
    yield put(setCar(data.data))
  } catch (error) {
    console.log(error)
  }
}

export function* updateCarSaga(action) {
  try {
    console.log({ ...action.payload })
    const data = yield call(() => {
      return axios.post('http://localhost:5000/cars/update', { ...action.payload })
    })
    console.log(data)
    yield put(setCar(data.data))
  } catch (error) {
    console.log(error)
  }
}

export function* deleteCarSaga(action) {
  try {
    console.log({ ...action.payload })
    const data = yield call(() => {
      return axios.post(
        'http://localhost:5000/cars/update',
        { ...action.payload },
        {
          params: {
            id: action.id,
          },
        },
      )
    })
    yield put(setCar(data.data))
  } catch (error) {
    console.log(error)
  }
}

export function* updateUserSaga(action) {
  try {
    const data = yield call(() => {
      return axios.patch(
        'http://localhost:5000/user/',
        {
          ...action.payload,
        },
        // {
        //   headers: { 'Content-Type': 'multipart/form-data' },
        // },
      )
    })
    const { user, token } = data.data
    yield put(setUser({ user, token }))
    addUserToLocalStorage({ user, token })
  } catch (error) {
    console.log(error)
  }
}

export default function* rootSaga() {
  yield takeEvery(sagaActions.USER_SETUP_SAGA, userSetupSaga)
  yield takeEvery(sagaActions.USER_LOGIN_SAGA, userLoginSaga)
  yield takeEvery(sagaActions.UPDATE_USER_SAGA, updateUserSaga)
  yield takeEvery(sagaActions.ADD_CAR_SAGA, addCarSaga)
  yield takeEvery(sagaActions.UPDATE_CAR_SAGA, updateCarSaga)
  yield takeEvery(sagaActions.DELETE_CAR_SAGA, deleteCarSaga)
}
