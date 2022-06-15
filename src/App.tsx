import { useCallback, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Layout from './components/Layout'
import PageRoutes from './routes/Routes'
import { authActions } from './store/auth'
import { RootState } from './store'
import { useSearchParams } from 'react-router-dom'
import { sagaActions } from './store/sagaActions'
import { io } from 'socket.io-client'
import { notificationActions, NotificationStatus } from './store/notifications'
import moment from 'moment'

export const socket = io('http://localhost:5000', {
  transports: ['websocket'],
})

function App() {
  const dispatch = useDispatch()
  let [searchParams, setSearchParams] = useSearchParams()
  searchParams.get('token')

  const userId: string | undefined = useSelector((state: RootState) => state.auth.user?.id)
  const token: string | undefined = useSelector((state: RootState) => state.auth.token)

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user') || '{}')
    const token = localStorage.getItem('token')
    if (user && token) {
      dispatch(authActions.setUser({ user, token }))
    }
  }, [dispatch])

  const joinRoom = useCallback(() => {
    socket.emit('join_room', userId)

    socket.on('receive_notification', data => {
      const resData = JSON.parse(data)
      dispatch(
        notificationActions.setNotification({
          notification: {
            message: resData.text,
            status: NotificationStatus.info,
            date: moment(resData.updatedAt),
          },
        }),
      )
      console.log(resData)
    })
  }, [userId, dispatch])

  useEffect(() => {
    dispatch({ type: sagaActions.GET_CAR_SAGA, payload: { id: userId } })
    dispatch({ type: sagaActions.GET_DRIVERS_DATA_SAGA, payload: { id: userId } })
    dispatch({ type: sagaActions.GET_LICENSES })
    dispatch({
      type: sagaActions.GET_USER_EVENTS,
      payload: { userId: userId, token: token },
    })
    dispatch({
      type: sagaActions.GET_NOTIFICATIONS,
      payload: { userId: userId, token: token },
    })
  })

  useEffect(() => {
    if (userId) {
      joinRoom()
    }
  }, [joinRoom, userId])

  return (
    <Layout>
      <PageRoutes />
    </Layout>
  )
}

export default App
