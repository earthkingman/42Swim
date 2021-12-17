import { useEffect } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useHistory,
} from "react-router-dom";
import Auth from "./components/pages/Auth";
import DetailPage from "./components/pages/Detail/Detail";
import EditPage from "./components/pages/Edit/Edit";
import MainPage from "./components/pages/Main/Main";
import SearchPage from "./components/pages/Search/Search";
import SettingPage from "./components/pages/Setting/Setting";
import WritingPage from "./components/pages/Writing/Writing";
import GlobalThemeProvider from "./style/GlobalThemeProvider";
import ReactGA from "react-ga";

ReactGA.event({
  category: "User",
  action: "Created an Account",
});
ReactGA.exception({
  description: "An error ocurred",
  fatal: true,
});

const App: React.FC = () => {
  const history = useHistory();
  useEffect(() => {
    if (import.meta.env.MODE === "development") {
      ReactGA.initialize(import.meta.env.VITE_GA_ID, { debug: true });
    } else {
      ReactGA.initialize(import.meta.env.VITE_GA_ID);
    }
    history.listen((location) => {
      console.log("location :>> ", location);
      ReactGA.set({ page: location.pathname }); // Update the user's current page
      ReactGA.pageview(location.pathname); // Record a pageview for the given page
    });
  }, [history]);
  console.log("location :>> ", location);
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
