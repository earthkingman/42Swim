import PostBox from '../../atoms/PostBox'

export interface QuestionProps {
  comments?: {
    nickname: string
    createAt: string
    text: string
    onClick: any
  }[]
  tags?: { name: string }[]
  title: string
  mainText: string
  createAt: string
}

const Question = ({ title, createAt, mainText, ...props }: QuestionProps) => {
  return <PostBox></PostBox>
}

export default Question
