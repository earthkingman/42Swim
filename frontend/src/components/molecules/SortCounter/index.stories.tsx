import GlobalThemeProvider from "../../../style/GlobalThemeProvider";
import SortCounter, { Props } from "./index";

export default {
  title: "Molecules/SortCounter",
  component: SortCounter,
};

export const Default = (props: Props) => (
  <GlobalThemeProvider>
    <SortCounter name="name" count={1} {...props} />
  </GlobalThemeProvider>
);
