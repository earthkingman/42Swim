import React from 'react'
import Text from '../../atoms/Text'
import Profile from '../../molecules/Profile/'
import {
  HeaderWrapper,
  TitleHeader,
  HeaderTitleWrapper,
  HeaderBtnWrapper,
  AHeader,
} from './style'

export interface Props {
  isLogin?: boolean
  nickname?: string
  img?: string
}

const Header = ({ isLogin, nickname, img, ...props }: Props) => {
  return (
    <HeaderWrapper>
      <HeaderTitleWrapper>
        <TitleHeader size="h1">42Code</TitleHeader>
        <Text size="14" color="yellow">
          42seoul
        </Text>
      </HeaderTitleWrapper>
      {isLogin ? (
        <Profile
          size="sm"
          img={img}
          nickname={nickname ? nickname : '정보없음'}
        />
      ) : (
        <HeaderBtnWrapper>
          <AHeader>login</AHeader>
          <AHeader>signup</AHeader>
        </HeaderBtnWrapper>
      )}
    </HeaderWrapper>
  )
}

export default Header
