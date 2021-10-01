import styled, { css } from 'styled-components'
import globalTheme from '../../../style/theme'

type sizeType = '18' | '14'
type weightType = 'bold' | 'normal'

const sizes = {
  18: { size: '18px' },
  14: { size: '14px' },
}

export interface STextProps {
  weight?: weightType
  size?: sizeType
  color?: keyof typeof globalTheme.color.text
}

const TextStyles = css<STextProps>`
  ${({ size }) =>
    size &&
    css`
      font-size: ${sizes[size].size};
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
  ${TextStyles};
`

export interface TextProps extends STextProps {
  children: any
  className?: string
}

const Text = ({ children, ...props }: TextProps) => {
  return <StyledText {...props}>{children}</StyledText>
}

export default Text
