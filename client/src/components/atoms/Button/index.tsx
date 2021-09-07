import styled, { css } from 'styled-components'

type sizeType = 'sm' | 'lg'

const sizes = {
  sm: { margin: '0 auto', width: '153px', height: '41px' },
  lg: { margin: '0 auto', width: '449px', height: '60px' },
}

interface SButtonProps {
  color?: string
  size?: sizeType
}

const buttonStyles = css<SButtonProps>`
  ${({ color }) =>
    color &&
    css`
      background-color: ${color};
    `}
  ${({ size }) =>
    size &&
    css`
      margin: ${sizes[size].margin};
      width: ${sizes[size].width};
      height: ${sizes[size].height};
    `}
`

export const StyledButton = styled.button<SButtonProps>`
  background-color: #ffb84c;
  color: black;
  cursor: pointer;
  border: none;

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
