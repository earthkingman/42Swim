import React from 'react'
import CircleImg from '../../atoms/CircleBox'
import Text from '../../atoms/Text'
import { ProfileWrapper } from './style'

type sizeType = 'sm' | 'lg'

export interface Props {
  size: sizeType
  nickname: string
}

const Profile = ({ nickname, size, ...props }: Props) => {
  if (size === 'sm') {
    return (
      <ProfileWrapper size={size} {...props}>
        <CircleImg size="xsm" />
        <Text size="14" color="lightgray">
          {nickname}
        </Text>
      </ProfileWrapper>
    )
  } else {
    return (
      <ProfileWrapper size={size} {...props}>
        <CircleImg size="sm" />
        <Text size="18" weight="bold">
          {nickname}
        </Text>
      </ProfileWrapper>
    )
  }
}

export default Profile
