import axios from "axios";
import { useState } from "react";
import ArrowDown from "../../asset/icons/ArrowDown";
import Profile from "../Profile";
import * as S from "./style";

interface Props {
  user: any;
}

const ProfileDropbox = ({ user }: Props) => {
  const [show, setShow] = useState(false);
  const [isHover, setIsHover] = useState(false);

  const handleMouseEnter = (e: any) => {
    setIsHover(true);
    e.target.style.cursor = "pointer";
    e.stopPropagation();
  };
  const handleMouseLeave = () => {
    setIsHover(false);
  };

  const onProfileClick = () => {
    setShow(!show);
  };

  const onLogout = async () => {
    const res = await axios.get(
      `${import.meta.env.VITE_API_HOST}/auth/logout`,
      {
        withCredentials: true,
      }
    );

    location.reload();
    console.log("logout", res);
  };
  return (
    <S.PWrapper>
      <Profile
        size="lg"
        photo={user?.image}
        nickname={user?.nickname ? user?.nickname : "정보없음"}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={onProfileClick}
        color={isHover ? "grey" : "black"}
      >
        <ArrowDown onClick={() => console.log("click")} />
      </Profile>
      <S.PBox show={show} tabIndex={0} onFocus={() => setShow(true)}>
        <S.PContent>
          <S.PItem to="/setting">설정</S.PItem>
          <S.PItem onClick={onLogout}>로그아웃</S.PItem>
        </S.PContent>
      </S.PBox>
    </S.PWrapper>
  );
};

export default ProfileDropbox;
