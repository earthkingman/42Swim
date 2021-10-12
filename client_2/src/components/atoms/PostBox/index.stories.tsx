import React from "react";
import GlobalThemeProvider from "../../../style/GlobalThemeProvider";
import PostBox, { PostBoxProps } from "./index";

export default {
  title: "Atoms/PostBox",
  component: PostBox,
};

const Template = (args: PostBoxProps) => (
  <GlobalThemeProvider>
    <PostBox {...args} />
  </GlobalThemeProvider>
);

export const Default = (props: PostBoxProps) => {
  return <Template {...props} />;
};
