import MoreBtn, { MoreBtnProps } from ".";
import GlobalThemeProvider from "../../../style/GlobalThemeProvider";

export default {
  title: "Atoms/MoreBtn",
  component: MoreBtn,
};

export const Default = (props: MoreBtnProps) => (
  <GlobalThemeProvider>
    <MoreBtn {...props}></MoreBtn>
  </GlobalThemeProvider>
);
