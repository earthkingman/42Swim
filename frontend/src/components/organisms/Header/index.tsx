import React from "react";
import { Link } from "react-router-dom";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import useAuth from "../../../hooks/useAuth";
import Text from "../../atoms/Text";
import ProfileDropbox from "../../molecules/ProfileDropbox";
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
  //   const user = {
  //     id: 3,
  //     email: "chloek@gmail.com",
  //     photo: "https://avatars.githubusercontent.com/u/51353146?v=4",
  //     nickname: "Chloek",
  //   };
  //   const user = null;

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
        <ProfileDropbox user={user} />
      ) : (
        <HeaderBtnWrapper>
          <AHeader onClick={() => onLoginClick(true)}>로그인</AHeader>
        </HeaderBtnWrapper>
      )}
    </HeaderWrapper>
  );
};

export default Header;
