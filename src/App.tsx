import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import Layout from './components/Layout'
import PageRoutes from './routes/Routes'
import { authActions } from './store/auth'

function App() {
  const dispatch = useDispatch()


  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user') || '{}')
    const token = localStorage.getItem('token')
    if(user && token) {
      dispatch(authActions.setUser({user, token}))
    }
  }, [])
  return (
    <Layout>
      <PageRoutes />
    </Layout>
  )
}

export default App
