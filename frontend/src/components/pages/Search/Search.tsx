import React, { useState } from "react";
import { RouteComponentProps } from "react-router";
import useInput from "../../../hooks/useInput";
import PlusIcon from "../../asset/icons/PlusIcon";
import Button from "../../atoms/Button";
import SearchInput from "../../molecules/SearchInput";
import SearchQuestionList from "../../organisms/SearchQuestionList.tsx";
import BasicTemplate from "../BasicTemplate";
import SearchTemplate from "./template";
import qs from "qs";

const SearchPage = ({ location }: RouteComponentProps) => {
  const query = qs.parse(location.search, {
    ignoreQueryPrefix: true,
  });
  const keyword = query.keyword as string;
  const { value: searchVal, onChange: onChangesearchVal } = useInput(keyword);
  const [searchKey, setSearchKey] = useState(keyword);

  const onSearch = () => {
    setSearchKey(searchVal);
  };

  return (
    <BasicTemplate>
      <SearchTemplate
        panel={
          <>
            <SearchInput
              onChange={onChangesearchVal}
              search={searchVal}
              onSearch={onSearch}
            />
            <Button
              shadow={true}
              onClick={() => console.log("/writing")}
              size="sm"
            >
              질문하기 <PlusIcon style={{ marginLeft: "2rem" }} />
            </Button>
          </>
        }
        content={<SearchQuestionList keyword={searchKey} />}
      />
    </BasicTemplate>
  );
};

export default SearchPage;
