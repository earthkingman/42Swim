import styled, { css } from "styled-components";
import theme from "../../../style/theme";
interface Props {
  name?: string;
}
export const TagBox = styled.div<Props>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 16px;
  width: auto;
  height: 20px;
  background-color: ${theme.color.tag.primary};
  box-sizing: border-box;
  margin: 1rem 0rem 0rem 1rem;
  padding: 0px 10px;
  ${({ name }) =>
    name === "..." &&
    css`
      background-color: ${theme.color.deepgray};
    `}
`;

export const ButtonS = styled.button`
  margin-left: 1rem;
  background-color: inherit;
  cursor: pointer;
`;

export default {};
