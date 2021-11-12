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
import useAuth from "../../../hooks/useAuth";
import CatWork from "../../asset/png/Cats-at-Work.png";

interface ResponseProps {
  quesiontList: ListProps[];
  questionCount: number;
  message: string;
}

const MainPage = ({ history, ...props }) => {
  //   const { user, isLoading, isError } = useAuth();
  //   const [user, setUser] = useState(null);
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
      <BasicTemplate
        header={
          <Header
            onLoginClick={setIsLoginModal}
            // isLogin={user === null ? false : true}
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
              <Button onClick={() => history.push("/writing")} size="sm">
                질문하기 <PlusIcon style={{ marginLeft: "2rem" }} />
              </Button>
            </>
          }
          content1={<QuestionList menu={menu} setMenu={setMenu} />}
          content2={
            <div style={{ width: "27%" }}>
              <RowSADiv
                style={{
                  height: "50px",
                  justifyContent: "flex-start",
                  alignItems: "flex-start",
                }}
              ></RowSADiv>
              <Box
                width="100%"
                height="338px"
                style={{
                  display: "flex",
                  padding: "4rem",
                  justifyContent: "flex-start",
                  alignItem: "center",
                  flexDirection: "column",
                  position: "relative",
                }}
              >
                <Crown />
                <Title size="h2" style={{ lineHeight: "1.3" }}>
                  King of 42
                  <br /> 준비중...
                </Title>
                <img
                  src={CatWork}
                  alt="img"
                  style={{
                    position: "absolute",
                    bottom: "0px",
                    left: "-0px",
                    width: "10rem",
                    borderRadius: "16px",
                  }}
                />
              </Box>
            </div>
          }
        />
      </BasicTemplate>
    </>
  );
};

export default MainPage;
