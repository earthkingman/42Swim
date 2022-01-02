import styled, { css } from "styled-components";
import { ColumnSADiv, RowSBDiv } from "../../atoms/Div";
import Text from "../../atoms/Text";
import { default as T } from "../../atoms/Title";

export interface SProps {
  size?: "xsm" | "sm" | "lg";
}

export const ListBox = styled(RowSBDiv)<SProps>`
  width: 100%;
  height: 182.46px;
  padding: 1rem 1.5rem;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  ${({ size }) =>
    size === "sm" &&
    css`
      width: 100%;
      height: 150px;
      padding: 0.5rem 0.5rem;
    `}
  ${({ size }) =>
    size === "xsm" &&
    css`
      width: 100%;
      height: 160px;
      padding: 0.5rem 0.2rem;
    `}
`;

export const Content = styled(ColumnSADiv)<SProps>`
  width: 76%;
  height: 90%;
  align-items: flex-start;

  ${({ size }) =>
    size === "sm" &&
    css`
      width: 100%;
    `}
`;

export const Title = styled(T)`
  &:hover,
  &:focus {
    ${({ theme }) =>
      theme &&
      css`
        color: ${theme.color.lightblack};
        cursor: pointer;
      `};
  }
`;

export const Desc = styled(Text)`
  overflow: hidden;
  white-space: wrap;
  font-weight: 100;
  text-overflow: ellipsis;
  word-break: break-all;
  -webkit-line-clamp: 2;
  max-height: 50px;
  line-height: 25px;
`;

export const RowDiv = styled(RowSBDiv)`
  width: 100%;
`;

export const Time = styled(Text)``;

export const Bottom = styled(RowSBDiv)`
  width: 100%;
`;
export const Counter = styled(RowSBDiv)<SProps>`
  width: 17rem;
  height: 100%;
  padding: 0 1rem;
  ${({ size }) =>
    size === "sm" &&
    css`
      justify-content: flex-start;
      padding: 0;

      > p {
        margin-right: 1rem;
      }
    `}
`;
export const SortCounter = styled(Text)``;
export const Check = styled(ColumnSADiv)`
  width: 10%;
  height: 100%;
`;
