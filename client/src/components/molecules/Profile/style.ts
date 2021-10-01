import CircleImg from '../../atoms/CircleImg'
import styled from 'styled-components'
interface WrapperProps {
  size: 'sm' | 'lg'
}

export const ProfileWrapper = styled.div<WrapperProps>`
  display: flex;
  justify-content: space-between;
  align-items: center;
`
export const ProfileCircleImg = styled(CircleImg)`
  margin-right: 8px;
`

export default {}
