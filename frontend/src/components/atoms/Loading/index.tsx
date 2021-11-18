import styled, { keyframes } from "styled-components";
import theme from "../../../style/theme";
import logo from "../../asset/images/422.png";

interface SProps {
  visible: boolean;
}

export const Background = styled.div<SProps>`
  display: ${({ visible }) => (visible ? "flex" : "none")};
  position: fixed;
  z-index: 1;
  width: 100vw;
  height: 100vh;

  /* display: flex; */
  justify-content: space-around;
  align-items: center;

  background-color: rgba(0, 0, 0, 0.4);
`;

const spinCircle = keyframes`
    from {
      transform: translate(-50%, -50%) rotate(0);
    }
    to {
      transform: translate(-50%, -50%) rotate(360deg);
    }
`;

const LoadingDiv = styled.div`
  position: fixed;
  z-index: 1;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 84px;
  height: 84px;
  border: 5px solid white;
  border-top: 5px solid ${theme.color.yellow};
  border-radius: 50%;

  background-color: white;
  background-size: 55px 55px;

  animation-name: ${spinCircle};
  animation-duration: 0.8s;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
`;

const LoadingImg = styled.div`
  /* position: fixed; */
  z-index: 1000;

  width: 70px;
  height: 70px;
  border-radius: 50%;
  background-image: url(${logo});
  background-position: 50% 50%;
  background-repeat: no-repeat;
  background-size: 55px 55px;
  background-color: white;
`;

interface Props {
  visible: boolean;
}

const Loading = ({ visible }: Props) => {
  return (
    <>
      <Background visible={visible}>
        <LoadingDiv />
        <LoadingImg />
      </Background>
    </>
  );
};

export default Loading;
