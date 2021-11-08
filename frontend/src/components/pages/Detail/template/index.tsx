import * as S from "./style";
interface Props {
  question: React.ReactNode;
  answer?: Array<React.ReactNode>;
  answerWriting: React.ReactNode;
}

const DetailTemplat = ({ question, answer, answerWriting }: Props) => {
  return (
    <>
      <S.Question>{question}</S.Question>
      {answer}
      {answerWriting}
    </>
  );
};

export default DetailTemplat;
