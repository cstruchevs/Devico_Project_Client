import { createSlice } from '@reduxjs/toolkit'

export interface INotifications {
    message?: string,
    status?: string
}

interface INotificationSlice {
    notifications: INotifications[] | null
  }
  
  const initialState: INotificationSlice = {
    notifications: null,
  }

const notificationSlice = createSlice({
  name: 'notifications',
  initialState: initialState,
  reducers: {
    setNotifications(state, action: any) {
        return {...state, notifications: [...action.payload]}
    },
    deleteNotifications(state, action: any) {
        return {...state, notifications: null}
    },
  },
})

export const notificationActions = notificationSlice.actions

export default notificationSlice
