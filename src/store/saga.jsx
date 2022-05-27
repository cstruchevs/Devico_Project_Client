import { call, takeEvery, put } from 'redux-saga/effects'
import { authActions } from './auth'
import { newsActions } from './news'
import { uiActions } from './ui-slice'
import { sagaActions } from './sagaActions'
import axios from 'axios'
import callApi from '../services/callApi'

const addUserToLocalStorage = ({ user, token }) => {
  localStorage.setItem('user', JSON.stringify(user))
  localStorage.setItem('token', token)
}
const { setUser, setCar, addCar, setDriversData, setLicenseTypeData } = authActions
const { setNews } = newsActions
const { toggleCongratAuth, toggleLogReg } = uiActions

export function* userSetupSaga(action) {
  try {
    const data = yield call(() => {
      return callApi.post('/register', { ...action.payload })
    })
    const { user, token } = data.data
    yield put(setUser({ user, token }))
    yield put(toggleCongratAuth())
    addUserToLocalStorage({ user, token })
  } catch (error) {
    console.log(error)
  }
}
export function* userLoginSaga(action) {
  try {
    console.log({ ...action.payload})
    const data = yield call(() => {
      return callApi.post('/login', { ...action.payload })
    })
    const { user, token } = data.data
    yield put(setUser({ user, token }))
    yield put(toggleCongratAuth())
    if (action.payload.checked) {
      addUserToLocalStorage({ user, token })
    }
  } catch (error) {
    console.log(error)
  }
}

export function* addCarSaga(action) {
  try {
    const data = yield call(() => {
      return callApi.post('/cars/post', { ...action.payload })
    })
    const fetchedData = data.data
    yield put(addCar({ newCar: { ...fetchedData } }))
  } catch (error) {
    console.log(error)
  }
}

export function* updateCarSaga(action) {
  try {
    const data = yield call(() => {
      return callApi.patch('/cars/update', { ...action.payload })
    })
    yield put(setCar(data.data))
  } catch (error) {
    console.log(error)
  }
}

export function* getCarSaga(action) {
  try {
    const userId = action.payload.id
    const data = yield call(() => {
      return callApi.get(
        `/cars/${userId}`,
        { id: userId },
        {
          params: {
            id: userId,
          },
        },
      )
    })
    yield put(setCar({ cars: data.data }))
  } catch (error) {
    console.log(error)
  }
}

export function* deleteCarSaga(action) {
  try {
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
    const data = yield call(() => {
      return callApi.patch(
        '/user/',
        {
          ...action.payload,
        },
      )
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
      return callApi.get(`/news`)
    })
    yield put(setNews({ news: data.data }))
  } catch (error) {
    console.log(error)
  }
}

export function* getDriversDataSaga(action) {
  try {
    const data = yield call(() => {
      const id = action.payload.id
      return callApi.get(`/driversData/${id}`, {
        params: {
          id: id,
        },
      })
    })
    yield put(setDriversData(data.data))
  } catch (error) {
    console.log(error)
  }
}

export function* postDriversDataSaga(action) {
  try {
    const data = yield call(() => {
      return callApi.post('/driversData', { ...action.payload })
    })
    yield put(setDriversData(data.data))
  } catch (error) {
    console.log(error)
  }
}

export function* getLicenses(action) {
  try {
    const data = yield call(() => {
      return callApi.get('/license/licenseType')
    })
    yield put(setLicenseTypeData({ licenses: data.data }))
  } catch (error) {
    console.log(error)
  }
}

export function* postLicense(action) {
  try {
    const data = yield call(() => {
      return callApi.post('/license', { ...action.payload })
    })
    console.log(data)
    console.log(data.data.id)
    yield call(() => {
      return callApi.post('/license/registerToLicense', {
        licenseId: data.data.id,
        id: action.payload.userDataId,
      })
    })
  } catch (error) {
    console.log(error)
  }
}

export function* registerToLicense(action) {
  try {
    yield call(() => {
      return callApi.post('/license', { ...action.payload })
    })
  } catch (error) {
    console.log(error)
  }
}

export function* googleAuth(action) {
  try {
    const googleUserInfo = yield call(() => {
      return callApi.get('/google-register', {
        headers: {
          Authorization: `Bearer ${action.payload.token}`,
        },
      })
    })
    const { user, token } = googleUserInfo.data
    console.log(user, token)
    yield put(setUser({ user, token }))
    yield put(toggleLogReg())
    yield put(toggleCongratAuth())
    addUserToLocalStorage({ user, token })
  } catch (error) {
    console.log(error)
  }
}

export function* facebookAuth(action) {
  try {
    const token = localStorage.getItem('token')

    const check = yield call(() => {
      return axios.get(`https://graph.facebook.com/me?access_token=${token}`)
    })

    const facebookUserInfo = yield call(() => {
      return callApi.post(
        '/facebook-register',
        { email: action.payload.email, name: action.payload.name },
        {
          headers: {
            Authorization: `Bearer ${action.payload.token}`,
          },
        },
      )
    })
    const user = facebookUserInfo.data.user
    console.log(facebookUserInfo)
    yield put(setUser({ user, token }))
    yield put(toggleLogReg())
    yield put(toggleCongratAuth())
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
  yield takeEvery(sagaActions.GET_CAR_SAGA, getCarSaga)
  yield takeEvery(sagaActions.GET_NEWS_SAGA, getNewsSaga)
  yield takeEvery(sagaActions.GET_DRIVERS_DATA_SAGA, getDriversDataSaga)
  yield takeEvery(sagaActions.POST_DRIVERS_DATA_SAGA, postDriversDataSaga)
  yield takeEvery(sagaActions.GET_LICENSES, getLicenses)
  yield takeEvery(sagaActions.POST_LICENSE, postLicense)
  yield takeEvery(sagaActions.REGISTER_TO_LICENSE, registerToLicense)
  yield takeEvery(sagaActions.GOOGLE_AUTH, googleAuth)
  yield takeEvery(sagaActions.FACEBOOK_AUTH, facebookAuth)
}
