import styled, { css } from 'styled-components'
import { NavLink as Link } from 'react-router-dom'

interface NavProps {
  width?: string
  height?: string
}
export const NavWrapper = styled.nav<NavProps>`
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

export const NavItem = styled(Link)`
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
  &.active {
    color: black;
    border-bottom: 3px solid black;
  }
`

export default {}
