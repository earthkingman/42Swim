import Divider from '../../atoms/Divider'
import LikeButton from '../../atoms/LikeButton'
import PostBox from '../../atoms/PostBox'

export interface Props {
  children?: any
  onClick?: any
  likes?: string
  title?: string
  text?: string
}

const PostCard = ({ onClick, likes, title, text }: Props) => {
  return (
    <PostCardWrapper>
      <PostBox {...props} onClick={onClick}>
        <PostTitleWrapper>
          <PostTitle>{title}</PostTitle>
          <LikeButton>{likes}</LikeButton>
        </PostTitleWrapper>
        <Divider />
        <PostText>{text}</PostText>
      </PostBox>
    </PostCardWrapper>
  )
}

export default PostCard
