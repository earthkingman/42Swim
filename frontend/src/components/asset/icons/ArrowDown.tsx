import { useState } from "react";
import theme from "../../../style/theme";

const ArrowDown = (props: { onClick: () => void }) => {
  const [isHover, setIsHover] = useState(false);

  const handleMouseEnter = (e: any) => {
    setIsHover(true);
    e.target.style.cursor = "pointer";
    e.stopPropagation();
  };
  const handleMouseLeave = () => {
    setIsHover(false);
  };
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height="24px"
      viewBox="0 0 24 24"
      width="24px"
      fill="#000000"
      style={{ margin: "0 0.5rem" }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      {...props}
    >
      <path d="M0 0h24v24H0V0z" fill="none" />
      <path
        d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"
        fill={isHover ? theme.color.lightblack : theme.color.black}
      />
    </svg>
  );
};

export default ArrowDown;
