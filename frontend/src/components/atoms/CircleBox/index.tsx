import styled, { css } from "styled-components";
import tmpImg from "./../../asset/png/cat0.jpeg";

type sizeType = "xsm" | "sm" | "lg";

const sizes = {
  xsm: { size: "25px" },
  sm: { size: "40px" },
  lg: { size: "120px" },
};

export interface SCircleImg {
  size: sizeType;
  color?: string;
  img?: string;
}

const StyledCircleImg = css<SCircleImg>`
  ${({ size }) =>
    size &&
    css`
      width: ${sizes[size].size};
      height: ${sizes[size].size};
      background-size: ${sizes[size].size} auto;
    `}
  ${({ color }) =>
    color &&
    css`
      background-color: ${color};
    `}
  background-image: ${({ img }) => (img ? `url(${img})` : `url()`)};
  /* ${({ img }) =>
    img
      ? css`
          background-image: url(${img});
          margin: 2 2;
        `
      : css`
          margin: 3 3;
          color: pink;
          background-image: url(${tmpImg});
        `} */
`;

const CircleBox = styled.div`
  width: 120px;
  height: 120px;
  display: inline-block;
  border-radius: 50%;
  background-position: 50% 50%;
  background-size: 12px 120px;
  background-color: #c4c4c4;
  font-size: 20px;
  font-weight: 700;
  background-repeat: no-repeat;
  &:hover {
    cursor: pointer;
  }
  ${StyledCircleImg}
`;
export default CircleBox;
