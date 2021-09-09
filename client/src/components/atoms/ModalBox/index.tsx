import styled, { css } from 'styled-components'

export interface SModalBox {
  height?: string
}

const ModalBoxStyles = css<SModalBox>`
  ${({ height }) =>
    height &&
    css`
      height: ${height};
    `}
`

const StyledModalBox = styled.div`
  width: 533px;
  height: 644px;
  border-radius: 16px;
  background-color: white;
  padding: 46px;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 2px 4px 0px;

  ${ModalBoxStyles}
`

export interface ModalBoxProps extends SModalBox {
  children?: any
}

const ModalBox = ({ children, ...props }: ModalBoxProps) => {
  return <StyledModalBox {...props}>{children}</StyledModalBox>
}

export default ModalBox
