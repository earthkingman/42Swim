import React from "react";
import GlobalThemeProvider from "../../../../style/GlobalThemeProvider";
import SearchBtn from "./index";

export default {
  title: "Icons/SearchBtn",
  component: SearchBtn,
};

export const Default = (args: any) => (
  <GlobalThemeProvider>
    <SearchBtn {...args} />
  </GlobalThemeProvider>
);
