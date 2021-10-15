import CheckImg from "../../asset/icons/CheckImg";
import Text from "../../atoms/Text";
import ThumbDownBtn from "../../atoms/ThumbDownBtn";
import ThumbUpBtn from "../../atoms/ThumbUpBtn";
import { ThumbCountIconWrapper, ThumbCountWrapper } from "./style";

type upOrDownType = "up" | "down";

export interface ThumbProps {
  count: string;
  upOrDown?: upOrDownType;
  onUpClick?: any;
  onDownClick?: any;
  isChecked?: boolean;
}

const ThumbCount = ({
  count,
  onUpClick,
  onDownClick,
  upOrDown,
  isChecked,
  ...props
}: ThumbProps) => {
  return (
    <ThumbCountWrapper {...props}>
      <ThumbCountIconWrapper>
        <ThumbUpBtn
          onClick={onUpClick}
          active={upOrDown == "up" ? true : false}
        />
        <Text
          style={{ whiteSpace: "nowrap" }}
          color="lightgray"
          size="48"
          weight="bold"
        >
          {count}
        </Text>
        <ThumbDownBtn
          onClick={onDownClick}
          active={upOrDown == "down" ? true : false}
        />
      </ThumbCountIconWrapper>
      {isChecked && <CheckImg></CheckImg>}
    </ThumbCountWrapper>
  );
};

export default ThumbCount;
