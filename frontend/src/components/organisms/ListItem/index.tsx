import axios from "axios";
import { Link } from "react-router-dom";
import dateChange from "../../../utils/dateChange";
import { RowSBDiv } from "../../atoms/Div";
import Tag from "../../atoms/Tag";
import Profile from "../../molecules/Profile";
import SortCounter from "../../molecules/SortCounter";
import * as S from "./style";

export interface Props {
  id: number;
  title: string;
  text: string;
  photo: any;
  nickname?: string;
  is_solved: boolean;
  answer_cnt: number;
  like_count: number;
  view_count: number;
  created_at: string;
  hashtag: string[];
}

const ListItem = ({
  id,
  title,
  text,
  is_solved,
  photo,
  nickname,
  answer_cnt = 1,
  like_count,
  view_count,
  created_at,
  hashtag,
  ...props
}: Props) => {
  text = text
    .replace(/^\s*`{3}\w*/gm, "")
    .replace(/[`#*~_>]/g, "")
    .replace(/^!\[[\w.]*\]\([\w.:/-]+\)/gi, "");
  if (hashtag.length > 5) {
    hashtag = hashtag.slice(0, 3);
    hashtag.push({
      name: "...",
    });
  }
  const onClick = () => {
    const apiUrl = `${import.meta.env.VITE_API_HOST}/pages/question/viewCount`;
    axios.post(apiUrl, { questionId: id }, { withCredentials: true });
  };
  return (
    <S.ListBox {...props}>
      <S.Content>
        <Link to={`/detail?id=${id}`} onClick={onClick}>
          <S.Title size="h2">{title}</S.Title>
        </Link>
        <S.Desc size="18" weight="normal" color="grey">
          {text}
        </S.Desc>
        <S.Bottom>
          <RowSBDiv>
            <S.Time size="14" weight="normal" color="grey">
              {dateChange(created_at)}
            </S.Time>
            {hashtag.map((data, idx) => (
              <Tag name={data?.name} key={idx} style={{ marginTop: "0px" }} />
            ))}
          </RowSBDiv>
          <Profile size="sm" photo={photo} nickname={nickname} id={0} />
        </S.Bottom>
      </S.Content>
      <S.Counter>
        <SortCounter
          name="답변"
          count={answer_cnt}
          color={is_solved ? "primary" : "black"}
        />
        <SortCounter name="추천" count={like_count} />
        <SortCounter name="조회" count={view_count} />
      </S.Counter>
    </S.ListBox>
  );
};

export default ListItem;
