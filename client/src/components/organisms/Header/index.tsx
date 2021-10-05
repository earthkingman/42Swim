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
  onLoginClick?: any
}

const Header = ({ onLoginClick, isLogin, nickname, img }: Props) => {
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
          size="lg"
          img={img}
          nickname={nickname ? nickname : '정보없음'}
        />
      ) : (
        <HeaderBtnWrapper>
          <AHeader onClick={() => onLoginClick(true)}>로그인</AHeader>
        </HeaderBtnWrapper>
      )}
    </HeaderWrapper>
  )
}

export default Header
