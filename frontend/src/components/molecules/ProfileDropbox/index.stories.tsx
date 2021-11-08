import ProfileDropbox from ".";
import GlobalThemeProvider from "../../../style/GlobalThemeProvider";

export default {
  title: "Molecules/ProfileDropbox",
  component: ProfileDropbox,
};

export const Default = () => {
  const user = {
    id: 3,
    email: "chloek@gmail.com",
    photo: "https://avatars.githubusercontent.com/u/51353146?v=4",
    nickname: "Chloek",
  };
  return (
    <GlobalThemeProvider>
      <ProfileDropbox user={user} />
    </GlobalThemeProvider>
  );
};
