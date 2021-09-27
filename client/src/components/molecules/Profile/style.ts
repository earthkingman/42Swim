import styled from 'styled-components'

interface WrapperProps {
  size: 'sm' | 'lg'
}

export const ProfileWrapper = styled.div<WrapperProps>`
  width: ${({ size }) => (size === 'sm' ? '75px' : '106px')};
  display: flex;
  justify-content: space-around;
  align-items: center;
`

export default {}
