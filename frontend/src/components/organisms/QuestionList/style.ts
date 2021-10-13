import styled from "styled-components";
import Box from "../../atoms/Box";

export const QLWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 70%;
`;

export const List = styled(Box)`
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 1.5rem 2.5rem;
`;
