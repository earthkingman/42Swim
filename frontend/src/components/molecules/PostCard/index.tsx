import Divider from "../../atoms/Divider";
import LikeButton from "../../atoms/LikeButton";
import PostBox from "../../atoms/PostBox";
import {
  PostCardWrapper,
  PostCardTitleWrapper,
  PostCardText,
  PostCardTitle,
} from "./style";
export interface PostCardProps {
  onClick?: any;
  likes?: string;
  title?: string;
  text?: string;
}

const PostCard = ({ onClick, likes, title, text }: PostCardProps) => {
  return (
    <PostCardWrapper>
      <PostBox onClick={onClick}>
        <PostCardTitleWrapper>
          <PostCardTitle size="h2">{title}</PostCardTitle>
          <LikeButton>{likes}</LikeButton>
        </PostCardTitleWrapper>
        <Divider weight="bold" width="36px" direction="horizontal" />
        <PostCardText size="18" color="grey" weight="normal">
          {text}
        </PostCardText>
      </PostBox>
    </PostCardWrapper>
  );
};

export default PostCard;
