import React from 'react'
import A from '../../atoms/A'
import Button from '../../atoms/Button'
import Input from '../../atoms/Input'
import Modal, { Props } from '../../molecules/Modal'
import { ModalContent, ModalGroup } from '../../molecules/Modal/style'

const LoginPage = ({ onClose, ...props }: Props) => {
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
          <A fontColor="yellow">42seoul 계정으로 로그인</A>
        </ModalGroup>
        <A fontColor="black">아직 회원이 아니신가요?</A>
      </ModalContent>
    </Modal>
  )
}

export default LoginPage
