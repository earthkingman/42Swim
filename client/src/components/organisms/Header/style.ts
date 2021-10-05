import styled from 'styled-components'
import theme from '../../../style/theme'
import Title from '../../atoms/Title'

export const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${theme.color.background.lightgray};
  height: 130px;
  width: 100%;
`
export const HeaderTitleWrapper = styled.div``
export const HeaderBtnWrapper = styled.div``
export const AHeader = styled.button`
  font-size: 18px;
  font-weight: 700;
  cursor: pointer;
  border-radius: 25px;
  border: 1px solid black;
  margin-left: 10px;
  padding: 5px 2rem;
  &:hover {
    -webkit-transition: all 0.5s ease;
    -moz-transition: all 0.5s ease;
    transition: all 0.5s ease;
    color: rgba(0, 0, 0, 0.3);
    border-color: rgba(0, 0, 0, 0.3);
  }
  &:active {
    color: #ffb84c;
    border-color: #ffb84c;
  }
`
export const TitleHeader = styled(Title)`
  margin-bottom: 7px;
`
export default {}
