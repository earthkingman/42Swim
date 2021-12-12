import { useState } from "react";
import useTagList from "../../../hooks/useTagList";
import Pagination from "../../molecules/Pagination";
import TagListItem from "../../molecules/TagListItem";

export default function TagList({ ...props }) {
  const [page, setPage] = useState(1);
  const { tagList, isLoading } = useTagList(page);

  if (!isLoading) {
    console.log(tagList);
    const tagArr = tagList?.hashTagList.map((item: any) => (
      <TagListItem key={item.id} {...item} />
    ));
    return (
      <div {...props}>
        {tagArr}
        <Pagination
          limit={30}
          questionCount={tagList?.hashTagListCount}
          page={page}
          onPage={setPage}
        />
      </div>
    );
  } else return <div>loading</div>;
}
