import { createSlice } from '@reduxjs/toolkit'

type SliceState = {
  showReg: boolean
  showLog: boolean
  showForgetPassword: boolean
  congratAuth: boolean
  isUserAuth: boolean
  showAddCar: boolean
  showCongratAddCar: boolean
  editCar: boolean
  alertDialog: boolean
}

const initialState: SliceState = {
  showReg: false,
  showLog: false,
  showForgetPassword: false,
  isUserAuth: false,
  congratAuth: false,
  showAddCar: false,
  showCongratAddCar: false,
  editCar: false,
  alertDialog: false
}

const uiSlice = createSlice({
  name: 'ui',
  initialState: initialState,
  reducers: {
    toggleReg(state) {
      state.showReg = !state.showReg
    },
    toggleLog(state) {
      state.showLog = !state.showLog
    },
    toggleLogReg(state) {
      state.showReg = false
      state.showLog = false
    },
    toggleForgetPassword(state) {
      state.showForgetPassword = !state.showForgetPassword
    },
    toggleAuth(state) {
      state.isUserAuth = !state.isUserAuth
    },
    toggleCongratAuth(state) {
      state.congratAuth = !state.congratAuth
    },
    toggleShowAddCar(state) {
      state.showAddCar = !state.showAddCar
    },
    toggleCongratAddCar(state) {
      state.showCongratAddCar = !state.showCongratAddCar
    },
    toggleEditCar(state) {
      state.editCar = !state.editCar
    },
    toggleAlertDialog(state) {
      state.alertDialog = !state.alertDialog
    },
  },
})

export const uiActions = uiSlice.actions

export default uiSlice
