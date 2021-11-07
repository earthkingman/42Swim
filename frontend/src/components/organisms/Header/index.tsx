import React from "react";
import { Link } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import Text from "../../atoms/Text";
import Profile from "../../molecules/Profile/";
import {
  HeaderWrapper,
  TitleHeader,
  HeaderTitleWrapper,
  HeaderBtnWrapper,
  AHeader,
} from "./style";

export interface Props {
  isLogin?: boolean;
  onLoginClick?: any;
}

const Header = ({ onLoginClick }: Props) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { user, isLoading, isError } = useAuth();

  return (
    <HeaderWrapper>
      <HeaderTitleWrapper>
        <Link to="/">
          <TitleHeader size="h1">42Code</TitleHeader>
        </Link>
        <Text size="14" color="lightgrey">
          42seoul
        </Text>
      </HeaderTitleWrapper>
      {user ? (
        <Profile
          size="lg"
          img={user?.img}
          nickname={user?.nickname ? user?.nickname : "정보없음"}
        />
      ) : (
        <HeaderBtnWrapper>
          <AHeader onClick={() => onLoginClick(true)}>로그인</AHeader>
        </HeaderBtnWrapper>
      )}
    </HeaderWrapper>
  );
};

export default Header;
