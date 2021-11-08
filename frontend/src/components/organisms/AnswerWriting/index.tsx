import axios from "axios";
import useDetail from "../../../hooks/useDetail";
import useInput from "../../../hooks/useInput";
import Button from "../../atoms/Button";
import Divider from "../../atoms/Divider";
import MarkdownEditor from "../../molecules/MarkdownEditor";
import * as S from "./style";

const AnswerWriting = () => {
  const { value, setValue } = useInput("");
  const { question, isLoading } = useDetail();

  const onClick = async () => {
    console.log({
      questionId: question.id,
      text: value,
    });
    try {
      if (value) {
        const res = axios.post(
          "http://localhost:5000/posts/answer",
          {
            questionId: question.id,
            text: value,
          },
          {
            withCredentials: true,
          }
        );
        //location.reload();
        console.log(res);
      } else alert("작성된 답변이 없습니다.");
    } catch (error) {
      alert(error);
      console.error(error);
    }
  };

  if (!isLoading)
    return (
      <S.WritingAnswerWrap>
        <S.STitle size="h2">내 답변 달기</S.STitle>
        <Divider weight="bold" width="3rem" />
        <MarkdownEditor
          value={value}
          setValue={setValue}
          placeHolder={"답변을 달아주세요!"}
        ></MarkdownEditor>
        <Button onClick={onClick} size="sm">
          {"답변 작성하기"}
        </Button>
      </S.WritingAnswerWrap>
    );
  else return <></>;
};

export default AnswerWriting;
