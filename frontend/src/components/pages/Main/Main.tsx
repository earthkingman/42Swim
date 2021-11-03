/* eslint-disable eslint-comments/disable-enable-pair */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { useEffect, useState } from "react";
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
import BasicTemplate from "../BasicTemplate";

interface ResponseProps {
  quesiontList: ListProps[];
  questionCount: number;
  message: string;
}

const MainPage = () => {
  const [user, setUser] = useState(null);
  const [isLoginModal, setIsLoginModal] = useState(false);
  const [isRegistModal, setIsRegistModal] = useState(false);
  const [menu, setMenu] = useState(0);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const userInfo = localStorage.getItem("user");
    setUser(JSON.parse(userInfo));
    console.log("userInfo", userInfo);
    console.log(user);
  }, []);

  const onSearch = () => {
    console.log("search");
    setSearch("hihi");
  };
  return (
    <>
      <LoginPage
        onRegist={setIsRegistModal}
        onLoginSuccess={setUser}
        visible={isLoginModal}
        onClose={setIsLoginModal}
      />
      <RegisterPage visible={isRegistModal} onClose={setIsRegistModal} />
      <BasicTemplate
        header={
          <Header
            onLoginClick={setIsLoginModal}
            isLogin={user === null ? false : true}
            nickname={user?.nickname}
          />
        }
      >
        <MainTemplate
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
        />
      </BasicTemplate>
    </>
  );
};

export default MainPage;
