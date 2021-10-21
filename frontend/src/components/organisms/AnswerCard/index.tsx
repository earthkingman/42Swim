import PostBox from "../../atoms/PostBox";
import Answer, { AnswerProps } from "../../molecules/Answer";
import Comment, { CommentProps } from "../../molecules/Comment";
import CommentInput from "../../molecules/InputComment";
import ThumbCount, { ThumbProps } from "../../molecules/ThumbCount";
import { AnswerCardWrapper } from "./sytle";

export interface AnswerCardProps extends ThumbProps, AnswerProps {
  comment?: Array<CommentProps>;
}

const AnswerCard = ({
  like_count,
  is_like,
  is_choosen,
  comment,
  ...props
}: AnswerCardProps) => {
  const commentsComponents = comment?.map((item) => {
    console.log(item);
    return <Comment key={item.id} {...item}></Comment>;
  });

  return (
    <AnswerCardWrapper {...props}>
      <ThumbCount
        is_choosen={is_choosen}
        like_count={like_count}
        is_like={is_like}
      />
      <PostBox isChecked={is_choosen}>
        <Answer {...props} />
        {commentsComponents}
        <CommentInput />
      </PostBox>
    </AnswerCardWrapper>
  );
};

export default AnswerCard;
