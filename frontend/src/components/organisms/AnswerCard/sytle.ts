import styled from "styled-components";
import theme from "../../../style/theme";
import A from "../../atoms/A";
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
    background-color: #f4f5f7;
    border: 1px ${theme.color.deepgray} solid !important;
  }
  > * > * > * > * > .mde-text:focus {
    background-color: white;
    box-shadow: rgba(0, 0, 0, 0.06) 0px 2px 4px 0px inset;
  }
`;

export const EditWrapper = styled(HideDiv)`
  display: flex;
  justify-content: flex-end;
  padding-bottom: 2rem;
`;

export const EditButton = styled(A)`
  &:hover {
    color: ${theme.color.lightblack};
    -webkit-transition: color 0.5s ease;
    -moz-transition: color 0.5s ease;
    transition: color 0.5s ease;
  }
`;
