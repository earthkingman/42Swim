import { useEffect } from "react";
import ReactGA from "react-ga";

function GAHistory({ history, children }) {
  useEffect(() => {
    history.listen((location) => {
      ReactGA.set({ page: location.pathname }); // Update the user's current page
      ReactGA.pageview(location.pathname); // Record a pageview for the given page
    });
  });
  return <>{children}</>;
}

export default GAHistory;
