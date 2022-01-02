import { Props } from ".";
import axios from "axios";
import * as S from "./style";
import { Link } from "react-router-dom";
import dateChange from "../../../utils/dateChange";
import { RowSBDiv } from "../../atoms/Div";
import Tag from "../../atoms/Tag";
import Profile from "../../molecules/Profile";

const Mobile = ({
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
  if (hashtag?.length > 2) {
    hashtag = hashtag.slice(0, 2);
    hashtag.push({
      name: "...",
    });
  }

  const onClick = () => {
    const apiUrl = `${import.meta.env.VITE_API_HOST}/pages/question/viewCount`;
    axios.post(apiUrl, { questionId: id }, { withCredentials: true });
  };

  return (
    <S.ListBox size="xsm" {...props}>
      <S.Content size="sm">
        <Link to={`/detail?id=${id}`} onClick={onClick}>
          <S.Title size="h3">{title}</S.Title>
        </Link>
        <S.Desc size="12" weight="normal" color="grey">
          {text}
        </S.Desc>
        <S.Bottom>
          <RowSBDiv>
            <S.Time size="12" weight="normal" color="grey">
              {dateChange(created_at)}
            </S.Time>
            {hashtag?.map((data, idx) => (
              <Tag
                name={data?.name}
                key={idx}
                style={{ marginTop: "0px" }}
                size="12"
              />
            ))}
          </RowSBDiv>
        </S.Bottom>
        <S.Bottom>
          <S.RowDiv>
            <S.Counter size="sm">
              <S.SortCounter
                size="12"
                weight="normal"
                color={is_solved ? "primary" : "black"}
              >
                답변 {answer_cnt}
              </S.SortCounter>
              <S.SortCounter size="12" weight="normal" color="black">
                추천 {like_count}
              </S.SortCounter>
              <S.SortCounter size="12" weight="normal" color="black">
                조회 {view_count}
              </S.SortCounter>
            </S.Counter>
            <Profile size="xsm" photo={photo} nickname={nickname} id={0} />
          </S.RowDiv>
        </S.Bottom>
      </S.Content>
    </S.ListBox>
  );
};

export default Mobile;
