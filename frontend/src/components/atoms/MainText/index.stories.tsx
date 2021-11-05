import MainText, { MainTextProps } from ".";
import GlobalThemeProvider from "../../../style/GlobalThemeProvider";

export default {
  title: "Atoms/MainText",
  component: MainText,
};

export const Default = (props: MainTextProps) => {
  const text = `### hi
# h1
## h2
### h3
안녕
\`\`\`js
const a = "hi"
\`\`\`
- you`;
  return (
    <GlobalThemeProvider>
      <MainText {...props}>{text}</MainText>
    </GlobalThemeProvider>
  );
};
