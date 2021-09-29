import GlobalThemeProvider from '../../../style/GlobalThemeProvider'
import ThumbCount, { Props } from '.'

export default {
  title: 'Molecules/ThumbCount',
  component: ThumbCount,
}

export const Default = (props: Props) => {
  return (
    <GlobalThemeProvider>
      <ThumbCount count="1" thumb="down" {...props} />
    </GlobalThemeProvider>
  )
}
