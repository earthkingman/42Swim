import useAuth from "../../../hooks/useAuth";
import useDetail from "../../../hooks/useDetail";
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
  id,
  user,
  ...props
}: AnswerCardProps) => {
  const { AnswerThumbPost } = useDetail();
  const { user: loginUser } = useAuth();

  const isLogin = loginUser ? true : false;

  const checkUserAndPost = (isLike: boolean) => {
    if (!isLogin) alert("로그인 후 좋아요를 눌러주세요!");
    else if (is_like === isLike) AnswerThumbPost(user.id, id, isLike, true);
    else if (is_like === !isLike) alert("좋아요/싫어요는 하나만 가능합니다!");
    else {
      AnswerThumbPost(user.id, id, isLike, false);
    }
  };

  const onUpClick = () => {
    checkUserAndPost(true);
  };

  const onDownClick = () => {
    checkUserAndPost(false);
  };

  const commentsComponents = comment?.map((item) => {
    return <Comment key={item.id} {...item}></Comment>;
  });

  return (
    <AnswerCardWrapper {...props}>
      <ThumbCount
        is_choosen={is_choosen}
        like_count={like_count}
        is_like={is_like}
        onUpClick={onUpClick}
        onDownClick={onDownClick}
      />
      <PostBox isChecked={is_choosen}>
        <Answer {...props} user={user} />
        {commentsComponents}
        <CommentInput answerId={id} />
      </PostBox>
    </AnswerCardWrapper>
  );
};

export default AnswerCard;
