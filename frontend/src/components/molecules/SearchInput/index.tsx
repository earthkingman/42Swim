import React, { useState } from "react";
import SearchBtn from "../../asset/icons/SearchBtn";
import { SButton, SearchBox, SInput } from "./style";

export interface Props {
  onSearch: any;
  onChange: any;
  search: string;
}

const SearchInput = ({ onChange, onSearch, search, ...props }: Props) => {
  const [focus, setFocus] = useState(false);
  const activeStyle = {
    border: "1px solid #FFB84D",
  };

  return (
    <>
      <SearchBox style={focus ? activeStyle : {}} {...props}>
        <SInput
          placeholder="검색할 내용을 입력하세요"
          value={search}
          border={false}
          onChange={onChange}
          onFocus={() => setFocus(true)}
          onBlur={() => setFocus(false)}
        />
        <SButton onClick={onSearch}>
          <SearchBtn />
        </SButton>
      </SearchBox>
    </>
  );
};

export default SearchInput;
