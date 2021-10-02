import Text from '../../atoms/Text'
import Profile from '../Profile'

import { AnswerTitleWrapper, AnswerWrapper } from './sytle'

export interface AnswerProps {
  nickname: string
  img?: string
  createAt: string
  main: string
}

const Answer = ({ createAt, img, nickname, main }: AnswerProps) => {
  return (
    <AnswerWrapper>
      <AnswerTitleWrapper>
        <Profile nickname={nickname} size="sm" img={img} />
        <Text size="14" color="lightgray">
          {createAt}
        </Text>
      </AnswerTitleWrapper>
      <Text size="18" color="black">
        {main}
      </Text>
    </AnswerWrapper>
  )
}

export default Answer
