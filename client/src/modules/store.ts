import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit'
import userReducer from './user/user_reducer'

export const store = configureStore({
  reducer: {
    user: userReducer,
  },
})

// store 의 Rootstate와 App Dispatch 타입을 추론하기 위해
export type RootState = ReturnType<typeof store.getState>
// 이 부분은 inferred type: {user: UserState}
export type AppDispatch = typeof store.dispatch
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>
