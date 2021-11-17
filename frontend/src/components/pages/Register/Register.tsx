import { useState } from "react";
import Button from "../../atoms/Button";
import Input from "../../atoms/Input";
import Modal, { Props } from "../../molecules/Modal";
import Text from "../../atoms/Text";
import { ModalContent, ModalGroup } from "../../molecules/Modal/style";
import axios from "axios";

const Register = ({ onClose, ...props }: Props) => {
  const [userData, setUserData] = useState({
    nickname: "",
    email: "",
    password: "",
    confirm_pass: "",
  });
  const { nickname, email, password, confirm_pass } = userData;

  const onChange = (e: any) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });

    if (name === "confirm_pass" && password !== "") {
      const diffpass: any = document.getElementById("diffpass");
      diffpass.style.display = "inherit";
      if (password === confirm_pass) {
        diffpass.innerHTML = "비밀번호가 일치합니다!";
        diffpass.style.color = "blue";
      } else {
        diffpass.innerHTML = "비밀번호가 다릅니다!";
        diffpass.style.color = "red";
      }
    }
  };
  const onBlur = (e: any) => {
    if (e.target.name === "confirm_pass" && password !== "") {
      const diffpass: any = document.getElementById("diffpass");
      diffpass.style.display = "inherit";
      if (password === confirm_pass) {
        diffpass.innerHTML = "비밀번호가 일치합니다!";
        diffpass.style.color = "blue";
      } else {
        diffpass.innerHTML = "비밀번호가 다릅니다!";
        diffpass.style.color = "red";
      }
    }
  };
  const onRegist = async () => {
    console.log("regist user");
    const res: { data: any; status: number } = await axios.post(
      `${import.meta.env.VITE_API_HOST}/auth/signup`,
      userData,
      {
        withCredentials: true,
      }
    );
    console.log(res);
    setUserData({
      nickname: "",
      email: "",
      password: "",
      confirm_pass: "",
    });

    if (res.data.result === true) {
      onClose(false);
    }
    location.reload();
  };

  return (
    <Modal
      title="회원가입"
      subtitle="이메일로 회원가입"
      height="712px"
      onClose={() => onClose(false)}
      {...props}
    >
      <ModalContent height="420px">
        <ModalGroup height="300px">
          <Input
            name="nickname"
            value={nickname}
            onChange={onChange}
            placeholder="닉네임"
          />
          <Input
            name="email"
            value={email}
            onChange={onChange}
            placeholder="이메일"
          />
          <Input
            name="password"
            value={password}
            type="password"
            onChange={onChange}
            placeholder="비밀번호"
          />
          <Input
            name="confirm_pass"
            value={confirm_pass}
            type="password"
            onChange={onChange}
            onKeyUp={onBlur}
            onBlur={onBlur}
            placeholder="비밀번호 확인"
          />
          <Text
            size="14"
            id="diffpass"
            style={{ width: "449px", marginLeft: "2rem", display: "none" }}
          >
            HiddenBox
          </Text>
        </ModalGroup>
        <Button onClick={onRegist} size="lg">
          회원가입
        </Button>
      </ModalContent>
    </Modal>
  );
};

export default Register;
