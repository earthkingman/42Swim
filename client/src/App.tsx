import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import LoginPage from './components/pages/Login/Login'
import MainPage from './components/pages/Main/Main'
import GlobalThemeProvider from './style/GlobalThemeProvider'

const App: React.FC = () => {
  return (
    <GlobalThemeProvider>
      <Router>
        <Switch>
          <Route path="/" exact render={(props) => <MainPage {...props} />} />
          <Route
            path="/login"
            exact
            render={(props) => <LoginPage visible={true} {...props} />}
          />
        </Switch>
      </Router>
    </GlobalThemeProvider>
  )
}

export default App
