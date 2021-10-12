import React from "react";
import GlobalThemeProvider from "../../../style/GlobalThemeProvider";
import Box, { Props } from "./index";

export default {
  title: "Atoms/Box",
  component: Box,
};

const Template = (args: Props) => {
  return (
    <GlobalThemeProvider>
      <Box {...args} />
    </GlobalThemeProvider>
  );
};

export const Default = (props: Props) => {
  return <Template {...props} />;
};
