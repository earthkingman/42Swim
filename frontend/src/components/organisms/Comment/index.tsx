import MoreBtn from "../../atoms/MoreBtn";
import Text from "../../atoms/Text";
import { ProfileProps } from "../../molecules/Profile";
import dateChange from "../../../utils/dateChange";
import * as S from "./style";
import { useRef, useState } from "react";
import useInput from "../../../hooks/useInput";
import A from "../../atoms/A";
import HideDiv from "../../atoms/HideDiv";
import useDetail from "../../../hooks/useDetail";

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
  const { CommentEdit, CommentDelete } = useDetail();

  const createAt = dateChange(created_at);

  const [show, setShow] = useState(false);
  const [isEdit, setisEdit] = useState(false);
  const { value, setValue, onBlur } = useInput(text);

  const inputRef = useRef();

  const onDelClick = async () => {
    if (confirm("댓글을 삭제하시겠습니까?")) {
      CommentDelete(id, questionId, answerId);
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
    CommentEdit(value, id, questionId, answerId);
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
          contentEditable={isEdit}
          onBlur={onBlur}
          ref={inputRef}
          suppressContentEditableWarning
        >
          {value}
        </S.EditInput>
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
