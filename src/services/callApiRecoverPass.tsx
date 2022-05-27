import axios from 'axios'

export const callApiRecoverPass = axios.create({
  baseURL: 'http://localhost:5000',
})

export default callApiRecoverPass