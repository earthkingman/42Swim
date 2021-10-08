import styled, { css } from 'styled-components'

type sizeType = '18' | '14' | '48'
type weightType = 'bold' | 'normal'

const sizes = {
  18: { size: '18px' },
  14: { size: '14px' },
  48: { size: '48px' },
}

export interface STextProps {
  weight?: weightType
  size?: sizeType
  color?: string
}

const TextStyles = css<STextProps>`
  ${({ size }) =>
    size &&
    css`
      font-size: ${sizes[size].size};
      line-height: ${parseInt(sizes[size].size.slice(0, -2)) * 1.5 + 'px'};
    `}
  ${({ theme, color }) =>
    color &&
    css`
      color: ${theme.color.text[color]};
    `}
    ${({ weight }) =>
    weight &&
    css`
      font-weight: ${weight};
    `}
`

export const StyledText = styled.p<STextProps>`
  color: black;
  word-break: break-all;
  ${TextStyles}
`

export interface TextProps extends STextProps {
  children: any
  className?: string
}

const Text = ({ children, ...props }: TextProps) => {
  return <StyledText {...props}>{children}</StyledText>
}

export default Text
