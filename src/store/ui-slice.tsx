import { createSlice } from '@reduxjs/toolkit';

type SliceState = {showReg: boolean, showLog: boolean}

const initialState:SliceState = {showReg: false, showLog: false}    

const uiSlice = createSlice({
  name: 'ui',
  initialState: initialState,
  reducers: {
    toggleReg(state) {
      state.showReg = !state.showReg;
    },
    toggleLog(state) {
        state.showLog = !state.showLog;
      }
  },
});

export const uiActions = uiSlice.actions;

export default uiSlice;
