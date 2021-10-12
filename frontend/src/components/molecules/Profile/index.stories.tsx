import GlobalThemeProvider from "../../../style/GlobalThemeProvider";
import Profile, { Props } from "./index";

export default {
  title: "Molecules/Profile",
  component: Profile,
};

export const Default = (props: Props) => {
  return (
    <GlobalThemeProvider>
      <Profile {...props} size="sm" nickname="닉네임" />
      <Profile {...props} size="lg" nickname="닉네임" />
    </GlobalThemeProvider>
  );
};
