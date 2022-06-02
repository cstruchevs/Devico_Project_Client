import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Layout from './components/Layout'
import PageRoutes from './routes/Routes'
import { authActions } from './store/auth'
import callApi from './services/callApi'
import { RootState } from './store'
import { useSearchParams } from 'react-router-dom'
import { sagaActions } from './store/sagaActions'

function App() {
  const dispatch = useDispatch()
  let [searchParams, setSearchParams] = useSearchParams()
  searchParams.get('token')

  const userId: string | undefined = useSelector((state: RootState) => state.auth.user?.id)

  useEffect(() => {
    console.log(searchParams)
    const user = JSON.parse(localStorage.getItem('user') || '{}')
    const token = localStorage.getItem('token')
    if (user && token) {
      dispatch(authActions.setUser({ user, token }))
    }
  }, [])

  useEffect(() => {
    dispatch({ type: sagaActions.GET_CAR_SAGA, payload: { id: userId } })
    dispatch({ type: sagaActions.GET_DRIVERS_DATA_SAGA, payload: { id: userId } })
    dispatch({ type: sagaActions.GET_LICENSES })
  })
  return (
    <Layout>
      <PageRoutes />
    </Layout>
  )
}

export default App
