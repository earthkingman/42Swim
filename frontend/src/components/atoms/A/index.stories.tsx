import React from "react";
import GlobalThemeProvider from "../../../style/GlobalThemeProvider";
import A, { AProps } from "./index";

export default {
  title: "Atoms/A",
  component: A,
};

const Template = (args: AProps) => {
  return (
    <GlobalThemeProvider>
      <A {...args} />
    </GlobalThemeProvider>
  );
};

export const Under = (props: AProps) => {
  return (
    <div>
      <Template underline={true} fontcolor="yellow" {...props}>
        아직 회원이 아니신가요?
      </Template>
    </div>
  );
};
