import GlobalThemeProvider from '../../../style/GlobalThemeProvider'
import Divider, { DividerProps } from './index'

export default {
  title: 'Atoms/Divider',
  component: Divider,
}

const Template = (args: DividerProps) => (
  <GlobalThemeProvider>
    <Divider {...args} />
  </GlobalThemeProvider>
)

export const Basic = (props: DividerProps) => {
  return (
    <div>
      <Template width="36px" weight="bold" direction="horizontal" {...props} />
    </div>
  )
}
