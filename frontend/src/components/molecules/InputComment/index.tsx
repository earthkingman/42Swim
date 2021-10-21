import useInput from "../../../hooks/useInput";
import { CommentInputA, CommentInputWrapper, CommnetInputStyle } from "./style";

const CommentInput = () => {
  const { value, onChange } = useInput("");
  return (
    <CommentInputWrapper>
      <CommnetInputStyle
        placeholder="댓글을 입력하세요"
        value={value}
        border={false}
        onChange={onChange}
      ></CommnetInputStyle>
      <CommentInputA fontcolor="yellow" underline={false}>
        댓글 입력
      </CommentInputA>
    </CommentInputWrapper>
  );
};

export default CommentInput;
