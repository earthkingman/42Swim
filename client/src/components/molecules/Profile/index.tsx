import React from 'react'
import CircleImg from '../../atoms/CircleImg'
import Text from '../../atoms/Text'
import { ProfileWrapper } from './style'

type sizeType = 'sm' | 'lg'

export interface Props {
  size: sizeType
  nickname: string
  img?: string
}

const Profile = ({ nickname, size, img, ...props }: Props) => {
  if (size === 'sm') {
    return (
      <ProfileWrapper size={size} {...props}>
        <CircleImg size="xsm" img={img ? '' : img} />
        <Text size="14">{nickname}</Text>
      </ProfileWrapper>
    )
  } else {
    return (
      <ProfileWrapper size={size} {...props}>
        <CircleImg size="sm" img={img ? '' : img} />
        <Text size="18" weight="bold">
          {nickname}
        </Text>
      </ProfileWrapper>
    )
  }
}

export default Profile
