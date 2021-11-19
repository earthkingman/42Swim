import styled from "styled-components";
import HideDiv from "../../atoms/HideDiv";
import PostBox from "../../atoms/PostBox";
import ThumbCount from "../../molecules/ThumbCount";

export const AnswerCardWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 4rem;
`;

export const AnswerCardThumbCount = styled(ThumbCount)`
  width: 13rem;
  margin-right: 2rem;
`;

export const EditPostBox = styled(PostBox)`
  padding: 0 0;
  padding: 20px 25px;

  > * > * > * > * > .mde-text,
  > * > * > * > .mde-preview-content {
    box-shadow: none;
    resize: none !important;
  }
  > * > * > * > * > .mde-text {
    background-color: #f4f5f7;
  }
`;

export const EditWrapper = styled(HideDiv)`
  display: flex;
  justify-content: flex-end;
  padding-bottom: 2rem;
`;
