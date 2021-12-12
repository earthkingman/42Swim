import MoreBtn from "../../atoms/MoreBtn";
import Text from "../../atoms/Text";
import { ProfileProps } from "../Profile";
import dateChange from "../../../utils/dateChange";
import * as S from "./style";
import { useRef, useState } from "react";
import axios from "axios";
import { mutate } from "swr";
import useInput from "../../../hooks/useInput";
import A from "../../atoms/A";
import HideDiv from "../../atoms/HideDiv";

export interface CommentProps {
  id: number;
  user: ProfileProps;
  created_at: string;
  text: string;
  questionId: number;
  userEmail?: string;
  answerId?: number;
}

const Comment = ({
  created_at,
  questionId,
  answerId,
  user,
  text,
  userEmail,
  id,
}: CommentProps) => {
  const createAt = dateChange(created_at);
  const [show, setShow] = useState(false);
  const [isEdit, setisEdit] = useState(false);
  const { value, setValue, onChange } = useInput(text);
  const inputRef = useRef();

  const onDelClick = async () => {
    if (confirm("댓글을 삭제하시겠습니까?")) {
      await axios.delete(
        `${
          import.meta.env.VITE_API_HOST
        }/posts/comment?commentId=${id}&questionId=${questionId}${
          answerId ? `&answerId=${answerId}` : ""
        }`,
        { withCredentials: true }
      );
      mutate(
        `${
          import.meta.env.VITE_API_HOST
        }/pages/detail/question?questionId=${questionId}}`
      );
    }

    setShow(false);
  };

  const onEditClick = () => {
    setisEdit(true);
    setTimeout(function () {
      inputRef.current.focus();
    }, 1);

    setShow(!show);
  };

  const onEditDone = async () => {
    await axios.patch(
      `${import.meta.env.VITE_API_HOST}/posts/comment`,
      {
        text: value,
        commentId: id,
        questionId: questionId,
        answerId: answerId,
      },
      { withCredentials: true }
    );
    mutate(
      `${
        import.meta.env.VITE_API_HOST
      }/pages/detail/question?questionId=${questionId}}`
    );
    setisEdit(false);
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
        <S.EditInput
          onChange={onChange}
          disabled={!isEdit}
          value={value}
          ref={inputRef}
        ></S.EditInput>
        {user.email === userEmail ? (
          <>
            <S.MoreWrap visible={!isEdit}>
              <MoreBtn onClick={() => setShow(!show)} />
              <S.PBox show={show}>
                <S.PContent>
                  <S.PItem small={true} onClick={onEditClick}>
                    수정
                  </S.PItem>
                  <S.PItem small={true} onClick={onDelClick}>
                    삭제
                  </S.PItem>
                </S.PContent>
              </S.PBox>
            </S.MoreWrap>
            <HideDiv visible={isEdit}>
              <A
                fontcolor="deepgray"
                onClick={() => {
                  setValue(text);
                  setisEdit(false);
                }}
                style={{ marginRight: "1rem" }}
              >
                취소
              </A>
              <A onClick={onEditDone}>완료</A>
            </HideDiv>
          </>
        ) : null}
      </S.CommentTextWrapper>
    </S.CommentWrapper>
  );
};

export default Comment;
