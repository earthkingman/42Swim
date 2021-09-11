import styled, { css } from 'styled-components'

const StyledPostBox = styled.div`
  width: 45%;
  height: 214px;
  border-radius: 16px;
  background-color: white;
  padding: 46px;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 2px 4px 0px;
`

export interface PostBoxProps {
  onClick?: any
  children?: any
}

const PostBox = ({ children, ...props }: PostBoxProps) => {
  return <StyledPostBox {...props}>{children}</StyledPostBox>
}

export default PostBox
