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
import useSWR from "swr";
import axios, { AxiosError, AxiosResponse } from "axios";
import { Props as ListProps } from "../../molecules/ListItem";

interface ResponseProps {
  quesiontList: ListProps[];
  questionCount: number;
  message: string;
}

const MainPage = ({ isLogin = false }: any) => {
  //   const [user, setUser] = useState()
  const [isLoginModal, setIsLoginModal] = useState(false);
  const [isRegistModal, setIsRegistModal] = useState(false);
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
        content1={<QuestionList menu={menu} setMenu={setMenu} />}
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
