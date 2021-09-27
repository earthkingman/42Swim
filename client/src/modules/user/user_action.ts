import { LOGIN_USER, REGIST_USER, AUTH_USER } from './user_type'

interface loginData {
  id: string
  password: string
}
interface registData extends loginData {
  nickname: string
}

export const loginUser = (loginData: loginData) => {
  return { type: LOGIN_USER, payload: loginData }
}

export const registUser = (registData: registData) => {
  return { type: REGIST_USER, payload: registData }
}

export const auth = () => {
  return { type: AUTH_USER }
}
