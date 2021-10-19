/* eslint-disable eslint-comments/disable-enable-pair */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState } from "react";
import PlusIcon from "../../asset/icons/PlusIcon";
import Box from "../../atoms/Box";
import Button from "../../atoms/Button";
import { ColumnSADiv, RowSADiv } from "../../atoms/Div";
import Title from "../../atoms/Title";
import Text from "../../atoms/Text";
import SearchInput from "../../molecules/SearchInput";
import Header from "../../organisms/Header";
import QuestionList from "../../organisms/QuestionList";
import LoginPage from "../Login/Login";
import MainTemplate from "./template";
import Crown from "../../asset/icons/Crown";
import RegisterPage from "../Register/Register";
import useSWR, { SWRResponse } from "swr";
import axios from "axios";
import { Props as ListProps } from "../../molecules/ListItem";

interface ResponseProps {
  quesiontList: ListProps[];
  questionCount: number;
  message: string;
}

const fetcher = async (url: string) => {
  const res = await axios.get(url);
  console.log(res.data);
  return res.data;
};

const MainPage = ({ isLogin = false }: any) => {
  //   const [user, setUser] = useState()
  const [page, setPage] = useState(1);
  //   const { quesiontList, questionCount, message } = useSWR(
  //     `http://localhost:5000/pages/list/question?pageNumber=${page}`,
  //     fetcher
  //   );
  const [isLoginModal, setIsLoginModal] = useState(false);
  const [isRegistModal, setIsRegistModal] = useState(false);
  //   const data2 = [
  //     {
  //       title: "글 제목 글 제목1",
  //       desc:
  //         "글 미리보기 미리보기 미리보기 글 미리보기 미리보기 미리보기글 미리보기 미리보기 미리보기글 미리보기 미리보기 미리보기글 미리보기 미리보기 미리보기글 미리보기 미리보기 미리보기글 미리보기 미리보기 미리보기",
  //       check: true,
  //       answer_cnt: 1,
  //       like_cnt: 2,
  //       view_cnt: 4,
  //       tag: ["TAG1", "TAG2"],
  //       create_time: "2021-10-01T00:10:20.000Z",
  //     },
  //     {
  //       title: "글 제목 글 제목2",
  //       desc:
  //         "글 미리보기 미리보기 미리보기 글 미리보기 미리보기 미리보기글 미리보기 미리보기 미리보기글 미리보기 미리보기 미리보기글 미리보기 미리보기 미리보기글 미리보기 미리보기 미리보기글 미리보기 미리보기 미리보기",
  //       check: false,
  //       answer_cnt: 1,
  //       like_cnt: 2,
  //       view_cnt: 4,
  //       tag: ["TAG1", "TAG2"],
  //       create_time: "2021-10-01T00:10:20.000Z",
  //     },
  //     {
  //       title: "글 제목 글 제목3",
  //       desc:
  //         "글 미리보기 미리보기 미리보기 글 미리보기 미리보기 미리보기글 미리보기 미리보기 미리보기글 미리보기 미리보기 미리보기글 미리보기 미리보기 미리보기글 미리보기 미리보기 미리보기글 미리보기 미리보기 미리보기",
  //       check: false,
  //       answer_cnt: 1,
  //       like_cnt: 2,
  //       view_cnt: 4,
  //       tag: ["TAG1", "TAG2"],
  //       create_time: "2021-10-01T00:10:20.000Z",
  //     },
  //     {
  //       title: "글 제목 글 제목4",
  //       desc:
  //         "글 미리보기 미리보기 미리보기 글 미리보기 미리보기 미리보기글 미리보기 미리보기 미리보기글 미리보기 미리보기 미리보기글 미리보기 미리보기 미리보기글 미리보기 미리보기 미리보기글 미리보기 미리보기 미리보기",
  //       check: false,
  //       answer_cnt: 1,
  //       like_cnt: 2,
  //       view_cnt: 4,
  //       tag: ["TAG1", "TAG2"],
  //       create_time: "2021-10-01T00:10:20.000Z",
  //     },
  //     {
  //       title: "글 제목 글 제목5",
  //       desc:
  //         "글 미리보기 미리보기 미리보기 글 미리보기 미리보기 미리보기글 미리보기 미리보기 미리보기글 미리보기 미리보기 미리보기글 미리보기 미리보기 미리보기글 미리보기 미리보기 미리보기글 미리보기 미리보기 미리보기",
  //       check: false,
  //       answer_cnt: 1,
  //       like_cnt: 2,
  //       view_cnt: 4,
  //       tag: ["TAG1", "TAG2"],
  //       create_time: "2021-10-01T00:10:20.000Z",
  //     },
  //     {
  //       title: "글 제목 글 제목6",
  //       desc:
  //         "글 미리보기 미리보기 미리보기 글 미리보기 미리보기 미리보기글 미리보기 미리보기 미리보기글 미리보기 미리보기 미리보기글 미리보기 미리보기 미리보기글 미리보기 미리보기 미리보기글 미리보기 미리보기 미리보기",
  //       check: false,
  //       answer_cnt: 1,
  //       like_cnt: 2,
  //       view_cnt: 4,
  //       tag: ["TAG1", "TAG2"],
  //       create_time: "2021-10-01T00:10:20.000Z",
  //     },
  //     {
  //       title: "글 제목 글 제목7",
  //       desc:
  //         "글 미리보기 미리보기 미리보기 글 미리보기 미리보기 미리보기글 미리보기 미리보기 미리보기글 미리보기 미리보기 미리보기글 미리보기 미리보기 미리보기글 미리보기 미리보기 미리보기글 미리보기 미리보기 미리보기",
  //       check: false,
  //       answer_cnt: 1,
  //       like_cnt: 2,
  //       view_cnt: 4,
  //       tag: ["TAG1", "TAG2"],
  //       create_time: "2021-10-01T00:10:20.000Z",
  //     },
  //     {
  //       title: "글 제목 글 제목8",
  //       desc:
  //         "글 미리보기 미리보기 미리보기 글 미리보기 미리보기 미리보기글 미리보기 미리보기 미리보기글 미리보기 미리보기 미리보기글 미리보기 미리보기 미리보기글 미리보기 미리보기 미리보기글 미리보기 미리보기 미리보기",
  //       check: false,
  //       answer_cnt: 1,
  //       like_cnt: 2,
  //       view_cnt: 4,
  //       tag: ["TAG1", "TAG2"],
  //       create_time: "2021-10-01T00:10:20.000Z",
  //     },
  //   ];
  const [menu, setMenu] = useState(0);
  const [search, setSearch] = useState("");
  const onSearch = () => {
    console.log("search");
    setSearch("hihi");
  };
  return (
    <>
      <LoginPage
        onRegist={setIsRegistModal}
        visible={isLoginModal}
        onClose={setIsLoginModal}
      />
      <RegisterPage visible={isRegistModal} onClose={setIsRegistModal} />
      <MainTemplate
        header={
          <Header
            onLoginClick={setIsLoginModal}
            isLogin={isLogin}
            nickname="닉네임"
          />
        }
        panel={
          <>
            <SearchInput
              onChange={() => console.log("search")}
              search={search}
              onSearch={onSearch}
            />
            <Button size="sm">
              질문하기 <PlusIcon />
            </Button>
          </>
        }
        content1={
          <QuestionList data={quesiontList} menu={menu} setMenu={setMenu} />
        }
        content2={
          <div style={{ width: "27%" }}>
            <RowSADiv style={{ height: "50px" }}>
              <Crown />
              <Title size="h2">King of 42</Title>
              <Crown />
            </RowSADiv>
            <Box width="100%" height="338px" />
          </div>
        }
        footer={
          <ColumnSADiv>
            <RowSADiv
              style={{
                alignItems: "flex-end",
                width: "340px",
                marginBottom: "1rem",
              }}
            >
              <Title size="h2" color="white">
                42Code
              </Title>
              <Text size="14" color="white" weight="bold">
                made by ji-park & yejeong & nkim & iha
              </Text>
            </RowSADiv>
            <Text size="14" color="white">
              Copyright © 2019 - 2021 42Seoul inno. All rights reserved.
            </Text>
          </ColumnSADiv>
        }
      />
    </>
  );
};

export default MainPage;
