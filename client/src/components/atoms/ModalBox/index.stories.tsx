import React from 'react'
import GlobalThemeProvider from '../../../style/GlobalThemeProvider'
import ModalBox, { ModalBoxProps } from './index'

export default {
  title: 'Atoms/ModalBox',
  component: ModalBox,
}

const Template = (args: ModalBoxProps) => (
  <GlobalThemeProvider>
    <ModalBox {...args} />
  </GlobalThemeProvider>
)

export const Default = (props: ModalBoxProps) => {
  return <Template {...props} />
}
