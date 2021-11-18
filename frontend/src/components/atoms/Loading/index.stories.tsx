import Loading from "./index";
import GlobalThemeProvider from "../../../style/GlobalThemeProvider";

export default {
  title: "Atoms/Loading",
  component: Loading,
};

export const Default = () => {
  return (
    <GlobalThemeProvider>
      <Loading />
    </GlobalThemeProvider>
  );
};
