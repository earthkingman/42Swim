import useDetail from "../../../hooks/useDetail";
import useInput from "../../../hooks/useInput";
import { CommentInputA, CommentInputWrapper, CommnetInputStyle } from "./style";

interface CommentInputProps {
  questionId?: number;
  answerId?: number;
}

const CommentInput = ({
  questionId,
  answerId,
  ...props
}: CommentInputProps) => {
  const { CommentPost } = useDetail();
  const { value, onChange, setValue } = useInput("");

  const onClick = (event: Event) => {
    /*
     ** todo: isLogin 확인.
     */
    event.preventDefault();
    CommentPost(value, questionId, answerId);
    setValue("");
  };

  return (
    <CommentInputWrapper onSubmit={onClick} {...props}>
      <CommnetInputStyle
        placeholder="댓글을 입력하세요"
        value={value}
        border={false}
        onChange={onChange}
      ></CommnetInputStyle>
      <CommentInputA fontcolor="yellow" underline={false} onClick={onClick}>
        댓글 입력
      </CommentInputA>
    </CommentInputWrapper>
  );
};

export default CommentInput;
