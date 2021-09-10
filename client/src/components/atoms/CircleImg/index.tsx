import styled, { css } from 'styled-components'

type sizeType = 'sm' | 'lg'

const sizes = { sm: { size: '45px' }, lg: { size: '120px' } }

export interface SCircleImg {
  size: sizeType
  color?: string
  img?: string
}

const StyledCircleImg = css<SCircleImg>`
  ${({ size }) =>
    size &&
    css`
      width: ${sizes[size].size};
      height: ${sizes[size].size};
      background-size: ${sizes[size].size} ${sizes[size].size};
    `}
  ${({ color }) =>
    color &&
    css`
      background-color: ${color};
    `}
	${({ img }) =>
    img &&
    css`
      background-image: url(${img});
    `}
`

const CircleImg = styled.div`
  width: 120px;
  height: 120px;
  display: inline-block;
  border-radius: 50%;
  background-position: center;
  background-size: 12px 120px;
  background: #c4c4c4;

  ${StyledCircleImg}
`
export default CircleImg
