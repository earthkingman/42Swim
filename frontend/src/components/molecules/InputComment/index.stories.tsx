import CommentInput, { CommentInputProps } from ".";
import GlobalThemeProvider from "../../../style/GlobalThemeProvider";

export default {
  title: "Molecules/CommentInput",
  component: CommentInput,
};

export const Default = (props: CommentInputProps) => (
  <GlobalThemeProvider>
    <CommentInput {...props} />
    <CommentInput value="입력한상입력한상입력한상입력한상입력한상태태태태태입력한상태" />
  </GlobalThemeProvider>
);
