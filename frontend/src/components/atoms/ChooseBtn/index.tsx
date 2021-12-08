import { useState } from "react";
import Check from "../../asset/icons/Check";
import CheckActive from "../../asset/icons/Check/active";
import CheckInactive from "../../asset/icons/Check/inactive";

interface ChooseBtnProps {
  isChoosen?: boolean;
  isChoosable?: boolean;
  onClick?: any;
}

const ChooseBtn = ({
  isChoosen,
  isChoosable,
  onClick,
  ...props
}: ChooseBtnProps) => {
  const [hover, setHover] = useState(false);
  if (isChoosen && !isChoosable) return <Check {...props} />;
  else if (isChoosen && isChoosable)
    return (
      <button onClick={onClick}>
        <Check />
      </button>
    );
  else if (isChoosable)
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
