import GlobalThemeProvider from '../../../style/GlobalThemeProvider'
import ThumbCount, { ThumbProps } from '.'

export default {
  title: 'Molecules/ThumbCount',
  component: ThumbCount,
}

export const Default = (props: ThumbProps) => {
  return (
    <GlobalThemeProvider {...props}>
      <ThumbCount count="1" upOrDown="down" />
    </GlobalThemeProvider>
  )
}
