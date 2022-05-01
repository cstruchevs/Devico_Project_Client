import { createSlice } from '@reduxjs/toolkit'

export interface IUserInterface {
  email?: string
  password?: string
}

interface IAuthSlice {
  user: null | IUserInterface
  token: string
}

const initialState: IAuthSlice = {
  user: null,
  token: '',
}

const authSlice = createSlice({
  name: 'auth',
  initialState: initialState,
  reducers: {
    setUser(state, action: any) {
      state.user = action.payload.user
      state.token = action.payload.token
    },
  },
})

export const authActions = authSlice.actions

export default authSlice
