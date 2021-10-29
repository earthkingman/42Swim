import styled from "styled-components";
import theme from "../../../style/theme";

export const TagBox = styled.div`
  border-radius: 16px;
  background: #c4c4c4;
  width: auto;
  height: 20px;
  background-color: ${theme.color.tag.yellow};
  box-sizing: border-box;
  & + & {
    margin-left: 1rem;
  }
  padding: 0px 10px;
`;

export default {};
