import A from "../../atoms/A";
import Button from "../../atoms/Button";
import Input from "../../atoms/Input";
import Modal, { Props } from "../../molecules/Modal";
import { ModalContent, ModalGroup } from "../../molecules/Modal/style";

interface LoginProps extends Props {
  onRegist: any;
}

const LoginPage = ({ onClose, onRegist, ...props }: LoginProps) => {
  //   const location = useLocation().search;
  //   const code = new URLSearchParams(location).get("code");

  const on42Login = async () => {
    console.log("on42Login");
    location.href = "http://localhost:5000/auth/42login";
    // location.href =
    //   "https://api.intra.42.fr/oauth/authorize?client_id=97c40d212804a44d10986d1f41ce8bd4183e2aab7878458d7347a56dca137449&redirect_uri=http%3A%2F%2Flocalhost%3A3000%2Fauth&response_type=code";
    // const data = await axios.get(`http://localhost:5000/auth/42login`);
    // console.log(data);
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
