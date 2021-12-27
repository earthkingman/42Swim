import * as S from "./style";
import ListItem from "../ListItem";
import Pagination from "../../molecules/Pagination";
import { ColumnSADiv } from "../../atoms/Div";
import Tab, { TabItem } from "../../molecules/Tab";
import { useState } from "react";
import useList from "../../../hooks/useList";
import Skeleton from "../../atoms/Skeleton";
import TagList from "../TagList";

const QuestionList = ({ ...props }) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [menu, setMenu] = useState(0);
  const [page, setPage] = useState(1);
  const { question, isLoading, isError } = useList(menu, page);

  console.log(question);

  if (isError) return <div>Error!!</div>;
  else
    return (
      <S.QLWrapper>
        <Tab {...props}>
          <TabItem
            active={menu === 0 ? true : false}
            onTabClick={() => setMenu(0)}
          >
            최신순
          </TabItem>
          <TabItem
            active={menu === 1 ? true : false}
            onTabClick={() => setMenu(1)}
          >
            인기순
          </TabItem>
          <TabItem
            active={menu === 2 ? true : false}
            onTabClick={() => setMenu(2)}
          >
            답변필요
          </TabItem>
          <TabItem
            active={menu === 3 ? true : false}
            onTabClick={() => setMenu(3)}
          >
            태그
          </TabItem>
        </Tab>
        {menu === 3 ? (
          <TagList />
        ) : (
          <S.List>
            {isLoading
              ? [...Array(8)].map((d, idx) => (
                  <S.SkeletonItem key={idx}>
                    <Skeleton />
                  </S.SkeletonItem>
                ))
              : question?.questionList &&
                question?.questionList.map((d, idx) => (
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
        )}
      </S.QLWrapper>
    );
};

export default QuestionList;
