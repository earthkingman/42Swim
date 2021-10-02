import PostBox from '../../atoms/PostBox'
import Comment from '../../molecules/Comment'
import CommentInput from '../../molecules/InputComment'
import Question from '../../molecules/Question'

interface commentsArray {
  id: number
  nickname: string
  createAt: string
  text: string
  onClick: any
}

interface tagsArray {
  name: string
}
export interface QuestionCardProps {
  comments?: Array<commentsArray>
  tags?: Array<tagsArray>
  title: string
  main: string
  nickname: string
  createAt: string
}

const QuestionCard = ({ comments, ...props }: QuestionCardProps) => {
  const commentsComponents = comments?.map((item) => (
    <Comment key={item.id} {...item}></Comment>
  ))
  return (
    <PostBox>
      <Question {...props} />
      {commentsComponents}
      <CommentInput />
    </PostBox>
  )
}

export default QuestionCard
