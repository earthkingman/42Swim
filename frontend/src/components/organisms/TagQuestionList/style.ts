import { RowSBDiv } from "./../../atoms/Div/index";
import styled from "styled-components";
import Box from "../../atoms/Box";

export const QLWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 100%;

  @media (max-width: 910px) {
    width: 100%;
  }
`;

export const FilterPanel = styled(RowSBDiv)`
  width: 100%;
  padding: 0 1rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
`;

export const ResultSpan = styled.span`
  font-size: 18px;
  font-weight: 700;
`;

export const TagSpan = styled.span`
  font-size: 18px;
  font-weight: 700;
  color: ${({ theme }) => theme.color.primary};
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
