import CheckImg from "../../asset/icons/CheckImg";
import Text from "../../atoms/Text";
import ThumbDownBtn from "../../atoms/ThumbDownBtn";
import ThumbUpBtn from "../../atoms/ThumbUpBtn";
import { ThumbCountIconWrapper, ThumbCountWrapper } from "./style";
export interface ThumbProps {
  like_count: number;
  is_like?: boolean;
  is_choosen?: boolean;
  onUpClick?: any;
  onDownClick?: any;
}

const ThumbCount = ({
  like_count,
  is_like,
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
          color="lightgray"
          size="48"
          weight="bold"
        >
          {like_count}
        </Text>
        <ThumbDownBtn
          onClick={onDownClick}
          active={is_like === false ? true : false}
        />
      </ThumbCountIconWrapper>
      {is_choosen && <CheckImg></CheckImg>}
    </ThumbCountWrapper>
  );
};

export default ThumbCount;
