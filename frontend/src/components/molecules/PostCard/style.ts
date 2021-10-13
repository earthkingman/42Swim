import styled from "styled-components";
import Title from "../../atoms/Title";
import Text from "../../atoms/Text";

//todo: 글 박스 작아질때 텍스트 정리

export const PostCardWrapper = styled.div``;

export const PostCardTitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;
`;

export const PostCardTitle = styled(Title)`
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
`;
export const PostCardText = styled(Text)`
  margin-top: 30px;
  line-height: 23px;

  text-overflow: ellipsis;
  overflow: hidden;
  white-space: normal;
  max-height: 69px;
`;
