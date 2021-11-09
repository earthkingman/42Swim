import styled from "styled-components";

const InputTitle = styled.input`
  font-size: 36px;
  font-weight: 600;
  color: black;
  border: none;
  background-color: inherit;
  &::placeholder {
    color: rgba(0, 0, 0, 0.2);
  }
  &:focus::placeholder {
    color: transparent;
  }
  &:hover,
  &:focus {
    outline: none;
  }
`;

export default InputTitle;
