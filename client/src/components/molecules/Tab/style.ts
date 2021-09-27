import styled, { css } from 'styled-components'

interface TabProps {
  width?: string
  height?: string
}
export const TabWrapper = styled.ul<TabProps>`
  width: 380px;
  height: 41px;
  display: flex;
  justify-content: space-between;

  ${({ width }) =>
    width &&
    css`
      width: ${width};
    `}
  ${({ height }) =>
    height &&
    css`
      width: ${height};
    `}
`

export const StyledTabItem = styled.li`
  color: #c4c4c4;
  font-size: 24px;
  border: none;
  font-weight: 700;
  width: 95px;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  &:hover {
    cursor: pointer;
  }
`

export default {}
