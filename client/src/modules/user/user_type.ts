export const LOGIN_USER = 'user/login_user' as const
export const REGIST_USER = 'user/regist_user' as const
export const AUTH_USER = 'user/auth_user' as const
// 액션 타입 선언
// 뒤에 as const 를 붙여줌으로써 나중에 액션 객체를 만들게 action.type 의 값을 추론하는 과정에서
// action.type 이 string 으로 추론되지 않고 'user/login_user' 와 같이 실제 문자열 값으로 추론 되도록 해준다.
