import useDetail from "../../../hooks/useDetail";
import useInput from "../../../hooks/useInput";
import Button from "../../atoms/Button";
import Divider from "../../atoms/Divider";
import MarkdownEditor from "../../molecules/MarkdownEditor";
import * as S from "./style";

const AnswerWriting = () => {
  const { value, setValue } = useInput("");
  const { question, isLoading, AnswerPost } = useDetail();

  //todo: user정보 받아오기
  const nickname = "꽁꽁";
  const isLogin = true;

  const onClick = async () => {
    if (value) {
      AnswerPost(question.id, value, nickname, setValue);
    } else alert("답변이 없습니다");
    console.log({
      questionId: question.id,
      text: value,
    });
  };

  if (!isLoading && isLogin)
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
  else {
    return (
      <S.PlzLogin>{"답변을 남기기 위해 로그인을 진행해주세요!"}</S.PlzLogin>
    );
  }
};

export default AnswerWriting;
