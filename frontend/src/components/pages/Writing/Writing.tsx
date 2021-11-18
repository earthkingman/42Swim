import QuestionWriting from "../../organisms/QuestionWriting";
import BasicTemplate from "../BasicTemplate";

const WritingPage = ({ ...props }: any) => {
  return (
    <BasicTemplate {...props}>
      <QuestionWriting />
    </BasicTemplate>
  );
};

export default WritingPage;
