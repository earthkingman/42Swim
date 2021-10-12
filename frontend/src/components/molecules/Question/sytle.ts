import styled from "styled-components";
import Text from "../../atoms/Text";

export const QuestionWrapper = styled.div`
  margin-bottom: 80px;
  display: block;
  white-space: normal;
`;

export const QuestionTitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 40px;
  align-items: flex-end;
`;

export const TagWrapper = styled.div`
  display: flex;
`;

export const QuestionMain = styled(Text)`
  white-space: pre-line;
`;
