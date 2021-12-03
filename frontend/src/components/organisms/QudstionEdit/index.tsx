import axios from "axios";
import { MouseEvent, useEffect, useState } from "react";
import useInput from "../../../hooks/useInput";
import A from "../../atoms/A";
import Button from "../../atoms/Button";
import Divider from "../../atoms/Divider";
import InputTag from "../../molecules/InputTag";
import MarkdownEditor from "../../molecules/MarkdownEditor";
import * as S from "./style";
import useDetail from "../../../hooks/useDetail";

const QuestionEdit = () => {
  const { question, isLoading, isError } = useDetail();

  const InputTagValidator = (value: string) => /^[\w]*$/g.test(value);
  const titleValidator = (value: string) => value.length < 20;

  const inputTag = useInput("", InputTagValidator);
  const title = useInput("", titleValidator);
  const text = useInput("");
  const [tag, setTag] = useState([]);

  useEffect(() => {
    const hashtag = question?.hashtag.map((item: any) => item.name);

    setTag(hashtag);
    title.setValue(question ? question.title : "");
    text.setValue(question ? question.text : "");
  }, [isLoading]);

  if (!isLoading && !isError) {
    const onClick = async (e: MouseEvent<HTMLButtonElement>) => {
      e.preventDefault();
      if (!title.value || !text.value) {
        alert("제목과 내용을 모두 완성해주세요.");
        return;
      }
      try {
        const res = await axios.patch(
          `${import.meta.env.VITE_API_HOST}/posts/question`,
          {
            questionId: question.id,
            title: title.value,
            hashtag: tag,
            text: text.value,
          },
          {
            withCredentials: true,
          }
        );
        if (res.status === 200) {
          alert("질문 수정이 완료되었습니다!");
          location.href = `/detail?id=${question.id}`;
        } else {
          alert("질문 작성을 실패했습니다.");
          location.href = "/";
        }
        console.log(res);
      } catch (error) {
        alert(error);
      }
    };

    return (
      <S.Wrap>
        <S.InputTitleS
          value={title.value}
          placeholder="질문할 제목을 입력하세요"
          onChange={title.onChange}
        />
        <InputTag
          inputChange={inputTag.onChange}
          value={inputTag.value}
          setValue={inputTag.setValue}
          tag={tag}
          setTag={setTag}
          placeholder="태그를 입력하세요 ex) #ft_printf"
        />
        <Divider weight="bold" width="4rem" />
        <S.MarkDownBtnWrap>
          <MarkdownEditor
            value={text.value}
            setValue={text.setValue}
            placeHolder={"질문을 상세하게 적어주세요!"}
          />
          <S.ButtonWrap>
            <A
              fontcolor="deepgray"
              style={{ fontSize: "16px", marginRight: "2rem" }}
              to={`/detail?id=${question.id}`}
            >
              {"취소"}
            </A>
            <Button size="sm" onClick={onClick}>
              {"질문 작성하기"}
            </Button>
          </S.ButtonWrap>
        </S.MarkDownBtnWrap>
      </S.Wrap>
    );
  } else if (isError) {
    return <div>err..</div>;
  } else return <div>loading</div>;
};

export default QuestionEdit;
