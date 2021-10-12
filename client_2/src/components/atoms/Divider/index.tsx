import styled, { css } from "styled-components";

type weightType = "bold" | "light";
type directionType = "horizontal" | "vertical";

interface SDividerProps {
  weight?: weightType;
  width?: string;
  direction?: directionType;
}

const weights = {
  bold: { background: "#000000", height: "3px" },
  light: { background: "#EAEAEA", height: "1px" },
};

const directions = {
  horizontal: "rotate(0deg)",
  vertical: "rotate(90deg)",
};

const DividerStyles = css<SDividerProps>`
  ${({ weight }) =>
    weight &&
    css`
      background-color: ${weights[weight].background};
      height: ${weights[weight].height};
    `}
  ${({ width }) =>
    width &&
    css`
      width: ${width};
    `}
	${({ direction }) =>
    direction &&
    css`
      transform: ${directions[direction]};
    `}
`;
export const StyledDivider = styled.div<SDividerProps>`
  ${DividerStyles}
`;
export interface DividerProps extends SDividerProps {
  className?: string;
}

const Divider = ({ ...props }: DividerProps) => {
  return <StyledDivider {...props} />;
};

export default Divider;
