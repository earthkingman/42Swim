import GlobalThemeProvider from "../../../style/GlobalThemeProvider";
import MarkdownEditor from "./index";

export default {
  title: "Molecules/MarkdownEditor",
  component: MarkdownEditor,
};

export const Default = (props: any) => {
  return (
    <GlobalThemeProvider>
      <MarkdownEditor {...props} />
    </GlobalThemeProvider>
  );
};
