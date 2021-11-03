import styled from "styled-components";
import InputTitle from "../../atoms/InputTitle";

export const QuestiontWritingWrap = styled.form`
  width: 100%;
  height: 100%;
`;

export const QuestiontWritingInput = styled.input`
  width: 100%;
  font-size: 18px;
  background-color: inherit;
  margin: 3rem 0rem;
  &::placeholder {
    color: rgba(0, 0, 0, 0.2);
  }
`;

export const QuestiontWritingInputTitle = styled(InputTitle)`
  width: 100%;
  margin-bottom: 20px;
`;
