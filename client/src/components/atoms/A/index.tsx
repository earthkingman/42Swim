import styled, { css } from 'styled-components'
import globalTheme from '../../../style/theme'

interface SA {
  fontColor?: keyof typeof globalTheme.color.a
  underline?: boolean
}

const AStyles = css<SA>`
  ${({ theme, fontColor }) =>
    fontColor &&
    css`
      color: ${theme.color.a[fontColor]};
    `}
  ${({ underline }) =>
    underline === true &&
    css`
      text-decoration: underline;
    `}
`

export const StyledA = styled.a<SA>`
  font-size: 18px;
  font-weight: 700;
  cursor: pointer;

  ${AStyles}
`
export interface AProps extends SA {
  onClick?: any
  children?: any
  className?: string
}

const A = ({ children, ...props }: AProps) => {
  return <StyledA {...props}>{children}</StyledA>
}

export default A
