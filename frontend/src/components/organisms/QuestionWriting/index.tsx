import axios from "axios";
import { useState } from "react";
import useInput from "../../../hooks/useInput";
import Button from "../../atoms/Button";
import Divider from "../../atoms/Divider";
import InputTag from "../../molecules/InputTag";
import MarkdownEditor from "../../molecules/MarkdownEditor";
import * as S from "./style";

//todo: tag입력시 태그컴포넌트로 변경해주기
//todo: tag검색기능
//질문 최대길이 정해서 막아두기
//textarea 자동으로 길이 늘어나도록

const QuestionWriting = () => {
  const inputTag = useInput("", (value) => {
    const rt = /#*[\w]*$/g.test(value);
    return rt;
  });
  const title = useInput("", (value) => {
    if (value.length < 20) return true;
    else return false;
  });
  const text = useInput(`질문을 남겨보세요!
  \`\`\`C
  printf("helloWord");
  \`\`\``);
  const [tag, setTag] = useState([]);

  const onClick = async (e) => {
    e.preventDefault();
    if (!title.value | !text.value) {
      alert("제목과 내용을 모두 완성해주세요.");
      return;
    }
    try {
      const res = await axios.post(
        "http://localhost:5000/posts/question",
        {
          title: title.value,
          hashtag: tag ? "#" + tag.join("#") : null,
          text: text.value,
          files: null,
        },
        {
          withCredentials: true,
        }
      );
      if (res.status === 200) {
        alert("질문 작성이 완료되었습니다!");
        //todo: res로부터 id받아서 해당 detail page로 이동
        location.href = "/";
      } else {
        alert("질문 작성을 실패했습니다.");
        location.href = "/";
      }
    } catch (error) {
      alert(error);
    }

    console.log(res);
  };

  return (
    <S.QuestiontWritingWrap>
      <S.QuestiontWritingInputTitle
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
      <MarkdownEditor value={text.value} setValue={text.setValue} />
      <Button size="sm" onClick={onClick}>
        {" "}
        질문 작성하기
      </Button>
    </S.QuestiontWritingWrap>
  );
};

export default QuestionWriting;
