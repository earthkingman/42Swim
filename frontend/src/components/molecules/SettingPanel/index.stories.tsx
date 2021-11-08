import GlobalThemeProvider from "../../../style/GlobalThemeProvider";
import SettingPanel from "./index";

export default {
  title: "Molecules/SettingPanel",
  component: SettingPanel,
};

export const Default = () => {
  return (
    <GlobalThemeProvider>
      <SettingPanel
        name="이메일"
        value="42.4.student@gmail.com"
        etc="수정"
        desc="회원 인증 또는 시스템에서 발송하는 이메일을 수신하는 주소입니다."
      />
    </GlobalThemeProvider>
  );
};
