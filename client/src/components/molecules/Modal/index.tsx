import ModalBox from '../../atoms/ModalBox'
import CloseBtn from '../../asset/icons/CloseBtn'
import { ModalTitle, ModalSubtitle, ModalClosed, ModalWrapper } from './style'

export interface Props {
  title?: string
  subtitle?: string
  children?: any
  onClick?: any
  visible: boolean
  height?: string
}

const Modal = ({
  children,
  onClick,
  visible,
  title,
  subtitle,
  ...props
}: Props) => {
  return (
    <ModalWrapper visible={visible}>
      <ModalBox {...props}>
        <ModalClosed onClick={onClick}>
          <CloseBtn />
        </ModalClosed>
        <ModalTitle size="h1">{title}</ModalTitle>
        <ModalSubtitle>{subtitle}</ModalSubtitle>
        {children}
      </ModalBox>
    </ModalWrapper>
  )
}

Modal.defaultProps = {
  visible: true,
}

export default Modal
