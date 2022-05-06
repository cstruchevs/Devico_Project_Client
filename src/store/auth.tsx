import { createSlice } from '@reduxjs/toolkit'

export interface IUserInterface {
  id?: string
  email?: string
  password?: string
  phone?: string
  fullName? :string
}

interface ICar {
  model: string
  year: string
  capaciteEngine: string
  regVihicleNumber: string
  technicalPassNumber: string
  viaNumber: string
  driveTrain: string
  fullNameOwner: string
}

interface IAuthSlice {
  user: IUserInterface | null
  token: string
  cars: [] | ICar[]
}

const initialState: IAuthSlice = {
  user: null,
  token: '',
  cars: [],
}

const authSlice = createSlice({
  name: 'auth',
  initialState: initialState,
  reducers: {
    setUser(state, action: any) {
      state.user = action.payload.user
      state.token = action.payload.token
    },
    logOutUser(state) {
      localStorage.removeItem('user')
      state.user = null
    },
    setCar(state, action:any) {
      return {...state, cars: [...action.payload]}
    }
  },
})

export const authActions = authSlice.actions

export default authSlice
