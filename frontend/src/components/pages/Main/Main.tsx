/* eslint-disable eslint-comments/disable-enable-pair */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState } from "react";
import PlusIcon from "../../asset/icons/PlusIcon";
import Box from "../../atoms/Box";
import Button from "../../atoms/Button";
import { RowSADiv } from "../../atoms/Div";
import Title from "../../atoms/Title";
import Text from "../../atoms/Text";
import SearchInput from "../../molecules/SearchInput";
import Header from "../../organisms/Header";
import QuestionList from "../../organisms/QuestionList";
import MainTemplate from "./template";
import Crown from "../../asset/icons/Crown";
import BasicTemplate from "../BasicTemplate";
import CatWork from "../../asset/png/Cats-at-Work.png";
import useInput from "../../../hooks/useInput";
import styled from "styled-components";

interface Props {
  history: any;
}

const RankingDiv = styled.div`
  width: 27%;

  @media (max-width: 910px) {
    display: none;
    background-color: pink;
  }
`;

const MainPage = ({ history, ...props }: Props) => {
  const [menu, setMenu] = useState(0);
  const { value: searchVal, onChange: onChangesearchVal, setValue } = useInput(
    ""
  );

  const onSearch = () => {
    console.log("search");
  };

  return (
    <>
      <BasicTemplate header={<Header />}>
        <MainTemplate
          panel={
            <>
              <SearchInput
                onChange={onChangesearchVal}
                search={searchVal}
                onSearch={onSearch}
              />
              <Button
                shadow={true}
                onClick={() => history.push("/writing")}
                size="sm"
              >
                질문하기 <PlusIcon style={{ marginLeft: "2rem" }} />
              </Button>
            </>
          }
          content1={<QuestionList menu={menu} setMenu={setMenu} />}
          content2={
            <RankingDiv>
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
            </RankingDiv>
          }
        />
      </BasicTemplate>
    </>
  );
};

export default MainPage;
