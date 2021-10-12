import PostBox from "../../atoms/PostBox";
import Answer, { AnswerProps } from "../../molecules/Answer";
import Comment, { CommentProps } from "../../molecules/Comment";
import CommentInput from "../../molecules/InputComment";
import ThumbCount, { ThumbProps } from "../../molecules/ThumbCount";
import { AnswerCardWrapper } from "./sytle";

export interface AnswerCardProps {
  answer: AnswerProps;
  comments?: Array<CommentProps>;
  thumb: ThumbProps;
}

const AnswerCard = ({ comments, thumb, answer, ...props }: AnswerCardProps) => {
  const commentsComponents = comments?.map((item) => (
    <Comment key={item.id} {...item}></Comment>
  ));
  return (
    <AnswerCardWrapper {...props}>
      <ThumbCount {...thumb} />
      <PostBox isChecked={thumb.isChecked}>
        <Answer {...answer} />
        {commentsComponents}
        <CommentInput />
      </PostBox>
    </AnswerCardWrapper>
  );
};

export default AnswerCard;
