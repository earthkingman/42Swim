import * as S from "./style";
import ListItem from "../../molecules/ListItem";
import Pagination from "../../molecules/Pagination";
import { ColumnSADiv } from "../../atoms/Div";
import Tab, { TabItem } from "../../molecules/Tab";
import { useState } from "react";
import Skeleton from "../../atoms/Skeleton";
import useSearchList from "../../../hooks/useSearchList";

interface Props {
  keyword: string;
}

const SearchQuestionList = ({ keyword, ...props }: Props) => {
  const [menu, setMenu] = useState(0);
  const [page, setPage] = useState(1);
  const { question, isLoading, isError } = useSearchList(menu, page, keyword);

  console.log(question);

  if (isError) return <div>Error!!</div>;
  else
    return (
      <S.QLWrapper>
        <S.List>
          <S.FilterPanel>
            <S.ResultSpan>검색결과 ({question.questionCount}건)</S.ResultSpan>
            <Tab size="sm" {...props}>
              <TabItem
                size="sm"
                active={menu === 0 ? true : false}
                onTabClick={() => setMenu(0)}
              >
                최신순
              </TabItem>
              <TabItem
                size="sm"
                active={menu === 1 ? true : false}
                onTabClick={() => setMenu(1)}
              >
                인기순
              </TabItem>
              <TabItem
                size="sm"
                active={menu === 2 ? true : false}
                onTabClick={() => setMenu(2)}
              >
                답변 필요
              </TabItem>
            </Tab>
          </S.FilterPanel>
          {isLoading
            ? [...Array(8)].map((d, idx) => (
                <S.SkeletonItem key={idx}>
                  <Skeleton />
                </S.SkeletonItem>
              ))
            : question?.quesiontList.map((d, idx) => (
                <ListItem
                  id={d.id}
                  title={d.title}
                  text={d.text}
                  photo={d.user.photo}
                  nickname={d?.user?.nickname}
                  is_solved={d.is_solved}
                  answer_cnt={d.answer_count}
                  like_count={d.like_count}
                  view_count={d.view_count}
                  hashtag={d.hashtag}
                  created_at={d.created_at}
                  key={idx}
                  {...props}
                />
              ))}
          <ColumnSADiv height="115px">
            <Pagination
              questionCount={question?.questionCount}
              page={page}
              onPage={setPage}
            />
          </ColumnSADiv>
        </S.List>
      </S.QLWrapper>
    );
};

export default SearchQuestionList;
