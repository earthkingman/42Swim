import styled, { css } from 'styled-components'
import Title from '../../atoms/Title'

export const ModalClosed = styled.span`
  float: right;
  &:hover,
  &:focus {
    cursor: pointer;
    color: red;
  }
`
export const ModalTitle = styled(Title)`
  margin-top: 75px;
`
export const ModalSubtitle = styled.div`
  font-weight: 500;
  font-size: 18px;
  color: rgba(0, 0, 0, 0.5);
  margin-top: 10px;
  margin-bottom: 38px;
  font-style: normal;
`

interface SModalContent {
  height?: string
}
export const ModalContent = styled.div<SModalContent>`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  ${({ height }) =>
    height &&
    css`
      height: ${height};
    `}
`

export const ModalGroup = styled.div<SModalContent>`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  ${({ height }) =>
    height &&
    css`
      height: ${height};
    `}
`

interface SModalWrapper {
  visible: boolean
}
// display: none 해줘야함
export const ModalWrapper = styled.div<SModalWrapper>`
  display: ${({ visible }) => (visible ? 'flex' : 'none')};
  font-family: Roboto;
  position: fixed;
  z-index: 1;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgb(0, 0, 0); /* Fallback color */
  background-color: rgba(0, 0, 0, 0.4); /* Black w/ opacity */
`

export default {}
