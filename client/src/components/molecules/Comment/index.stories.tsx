import Comment, { CommentProps } from '.'
import GlobalThemeProvider from '../../../style/GlobalThemeProvider'

export default {
  title: 'Molecules/Comment',
  Component: Comment,
}

export const Default = (props: CommentProps) => (
  <GlobalThemeProvider>
    <Comment nickname="nickname" createAt="2시간전" text="댓글내용"></Comment>
    <Comment
      nickname="nickname"
      createAt="2시간전"
      text="댓글내용 두줄이상 예시 댓글내용 엄청엄청 길 때 댓글이 너무 길때 댓글 엄청 길다 댓글내용 두줄이상 예시 댓글내용 엄청엄청 길 때 댓글이 너무 길때 댓글 엄청 길다"
    ></Comment>
  </GlobalThemeProvider>
)
