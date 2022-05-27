import { createSlice } from '@reduxjs/toolkit'
import { ActionReducer } from './index'

export interface INews {
  title: string
  date: string
  description: string
}

interface INewsSlice {
  news: INews[] | []
}

const initialState: INewsSlice = {
  news: [],
}

const newsSlice = createSlice({
  name: 'news',
  initialState: initialState,
  reducers: {
    setNews(state, action: ActionReducer<{ news: INews[] }>) {
      return { ...state, news: [...action.payload.news] }
    },
    addNews(state, action: ActionReducer<{ newNews: INews }>) {
      return { ...state, news: [...state.news, action.payload.newNews] }
    },
  },
})

export const newsActions = newsSlice.actions

export default newsSlice
