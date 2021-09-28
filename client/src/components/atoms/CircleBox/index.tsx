import styled, { css } from 'styled-components'

type sizeType = 'xsm' | 'sm' | 'lg'

const sizes = {
  xsm: { size: '25px' },
  sm: { size: '40px' },
  lg: { size: '120px' },
}

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

const CircleBox = styled.div`
  width: 120px;
  height: 120px;
  display: inline-block;
  border-radius: 50%;
  background-position: center;
  background-size: 12px 120px;
  background: #c4c4c4;
  font-size: 20px;
  font-weight: 700;
  ${StyledCircleImg}
`
export default CircleBox
