import React from "react";
import GlobalThemeProvider from "../../../style/GlobalThemeProvider";
import ThumbUpBtn, { ThumbUpBtnProps } from "./index";

export default {
  title: "Atoms/ThumbUpBtn",
  component: ThumbUpBtn,
};

//storybook에 controls가 안뜸

export const Default = (props: ThumbUpBtnProps) => {
  return (
    <GlobalThemeProvider>
      <ThumbUpBtn active={false} {...props} />
      <ThumbUpBtn active={true} {...props} />
    </GlobalThemeProvider>
  );
};
