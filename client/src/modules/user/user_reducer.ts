import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface UserState {
  loginData: {
    nickname: string
    email: string
    img?: string
  }
  registData: {
    nickname: string
  }
  authData: {
    token: string
  }
}

const initialState: UserState = {
  loginData: {
    nickname: '',
    email: '',
  },
  registData: {
    nickname: '',
  },
  authData: {
    token: '',
  },
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    login: (state, action: PayloadAction<any>) => {
      state.loginData = action.payload
    },
    regist: (state, action: PayloadAction<any>) => {
      state.registData = action.payload
    },
    auth: (state, action: PayloadAction<any>) => {
      state.authData = action.payload
    },
  },
})

export const { login, regist, auth } = userSlice.actions
export default userSlice.reducer
