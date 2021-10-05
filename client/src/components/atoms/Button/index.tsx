import styled, { css } from 'styled-components'
import globalTheme from '../../../style/theme'
import { darken, lighten } from 'polished'

type sizeType = 'sm' | 'lg'

const sizes = {
  sm: { width: '153px', height: '41px', fontSize: '16px' },
  lg: { width: '449px', height: '60px', fontSize: '18px' },
}

interface SButtonProps {
  color?: keyof typeof globalTheme.color.button
  fontColor?: keyof typeof globalTheme.color.button
  size?: sizeType
  shadow?: boolean
}

const buttonStyles = css<SButtonProps>`
  ${({ theme, color }) =>
    color &&
    css`
      background-color: ${theme.color.button[color]};
      &:hover {
        background: ${lighten(0.1, theme.color.button[color])};
      }
      &:active {
        background: ${darken(0.1, theme.color.button[color])};
      }
    `}
  ${({ theme, fontColor }) =>
    fontColor &&
    css`
      color: ${theme.color.button[fontColor]};
    `}
  ${({ size }) =>
    size &&
    css`
      width: ${sizes[size].width};
      height: ${sizes[size].height};
      font-size: ${sizes[size].fontSize};
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
  display: flex;
  justify-content: space-around;
  align-items: center;
  border: none;
  border-radius: 16px;
  -webkit-transition: all 0.5s ease;
  -moz-transition: all 0.5s ease;
  transition: all 0.5s ease;
  &:hover {
    background: ${lighten(0.1, '#ffb84c')};
    color: ${lighten(0.1, 'black')};
  }
  &:active {
    background: ${darken(0.1, '#ffb84c')};
  }
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
