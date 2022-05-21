import { createSlice } from '@reduxjs/toolkit'
import { ActionReducer } from './index'

export interface IUserInterface {
  id: string
  email: string
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

export interface ILicenseType {
  name?: string
  cost?: string
  description?: string
}

interface IAuthSlice {
  user: IUserInterface | null
  token: string
  cars: [] | ICar[]
  driversData: {} | IDriversData
  licenseTypes: ILicenseType[]
}

const initialState: IAuthSlice = {
  user: null,
  token: '',
  cars: [],
  driversData: {},
  licenseTypes: [],
}

const authSlice = createSlice({
  name: 'auth',
  initialState: initialState,
  reducers: {
    setUser(state, action: ActionReducer<{ user: IUserInterface; token: string }>) {
      state.user = action.payload.user
      state.token = action.payload.token
    },
    logOutUser(state) {
      localStorage.removeItem('user')
      localStorage.removeItem('token')
      state.user = null
    },
    setCar(state, action: ActionReducer<{ cars: ICar[] }>) {
      return { ...state, cars: [...action.payload.cars] }
    },
    addCar(state, action: ActionReducer<{ newCar: ICar }>) {
      return { ...state, cars: [...state.cars, action.payload.newCar] }
    },
    setDriversData(state, action: ActionReducer<IDriversData>) {
      return { ...state, driversData: { ...action.payload } }
    },
    setLicenseTypeData(state, action: ActionReducer<{ licenses: ILicenseType[] }>) {
      return { ...state, licenseTypes: [...action.payload.licenses] }
    },
  },
})

export const authActions = authSlice.actions

export default authSlice
