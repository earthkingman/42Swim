import { useState } from "react";
import { useHistory } from "react-router";
import useTagList from "../../../hooks/useTagList";
import { ColumnSADiv } from "../../atoms/Div";
import Pagination from "../../molecules/Pagination";
import TagListItem from "../../molecules/TagListItem";
import * as S from "./styles";

export default function TagList({ ...props }) {
  const [page, setPage] = useState(1);
  const { tagList, isLoading } = useTagList(page);
  const history = useHistory();

  if (!isLoading) {
    console.log(tagList);
    const tagArr = tagList?.hashTagList.map((item: any) => (
      <TagListItem
        key={item.id}
        onClick={() => {
          history.push({
            pathname: `/tag/${item.name}`,
            state: { hashtagId: item.id, hashtagName: item.name },
          });
        }}
        {...item}
      />
    ));
    return (
      <S.WrapBox {...props}>
        <S.Count>모든 태그 ({tagList?.hashTagListCount})개</S.Count>
        <S.List>{tagArr}</S.List>
        <ColumnSADiv height="115px">
          <Pagination
            limit={30}
            questionCount={tagList?.hashTagListCount}
            page={page}
            onPage={setPage}
          />
        </ColumnSADiv>
      </S.WrapBox>
    );
  } else return <div>loading</div>;
}
