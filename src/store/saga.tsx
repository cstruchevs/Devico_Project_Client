import { call, takeEvery, put, Effect } from 'redux-saga/effects'
import { authActions, IUserInterface } from './auth'
import { newsActions } from './news'
import { uiActions } from './ui-slice'
import { sagaActions } from './sagaActions'
import axios, { AxiosResponse } from 'axios'
import callApi from '../services/callApi'
import { notificationActions, NotificationStatus } from './notifications'
import moment from 'moment'
import { ActionReducer } from './index'
import { ICar, IDriversData, ILicenseType } from './auth'
import { TakeableChannel } from 'redux-saga'
import { IEvents } from '../pages/WelcomePage/WelcomePage'
import { eventsActions } from './events'

const addUserToLocalStorage = ({
  user,
  token,
}: {
  user: { id: string; email: string }
  token: string
}) => {
  localStorage.setItem('user', JSON.stringify(user))
  localStorage.setItem('token', token)
}

const { setUser, setCar, addCar, setDriversData, setLicenseTypeData } = authActions
const { setNews } = newsActions
const { setUpcomingEvents, setYearsEvents, setCalendarEvents } = eventsActions
const { toggleCongratAuth, toggleLogReg, toggleAlertDialog, toggleNotifications } = uiActions
const { setNotification } = notificationActions

export function* userSetupSaga(action: Effect) {
  try {
    const data: AxiosResponse = yield call(callApi.post, '/register', { ...action.payload })
    const { user, token } = data.data
    yield put(setUser({ user, token }))
    yield put(toggleCongratAuth())
    addUserToLocalStorage({ user, token })
  } catch (error) {
    yield put(toggleAlertDialog())
  }
}
export function* userLoginSaga(action: Effect) {
  try {
    console.log({ ...action.payload })
    const data: AxiosResponse = yield call(callApi.post, '/login', { ...action.payload })
    const { user, token } = data.data
    yield put(setUser({ user, token }))
    yield put(toggleCongratAuth())
    if (action.payload.checked) {
      addUserToLocalStorage({ user, token })
    }
  } catch (error) {
    yield put(toggleAlertDialog())
  }
}

export function* addCarSaga(action: Effect) {
  try {
    const data: AxiosResponse = yield call(callApi.post, '/cars/post', { ...action.payload })
    const fetchedData = data.data
    yield put(addCar({ newCar: { ...fetchedData } }))
    setNotification({
      notification: {
        message: 'Car has been successfully added',
        status: NotificationStatus.success,
        date: moment(),
      },
    })
  } catch (error) {
    yield put(
      setNotification({
        notification: {
          message: 'Failed add car, try again!',
          status: NotificationStatus.error,
          date: moment(),
        },
      }),
    )
    yield put(toggleNotifications())
  }
}

export function* updateCarSaga(action: Effect) {
  try {
    const data: AxiosResponse = yield call(callApi.patch, '/cars/', { ...action.payload })
    yield put(setCar(data.data))
    setNotification({
      notification: {
        message: 'Car data has been successfully updated',
        status: NotificationStatus.success,
        date: moment(),
      },
    })
  } catch (error) {
    yield put(
      setNotification({
        notification: {
          message: 'Failed update car, try again!',
          status: NotificationStatus.error,
          date: moment(),
        },
      }),
    )
    yield put(toggleNotifications())
  }
}

export function* getCarSaga(action: Effect) {
  try {
    const userId = action.payload.id
    const data: AxiosResponse = yield call(callApi.get, `/cars/${userId}`)
    yield put(setCar({ cars: data.data }))
  } catch (error) {
    console.log(error)
  }
}

export function* deleteCarSaga(action: Effect) {
  try {
    const { id } = action.payload
    const data: AxiosResponse = yield call(callApi.delete, `/cars/${id}`)
    yield put(setCar(data.data))
  } catch (error) {
    yield put(
      setNotification({
        notification: {
          message: 'Failed delete car, try again!',
          status: NotificationStatus.error,
          date: moment(),
        },
      }),
    )
    yield put(toggleNotifications())
  }
}

export function* updateUserSaga(action: Effect) {
  try {
    const data: AxiosResponse = yield call(callApi.patch, '/user', { ...action.payload })
    const { user, token } = data.data
    yield put(setUser({ user, token }))
    addUserToLocalStorage({ user, token })
    setNotification({
      notification: {
        message: 'User data has been successfully updated',
        status: NotificationStatus.success,
        date: moment(),
      },
    })
  } catch (error) {
    yield put(
      setNotification({
        notification: {
          message: 'Failed update user info, try again!',
          status: NotificationStatus.error,
          date: moment(),
        },
      }),
    )
    yield put(toggleNotifications())
  }
}

export function* getNewsSaga() {
  try {
    const data: AxiosResponse = yield call(callApi.get, '/news')
    yield put(setNews({ news: data.data }))
  } catch (error) {
    yield put(
      setNotification({
        notification: {
          message: 'Failed upload news, reload website!',
          status: NotificationStatus.error,
          date: moment(),
        },
      }),
    )
    yield put(toggleNotifications())
  }
}

export function* getDriversDataSaga(action: Effect) {
  try {
    const id = action.payload.id
    const data: AxiosResponse = yield call(callApi.get, `user/driversData/${id}`)
    const driversData = {
      ...data.data,
      dob: new Date(data.data.dob).toISOString().split('T')[0],
    }
    yield put(setDriversData(driversData))
  } catch (error) {
    console.log(error)
  }
}

export function* postDriversDataSaga(action: Effect) {
  try {
    const data: AxiosResponse = yield call(callApi.post, 'user/driversData', { ...action.payload })
    const driversData = {
      ...data.data,
      dob: new Date(data.data.dob).toISOString().split('T')[0],
    }
    yield put(setDriversData(driversData))
    setNotification({
      notification: {
        message: 'Drivers data has been successfully posted',
        status: NotificationStatus.success,
        date: moment(),
      },
    })
  } catch (error) {
    yield put(
      setNotification({
        notification: {
          message: 'Failed post drivers data, try again!',
          status: NotificationStatus.error,
          date: moment(),
        },
      }),
    )
    yield put(toggleNotifications())
  }
}

export function* getLicenses() {
  try {
    const data: AxiosResponse = yield call(callApi.get, '/license/licenseType')
    yield put(setLicenseTypeData({ licenses: data.data }))
  } catch (error) {
    yield put(
      setNotification({
        notification: {
          message: 'Failed upload licenses, try again!',
          status: NotificationStatus.error,
          date: moment(),
        },
      }),
    )
    yield put(toggleNotifications())
  }
}

export function* postLicense(action: Effect) {
  try {
    const data: AxiosResponse = yield call(callApi.post, '/license', { ...action.payload })
    yield call(() => {
      return callApi.post('/license/registerToLicense', {
        licenseId: data.data.id,
        id: action.payload.userDataId,
      })
    })
  } catch (error) {
    yield put(
      setNotification({
        notification: {
          message: 'Failed creating of a new license, try again!',
          status: NotificationStatus.error,
          date: moment(),
        },
      }),
    )
    yield put(toggleNotifications())
  }
}

export function* registerToLicense(action: Effect) {
  try {
    yield call(callApi.post, '/license', { ...action.payload })
  } catch (error) {
    yield put(
      setNotification({
        notification: {
          message: 'Failed subscrtibe to the license, try again!',
          status: NotificationStatus.error,
          date: moment(),
        },
      }),
    )
    yield put(toggleNotifications())
  }
}

export function* googleAuth(action: Effect) {
  try {
    const googleUserInfo: AxiosResponse = yield call(callApi.get, '/google-register', {
      headers: {
        Authorization: `Bearer ${action.payload.token}`,
      },
    })
    const { user, token } = googleUserInfo.data
    yield put(setUser({ user, token }))
    yield put(toggleLogReg())
    yield put(toggleCongratAuth())
    addUserToLocalStorage({ user, token })
  } catch (error) {
    yield put(toggleAlertDialog())
  }
}

export function* facebookAuth(action: Effect) {
  try {
    const token = localStorage.getItem('token')

    const check: AxiosResponse = yield call(
      axios.get,
      `https://graph.facebook.com/me?access_token=${token}`,
    )

    const facebookUserInfo: AxiosResponse = yield call(
      callApi.post,
      '/facebook-register',
      { email: action.payload.email, name: action.payload.name },
      {
        headers: {
          Authorization: `Bearer ${action.payload.token}`,
        },
      },
    )
    const user = facebookUserInfo.data.user
    if (token) {
      yield put(setUser({ user, token }))
    }
    yield put(toggleLogReg())
    yield put(toggleCongratAuth())
    if (token) {
      addUserToLocalStorage({ user, token })
    }
  } catch (error) {
    yield put(toggleAlertDialog())
  }
}

export function* getUpcomngEvents() {
  try {
    const reqData: AxiosResponse = yield call(callApi.get, '/events/', {})

    const today = new Date()
    const tmpUpcoming: IEvents[] = []
    for (let i = 0; i < reqData.data.length; i++) {
      if (new Date(reqData.data[i].event.date) >= today) {
        tmpUpcoming.push(reqData.data[i])
      }
    }
    yield put(setUpcomingEvents({ upcomingEvents: tmpUpcoming }))
  } catch (error) {
    console.log(error)
  }
}

export function* getYearsEvents() {
  try {
    const reqData: AxiosResponse = yield call(callApi.get, '/events/yearsEvents', {})
    yield put(setYearsEvents({ yearsEvents: reqData.data }))
  } catch (error) {
    console.log(error)
  }
}

export function* getCalendarEvents() {
  try {
    const reqData: AxiosResponse = yield call(callApi.get, '/events/calendar', {})
    yield put(setCalendarEvents({ calendarEvents: reqData.data }))
  } catch (error) {
    console.log(error)
  }
}

export function* cancelEvent(action: Effect) {
  yield alert(
    `You try to cancel event: ${action.payload.eventId} with reason: ${action.payload.reason}`,
  )
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
  yield takeEvery(sagaActions.GET_UPCOMING_EVENTS, getUpcomngEvents)
  yield takeEvery(sagaActions.GET_YEARS_EVENTS, getYearsEvents)
  yield takeEvery(sagaActions.GET_CALENDAR_EVENTS, getCalendarEvents)
  yield takeEvery(sagaActions.CANCEL_EVENT, cancelEvent)
}
