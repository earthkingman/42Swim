import { Question } from "./style";

interface Props {
  question: React.ReactNode;
  answer?: Array<React.ReactNode>;
}

const DetailTemplat = ({ question, answer }: Props) => {
  return (
    <>
      <Question>{question}</Question>
      {answer}
    </>
  );
};

export default DetailTemplat;
