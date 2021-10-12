import styled from "styled-components";
import Text from "../../atoms/Text";

export const AnswerWrapper = styled.div`
  margin-bottom: 80px;
  display: block;
  white-space: normal;
`;

export const AnswerTitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 40px;
  align-items: flex-end;
`;

export const AnswerMain = styled(Text)`
  white-space: pre-line;
`;
