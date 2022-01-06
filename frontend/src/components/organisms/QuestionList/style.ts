import styled from "styled-components";
import Box from "../../atoms/Box";
import { PlzLogin } from "../AnswerWriting/style";

export const QLWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 70%;

  @media (max-width: 1023px) {
    width: 100%;
  }
`;

export const SkeletonItem = styled.div`
  width: 100%;
  height: 182.46px;
  display: flex;
  padding: 1rem 1.5rem;
  flex-direction: column;
  justify-content: space-around;
  align-items: flex-start;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
`;

export const List = styled(Box)`
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 1.5rem 2.5rem;
`;

export const Last = styled(PlzLogin)`
  margin: 0;
  margin-top: 2rem;
  margin-bottom: 1rem;
`;
