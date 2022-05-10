import { createSlice } from '@reduxjs/toolkit'

export interface IUserInterface {
  id?: string
  email?: string
  password?: string
  phone?: string
  fullName?: string
}

export interface ICar {
  model: string
  year: string
  capaciteEngine: string
  regVihicleNumber: string
  technicalPassNumber: string
  viaNumber: string
  driveTrain: string
  fullNameOwner: string
}

export interface IDriversData {
  representiveFullName?: string
  nickname?: string
  representiveLicense?: string
  city?: string
  sportDriverLicense?: string
  regAdress?: string
  driverLicense?: string
  idNumber?: string
  phone?: string
  dob?: Date
}

interface IAuthSlice {
  user: IUserInterface | null
  token: string
  cars: [] | ICar[]
  driversData: {} | IDriversData
}

const initialState: IAuthSlice = {
  user: null,
  token: '',
  cars: [],
  driversData: {},
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
    setCar(state, action: any) {
      return { ...state, cars: [...action.payload] }
    },
    addCar(state, action: any) {
      return { ...state, cars: state.cars.concat(action.payload) }
    },
    setDriversData(state, action: any) {
      return { ...state, driversData: { ...action.payload } }
    },
  },
})

export const authActions = authSlice.actions

export default authSlice
