import styled from 'styled-components'
import { RowSBDiv } from '../../../atoms/Div'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 1400px;
  padding: 0 3.5rem;
`

export const Header = styled.div`
  height: 10%;
`

export const Panel = styled(RowSBDiv)`
  width: 938px;
  margin-bottom: 2rem;
  margin-top: 5rem;
`

export const ContentWrapper = styled(RowSBDiv)`
  align-items: flex-start;
`

export const Footer = styled(RowSBDiv)`
  width: 100%;
  height: 248px;
  background: #9d9d9d;
  margin-top: 7rem;
  padding: 0 2rem;
`
export default {}
