import styled, { css } from "styled-components";
import A from "../../atoms/A";
import Box from "../../atoms/Box";
import { ColumnSADiv } from "../../atoms/Div";

interface SProps {
  show: boolean;
}

export const CommentWrapper = styled.div`
  border-top: 1px solid rgba(0, 0, 0, 0.15);
  padding: 2rem 0px;
`;
export const CommentHeaderWrapper = styled.div`
  margin-bottom: 20px;
  display: flex;
  justify-content: space-between;
`;
export const CommentTextWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
`;

export const PBox = styled(Box)<SProps>`
  /*margin-top: 54px;*/
  width: inherit;
  display: none;
  z-index: 1;

  position: absolute;
  padding: 0 3px;
  padding-bottom: 2rem;

  left: -2rem;
  top: 3rem;
  &:focus {
    outline: 0;
  }

  ${({ show }) =>
    show &&
    css`
      display: inherit;
    `};
`;

export const PContent = styled(ColumnSADiv)`
  width: 100%;
  height: 100%;
`;

export const PItem = styled(A)`
  /*overflow: auto;*/
  display: block;
  width: 7rem;
  padding: 2rem 2rem 0 2rem;
  ${({ theme }) =>
    theme &&
    css`
      &:hover {
        color: ${theme.color.lightblack};
      }
    `}
`;

export const MoreWrap = styled.div`
  position: relative;
`;
