import ChoiceBtn from "../../atoms/ChoiceBtn";
import Text from "../../atoms/Text";
import ThumbDownBtn from "../../atoms/ThumbDownBtn";
import ThumbUpBtn from "../../atoms/ThumbUpBtn";
import { ThumbCountIconWrapper, ThumbCountWrapper } from "./style";
export interface ThumbProps {
  like_count: number;
  is_like?: boolean;
  is_choosen?: boolean;
  isChoosable?: boolean;
  onUpClick?: any;
  onDownClick?: any;
}

const ThumbCount = ({
  like_count,
  is_like,
  isChoosable,
  is_choosen,
  onUpClick,
  onDownClick,
  ...props
}: ThumbProps) => {
  //todo: set like api
  return (
    <ThumbCountWrapper {...props}>
      <ThumbCountIconWrapper>
        <ThumbUpBtn
          onClick={onUpClick}
          active={is_like === true ? true : false}
        />
        <Text
          style={{ whiteSpace: "nowrap" }}
          color="grey"
          size="32"
          weight="bold"
        >
          {like_count}
        </Text>
        <ThumbDownBtn
          onClick={onDownClick}
          active={is_like === false ? true : false}
        />
      </ThumbCountIconWrapper>
      <ChoiceBtn isChoosen={is_choosen} isChoosable={isChoosable}></ChoiceBtn>
    </ThumbCountWrapper>
  );
};

export default ThumbCount;
