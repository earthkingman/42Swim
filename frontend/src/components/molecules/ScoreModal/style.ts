import styled, { css } from "styled-components";
import Box from "../../atoms/Box";

interface WrapperProps {
  visible: boolean;
}

export const ScoreWrapper = styled(Box)<WrapperProps>`
  height: 400px;
  width: 350px;
  background-color: rgba(53, 147, 235, 0.9);
  padding: 20px 30px;
  z-index: 2;
  position: absolute;
  right: 30px;
  top: 90px;

  ${({ visible }) =>
    visible === false &&
    css`
      display: none;
    `}
`;

export const ScoreTitle = styled.div`
  font-size: 24px;
  font-weight: 700;
  color: white;
  margin-bottom: 3rem;
`;

export const Img = styled.span`
  height: 100%;
  width: 100%;
`;

export const ScoreContent = styled.div`
  font-size: 14px;
  font-weight: 600;
  color: white;
  height: 30px;
  padding-bottom: 2px;
  margin-top: 1.5rem;
  border-bottom: 1px solid rgba(75, 131, 182, 0.8);
`;

export const ScoreAlert = styled.div`
  font-size: 10px;
  font-weight: 500;
  color: white;
  line-height: 2rem;
  padding-bottom: 2px;
  margin-top: 2rem;
  /* border-bottom: 1px solid rgba(75, 131, 182, 0.8); */
`;

export const ScoreA = styled.a`
  text-decoration: underline;
  color: #3e4d74;

  &:visited,
  &:link {
    color: #3e4d74;
  }
  &:hover {
    color: #c9e8ff;
    -webkit-transition: color 0.5s ease;
    -moz-transition: color 0.5s ease;
    transition: color 0.5s ease;
    cursor: pointer;
  }
`;
