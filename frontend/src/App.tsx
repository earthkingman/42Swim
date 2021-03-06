import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Auth from "./components/pages/Auth";
import DetailPage from "./components/pages/Detail/Detail";
import EditPage from "./components/pages/Edit/Edit";
import MainPage from "./components/pages/Main/Main";
import SearchPage from "./components/pages/Search/Search";
import SettingPage from "./components/pages/Setting/Setting";
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
            path="/search"
            exact
            render={(props: any) => <SearchPage {...props} />}
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
          <Route
            path="/edit"
            exact
            render={(props: any) => <EditPage {...props} />}
          />
          <Route
            path="/setting"
            exact
            render={(props: any) => <SettingPage {...props} />}
          />
          <Route path="/auth" render={(props: any) => <Auth {...props} />} />
        </Switch>
      </Router>
    </GlobalThemeProvider>
  );
};

export default App;
