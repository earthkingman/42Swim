import Header from "../../organisms/Header";
import QuestionWriting from "../../organisms/QuestionWriting";
import BasicTemplate from "../BasicTemplate";

const WritingPage = ({ isLogin, nickname, ...props }: any) => {
  return (
    <BasicTemplate
      {...props}
      header={<Header isLogin={isLogin} nickname={nickname} />}
      content={<QuestionWriting />}
    />
  );
};

export default WritingPage;
