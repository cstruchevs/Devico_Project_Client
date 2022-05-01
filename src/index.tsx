import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import store from './store'
import { Provider } from 'react-redux'
import StandartThemeProvider from './theme/StandartTheme'
import { BrowserRouter } from 'react-router-dom'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <StandartThemeProvider>
          <App />
        </StandartThemeProvider>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
)
