import React from 'react'
import GlobalThemeProvider from '../../../style/GlobalThemeProvider'
import ThumbDownBtn, { ThumbDownBtnProps } from './index'

export default {
  title: 'Atoms/ThumbDonwBtn',
  component: ThumbDownBtn,
}

//storybook에 controls가 안뜸
export const Active = (props: ThumbDownBtnProps) => {
  return (
    <GlobalThemeProvider>
      <ThumbDownBtn active={false} {...props} />
      <ThumbDownBtn active={true} {...props} />
    </GlobalThemeProvider>
  )
}
