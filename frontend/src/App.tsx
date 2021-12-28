import { useEffect } from "react";
import { Switch, Route, useLocation } from "react-router-dom";
import Auth from "./components/pages/Auth";
import DetailPage from "./components/pages/Detail/Detail";
import EditPage from "./components/pages/Edit/Edit";
import MainPage from "./components/pages/Main/Main";
import SearchPage from "./components/pages/Search/Search";
import SettingPage from "./components/pages/Setting/Setting";
import WritingPage from "./components/pages/Writing/Writing";
import GlobalThemeProvider from "./style/GlobalThemeProvider";
import ReactGA from "react-ga";
import TagPage from "./components/pages/Tag/Tag";

ReactGA.event({
  category: "User",
  action: "Created an Account",
});
ReactGA.exception({
  description: "An error ocurred",
  fatal: true,
});

const App: React.FC = () => {
  const location = useLocation();
  useEffect(() => {
    if (import.meta.env.MODE !== "development") {
      ReactGA.initialize(import.meta.env.VITE_GA_ID);
      ReactGA.set({ page: location.pathname }); // Update the user's current page
      ReactGA.pageview(location.pathname); // Record a pageview for the given page
    }
  }, [location]);
  return (
    <GlobalThemeProvider>
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
          path="/tag/:hashtagName"
          exact
          render={(props: any) => <TagPage {...props} />}
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
    </GlobalThemeProvider>
  );
};

export default App;
