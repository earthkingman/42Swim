import axios from "axios";
import { useState } from "react";
import A from "../../atoms/A";
import Button from "../../atoms/Button";
import Input from "../../atoms/Input";
import Modal, { Props } from "../../molecules/Modal";
import { ModalContent, ModalGroup } from "../../molecules/Modal/style";

interface LoginProps extends Props {
  onRegist: any;
}

const LoginPage = ({ onClose, onRegist, ...props }: LoginProps) => {
  const [input, setInput] = useState({
    email: "",
    password: "",
  });
  const { email, password } = input;

  const onLogin = async () => {
    const res: any = await axios.post(
      "http://localhost:5000/auth/login",
      input
    );
    console.log(res);
    if (res.status === 200) {
      setInput({
        email: "",
        password: "",
      });
      onClose(false);
    }
  };

  const onChange = (e: any) => {
    const { name, value } = e.target;
    setInput({ ...input, [name]: value });
    console.log(name, value);
  };

  const on42Login = () => {
    console.log("on42Login");
    location.href = "http://localhost:5000/auth/42login";
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
          <Input
            name="email"
            value={email}
            onChange={onChange}
            placeholder="이메일을 입력하세요"
          />
          <Input
            name="password"
            value={password}
            type="password"
            onChange={onChange}
            placeholder="비밀번호를 입력하세요"
          />
          <Button onClick={onLogin} size="lg">
            로그인
          </Button>
          <A onClick={on42Login} fontcolor="yellow" underline={true}>
            42seoul 계정으로 로그인
          </A>
        </ModalGroup>
        <A
          onClick={() => {
            onRegist(true);
            onClose(false);
          }}
          fontcolor="black"
        >
          아직 회원이 아니신가요?
        </A>
      </ModalContent>
    </Modal>
  );
};

export default LoginPage;
