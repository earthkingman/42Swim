import styled from "styled-components";
import theme from "../../../style/theme";
import { darken } from "polished";

export const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  height: 8rem;

  margin-right: 3rem;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
`;

export const Title = styled.p`
  font-weight: bold;
  font-size: 24px;
  line-height: 28px;
  color: ${theme.color.text.primary};
  -webkit-transition: color 0.2s;
  -moz-transition: color 0.2s;
  transition: color 0.2s;

  &:hover {
    cursor: pointer;
    color: ${darken(0.1, theme.color.text.primary)};
  }
`;

export const Sub = styled.p`
  font-weight: 500;
  font-size: 12px;
  line-height: 14px;
  color: ${theme.color.text.grey};

  margin-top: 12px;
`;
