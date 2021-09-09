import styled, { css } from 'styled-components'

interface SInputProps {
  border?: boolean
}

const inputStyles = css<SInputProps>`
  ${({ border }) =>
    border === false &&
    css`
      border: none;
    `}
`

export const StyledInput = styled.input<SInputProps>`
  width: 449px;
  height: 60px;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 16px;
  padding-left: 25px;
  padding-top: 20px;
  padding-bottom: 20px;
  font-size: 18px;
  font-weight: 500;
  color: rgba(0, 0, 0, 0.2);
  & + & {
    margin-left: 1rem;
  }
  ${inputStyles}
`

export interface InputProps extends SInputProps {
  placeholder?: string
  className?: string
  value?: string
}

const Input = ({ ...props }: InputProps) => {
  return <StyledInput {...props} />
}

export default Input
