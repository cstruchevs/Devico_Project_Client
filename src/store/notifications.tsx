import { Notifications } from '@mui/icons-material'
import { createSlice } from '@reduxjs/toolkit'
import moment, { Moment } from 'moment'
import { ActionReducer } from './index'

export enum NotificationStatus {
  success = 'success',
  pending = 'pending',
  error = 'error',
  info = 'info',
}

export interface INotifications {
  message: string
  status: NotificationStatus
  date: Moment
}

interface INotificationSlice {
  notifications: INotifications[]
}

const initialState: INotificationSlice = {
  notifications: [],
}

const notificationSlice = createSlice({
  name: 'notifications',
  initialState: initialState,
  reducers: {
    setNotification(state, action: ActionReducer<{ notification: INotifications }>) {
      return { ...state, notifications: [...state.notifications, action.payload.notification] }
    },
    deleteNotifications(state) {
      return { ...state, notifications: [] }
    },
    deleteNotificationByIndex(state, action: ActionReducer<{ index: number }>): void {
      state.notifications.splice(action.payload.index, 1)
    },
  },
})

export const notificationActions = notificationSlice.actions

export default notificationSlice
