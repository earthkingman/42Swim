import BasicTemplate from "../BasicTemplate";
import Header from "../../organisms/Header";
import SettingTemplate from "./template";

interface Props {
  user: any;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const SettingPage = ({ user, ...props }: Props) => {
  return (
    <BasicTemplate {...props} header={<Header />}>
      <SettingTemplate />
    </BasicTemplate>
  );
};

export default SettingPage;
