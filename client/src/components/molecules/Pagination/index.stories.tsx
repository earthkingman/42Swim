import Pagination from './index'
import GlobalThemeProvider from '../../../style/GlobalThemeProvider'

export default {
  title: 'Molecules/Pagination',
  component: Pagination,
}

export const Default = (props: any) => {
  return (
    <GlobalThemeProvider>
      <Pagination {...props} />
    </GlobalThemeProvider>
  )
}
