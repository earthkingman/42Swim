import useDetail from "../../../hooks/useDetail";
import AnswerCard from "../../organisms/AnswerCard";
import Header from "../../organisms/Header";
import QuestionCard from "../../organisms/QuestionCard";
import BasicTemplate from "../BasicTemplate";
import DetailTemplat from "./template";

const DetailPage = ({ isLogin, nickname, ...props }: any) => {
  const { answer, isLoading, isError } = useDetail();
  let answerArr;
  if (!isLoading) {
    answerArr = answer?.map((item: any) => (
      <AnswerCard key={item.id} {...item} />
    ));
  }
  if (isError) {
    console.error(isError);
    return (
      <>
        <h1>Error</h1>
      </>
    );
  } else
    return (
      <BasicTemplate
        {...props}
        header={<Header isLogin={isLogin} nickname={nickname} />}
        content={
          <DetailTemplat question={<QuestionCard />} answer={answerArr} />
        }
      />
    );
};

export default DetailPage;
