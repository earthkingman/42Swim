import FooterImg from "../../asset/images/FooterImg.png";
import styled from "styled-components";
import { ColumnSADiv } from "../../atoms/Div";

export const Wrapper = styled(ColumnSADiv)`
  width: 100%;
  height: 280px;
  margin-top: 15rem;
  padding: 0 2rem;

  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  bottom: 0px;
  background-image: url(${FooterImg});
  background-size: contain;
  background-repeat: repeat-x;
`;

export const LogoWrapper = styled.div`
  margin-top: 5rem;
  margin-bottom: 1rem;
`;
export const MainWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
`;

export const ListWrapper = styled.div`
  margin-left: 3rem;
  margin-bottom: 2rem;
`;

export const BackGround = styled.div`
  width: 100%;
  height: 200px;
  background-color: #86d7ef;
  position: absolute;
  bottom: 0px;
  z-index: -1;
`;

export const A = styled.a`
  color: white;
  font-size: 14px;
  display: block;
  margin-top: 5px;
  text-decoration: underline;
  &:visited,
  &:link {
    color: white;
  }
`;
