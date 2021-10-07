import styled from 'styled-components'
import { RowSBDiv } from '../../atoms/Div'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 90%;

  padding: 0 10rem;
`

export const Header = styled.div`
  height: 5%;
`

export const ContentWrapper = styled(RowSBDiv)`
  align-items: flex-start;
`

export const Footer = styled(RowSBDiv)`
  width: 100%;
  height: 248px;
  background: #9d9d9d;
  margin-top: 15rem;
  padding: 0 2rem;
  display: flex;
  justify-content: space-around;
  align-items: center;
`
export default {}
