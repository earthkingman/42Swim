import GlobalThemeProvider from "../../../style/GlobalThemeProvider";
import Tag, { Props } from "./index";

export default {
  title: "Atoms/Tag",
  component: Tag,
};

export const Default = (props: Props) => {
  return (
    <GlobalThemeProvider>
      <Tag {...props} name="TAG1" />
      <Tag {...props} name="long_tag_tag" />
      <Tag {...props} name="st" isDel={true} />
    </GlobalThemeProvider>
  );
};
