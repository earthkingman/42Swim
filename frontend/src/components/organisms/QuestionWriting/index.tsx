import Button from "../../atoms/Button";
import MarkdownEditor from "../../molecules/MarkdownEditor";
import { QuestiontWritingWrap } from "./style";

const QuestionWriting = () => {
  const initialText = `## 질문을 남겨보세요!
\`\`\`C
printf("helloWord");
\`\`\``;
  return (
    <QuestiontWritingWrap>
      <MarkdownEditor initialText={initialText} />
      <Button size="sm"> 질문 작성하기</Button>
    </QuestiontWritingWrap>
  );
};

export default QuestionWriting;
