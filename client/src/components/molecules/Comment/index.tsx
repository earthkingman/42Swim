import MoreIcon from '../../asset/icons/MoreIcon'
import Divider from '../../atoms/Divider'
import MoreBtn from '../../atoms/MoreBtn'
import Text from '../../atoms/Text'
import {
  CommentHeaderWrapper,
  CommentTextWrapper,
  CommentWrapper,
} from './style'

export interface CommentProps {
  nickname: string
  createAt: string
  text: string
  onClick?: any
}

const Comment = ({ nickname, createAt, text, onClick }: CommentProps) => (
  <CommentWrapper>
    <CommentHeaderWrapper>
      <Text weight="bold" size="18">
        {nickname}
      </Text>
      <Text size="14" color="lightgray">
        {createAt}
      </Text>
    </CommentHeaderWrapper>
    <CommentTextWrapper>
      <Text size="18" color="lightgray">
        {text}
      </Text>
      <MoreBtn onClick={onClick} />
    </CommentTextWrapper>
  </CommentWrapper>
)

export default Comment
