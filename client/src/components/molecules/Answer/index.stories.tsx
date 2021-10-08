import Answer, { AnswerProps } from '.'
import GlobalThemeProvider from '../../../style/GlobalThemeProvider'

export default {
  title: 'Molecules/Answer',
  component: Answer,
}

export const Default = (props: AnswerProps) => {
  return (
    <GlobalThemeProvider>
      <Answer
        title="title"
        nickname="nickname"
        createAt="2시간전"
        tags={[{ name: 'tag1' }, { name: 'tag2' }]}
        main="위에 있는 코드를 실행했을 때 결과값이 나오지 않는 이유가 뭔가요?
그냥 a.pop()만 실행 했을 때에는 결과값이 출력 되는데 위에 코드에서는 print안으로 넣어야만 출력값이 나옵니다. 위에 있는 코드를 실행했을 때 결과값이 나오지 않는 이유가 뭔가요?
그냥 a.pop()만 실행 했을 때에는 결과값이 출력 되는데 위에 코드에서는 print안으로 넣어야만 출력값이 나옵니다.위에 있는 코드를 실행했을 때 결과값이 나오지 않는 이유가 뭔가요?

그냥 a.pop()만 실행 했을 때에는 결과값이 출력 되는데 위에 코드에서는 print안으로 넣어야만 출력값이 나옵니다."
      />
    </GlobalThemeProvider>
  )
}
