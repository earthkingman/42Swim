import styled, { css } from "styled-components";

export interface TabProps {
  width?: string;
  height?: string;
  size?: "xsm" | "sm" | "lg";
}
export const TabWrapper = styled.ul<TabProps>`
  /* width: 380px; */
  /* height: 41px; */
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin: 1rem 0;
  /* margin-bottom: 1rem; */

  ${({ width }) =>
    width &&
    css`
      width: ${width};
    `}
  ${({ height }) =>
    height &&
    css`
      width: ${height};
    `}
  ${({ size }) =>
    size === "sm" &&
    css`
      height: 21px;
      /* width: 224px; */
    `}
	${({ size }) =>
    size === "xsm" &&
    css`
      margin: 0 0;
    `}
`;

export const StyledTabItem = styled.li<TabProps>`
  color: #c4c4c4;
  font-size: 20px;
  border: none;
  font-weight: 700;
  margin: 0.2rem 1.1rem;
  /* width: 95px; */
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  &:hover {
    cursor: pointer;
  }
  ${({ size }) =>
    size === "sm" &&
    css`
      font-size: 18px;
      margin: 0 0.8rem;
      /* width: 67px; */
    `}
  ${({ size }) =>
    size === "xsm" &&
    css`
      font-size: 14px;
      margin: 0 0;
      /* width: 67px; */
    `}
`;

export default {};
