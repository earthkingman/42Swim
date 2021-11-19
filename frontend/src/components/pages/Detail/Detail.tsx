import useDetail from "../../../hooks/useDetail";
import AnswerCard from "../../organisms/AnswerCard";
import AnswerWriting from "../../organisms/AnswerWriting";
import QuestionCard from "../../organisms/QuestionCard";
import BasicTemplate from "../BasicTemplate";
import DetailTemplat from "./template";

const DetailPage = ({ ...props }: any) => {
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
      <BasicTemplate {...props}>
        <DetailTemplat
          question={<QuestionCard />}
          answer={answerArr}
          answerWriting={<AnswerWriting />}
        />
      </BasicTemplate>
    );
};

export default DetailPage;
