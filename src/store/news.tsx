import { createSlice } from '@reduxjs/toolkit'

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
    setNews(state, action: any) {
        return {...state, news: [...action.payload]}
    },
  },
})

export const newsActions = newsSlice.actions

export default newsSlice
