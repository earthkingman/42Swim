import React, { MutableRefObject, useRef, useState } from "react";
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

function makePageRange(pageNum: number, offset: MutableRefObject<number>) {
  console.log("pageNum", pageNum);
  console.log("offset", offset);

  const sp = 10 * (offset.current - 1) + 1;
  console.log("sp", sp);
  let size;
  if (pageNum <= 10) size = pageNum;
  else if (sp + 9 >= pageNum) size = pageNum - sp + 1;
  else size = 10;

  return Array(size)
    .fill(sp)
    .map((x, y) => x + y);
}

function countPageNum(questionCount: number) {
  const limit = 8;
  let size = parseInt(questionCount / limit);
  console.log("size", size);
  if (questionCount % limit === 0) size = size - 1;
  const pageNum = size + 1;
  console.log("HellopageNum", pageNum);

  return pageNum;
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
  const pageNum = countPageNum(questionCount);
  const offset = useRef(1);

  const onFront = () => {
    if (page === 1) {
      alert("페이지가 존재하지 않습니다!");
      return;
    }

    if (page % 10 === 1) {
      offset.current -= 1;
    }
    onPage(page - 1);
  };
  const onBack = () => {
    if (page === pageNum) {
      alert("페이지가 존재하지 않습니다!");
      return;
    }

    // 여기 쪽 다시한번 살펴볼 것
    if (page % 10 === 0) {
      offset.current += 1;
    }
    onPage(page + 1);
  };

  return (
    <PageWrapper {...props}>
      <ArrowFront onClick={onFront} />
      <RowSBDiv>
        {makePageRange(pageNum, offset).map((data) => (
          <Number
            number={data}
            onClick={() => onPage(data)}
            active={page === data ? true : false}
            key={data}
          />
        ))}
      </RowSBDiv>
      <ArrowBack onClick={onBack} />
    </PageWrapper>
  );
};

export default Pagination;
