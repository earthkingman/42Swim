import MarkdownEditor from "../../molecules/MarkdownEditor";
import Header from "../../organisms/Header";
import BasicTemplate from "../BasicTemplate";

const WritingPage = ({ isLogin, nickname, ...props }: any) => {
  return (
    <BasicTemplate
      {...props}
      header={<Header isLogin={isLogin} nickname={nickname} />}
      content={<MarkdownEditor />}
    />
  );
};

export default WritingPage;
