import styled from "styled-components";

export const Input = styled.input`
  width: 100%;
  font-size: 18px;
  background-color: inherit;
  margin: 3rem 0rem;
  &::placeholder {
    color: rgba(0, 0, 0, 0.2);
  }
`;

export const Wrap = styled.div``;

export const WrapTag = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: wrap;
  position: relative;
  left: -1rem;
`;
