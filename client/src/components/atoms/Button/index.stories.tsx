import React from 'react'
import GlobalThemeProvider from '../../../style/GlobalThemeProvider'
import PlusIcon from '../PlusIcon'
import Button, { ButtonProps } from './index'

export default {
  title: 'Atoms/Button',
  component: Button,
}

const Template = (args: ButtonProps) => (
  <GlobalThemeProvider>
    <Button {...args} />
  </GlobalThemeProvider>
)

export const Sizes = (props: ButtonProps) => {
  return (
    <div>
      <Template size="lg" {...props}>
        로그인
      </Template>
      <Template size="sm" {...props}>
        이미지 업로드
      </Template>
      <Template size="sm" {...props}>
        질문하기
        <PlusIcon />
      </Template>
    </div>
  )
}

export const Shadows = (props: ButtonProps) => {
  return (
    <div>
      <div>
        <Template shadow={true} size="sm" {...props}>
          로그인
        </Template>
      </div>
    </div>
  )
}

export const Colors = (props: ButtonProps) => {
  return (
    <div>
      <div>
        <Template size="sm" color="yellow" {...props}>
          Button
        </Template>
        <Template size="sm" color="white" shadow={true} {...props}>
          Button
        </Template>
        <Template size="sm" color="red" {...props}>
          Button
        </Template>
      </div>
    </div>
  )
}
