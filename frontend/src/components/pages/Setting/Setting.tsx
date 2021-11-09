import BasicTemplate from "../BasicTemplate";
import Header from "../../organisms/Header";
import SettingTemplate from "./template";
import CircleBox from "../../atoms/CircleBox";
import Button from "../../atoms/Button";

import styled from "styled-components";
import Title from "../../atoms/Title";
import Divider from "../../atoms/Divider";
import A from "../../atoms/A";
import SettingPanel from "../../molecules/SettingPanel";

const SettingBtn = styled(Button)`
  width: 153px;
`;

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const SettingPage = ({ ...props }) => {
  const user = {
    id: 3,
    email: "chloek@gmail.com",
    photo: "https://avatars.githubusercontent.com/u/51353146?v=4",
    nickname: "Chloek",
  };
  return (
    <BasicTemplate {...props} header={<Header />}>
      <SettingTemplate
        tlPanel={
          <>
            <CircleBox size="lg" img={user.photo} />
            <SettingBtn size="sm" color="yellow" shadow={true}>
              이미지 업로드
            </SettingBtn>
            <SettingBtn size="sm" color="white" shadow={true}>
              이미지 제거
            </SettingBtn>
          </>
        }
        trPanel={
          <>
            <Title size="h1">{user.nickname}</Title>
            <Divider weight="bold" width="4rem" />
            <A fontcolor="yellow" underline={true}>
              수정
            </A>
          </>
        }
        bPanel={
          <>
            <SettingPanel
              name="이메일"
              value={user.email}
              etc={
                <A fontcolor="yellow" underline={true}>
                  수정
                </A>
              }
              desc="회원 인증 또는 시스템에서 발송하는 이메일을 수신하는 주소입니다."
            />
            <SettingPanel
              name="비밀번호 변경"
              value={
                <A fontcolor="yellow" underline={true}>
                  변경하기
                </A>
              }
              desc="비밀번호 변경하기 버튼을 누르면 위의 이메일로  변경하기 페이지가 발송됩니다."
            />
            <SettingBtn size="sm" fontColor="white" color="red" shadow={true}>
              회원 탈퇴
            </SettingBtn>
          </>
        }
      />
    </BasicTemplate>
  );
};

export default SettingPage;
