import PostBox from "../../atoms/PostBox";
import Comment, { CommentProps } from "../../molecules/Comment";
import CommentInput from "../../molecules/InputComment";
import Question, { QuestionProps } from "../../molecules/Question";
import ThumbCount, { ThumbProps } from "../../molecules/ThumbCount";
import { QuestionCardWrapper } from "./sytle";

export interface QuestionCardProps extends ThumbProps {
  comments?: Array<CommentProps>;
  question: QuestionProps;
}

const QuestionCard = ({
  comments,
  question,
  isSolved,
  likeCount,
  upOrDown,
  ...props
}: QuestionCardProps) => {
  const commentsComponents = comments?.map((item) => (
    <Comment key={item.id} {...item}></Comment>
  ));
  return (
    <QuestionCardWrapper {...props}>
      <ThumbCount
        isSolved={isSolved}
        likeCount={likeCount}
        upOrDown={upOrDown}
      />
      <PostBox>
        <Question {...question} />
        {commentsComponents}
        <CommentInput />
      </PostBox>
    </QuestionCardWrapper>
  );
};

export default QuestionCard;
