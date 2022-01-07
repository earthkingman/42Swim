import { Link, withRouter } from "react-router-dom";
import styled, { css } from "styled-components";
import theme from "../../../style/theme";
interface SA {
  fontcolor?: string;
  underline?: boolean;
  small?: boolean;
  bold?: boolean;
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
  ${({ small }) =>
    small &&
    css`
      font-weight: normal;
      font-size: 14px;
      &:hover {
        color: ${theme.color.lightblack};
        -webkit-transition: color 0.5s ease;
        -moz-transition: color 0.5s ease;
        transition: color 0.5s ease;
      }
    `};
  ${({ bold }) =>
    bold &&
    css`
      font-weight: bold;
    `}
`;
// TODO : 나중에 a 를 Link 태그로 바꾸어야 한다.

export const StyledSpan = styled.span<SA>`
  font-size: 18px;
  font-weight: 700;
  display: block;
  cursor: pointer;
  margin-bottom: 5px;
  ${AStyles}
`;
export interface AProps extends SA {
  onClick?: any;
  children?: any;
  location?: any;
  className?: string;
  to?: string;
}

const A = ({ to, children, location, ...props }: AProps) => {
  return (
    <Link to={to ? to : location.pathname + location.search}>
      <StyledSpan {...props}>{children}</StyledSpan>
    </Link>
  );
};

export default withRouter(A);
