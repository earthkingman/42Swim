import React from 'react'
import Button, { ButtonProps } from './index'

export default {
  title: 'Atoms/Button',
  component: Button,
}

const Template = (args: ButtonProps) => <Button {...args} />

export const SmallButton = (props: ButtonProps) => {
  return (
    <div>
      <Template size="sm" {...props}>
        Button
      </Template>
    </div>
  )
}

export const LargeButton = (props: ButtonProps) => {
  return (
    <Template size="lg" {...props}>
      Button
    </Template>
  )
}
