import Text from '../../atoms/Text'
import Title from '../../atoms/Title'
import Profile from '../Profile'
import Tag from '../../atoms/Tag'

import { QuestionTitleWrapper, QuestionWrapper, TagWrapper } from './sytle'

interface tagType {
  name: string
}

export interface QuestionProps {
  title: string
  nickname: string
  img?: string
  createAt: string
  tags?: Array<tagType>
  main: string
}

const Question = ({
  createAt,
  img,
  title,
  nickname,
  tags,
  main,
}: QuestionProps) => {
  const tagComponent = tags?.map((tag) => (
    <Tag key={tag.name} name={tag.name} />
  ))
  return (
    <QuestionWrapper>
      <QuestionTitleWrapper>
        <Title size="h1">{title}</Title>
        <Text size="14" color="lightgray">
          {createAt}
        </Text>
      </QuestionTitleWrapper>
      <QuestionTitleWrapper>
        <Profile nickname={nickname} size="sm" img={img} />
        <TagWrapper>{tagComponent}</TagWrapper>
      </QuestionTitleWrapper>
      <Text size="18" color="black">
        {main}
      </Text>
    </QuestionWrapper>
  )
}

export default Question
