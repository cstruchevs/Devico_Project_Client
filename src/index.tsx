import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import store from './store'
import { Provider } from 'react-redux'
import StandartThemeProvider from './theme/StandartTheme'
import { BrowserRouter } from 'react-router-dom'
import { GoogleOAuthProvider } from '@react-oauth/google'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <React.StrictMode>
    <GoogleOAuthProvider clientId='610691592930-diiebljoinm38jgsiks1d19vli062svp.apps.googleusercontent.com'>
      <BrowserRouter>
        <Provider store={store}>
          <StandartThemeProvider>
            <App />
          </StandartThemeProvider>
        </Provider>
      </BrowserRouter>
    </GoogleOAuthProvider>
  </React.StrictMode>,
)
