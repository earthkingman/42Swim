import styled from "styled-components";
import Title from "../../atoms/Title";
import theme from "../../../style/theme";

export const STitle = styled(Title)`
  margin-bottom: 3rem;
`;

export const WritingAnswerWrap = styled.div`
  margin-left: 9rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const PlzLogin = styled.div`
  margin: 8rem 0 5rem 0;
  background-color: ${theme.color.lightgrey};
  border-radius: 1rem;
  width: 100%;
  height: 5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 14px;
  color: ${theme.color.lightblack};
`;
