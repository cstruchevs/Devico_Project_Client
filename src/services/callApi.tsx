import axios from 'axios'
import { AnyIfEmpty } from 'react-redux'

export const callApi = axios.create({
  baseURL: 'http://localhost:5000',
})

callApi.interceptors.request.use(
    (config) => {
      return config
    },
    (error) => {
      return Promise.reject(error)
    }
  )

  callApi.interceptors.response.use(
    (response) => {
      return response
    },
    (error) => {
      if (error.response.status === 401) {
      }
      return Promise.reject(error)
    }
  )

export default callApi
