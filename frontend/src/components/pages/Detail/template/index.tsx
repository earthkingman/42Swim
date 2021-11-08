import * as S from "./style";
interface Props {
  question: React.ReactNode;
  answer?: Array<React.ReactNode>;
  answerWriting: React.ReactNode;
  isLogin: boolean;
}

const DetailTemplat = ({
  question,
  answer,
  answerWriting,
  ...props
}: Props) => {
  return (
    <div {...props}>
      <S.Question>{question}</S.Question>
      {answer}
      {answerWriting}
    </div>
  );
};

export default DetailTemplat;
