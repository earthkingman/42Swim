import ModalBox from '../../atoms/ModalBox'
import CloseBtn from '../../atoms/CloseBtn'
import { ModalClosed, ModalWrapper } from './style'

export interface Props {
  children?: any
  onClick?: any
  height?: string
}

const Modal = ({ children, onClick, ...props }: Props) => {
  return (
    <ModalWrapper>
      <ModalBox {...props}>
        <ModalClosed onClick={onClick}>
          <CloseBtn />
        </ModalClosed>
        {children}
      </ModalBox>
    </ModalWrapper>
  )
}

export default Modal
