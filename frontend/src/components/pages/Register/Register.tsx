import Button from "../../atoms/Button";
import Input from "../../atoms/Input";
import Modal, { Props } from "../../molecules/Modal";
import { ModalContent, ModalGroup } from "../../molecules/Modal/style";

const Register = ({ onClose, ...props }: Props) => {
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
          <Input placeholder="닉네임" />
          <Input placeholder="이메일" />
          <Input placeholder="비밀번호" />
          <Input placeholder="비밀번호 확인" />
        </ModalGroup>
        <Button size="lg">회원가입</Button>
      </ModalContent>
    </Modal>
  );
};

export default Register;
