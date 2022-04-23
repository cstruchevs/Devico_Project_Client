import { configureStore } from '@reduxjs/toolkit';

import uiSlice from './ui-slice';

export type RootState = ReturnType<typeof store.getState>

const store = configureStore({
  reducer: { ui: uiSlice.reducer }
});

export default store;
