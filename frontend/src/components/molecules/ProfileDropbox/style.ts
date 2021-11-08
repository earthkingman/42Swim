import styled, { css } from "styled-components";
import Box from "../../atoms/Box";
import { ColumnSADiv, ColumnSBDiv } from "../../atoms/Div";
import A from "../../atoms/A";

export const PWrapper = styled(ColumnSBDiv)`
  &:focus {
    outline: 0;
  }
`;

interface SProps {
  show: boolean;
}

export const PBox = styled(Box)<SProps>`
  margin-top: 54px;
  width: inherit;
  /* height: 100px; */
  display: none;
  z-index: 1;
  position: absolute;
  padding: 0 3px;
  padding-bottom: 2rem;

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
  display: block;
  width: 100%;
  margin: 2rem 2rem 0 2rem;

  ${({ theme }) =>
    theme &&
    css`
      &:hover {
        color: ${theme.color.lightblack};
      }
    `}
`;
