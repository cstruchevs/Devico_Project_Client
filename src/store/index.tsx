import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import createSagaMiddleware from 'redux-saga'
import authSlice from './auth'
import newsSlice from './news'
import saga from './saga'
import uiSlice from './ui-slice'

export type RootState = ReturnType<typeof store.getState>

let sagaMiddleware = createSagaMiddleware()
const middleware = [...getDefaultMiddleware({ thunk: false, serializableCheck: false }), sagaMiddleware]

const store = configureStore({
  reducer: { ui: uiSlice.reducer, auth: authSlice.reducer, news: newsSlice.reducer },
  middleware,
})

sagaMiddleware.run(saga)

export default store
