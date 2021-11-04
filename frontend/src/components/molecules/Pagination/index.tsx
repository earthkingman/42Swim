import React, { useState } from "react";
import ArrowBack from "../../asset/icons/ArrowBack";
import ArrowFront from "../../asset/icons/ArrowFront";
import CircleBox from "../../atoms/CircleBox";
import { RowSBDiv } from "../../atoms/Div";
import { PageWrapper } from "./style";
import theme from "../../../style/theme";

interface PNProps {
  number: number;
  onClick?: any;
  active: boolean;
}
const Number = ({ number, active, onClick, ...props }: PNProps) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [isHover, setIsHover] = useState(false);

  const handleMouseEnter = (e: any) => {
    setIsHover(true);
    e.target.style.color = theme.color.lightblack;
    e.stopPropagation();
  };
  const handleMouseLeave = (e: any) => {
    setIsHover(false);
    e.target.style.color = theme.color.black;
  };
  const style = {
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
  };
  return (
    <CircleBox
      onClick={onClick}
      size="sm"
      color={active ? theme.color.yellow : theme.color.white}
      style={style}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      {...props}
    >
      {number}
    </CircleBox>
  );
};

function makePageRange(questionCount: number, start: number) {
  const limit = 8;
  const size = parseInt(questionCount / limit) + 1;
  console.log("size", questionCount);
  return Array(size)
    .fill(start)
    .map((x, y) => x + y);
}

export interface Props {
  page: number;
  questionCount: number;
  onPage: any;
}

const Pagination = ({
  page = 1,
  onPage,
  questionCount = 10,
  ...props
}: Props) => {
  return (
    <PageWrapper {...props}>
      <ArrowFront onClick={() => onPage(page - 1)} />
      <RowSBDiv>
        {makePageRange(questionCount, 1).map((data) => (
          <Number
            number={data}
            active={page === data ? true : false}
            key={data}
          />
        ))}
      </RowSBDiv>
      <ArrowBack onClick={() => onPage(page + 1)} />
    </PageWrapper>
  );
};

export default Pagination;
