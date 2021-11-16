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
import useAuth from "../../../hooks/useAuth";
import { Redirect } from "react-router";
import axios from "axios";

const SettingBtn = styled(Button)`
  width: 153px;
`;

const SettingPage = ({ ...props }) => {
  const { user, isLoading, isError } = useAuth();

  if (isError) {
    alert("로그인을 해주세요");
    return <Redirect to="/" />;
  }
  if (isLoading) return <div>loading...</div>;

  const openFile = () => {
    const file = document.getElementById("uploadImg");
    file?.click();
  };

  const uploadFile = async () => {
    const data = new FormData();
    const imgFile = document.getElementById("uploadImg").files[0];
    const url = `${import.meta.env.VITE_API_HOST}/users/image`;
    console.log(imgFile);
    data.append("imgFile", imgFile);

    await axios.patch(url, data, { withCredentials: true }).then((res) => {
      alert("이미지 업로드를 성공했습니다!");
      console.log("/users/image", res);
    });
    location.reload();
  };

  const deleteFile = async () => {
    const url = `${import.meta.env.VITE_API_HOST}/users/image`;

    await axios.delete(url, { withCredentials: true }).then((res) => {
      alert("이미지를 정상적으로 삭제했습니다!");
      console.log("/users/image", res);
    });
    location.reload();
  };

  return (
    <BasicTemplate {...props} header={<Header />}>
      <SettingTemplate
        tlPanel={
          <>
            <CircleBox size="lg" img={user?.image ? user.image : null} />
            <SettingBtn
              size="sm"
              color="yellow"
              shadow={true}
              onClick={openFile}
            >
              이미지 업로드
            </SettingBtn>
            <form
              id="imgform"
              method="patch"
              encType="multipart/form-data"
              style={{ display: "none" }}
            >
              <input id="uploadImg" type="file" onChange={uploadFile} />
            </form>
            <SettingBtn
              size="sm"
              color="white"
              shadow={true}
              onClick={deleteFile}
            >
              이미지 제거
            </SettingBtn>
          </>
        }
        trPanel={
          <>
            <Title size="h1">{user?.nickname}</Title>
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
