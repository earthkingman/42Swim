import MediaQuery from "react-responsive";
import Mobile from "./Mobile";
import Desktop from "./Desktop";

const QuestionList = ({ ...props }) => {
  return (
    <>
      <MediaQuery minWidth={768}>
        <Desktop {...props} />
      </MediaQuery>
      <MediaQuery maxWidth={767}>
        <Mobile {...props} />
      </MediaQuery>
    </>
  );
};

export default QuestionList;
