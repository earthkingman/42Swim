import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { mutate } from "swr";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import useAuth from "../../../hooks/useAuth";
import LogoSwim from "../../asset/logo/LogoSwim";
import Loading from "../../atoms/Loading";
import ProfileDropbox from "../../molecules/ProfileDropbox";
import LoginPage from "../../pages/Login/Login";
import RegisterPage from "../../pages/Register/Register";
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

const Header = () => {
  const [isLoginModal, setIsLoginModal] = useState(false);
  const [isRegistModal, setIsRegistModal] = useState(false);
  const { user, isLoading, isError } = useAuth();

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const url = `${import.meta.env.VITE_API_HOST}/users/info`;
    mutate(url);
  }, []);

  const on42Login = () => {
    location.href = `${import.meta.env.VITE_API_HOST}/auth/42login`;
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      console.log("login fail");
    }, 30000);
  };

  //   if (isLoading) <div>Loading</div>;
  if (isError) <div>error</div>;

  return (
    <>
      <Loading visible={loading} />
      <LoginPage
        onRegist={setIsRegistModal}
        visible={isLoginModal}
        onClose={setIsLoginModal}
      />
      <RegisterPage visible={isRegistModal} onClose={setIsRegistModal} />
      <HeaderWrapper>
        <HeaderTitleWrapper>
          <Link to="/">
            <TitleHeader size="h1">
              <LogoSwim />
            </TitleHeader>
          </Link>
        </HeaderTitleWrapper>
        {user && !isLoading ? (
          <ProfileDropbox user={user} />
        ) : (
          <HeaderBtnWrapper>
            {/* <AHeader onClick={() => setIsLoginModal(true)}>로그인</AHeader> */}
            <AHeader onClick={on42Login}>42 로그인</AHeader>
          </HeaderBtnWrapper>
        )}
      </HeaderWrapper>
    </>
  );
};

export default Header;
