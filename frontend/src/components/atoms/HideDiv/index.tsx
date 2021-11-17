import styled, { css } from "styled-components";

interface SProps {
  visible: boolean;
  width?: string;
  height?: string;
  style?: any;
}

const StyledHDiv = styled.div<SProps>`
  display: ${({ visible }) => (visible ? "" : "none !important")};
  ${({ width }) =>
    width &&
    css`
      width: ${width};
    `}
  ${({ height }) =>
    height &&
    css`
      height: ${height};
    `};
`;

interface Props extends SProps {
  children?: any;
}

const HideDiv = ({ children, visible = true, ...props }: Props) => {
  return (
    <StyledHDiv visible={visible} {...props}>
      {children}
    </StyledHDiv>
  );
};

export default HideDiv;
