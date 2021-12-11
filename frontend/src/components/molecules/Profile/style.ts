import CircleImg from "../../atoms/CircleBox";
import styled, { css } from "styled-components";
interface WrapperProps {
  size: "sm" | "lg";
}

export const ProfileWrapper = styled.div<WrapperProps>`
  display: flex;
  align-items: center;
`;

export interface CircleProps {
  border?: boolean;
}
export const ProfileCircleImg = styled(CircleImg)<CircleProps>`
  margin-right: 8px;
  ${({ theme, border }) =>
    border &&
    css`
      border: 2px solid ${theme.color.primary};
    `}
`;

export default {};
