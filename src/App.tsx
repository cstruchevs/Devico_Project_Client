import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Layout from './components/Layout'
import PageRoutes from './routes/Routes'
import { authActions } from './store/auth'
import callApi from './services/callApi'
import { RootState } from './store'
import { useSearchParams } from 'react-router-dom'

function App() {
  const dispatch = useDispatch()
  let [searchParams, setSearchParams] = useSearchParams()
  searchParams.get('token')

  useEffect(() => {
    console.log(searchParams)
    const user = JSON.parse(localStorage.getItem('user') || '{}')
    const token = localStorage.getItem('token')
    if (user && token) {
      dispatch(authActions.setUser({ user, token }))
    }
  }, [])

  return (
    <Layout>
      <PageRoutes />
    </Layout>
  )
}

export default App
