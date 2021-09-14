import React from 'react'
import GlobalThemeProvider from '../../../style/GlobalThemeProvider'
import Button, { LikeButtonProps } from './index'

export default {
  title: 'Atoms/LikeButton',
  component: Button,
}

const Template = (args: LikeButtonProps) => (
  <GlobalThemeProvider>
    <Button {...args} />
  </GlobalThemeProvider>
)

export const Basic = (props: LikeButtonProps) => {
  return (
    <div>
      <Template {...props}>22</Template>
    </div>
  )
}
