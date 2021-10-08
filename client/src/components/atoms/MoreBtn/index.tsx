import styled from 'styled-components'
import MoreIcon from '../../asset/icons/MoreIcon'

export interface MoreBtnProps {
  onClick?: any
}

const StyledMoreBtn = styled.button`
  width: 24px;
  height: 24px;
  background-color: inherit;
`

const MoreBtn = (props: MoreBtnProps) => (
  <StyledMoreBtn {...props}>
    <MoreIcon></MoreIcon>
  </StyledMoreBtn>
)

export default MoreBtn
