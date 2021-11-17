import axios from "axios";
import useAuth from "../../../hooks/useAuth";
import useDetail from "../../../hooks/useDetail";
import A from "../../atoms/A";
import PostBox from "../../atoms/PostBox";
import Comment from "../../molecules/Comment";
import CommentInput from "../../molecules/InputComment";
import Question from "../../molecules/Question";
import ThumbCount from "../../molecules/ThumbCount";
import * as S from "./sytle";

const QuestionCard = ({ ...props }) => {
  const { question, isLoading, isError, QuestionThumbPost } = useDetail();
  const { user, isLoading: userLoading, isError: userError } = useAuth();

  if (!isLoading && !userLoading) {
    const isLogin = user ? true : false;
    const checkUserAndPost = (isLike: boolean) => {
      if (!isLogin) alert("로그인 후 좋아요를 눌러주세요!");
      else if (isLike === question.is_like)
        QuestionThumbPost(question.user.id, question.id, isLike, true);
      else if (!isLike === question.is_like)
        alert("좋아요/싫어요는 하나만 가능합니다.");
      else QuestionThumbPost(question.user.id, question.id, isLike, false);
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
      <S.QuestionCardWrapper {...props}>
        <ThumbCount
          like_count={question.like_count}
          is_like={question.is_like}
          onUpClick={onUpClick}
          onDownClick={onDownClick}
        />
        <PostBox>
          <Question {...question} />
<<<<<<< HEAD
          <S.ButtonWraper>
=======
          <S.ButtonWraper
            visible={user?.email === question.user.email ? true : false}
          >
>>>>>>> ccc9eff (✨: feature : delete question)
            <A
              fontcolor="deepgray"
              small={true}
              style={{
                marginRight: "1rem",
              }}
            >
              수정
            </A>
            <A
              fontcolor="deepgray"
              small={true}
              onClick={(e: Event) => {
                if (!confirm("게시글을 삭제하시겠습니까?")) e.preventDefault();
                else {
                  //todo: 네트워크 보기
                  //e.preventDefault();
                  axios.delete(
                    `${
                      import.meta.env.VITE_API_HOST
                    }/posts/question?questionId=${question.id}`,
                    {
                      withCredentials: true,
                    }
                  );
                }
              }}
            >
              삭제
            </A>
          </S.ButtonWraper>
          {commentsComponents}
          <CommentInput questionId={question.id} />
        </PostBox>
      </S.QuestionCardWrapper>
    );
  } else if (isError || userError) return <div>Err...</div>;
  else return <div>loading...</div>;
};

export default QuestionCard;
