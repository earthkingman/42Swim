import Check from "../../asset/icons/Check";
import CheckInactive from "../../asset/icons/Check/inactive";

interface ChoiceBtnProps {
  isChoosen?: boolean;
  isChoosable?: boolean;
}

const ChoiceBtn = ({ isChoosen, isChoosable, ...props }: ChoiceBtnProps) => {
  if (isChoosen) return <Check {...props} />;
  else if (isChoosable) return <CheckInactive {...props} />;
  else return <></>;
};

export default ChoiceBtn;
