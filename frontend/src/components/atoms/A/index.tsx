import { Link } from "react-router-dom";
import styled, { css } from "styled-components";
import globalTheme from "../../../style/theme";

interface SA {
  fontcolor?: keyof typeof globalTheme.color.a;
  underline?: boolean;
}

const AStyles = css<SA>`
  ${({ theme, fontcolor }) =>
    fontcolor &&
    css`
      color: ${theme.color.a[fontcolor]};
    `}
  ${({ underline }) =>
    underline &&
    css`
      text-decoration: underline;
    `}
`;
// TODO : 나중에 a 를 Link 태그로 바꾸어야 한다.

export const StyledSpan = styled.span<SA>`
  font-size: 18px;
  font-weight: 700;
  cursor: pointer;

  ${AStyles}
`;
export interface AProps extends SA {
  onClick?: any;
  children?: any;
  className?: string;
  to?: string;
}

const A = ({ to = "/", children, ...props }: AProps) => {
  return (
    //   to = '/',
    //   to={to}
    <Link to={to}>
      <StyledSpan {...props}>{children}</StyledSpan>
    </Link>
  );
};

export default A;
