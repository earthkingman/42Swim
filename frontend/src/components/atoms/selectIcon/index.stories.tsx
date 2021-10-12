import React from "react";
import GlobalThemeProvider from "../../../style/GlobalThemeProvider";
import SelectIcon from "./index";

export default {
  title: "Atoms/SelectIcon",
  component: SelectIcon,
};

export const Default = (args: any) => (
  <GlobalThemeProvider>
    <SelectIcon {...args} />
  </GlobalThemeProvider>
);
