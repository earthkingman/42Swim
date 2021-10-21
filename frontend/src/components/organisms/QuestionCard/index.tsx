import useDetail from "../../../hooks/useDetail";
import PostBox from "../../atoms/PostBox";
import Comment from "../../molecules/Comment";
import CommentInput from "../../molecules/InputComment";
import Question from "../../molecules/Question";
import ThumbCount from "../../molecules/ThumbCount";
import { QuestionCardWrapper } from "./sytle";

const QuestionCard = ({ ...props }) => {
  const { question, isLoading } = useDetail();
  if (!isLoading) {
    const commentsComponents = question.comment?.map((item: any) => (
      <Comment key={item.id} {...item}></Comment>
    ));
    return (
      <QuestionCardWrapper {...props}>
        <ThumbCount
          like_count={question.like_count}
          is_like={question.is_like}
        />
        <PostBox>
          <Question {...question} />
          {commentsComponents}
          <CommentInput />
        </PostBox>
      </QuestionCardWrapper>
    );
  } else return <div>loading...</div>;
};

export default QuestionCard;
