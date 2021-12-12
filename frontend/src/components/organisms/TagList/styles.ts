import styled from "styled-components";
import Box from "../../atoms/Box";

export const WrapBox = styled(Box)`
  width: 100%;
  padding: 1.5rem 2.5rem;
`;

export const Count = styled.div`
  font-weight: bold;
  font-size: 18px;
  line-height: 21px;

  margin-top: 1.5rem;
  height: 40px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
`;

export const List = styled.ul`
  margin-top: 3rem;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 28px;
`;
