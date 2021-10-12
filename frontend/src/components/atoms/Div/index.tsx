import styled, { css } from "styled-components";

interface Props {
  width?: string;
  height?: string;
}

export const RowSADiv = styled.div<Props>`
  display: flex;
  justify-content: space-around;
  align-items: center;
  align-content: center;
  ${({ width }) =>
    width &&
    css`
      width: ${width};
    `}
  ${({ height }) =>
    height &&
    css`
      height: ${height};
    `}
`;

export const RowSBDiv = styled.div<Props>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  align-content: center;
  ${({ width }) =>
    width &&
    css`
      width: ${width};
    `}
  ${({ height }) =>
    height &&
    css`
      height: ${height};
    `}
`;

export const ColumnSADiv = styled.div<Props>`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  align-content: center;
  ${({ width }) =>
    width &&
    css`
      width: ${width};
    `}
  ${({ height }) =>
    height &&
    css`
      height: ${height};
    `}
`;

export const ColumnSBDiv = styled.div<Props>`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  align-content: center;
  ${({ width }) =>
    width &&
    css`
      width: ${width};
    `}
  ${({ height }) =>
    height &&
    css`
      height: ${height};
    `}
`;
