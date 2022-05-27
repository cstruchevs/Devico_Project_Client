import axios from 'axios'
import { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios'

export const callApi = axios.create({
  baseURL: 'http://localhost:5000',
})

callApi.interceptors.request.use(
  (config: any) => {
    const token = localStorage.getItem('token')
    config.headers.common['Authorization'] = `Bearer ${token}`
    return config
  },
  error => {
    return Promise.reject(error)
  },
)

callApi.interceptors.response.use(
  (response: AxiosResponse) => {
    return response
  },
  (error: AxiosError) => {
    if (error.response?.status === 401) {
      // logoutUser()
    }
    return Promise.reject(error)
  },
)

export default callApi
