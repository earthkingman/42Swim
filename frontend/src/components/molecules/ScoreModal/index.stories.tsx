import ScoreModal from ".";
import GlobalThemeProvider from "../../../style/GlobalThemeProvider";

export default {
  title: "Molecules/ScoreModal",
  component: ScoreModal,
};

export const Default = () => {
  return (
    <GlobalThemeProvider>
      <ScoreModal />
    </GlobalThemeProvider>
  );
};
