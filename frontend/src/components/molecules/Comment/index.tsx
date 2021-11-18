import MoreBtn from "../../atoms/MoreBtn";
import Text from "../../atoms/Text";
import { ProfileProps } from "../Profile";
import dateChange from "../../../utils/dateChange";
import * as S from "./style";
import { useState } from "react";
import axios from "axios";

export interface CommentProps {
  id: number;
  user: ProfileProps;
  created_at: string;
  text: string;
  questionId: number;
  answerId?: number;
}

const Comment = ({
  created_at,
  questionId,
  answerId,
  user,
  text,
  id,
}: CommentProps) => {
  const createAt = dateChange(created_at);
  const [show, setShow] = useState(false);
  const onDelClick = () => {
    if (confirm("댓글을 삭제하시겠습니까?"))
      //todo: 서버랑 맞추기
      axios.delete(
        `${
          import.meta.env.VITE_API_HOST
        }/posts/comment?commentId=${id}&questionId=${questionId}${
          answerId ? `&answerId=${answerId}` : ""
        }`,
        { withCredentials: true }
      );
    setShow(false);
  };
  return (
    <S.CommentWrapper key={id}>
      <S.CommentHeaderWrapper>
        <Text weight="bold" size="14">
          {user.nickname}
        </Text>
        <Text size="14" color="grey">
          {createAt}
        </Text>
      </S.CommentHeaderWrapper>
      <S.CommentTextWrapper>
        <Text size="16" color="grey">
          {text}
        </Text>
        <S.MoreWrap>
          <MoreBtn onClick={() => setShow(!show)} />
          <S.PBox show={show}>
            <S.PContent>
              <S.PItem small={true}>수정</S.PItem>
              <S.PItem small={true} onClick={onDelClick}>
                삭제
              </S.PItem>
            </S.PContent>
          </S.PBox>
        </S.MoreWrap>
      </S.CommentTextWrapper>
    </S.CommentWrapper>
  );
};

export default Comment;
