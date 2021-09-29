import { CommentInputA, CommentInputWrapper, CommnetInputStyle } from './style'

export interface CommentInputProps {
  value: string
  onClick?: any
}

const CommentInput = ({ value, onClick }: CommentInputProps) => (
  <CommentInputWrapper>
    <CommnetInputStyle
      placeholder="댓글을 입력하세요"
      value={value}
      border={false}
    ></CommnetInputStyle>
    <CommentInputA fontColor="yellow" underline={false} onClick={onClick}>
      댓글 입력
    </CommentInputA>
  </CommentInputWrapper>
)

export default CommentInput
