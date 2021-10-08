import GlobalThemeProvider from '../../../style/GlobalThemeProvider'
import Footer from '.'

export default {
  title: 'Organism/Footer',
  component: Footer,
}

export const Default = () => {
  return (
    <GlobalThemeProvider>
      <Footer></Footer>
    </GlobalThemeProvider>
  )
}
