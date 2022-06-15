import { createSlice } from '@reduxjs/toolkit'
import { ActionReducer } from './index'
import { IEvents } from '../pages/WelcomePage/WelcomePage'

export interface ICalendarEvent {
  date: string
  name: string
}
interface IAuthSlice {
  upcomingEvents: IEvents[]
  yearsEvents: IEvents[]
  calendarEvents: ICalendarEvent[]
  userEvents: IEvents[]
}

const initialState: IAuthSlice = {
  upcomingEvents: [],
  yearsEvents: [],
  calendarEvents: [],
  userEvents: [],
}

const eventsSlice = createSlice({
  name: 'events',
  initialState: initialState,
  reducers: {
    setUpcomingEvents(state, action: ActionReducer<{ upcomingEvents: IEvents[] }>) {
      return { ...state, upcomingEvents: [...action.payload.upcomingEvents] }
    },
    setYearsEvents(state, action: ActionReducer<{ yearsEvents: IEvents[] }>) {
      return { ...state, yearsEvents: [...action.payload.yearsEvents] }
    },
    setCalendarEvents(state, action: ActionReducer<{ calendarEvents: ICalendarEvent[] }>) {
      return { ...state, calendarEvents: [...action.payload.calendarEvents] }
    },
    setUserEvents(state, action: ActionReducer<{ userEvents: IEvents[] }>) {
      return { ...state, userEvents: [...action.payload.userEvents] }
    },
  },
})

export const eventsActions = eventsSlice.actions

export default eventsSlice
