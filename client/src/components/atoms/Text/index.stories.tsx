import React from 'react'
import GlobalThemeProvider from '../../../style/GlobalThemeProvider'
import Text, { TextProps } from '.'

export default {
  title: 'Atoms/Text',
  component: Text,
}

const Template = (args: TextProps) => (
  <GlobalThemeProvider>
    <Text {...args} />
  </GlobalThemeProvider>
)

export const Sizes = (props: TextProps) => {
  return (
    <div>
      <Template size="18" {...props}>
        H1 타이틀
      </Template>
      <Template size="14" {...props}>
        H2 타이틀
      </Template>
    </div>
  )
}

export const Color = (props: TextProps) => {
  return (
    <div>
      <Template size="18" color="yellow" {...props}>
        {' 노란색 텍스트 '}
      </Template>
      <Template size="18" color="red" {...props}>
        {' 빨간색 텍스트 '}
      </Template>
    </div>
  )
}
export const Weight = (props: TextProps) => {
  return (
    <div>
      <Template size="18" weight="bold" {...props}>
        {' 볼드체 '}
      </Template>
      <Template size="18" weight="normal" {...props}>
        {' 노멀체 '}
      </Template>
    </div>
  )
}
