import * as S from "./style";
import ListItem, { Props as ListProps } from "../../molecules/ListItem";
import Pagination from "../../molecules/Pagination";
import { ColumnSADiv } from "../../atoms/Div";
import Tab, { TabItem } from "../../molecules/Tab";

export interface Props {
  data: ListProps[];
  menu: number;
  setMenu: (menu: number) => void;
}

const QuestionList = ({ data, menu, setMenu, ...props }: Props) => {
  if (!data) return <div>Loading</div>;
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
            답변 필요
          </TabItem>
          <TabItem
            active={menu === 3 ? true : false}
            onTabClick={() => setMenu(3)}
          >
            태그
          </TabItem>
        </Tab>
        <S.List>
          {data.map((d, idx) => (
            <ListItem
              title={d.title}
              text={d.text}
              is_solved={d.is_solved}
              answer_cnt={d.answer_cnt}
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
              onFront={() => console.log("front")}
              onBack={() => console.log("back")}
              page={1}
            />
          </ColumnSADiv>
        </S.List>
      </S.QLWrapper>
    );
};

export default QuestionList;
