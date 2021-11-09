import React from "react";
import styled from "styled-components";
import ThumbDownActive from "../../asset/icons/thumbDownActive";
import ThumbDownUnactive from "../../asset/icons/thumbDownUnactive";

const StyledThumbDownBtn = styled.button`
  background-color: inherit;
`;
export interface SThumbDownBtnProps {
  active?: boolean;
}
export interface ThumbDownBtnProps extends SThumbDownBtnProps {
  onClick?: any;
  className?: any;
}

const ThumbDownBtn = ({ active, ...props }: ThumbDownBtnProps) => {
  return (
    <StyledThumbDownBtn {...props}>
      {active ? <ThumbDownActive /> : <ThumbDownUnactive />}
    </StyledThumbDownBtn>
  );
};

export default ThumbDownBtn;
