/* eslint-disable eslint-comments/disable-enable-pair */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState } from "react";
import PlusIcon from "../../asset/icons/PlusIcon";
import Button from "../../atoms/Button";
import SearchInput from "../../molecules/SearchInput";
import Header from "../../organisms/Header";
import QuestionList from "../../organisms/QuestionList";
import MainTemplate from "./template";
import BasicTemplate from "../BasicTemplate";
import useInput from "../../../hooks/useInput";
import Ranking from "../../organisms/Ranking";

interface Props {
  history: any;
}

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
      <BasicTemplate>
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
          content2={<Ranking />}
        />
      </BasicTemplate>
    </>
  );
};

export default MainPage;
