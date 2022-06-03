import { createSlice } from '@reduxjs/toolkit'
import { ActionReducer } from './index'
import { IEvents } from '../pages/WelcomePage/WelcomePage'

const initialState: IEvents[] = []

const upcomngEventsSlice = createSlice({
  name: 'upcomngEvents',
  initialState: initialState,
  reducers: {
    setUpcomingEvents(state, action: ActionReducer<{ upcomingEvents: IEvents[] }>) {
      return { ...state, upcomingEvents: [...action.payload.upcomingEvents] }
    },
  },
})

export const upcomngEventsActions = upcomngEventsSlice.actions

export default upcomngEventsSlice
