import GlobalThemeProvider from '../../../style/GlobalThemeProvider'
import Header, { Props } from './index'

export default {
  title: 'Molecules/Header',
  component: Header,
}

export const Default = (props: Props) => {
  return (
    <GlobalThemeProvider>
      <Header {...props} isLogin={true} nickname="닉네임" />
      <div style={{ height: '10px' }}></div>
      <Header {...props} isLogin={false} />
    </GlobalThemeProvider>
  )
}
