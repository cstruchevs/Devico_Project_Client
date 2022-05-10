import { call, takeEvery, put } from 'redux-saga/effects'
import { authActions } from './auth'
import { newsActions } from './news'
import { sagaActions } from './sagaActions'
import axios from 'axios'

const addUserToLocalStorage = ({ user, token }) => {
  localStorage.setItem('user', JSON.stringify(user))
  localStorage.setItem('token', token)
}
const { setUser, setCar, addCar, setDriversData } = authActions
const { setNews } = newsActions

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
    const data = yield call(() => {
      return axios.post('http://localhost:5000/cars/post', { ...action.payload })
    })
    console.log(`Data`, data.data)
    const fetchedData = data.data
    yield put(addCar({ ...fetchedData }))
  } catch (error) {
    console.log(error)
  }
}

export function* updateCarSaga(action) {
  try {
    const data = yield call(() => {
      return axios.patch('http://localhost:5000/cars/update', { ...action.payload })
    })
    yield put(setCar(data.data))
  } catch (error) {
    console.log(error)
  }
}

export function* getCarSaga(action) {
  try {
    console.log(action.payload.id)
    const userId = action.payload.id
    const data = yield call(() => {
      return axios.get(
        `http://localhost:5000/cars/${userId}`,
        { id: userId },
        {
          params: {
            id: userId,
          },
        },
      )
    })
    yield put(setCar(data.data))
  } catch (error) {
    console.log(error)
  }
}

export function* deleteCarSaga(action) {
  try {
    console.log({ ...action.payload })
    const data = yield call(() => {
      return axios.delete(
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
    console.log({ ...action.payload })
    const data = yield call(() => {
      return axios.patch('http://localhost:5000/update', { ...action.payload })
    })
    const { user, token } = data.data
    yield put(setUser({ user, token }))
    addUserToLocalStorage({ user, token })
  } catch (error) {
    console.log(error)
  }
}

export function* getNewsSaga(action) {
  try {
    const data = yield call(() => {
      return axios.get(`http://localhost:5000/news`)
    })
    yield put(setNews(data.data))
  } catch (error) {
    console.log(error)
  }
}

export function* getDriversDataSaga(action) {
  try {
    console.log({ ...action.payload })
    const data = yield call(() => {
      const id = action.payload.id
      return axios.get(
        `http://localhost:5000/driversData/${id}`,
        {
          params: {
            id: id,
          },
        },
      )
    })
    console.log(data)
    yield put(setDriversData(data.data))
  } catch (error) {
    console.log(error)
  }
}

export function* postDriversDataSaga(action) {
  try {
    console.log({ ...action.payload })
    const data = yield call(() => {
      return axios.post('http://localhost:5000/driversData', { ...action.payload })
    })
    yield put(setDriversData(data.data))
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
  yield takeEvery(sagaActions.GET_CAR_SAGA, getCarSaga)
  yield takeEvery(sagaActions.GET_NEWS_SAGA, getNewsSaga)
  yield takeEvery(sagaActions.GET_DRIVERS_DATA_SAGA, getDriversDataSaga)
  yield takeEvery(sagaActions.POST_DRIVERS_DATA_SAGA, postDriversDataSaga)
}
