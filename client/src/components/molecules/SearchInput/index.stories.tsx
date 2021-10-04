import GlobalThemeProvider from '../../../style/GlobalThemeProvider'
import SearchInput, { Props } from './index'

export default {
  title: 'Molecules/SearchInput',
  component: SearchInput,
}

export const Default = (props: Props) => {
  return (
    <GlobalThemeProvider>
      <SearchInput {...props} />
    </GlobalThemeProvider>
  )
}
