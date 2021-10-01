import PostBox from '../../atoms/PostBox'
import Answer from '../../molecules/Answer'
import Comment from '../../molecules/Comment'
import CommentInput from '../../molecules/InputComment'

interface commentsArray {
  id: number
  nickname: string
  createAt: string
  text: string
  onClick: any
}

export interface AnswerCardProps {
  comments?: Array<commentsArray>
  main: string
  nickname: string
  createAt: string
}

const AnswerCard = ({ comments, ...props }: AnswerCardProps) => {
  const commentsComponents = comments?.map((item) => (
    <Comment key={item.id} {...item}></Comment>
  ))
  return (
    <PostBox>
      <Answer {...props} />
      {commentsComponents}
      <CommentInput />
    </PostBox>
  )
}

export default AnswerCard
