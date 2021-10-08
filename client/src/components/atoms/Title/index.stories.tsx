import React from 'react'
import GlobalThemeProvider from '../../../style/GlobalThemeProvider'
import Title, { TitleProps } from '.'

export default {
  title: 'Atoms/Title',
  component: Title,
}

const Template = (args: TitleProps) => (
  <GlobalThemeProvider>
    <Title {...args} />
  </GlobalThemeProvider>
)

export const Sizes = (props: TitleProps) => {
  return (
    <div>
      <Template size="h1" {...props}>
        H1 타이틀
      </Template>
      <Template size="h2" {...props}>
        H2 타이틀
      </Template>
    </div>
  )
}
