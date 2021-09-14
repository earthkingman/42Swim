import GlobalThemeProvider from '../../../style/GlobalThemeProvider'
import PostCard, { PostCardProps } from '.'

export default {
  title: 'Molecules/PostCard',
  component: PostCard,
}

export const Default = (props: PostCardProps) => {
  return (
    <GlobalThemeProvider>
      <PostCard
        likes="12"
        title="글 제목 글 제목"
        text="글 내용 글 내용 미리보기 글 내용 글 내용 미리보기 글 내용 글 내용 미리보기"
        {...props}
      />
    </GlobalThemeProvider>
  )
}
