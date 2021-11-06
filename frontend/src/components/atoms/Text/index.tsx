import styled, { css } from "styled-components";

type weightType = "bold" | "normal";
export interface STextProps {
  weight?: weightType;
  size?: string;
  color?: string;
}

const TextStyles = css<STextProps>`
  ${({ size }) =>
    size &&
    css`
      font-size: ${size + "px"};
      line-height: ${parseInt(size) * 1.5 + "px"};
    `}
  ${({ theme, color }) =>
    color &&
    css`
      color: ${theme.color.text[color]};
    `}
    ${({ weight }) =>
    weight &&
    css`
      font-weight: ${weight};
    `}
`;

export const StyledText = styled.p<STextProps>`
  color: black;
  word-break: break-all;
  ${TextStyles}
`;

export interface TextProps extends STextProps {
  children: any;
  className?: string;
  id?: string;
  style?: any;
}

const Text = ({ children, ...props }: TextProps) => {
  return <StyledText {...props}>{children}</StyledText>;
};

export default Text;
