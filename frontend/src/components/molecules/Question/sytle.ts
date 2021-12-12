import styled from "styled-components";
import Text from "../../atoms/Text";

export const QuestionWrapper = styled.div`
  display: block;
  white-space: normal;
`;

export const QuestionTitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 40px;
  align-items: flex-end;
  flex-wrap: wrap;
`;

export const TagWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const QuestionMain = styled(Text)`
  white-space: pre-line;
`;
