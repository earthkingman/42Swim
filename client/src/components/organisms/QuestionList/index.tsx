import * as S from './style'
import ListItem, { Props as ListProps } from '../../molecules/ListItem'
import Pagination from '../../molecules/Pagination'
import { ColumnSADiv } from '../../atoms/Div'
import Tab, { TabItem } from '../../molecules/Tab'

export interface Props {
  data: ListProps[]
  menu: number
  setMenu: (menu: number) => void
}

const QuestionList = ({ data, menu, setMenu, ...props }: Props) => {
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
            desc={d.desc}
            check={d.check}
            answer_cnt={d.answer_cnt}
            like_cnt={d.like_cnt}
            view_cnt={d.view_cnt}
            tag={d.tag}
            create_time={d.create_time}
            key={idx}
            {...props}
          />
        ))}
        <ColumnSADiv height="115px">
          <Pagination
            onFront={() => console.log('front')}
            onBack={() => console.log('back')}
            page={1}
          />
        </ColumnSADiv>
      </S.List>
    </S.QLWrapper>
  )
}

export default QuestionList
