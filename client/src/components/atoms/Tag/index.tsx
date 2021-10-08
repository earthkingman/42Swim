import React from 'react'
import Text from '../Text'
import { TagBox } from './style'

export interface Props {
  name: string
}
const Tag = ({ name, ...props }: Props) => {
  return (
    <TagBox {...props}>
      <Text size="14">{name}</Text>
    </TagBox>
  )
}

export default Tag
