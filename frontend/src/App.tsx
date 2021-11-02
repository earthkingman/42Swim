import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import DetailPage from "./components/pages/Detail/Detail";
import MainPage from "./components/pages/Main/Main";
import WritingPage from "./components/pages/Writing/Writing";
import GlobalThemeProvider from "./style/GlobalThemeProvider";

const App: React.FC = () => {
  return (
    <GlobalThemeProvider>
      <Router>
        <Switch>
          <Route
            path="/"
            exact
            render={(props: any) => <MainPage {...props} />}
          />
          <Route
            path="/detail"
            exact
            render={(props: any) => <DetailPage {...props} />}
          />
          <Route
            path="/writing"
            exact
            render={(props: any) => <WritingPage {...props} />}
          />
        </Switch>
      </Router>
    </GlobalThemeProvider>
  );
};

export default App;
