import * as S from "./style";
import ListItem from "../ListItem";
import Tab, { TabItem } from "../../molecules/Tab";
import { useEffect, useRef, useState } from "react";
import { useInfiniteList, useQuestionCount } from "../../../hooks/useList";
import Skeleton from "../../atoms/Skeleton";
import TagList from "../TagList";
import useOnScreen from "../../../hooks/useOnScreen";

export type QuestionListType = {
  questionList: any;
  questionCount: number;
};

const Mobile = ({ ...props }) => {
  const ref = useRef(null);
  const isVisible = useOnScreen(ref);

  const [menu, setMenu] = useState(0);
  const {
    question,
    page,
    setPage,
    isLoading,
    isError,
    isRefreshing,
  } = useInfiniteList();
  const isEmpty = question?.[0]?.length === 0;
  const questions = question ? [].concat(...question) : [];

  const { pageSize } = useQuestionCount();
  const isEnd = isEmpty || (isVisible && page >= pageSize);

  useEffect(() => {
    // console.log("isVisible", isVisible);
    // console.log("isEnd", isEnd);
    // console.log("isRefreshing", isRefreshing);

    console.log("isEnd", isEnd);
    console.log("pageSize", pageSize);
    // console.log("before effect", page);
    if (isVisible && !isEnd && !isRefreshing) {
      setPage(page + 1);
    }
    // console.log("after effect", page);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isVisible, isRefreshing]);

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
              : questions &&
                questions.map((questionObj: any[], i) => (
                  <ListItem
                    id={questionObj?.id}
                    title={questionObj?.title}
                    text={questionObj?.text}
                    photo={questionObj?.user?.photo}
                    nickname={questionObj?.user?.nickname}
                    is_solved={questionObj?.is_solved}
                    answer_cnt={questionObj?.answer_count}
                    like_count={questionObj?.like_count}
                    view_count={questionObj?.view_count}
                    hashtag={questionObj?.hashtag}
                    created_at={questionObj?.created_at}
                    key={i}
                    {...props}
                  />
                ))}
            <div ref={ref}></div>
            {isEnd ? <S.Last>마지막 페이지 입니다!</S.Last> : <></>}
          </S.List>
        )}
      </S.QLWrapper>
    );
};

export default Mobile;
