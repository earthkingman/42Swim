import useAuth from "../../../hooks/useAuth";
import useDetail from "../../../hooks/useDetail";
import AnswerCard from "../../organisms/AnswerCard";
import AnswerWriting from "../../organisms/AnswerWriting";
import QuestionCard from "../../organisms/QuestionCard";
import BasicTemplate from "../BasicTemplate";
import DetailTemplat from "./template";

const DetailPage = ({ ...props }: any) => {
  const { question, answer, isLoading, isError } = useDetail();
  const { user: loginUser, isLoading: loginUserLoading } = useAuth();
  let answerArr;
  if (!isLoading && !loginUserLoading) {
    answerArr = answer?.map((item: any) => (
      <AnswerCard
        key={item.id}
        isChoosable={
          loginUser ? question.user.email === loginUser.email : false
        }
        is_solved={question.is_solved}
        {...item}
      />
    ));
  }
  if (isError) {
    console.error(isError);
    return <></>;
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
