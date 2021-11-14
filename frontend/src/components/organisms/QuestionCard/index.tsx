import useAuth from "../../../hooks/useAuth";
import useDetail from "../../../hooks/useDetail";
import PostBox from "../../atoms/PostBox";
import Comment from "../../molecules/Comment";
import CommentInput from "../../molecules/InputComment";
import Question from "../../molecules/Question";
import ThumbCount from "../../molecules/ThumbCount";
import { QuestionCardWrapper } from "./sytle";

const QuestionCard = ({ ...props }) => {
  const { question, isLoading, isError, thumbPost } = useDetail();
  const { user, isLoading: userLoading, isError: userError } = useAuth();
  //to do: isLogin 정보 받아오기.
  if (!isLoading && !userLoading) {
    const isLogin = user ? true : false;

    const checkUserAndPost = (isLike: boolean) => {
      if (!isLogin) alert("로그인 후 좋아요를 눌러주세요!");
      else thumbPost(question.user.id, question.id, isLike, true);
    };
    const onUpClick = () => {
      checkUserAndPost(true);
    };
    const onDownClick = () => {
      checkUserAndPost(false);
    };

    const commentsComponents = question.comment?.map((item: any) => (
      <Comment key={item.id} {...item}></Comment>
    ));
    return (
      <QuestionCardWrapper {...props}>
        <ThumbCount
          like_count={question.like_count}
          is_like={question.is_like}
          onUpClick={onUpClick}
          onDownClick={onDownClick}
        />
        <PostBox>
          <Question {...question} />
          {commentsComponents}
          <CommentInput questionId={question.id} />
        </PostBox>
      </QuestionCardWrapper>
    );
  } else if (isError || userError) return <div>Err...</div>;
  else return <div>loading...</div>;
};

export default QuestionCard;
