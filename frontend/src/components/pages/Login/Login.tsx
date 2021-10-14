import React from "react";
import A from "../../atoms/A";
import Button from "../../atoms/Button";
import Input from "../../atoms/Input";
import Modal, { Props } from "../../molecules/Modal";
import { ModalContent, ModalGroup } from "../../molecules/Modal/style";

const LoginPage = ({ onClose, ...props }: Props) => {
  //   const location = useLocation().search;
  //   const code = new URLSearchParams(location).get("code");

  const on42Login = () => {
    console.log("on42Login");
    window.location.href = "http://localhost:5000/auth/42login";
    // const { data: Data } = await axios.get(
    //   `http://localhost:5000/auth/42login?code=${code}`
    // );
    // const {
    //   token: { accessToken, refreshToken },
    // } = Data;
    // console.log(Data);
  };

  return (
    <Modal
      onClose={() => onClose(false)}
      title="로그인"
      subtitle="이메일로 로그인"
      {...props}
    >
      <ModalContent height="392px">
        <ModalGroup height="265px">
          <Input placeholder="이메일을 입력하세요" />
          <Input type="password" placeholder="비밀번호를 입력하세요" />
          <Button size="lg">로그인</Button>
          <A onClick={on42Login} fontColor="yellow" underline={true}>
            42seoul 계정으로 로그인
          </A>
        </ModalGroup>
        <A to="/register" fontColor="black">
          아직 회원이 아니신가요?
        </A>
      </ModalContent>
    </Modal>
  );
};

export default LoginPage;
