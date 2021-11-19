import QuestionEdit from "../../organisms/QudstionEdit";
import BasicTemplate from "../BasicTemplate";

const EditPage = ({ ...props }: any) => {
  return (
    <BasicTemplate {...props}>
      <QuestionEdit />
    </BasicTemplate>
  );
};

export default EditPage;
