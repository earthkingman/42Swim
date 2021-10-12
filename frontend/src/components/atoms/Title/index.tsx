import styled, { css } from "styled-components";

type sizeType = "h1" | "h2";

const sizes = {
  h1: { size: "36px" },
  h2: { size: "24px" },
};

export interface STitleProps {
  size?: sizeType;
  color?: string;
}

const titleStyles = css<STitleProps>`
  ${({ size }) =>
    size &&
    css`
      font-size: ${sizes[size].size};
    `}
  ${({ color }) =>
    color &&
    css`
      color: ${color};
    `}
`;

export const StyledTitle = styled.div<STitleProps>`
  color: black;
  font-weight: 700;
  ${titleStyles}
`;

export interface TitleProps extends STitleProps {
  children: any;
  className?: string;
}

const Title = ({ children, ...props }: TitleProps) => {
  return <StyledTitle {...props}>{children}</StyledTitle>;
};

export default Title;
