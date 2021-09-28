import React from 'react'
import GlobalThemeProvider from '../../../style/GlobalThemeProvider'
import ThumbDownBtn, { ThumbDownBtnProps } from './index'

export default {
  title: 'Atoms/ThumbDonwBtn',
  component: ThumbDownBtn,
}

//storybook에 controls가 안뜸

const Template = (args: ThumbDownBtnProps) => (
  <GlobalThemeProvider>
    <ThumbDownBtn {...args} />
  </GlobalThemeProvider>
)

export const Default = (props: ThumbDownBtnProps) => {
  return (
    <>
      <Template active={true} {...props} />
    </>
  )
}

export const Active = (props: ThumbDownBtnProps) => {
  return (
    <GlobalThemeProvider>
      <ThumbDownBtn active={false} {...props} />
      <ThumbDownBtn active={true} {...props} />
    </GlobalThemeProvider>
  )
}
