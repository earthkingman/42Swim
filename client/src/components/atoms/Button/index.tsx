import styled, { css } from 'styled-components'
import globalTheme from '../../../style/theme'

type sizeType = 'sm' | 'lg'

const sizes = {
  sm: { margin: '0 auto', width: '153px', height: '41px' },
  lg: { margin: '0 auto', width: '449px', height: '60px' },
}

interface SButtonProps {
  color?: keyof typeof globalTheme.color.button
  size?: sizeType
  shadow?: boolean
}

const buttonStyles = css<SButtonProps>`
  ${({ theme, color }) =>
    color &&
    css`
      background-color: ${theme.color.button[color]};
    `}
  ${({ size }) =>
    size &&
    css`
      margin: ${sizes[size].margin};
      width: ${sizes[size].width};
      height: ${sizes[size].height};
    `}
  ${({ shadow }) =>
    shadow === true &&
    css`
      box-shadow: rgba(0, 0, 0, 0.1) 0px 2px 10px 0px;
    `}
`

export const StyledButton = styled.button<SButtonProps>`
  background-color: #ffb84c;
  color: black;
  font-weight: 700;
  cursor: pointer;
  border: none;
  border-radius: 16px;
  & + & {
    margin-left: 1rem;
  }
  ${buttonStyles}
`

export interface ButtonProps extends SButtonProps {
  onClick?: any
  children: any
  className?: string
}

const Button = ({ children, ...props }: ButtonProps) => {
  return <StyledButton {...props}>{children}</StyledButton>
}

export default Button