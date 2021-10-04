import React from 'react'
import SearchBtn from '../../asset/icons/SearchBtn'
import { SButton, SearchBox, SInput } from './style'

export interface Props {
  onSearch: any
  search: string
}

const SearchInput = ({ onSearch, search, ...props }: Props) => {
  return (
    <>
      <SearchBox {...props}>
        <SInput
          placeholder="검색할 내용을 입력하세요"
          value={search}
          border={false}
        />
        <SButton onClick={onSearch}>
          <SearchBtn />
        </SButton>
      </SearchBox>
    </>
  )
}

export default SearchInput
