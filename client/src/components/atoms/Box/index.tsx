import styled, { css } from 'styled-components'

export interface SBox {
  height?: string
  width?: string
}

const BoxStyles = css<SBox>`
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

const StyledBox = styled.div`
  width: 988px;
  height: 1604px;
  border-radius: 16px;
  background-color: white;
  padding: 46px;
  box-shadow: rgba(0, 0, 0, 0.07) 0px 2px 10px 0px;

  ${BoxStyles}
`

export interface Props extends SBox {
  children?: React.ReactNode | JSX.Element | JSX.Element[] | string | string[]
}

const Box = ({ children, ...props }: Props) => {
  return <StyledBox {...props}>{children}</StyledBox>
}

export default Box
