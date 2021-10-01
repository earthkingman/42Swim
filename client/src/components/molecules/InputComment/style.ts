import Input from '../../atoms/Input'
import styled from 'styled-components'
import A from '../../atoms/A'

export const CommentInputWrapper = styled.div`
  border-top: 1px solid rgba(0, 0, 0, 0.15);
  display: flex;
  justify-content: space-between;
  align-items: center;
`
export const CommnetInputStyle = styled(Input)`
  width: 80%;
  padding: 0px;
`
export const CommentInputA = styled(A)`
  white-space: nowrap;
  /*background-color: black;*/
`
