import styled, { css } from "styled-components";

interface SInputProps {
  border?: boolean;
}

const inputStyles = css<SInputProps>`
  ${({ border }) =>
    border === false &&
    css`
      border: none;
    `}
`;

export const StyledInput = styled.input<SInputProps>`
  width: 100%;
  height: 60px;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 16px;
  padding-left: 25px;
  padding-top: 20px;
  padding-bottom: 20px;
  font-size: 18px;
  font-weight: 500;
  &::placeholder {
    color: rgba(0, 0, 0, 0.3);
  }
  &:focus::placeholder {
    color: transparent;
  }
  color: rgba(0, 0, 0, 0.6);
  ${inputStyles}
`;

export interface InputProps extends SInputProps {
  placeholder?: string;
  className?: string;
  value?: string;
  type?: string;
  name?: string;
  onFocus?: any;
  onKeyUp?: any;
  onChange?: any;
  onBlur?: any;
}

const Input = ({ ...props }: InputProps) => {
  return <StyledInput {...props} />;
};

export default Input;
