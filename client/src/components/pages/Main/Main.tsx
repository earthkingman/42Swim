import { useState } from 'react'
import PlusIcon from '../../asset/icons/PlusIcon'
import Box from '../../atoms/Box'
import Button from '../../atoms/Button'
import Title from '../../atoms/Title'
import SearchInput from '../../molecules/SearchInput'
import Header from '../../organisms/Header'
import QuestionList from '../../organisms/QuestionList'
import MainTemplate from './template'

const MainPage = () => {
  const data = [
    {
      title: '글 제목 글 제목1',
      desc:
        '글 미리보기 미리보기 미리보기 글 미리보기 미리보기 미리보기글 미리보기 미리보기 미리보기글 미리보기 미리보기 미리보기글 미리보기 미리보기 미리보기글 미리보기 미리보기 미리보기글 미리보기 미리보기 미리보기',
      check: true,
      answer_cnt: 1,
      like_cnt: 2,
      view_cnt: 4,
      tag: ['TAG1', 'TAG2'],
      create_time: '2021-10-01T00:10:20.000Z',
    },
    {
      title: '글 제목 글 제목2',
      desc:
        '글 미리보기 미리보기 미리보기 글 미리보기 미리보기 미리보기글 미리보기 미리보기 미리보기글 미리보기 미리보기 미리보기글 미리보기 미리보기 미리보기글 미리보기 미리보기 미리보기글 미리보기 미리보기 미리보기',
      check: false,
      answer_cnt: 1,
      like_cnt: 2,
      view_cnt: 4,
      tag: ['TAG1', 'TAG2'],
      create_time: '2021-10-01T00:10:20.000Z',
    },
    {
      title: '글 제목 글 제목3',
      desc:
        '글 미리보기 미리보기 미리보기 글 미리보기 미리보기 미리보기글 미리보기 미리보기 미리보기글 미리보기 미리보기 미리보기글 미리보기 미리보기 미리보기글 미리보기 미리보기 미리보기글 미리보기 미리보기 미리보기',
      check: false,
      answer_cnt: 1,
      like_cnt: 2,
      view_cnt: 4,
      tag: ['TAG1', 'TAG2'],
      create_time: '2021-10-01T00:10:20.000Z',
    },
    {
      title: '글 제목 글 제목4',
      desc:
        '글 미리보기 미리보기 미리보기 글 미리보기 미리보기 미리보기글 미리보기 미리보기 미리보기글 미리보기 미리보기 미리보기글 미리보기 미리보기 미리보기글 미리보기 미리보기 미리보기글 미리보기 미리보기 미리보기',
      check: false,
      answer_cnt: 1,
      like_cnt: 2,
      view_cnt: 4,
      tag: ['TAG1', 'TAG2'],
      create_time: '2021-10-01T00:10:20.000Z',
    },
    {
      title: '글 제목 글 제목5',
      desc:
        '글 미리보기 미리보기 미리보기 글 미리보기 미리보기 미리보기글 미리보기 미리보기 미리보기글 미리보기 미리보기 미리보기글 미리보기 미리보기 미리보기글 미리보기 미리보기 미리보기글 미리보기 미리보기 미리보기',
      check: false,
      answer_cnt: 1,
      like_cnt: 2,
      view_cnt: 4,
      tag: ['TAG1', 'TAG2'],
      create_time: '2021-10-01T00:10:20.000Z',
    },
    {
      title: '글 제목 글 제목6',
      desc:
        '글 미리보기 미리보기 미리보기 글 미리보기 미리보기 미리보기글 미리보기 미리보기 미리보기글 미리보기 미리보기 미리보기글 미리보기 미리보기 미리보기글 미리보기 미리보기 미리보기글 미리보기 미리보기 미리보기',
      check: false,
      answer_cnt: 1,
      like_cnt: 2,
      view_cnt: 4,
      tag: ['TAG1', 'TAG2'],
      create_time: '2021-10-01T00:10:20.000Z',
    },
    {
      title: '글 제목 글 제목7',
      desc:
        '글 미리보기 미리보기 미리보기 글 미리보기 미리보기 미리보기글 미리보기 미리보기 미리보기글 미리보기 미리보기 미리보기글 미리보기 미리보기 미리보기글 미리보기 미리보기 미리보기글 미리보기 미리보기 미리보기',
      check: false,
      answer_cnt: 1,
      like_cnt: 2,
      view_cnt: 4,
      tag: ['TAG1', 'TAG2'],
      create_time: '2021-10-01T00:10:20.000Z',
    },
    {
      title: '글 제목 글 제목8',
      desc:
        '글 미리보기 미리보기 미리보기 글 미리보기 미리보기 미리보기글 미리보기 미리보기 미리보기글 미리보기 미리보기 미리보기글 미리보기 미리보기 미리보기글 미리보기 미리보기 미리보기글 미리보기 미리보기 미리보기',
      check: false,
      answer_cnt: 1,
      like_cnt: 2,
      view_cnt: 4,
      tag: ['TAG1', 'TAG2'],
      create_time: '2021-10-01T00:10:20.000Z',
    },
  ]
  const [menu, setMenu] = useState(0)
  const [search, setSearch] = useState('')
  const onSearch = () => {
    console.log('search')
    setSearch('hihi')
  }
  return (
    <MainTemplate
      header={<Header isLogin={true} nickname="닉네임" />}
      panel={
        <>
          <SearchInput search={search} onSearch={onSearch} />
          <Button size="sm">
            질문하기 <PlusIcon />
          </Button>
        </>
      }
      content1={<QuestionList data={data} menu={menu} setMenu={setMenu} />}
      content2={<Box width="300px" height="338px" />}
      footer={<Title>Footer</Title>}
    />
  )
}

export default MainPage
