import styled from "styled-components";
import MoreIcon from "../../asset/icons/MoreIcon";

export interface MoreBtnProps {
  onClick?: any;
  children?: any;
}

const StyledMoreBtn = styled.button`
  width: 24px;
  height: 24px;
  background-color: inherit;
  &:hover {
    cursor: pointer;
  }
`;

const MoreBtn = ({ children, ...props }: MoreBtnProps) => (
  <StyledMoreBtn {...props}>
    <MoreIcon>{children}</MoreIcon>
  </StyledMoreBtn>
);

export default MoreBtn;
