import useAuth from "../../../hooks/useAuth";
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
  const { user, isLoading, isError } = useAuth();
  const { CommentPost } = useDetail();
  const { value, onChange, setValue } = useInput("");

  if (!isLoading) {
    const onClick = (event: Event) => {
      event.preventDefault();
      if (!value) {
        alert("댓글울 입력해주세요");
      } else if (user) {
        CommentPost(value, questionId, answerId);
        setValue("");
      } else {
        alert("댓글 작성을 위해 로그인을 해주세요");
      }
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
  } else if (isError) {
    return <div>Err..</div>;
  } else return <div>Load...</div>;
};

export default CommentInput;
