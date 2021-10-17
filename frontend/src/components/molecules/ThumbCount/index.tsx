import { useState } from "react";
import CheckImg from "../../asset/icons/CheckImg";
import Text from "../../atoms/Text";
import ThumbDownBtn from "../../atoms/ThumbDownBtn";
import ThumbUpBtn from "../../atoms/ThumbUpBtn";
import { ThumbCountIconWrapper, ThumbCountWrapper } from "./style";

type upOrDownType = "up" | "down" | null;
export interface ThumbProps {
  likeCount: number;
  upOrDown?: upOrDownType;
  isSolved?: boolean;
}

const ThumbCount = ({
  likeCount,
  upOrDown,
  isSolved,
  ...props
}: ThumbProps) => {
  const [isLike, setIsLike] = useState(upOrDown);
  const [count, setCount] = useState(likeCount);
  //todo: set like api
  const onUpClick = () => {
    if (!isLike) {
      setCount(count + 1);
      setIsLike("up");
    } else if (isLike === "up") {
      setCount(count - 1);
      setIsLike(null);
    } else {
      alert("중복된 선택입니다.");
    }
    console.log("up");
  };
  const onDownClick = () => {
    if (!isLike) {
      setCount(count - 1);
      setIsLike("down");
    } else if (isLike === "down") {
      setCount(count + 1);
      setIsLike(null);
    } else {
      alert("중복된 선택입니다.");
    }
  };
  return (
    <ThumbCountWrapper {...props}>
      <ThumbCountIconWrapper>
        <ThumbUpBtn
          onClick={onUpClick}
          active={isLike == "up" ? true : false}
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
          active={isLike == "down" ? true : false}
        />
      </ThumbCountIconWrapper>
      {isSolved && <CheckImg></CheckImg>}
    </ThumbCountWrapper>
  );
};

export default ThumbCount;
