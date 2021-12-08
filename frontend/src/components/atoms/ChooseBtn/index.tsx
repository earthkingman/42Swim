import { useState } from "react";
import Check from "../../asset/icons/Check";
import CheckActive from "../../asset/icons/Check/active";
import CheckInactive from "../../asset/icons/Check/inactive";

interface ChooseBtnProps {
  is_solved?: boolean;
  isChosen?: boolean;
  isChoosable?: boolean;
  onClick?: any;
}

const ChooseBtn = ({
  is_solved,
  isChosen,
  isChoosable,
  onClick,
  ...props
}: ChooseBtnProps) => {
  const [hover, setHover] = useState(false);
  if (is_solved && isChosen) return <Check {...props} />;
  else if (!is_solved && isChoosable)
    return (
      <button
        onClick={onClick}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        {...props}
      >
        {hover ? <CheckActive /> : <CheckInactive />}
      </button>
    );
  else return <></>;
};

export default ChooseBtn;
