import React from "react";
import styled from "styled-components";
import ThumbUpActive from "../../asset/icons/thumbUpActive";
import ThumbUpUnactive from "../../asset/icons/thumbUpUnactive";

const StyledThumbUpBtn = styled.button`
  background-color: inherit;
`;
export interface ThumbUpBtnProps {
  active?: boolean;
  onClick?: any;
  className?: any;
}
const ThumbUpBtn = ({ active, onClick, ...props }: ThumbUpBtnProps) => {
  return (
    <StyledThumbUpBtn onClick={onClick} {...props}>
      {active ? <ThumbUpActive /> : <ThumbUpUnactive />}
    </StyledThumbUpBtn>
  );
};

export default ThumbUpBtn;
