import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import LoginPage from './components/pages/Login'
import GlobalThemeProvider from './style/GlobalThemeProvider'

const App = () => {
  return (
    <GlobalThemeProvider>
      <Router>
        <Switch>
          <Route
            exact
            path="/"
            render={(props) => <LoginPage visible={true} {...props} />}
          />
        </Switch>
      </Router>
    </GlobalThemeProvider>
  )
}

export default App
