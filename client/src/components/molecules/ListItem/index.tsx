import { RowSBDiv } from '../../atoms/Div'
import Tag from '../../atoms/Tag'
import Profile from '../Profile'
import SortCounter from '../SortCounter'
import * as S from './style'

export interface Props {
  title: string
  desc: string
  check: boolean
  answer_cnt: number
  like_cnt: number
  view_cnt: number
  create_time: string
  tag: string[]
}

const getTime = (create_time: string) => {
  const today = new Date()
  const localDate = today.toLocaleDateString()
  console.log(localDate)

  const ctime = new Date(create_time)
  const createDate = ctime.toLocaleDateString()
  console.log(createDate)

  if (createDate === localDate) {
    const hour = today.getHours() - ctime.getHours()
    return hour + '시간 전'
  } else if (today.getFullYear() === ctime.getFullYear()) {
    const day = today.getMonth() - ctime.getMonth()
    return day + '일 전'
  } else {
    const year = today.getFullYear() - ctime.getFullYear()
    return year + '년 전'
  }
}

const ListItem = ({
  title,
  desc,
  check,
  answer_cnt,
  like_cnt,
  view_cnt,
  create_time,
  tag,
  ...props
}: Props) => {
  return (
    <S.ListBox {...props}>
      <S.Content>
        <S.Title size="h2">{title}</S.Title>
        <S.Desc size="18" weight="normal" color="lightgray">
          {desc}
        </S.Desc>
        <S.Bottom>
          <RowSBDiv>
            <S.Time size="14" weight="normal" color="lightgray">
              {getTime(create_time)}
            </S.Time>
            {tag.map((data, idx) => (
              <Tag name={data} key={idx} />
            ))}
          </RowSBDiv>
          <Profile size="sm" nickname="닉네임" />
        </S.Bottom>
      </S.Content>
      {/* <S.Check>{check ? <CheckImg /> : <></>}</S.Check> */}
      <S.Counter>
        <SortCounter
          name="답변"
          count={answer_cnt}
          color={check ? 'yellow' : 'black'}
        />
        <SortCounter name="추천" count={like_cnt} />
        <SortCounter name="조회" count={view_cnt} />
      </S.Counter>
    </S.ListBox>
  )
}

export default ListItem
