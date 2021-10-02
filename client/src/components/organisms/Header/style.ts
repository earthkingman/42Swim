import styled from 'styled-components'
import theme from '../../../style/theme'
import A from '../../atoms/A'
import Title from '../../atoms/Title'

export const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${theme.color.background.lightgray};
  height: 130px;
  width: 100%;
  padding: 0px 90px;
`
export const HeaderTitleWrapper = styled.div``
export const HeaderBtnWrapper = styled.div``
export const AHeader = styled(A)`
  margin-left: 10px;
`
export const TitleHeader = styled(Title)`
  margin-bottom: 7px;
`
export default {}
