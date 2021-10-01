import AnswerCard, { AnswerCardProps } from '.'
import GlobalThemeProvider from '../../../style/GlobalThemeProvider'

export default {
  title: 'Organism/AnswerCard',
  component: AnswerCard,
}

export const Default = (props: AnswerCardProps) => {
  const commentArray = [
    {
      id: 3,
      nickname: 'nkim',
      createAt: '2시간전',
      text: '댓글내용댓글내용댓글내용',
    },
  ]
  return (
    <GlobalThemeProvider>
      <AnswerCard
        nickname="yejeong"
        main="mainmainmainmainmainmainmainmainmainmainmainmainmainmainmainmainmainmainmainmainmainmainmainmainmainmainmainmain"
        createAt="3시간전"
        comments={commentArray}
      ></AnswerCard>
    </GlobalThemeProvider>
  )
}
