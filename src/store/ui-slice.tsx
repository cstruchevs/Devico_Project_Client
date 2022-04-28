import { createSlice } from '@reduxjs/toolkit';

type SliceState = {showReg: boolean, showLogin: boolean}

const initialState:SliceState = {showReg: false, showLogin: false}    

const uiSlice = createSlice({
  name: 'ui',
  initialState: initialState,
  reducers: {
    toggleReg(state) {
      state.showReg = !state.showReg;
    },
    toggleLog(state) {
        state.showLogin = !state.showLogin;
      }
  },
});

export const uiActions = uiSlice.actions;

export default uiSlice;
