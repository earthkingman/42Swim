import AnswerCard from '../../organisms/AnswerCard'
import Header from '../../organisms/Header'
import QuestionCard from '../../organisms/QuestionCard'
import BasicTemplate from '../BasicTemplate'
import DetailTemplat from './template'

const DetailPage = ({ isLogin, nickname, ...props }: any) => {
  const questionData = {
    question: {
      title: 'title미리보기',
      main: `위에 있는 코드를 실행했을 때 결과값이 나오지 않는 이유가 뭔가요?
그냥 a.pop()만 실행 했을 때에는 결과값이 출력 되는데 위에 코드에서는 print안으로 넣어야만 출력값이 나옵니다. 위에 있는 코드를 실행했을 때 결과값이 나오지 않는 이유가 뭔가요?
그냥 a.pop()만 실행 했을 때에는 결과값이 출력 되는데 위에 코드에서는 print안으로 넣어야만 출력값이 나옵니다.위에 있는 코드를 실행했을 때 결과값이 나오지 않는 이유가 뭔가요?

그냥 a.pop()만 실행 했을 때에는 결과값이 출력 되는데 위에 코드에서는 print안으로 넣어야만 출력값이 나옵니다.`,
      nickname: 'yejeong',
      createAt: '22.22.22',
    },
    thumb: {
      count: '121',
    },
  }
  const answerData = [
    {
      id: 1,
      answer: {
        nickname: 'nkim',
        createAt: '11.11.11',
        main: `아니요 그렇게 하지말고
        저렇게 이렇게 고고`,
      },
      thumb: {
        count: '-13',
        isChecked: true,
        upOrDown: 'up',
      },
      comments: [
        {
          id: 1,
          nickname: 'iha',
          createAt: '2시간전',
          text: 'wow',
        },
      ],
    },
    {
      id: 2,
      thumb: {
        count: '11',
      },
      answer: {
        nickname: 'nkim',
        createAt: '11.11.11',
        main: 'dfsfs',
      },
    },
  ]

  const answerArr = answerData?.map((item) => {
    return <AnswerCard {...item} key={item.id}></AnswerCard>
  })
  return (
    <BasicTemplate
      {...props}
      header={<Header isLogin={isLogin} nickname={nickname} />}
      content={
        <DetailTemplat
          question={<QuestionCard {...questionData} />}
          answer={answerArr}
        />
      }
    />
  )
}

export default DetailPage
