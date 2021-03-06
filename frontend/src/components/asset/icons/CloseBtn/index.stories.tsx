import React from "react";
import GlobalThemeProvider from "../../../../style/GlobalThemeProvider";
import CloseBtn from "./index";

export default {
  title: "Icons/CloseBtn",
  component: CloseBtn,
};

export const Default = (args: any) => (
  <GlobalThemeProvider>
    <CloseBtn {...args} />
  </GlobalThemeProvider>
);
