import { RowSBDiv } from "./../../atoms/Div/index";
import styled, { css } from "styled-components";
import Box from "../../atoms/Box";

export const RankingWrapper = styled.div`
  width: 28%;
  position: relative;
  @media (max-width: 910px) {
    display: none;
    background-color: pink;
  }
`;

export const RankingDiv = styled(Box)`
  width: 100%;
  height: 100%;
  display: flex;
  padding: 2rem 2.5rem;
  padding-bottom: 1.5rem;
  flex-direction: column;
  justify-content: flex-start;
`;

export const Title = styled(RowSBDiv)``;

export const Blue = styled.span`
  ${({ theme }) =>
    theme &&
    css`
      color: ${theme.color.primary};
    `}
  font-size: inherit;
`;

export const TabWrapper = styled.div`
  margin: 1.5rem 0;
  margin-bottom: 2rem;
`;

export const Divder = styled.div`
  height: 12px;
  width: 0.5px;
  margin: 0 1rem;
  ${({ theme }) => css`
    border-left: 0.5px ${theme.color.deepgray} solid;
  `}
`;

export const WinnerWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;

  * & * {
    margin-right: 1.5rem;
  }
`;

export const WinnerListWrapper = styled.div`
  z-index: 100;
`;
