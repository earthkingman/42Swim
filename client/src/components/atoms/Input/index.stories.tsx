import React from 'react'
import GlobalThemeProvider from '../../../style/GlobalThemeProvider'
import Input, { InputProps } from './index'

export default {
  title: 'Atoms/Input',
  component: Input,
}

const Template = (args: InputProps) => (
  <GlobalThemeProvider>
    <Input {...args} />
  </GlobalThemeProvider>
)

export const Basic = (props: InputProps) => {
  return (
    <div>
      <Template placeholder="이메일을 입력하세요" border={true} {...props} />
    </div>
  )
}

// export const Shadows = (props: InputProps) => {
//   return (
//     <div>
//       <div>
//         <Template shadow={true} size="sm" {...props}>
//           로그인
//         </Template>
//       </div>
//     </div>
//   )
// }

// export const Colors = (props: InputProps) => {
//   return (
//     <div>
//       <div>
//         <Template size="sm" color="yellow" {...props}>
//           Button
//         </Template>
//         <Template size="sm" color="white" shadow={true} {...props}>
//           Button
//         </Template>
//         <Template size="sm" color="red" {...props}>
//           Button
//         </Template>
//       </div>
//     </div>
//   )
// }
