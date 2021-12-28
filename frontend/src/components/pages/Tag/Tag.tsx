import React, { useState } from "react";
import { RouteComponentProps } from "react-router";
import useInput from "../../../hooks/useInput";
import PlusIcon from "../../asset/icons/PlusIcon";
import Button from "../../atoms/Button";
import SearchInput from "../../molecules/SearchInput";
import BasicTemplate from "../BasicTemplate";
import TagTemplate from "./template";
import TagQuestionList from "../../organisms/TagQuestionList";
import SearchQuestionList from "../../organisms/SearchQuestionList.tsx";

const TagPage = ({ location }: RouteComponentProps) => {
  const state = location.state;
  console.log(history);
  const { value: searchVal, onChange: onChangesearchVal } = useInput("");
  const [searchKey, setSearchKey] = useState("");

  const onSearch = () => {
    setSearchKey(searchVal);
  };

  return (
    <BasicTemplate>
      <TagTemplate
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
              fontColor="white"
            >
              질문하기 <PlusIcon style={{ marginLeft: "2rem" }} />
            </Button>
          </>
        }
        content={
          searchKey === "" ? (
            <TagQuestionList
              hashtagName={state.hashtagName}
              hashtagId={state.hashtagId}
            />
          ) : (
            <SearchQuestionList keyword={searchKey} />
          )
        }
      />
    </BasicTemplate>
  );
};

export default TagPage;
