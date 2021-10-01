import QuestionCard, { QuestionCardProps } from '.'
import GlobalStyle from '../../../style/GlobalStyle'
import GlobalThemeProvider from '../../../style/GlobalThemeProvider'

export default {
  title: 'Organism/QuestionCard',
  component: QuestionCard,
}

export const Default = (props: QuestionCardProps) => {
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
      <QuestionCard
        nickname="yejeong"
        title="title"
        main="mainmainmainmainmainmainmainmainmainmainmainmainmainmainmainmainmainmainmainmainmainmainmainmainmainmainmainmain"
        createAt="3시간전"
        comments={commentArray}
      ></QuestionCard>
    </GlobalThemeProvider>
  )
}
