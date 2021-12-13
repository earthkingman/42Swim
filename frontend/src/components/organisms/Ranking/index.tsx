import { RowSADiv } from "../../atoms/Div";
import Text from "../../atoms/Text";
import * as S from "./style";
import Help from "../../asset/icons/Help";
import Tab, { TabItem } from "../../molecules/Tab";
import { useState } from "react";
import Profile from "../../molecules/Profile";
import useRanking from "../../../hooks/useRanking";

interface WinnerProps {
  rank: number;
  nickname: string | null;
  photo: any;
}

const Winner = ({ rank, photo, nickname }: WinnerProps) => {
  return (
    <S.WinnerWrapper>
      <Text size="18" weight="bold" color="deepgray">
        {rank}
      </Text>
      <Profile border={true} size="lg" nickname={nickname} photo={photo} />
    </S.WinnerWrapper>
  );
};

const Ranking = () => {
  const { ranking, isLoading, isError } = useRanking();
  const { month, total } = ranking;
  const [menu, setMenu] = useState(0);

  if (isLoading) return <div>loading</div>;
  if (isError) return <div>error</div>;
  return (
    <S.RankingWrapper>
      <RowSADiv
        style={{
          height: "44px",
          justifyContent: "flex-start",
          alignItems: "flex-start",
        }}
      ></RowSADiv>
      <S.RankingDiv>
        <S.Title>
          <Text size="18" weight="bold">
            42<S.Blue>Swimmer</S.Blue> 랭킹
          </Text>
          <Help />
        </S.Title>
        <S.TabWrapper>
          <Tab size="xsm">
            <TabItem
              size="xsm"
              active={menu === 0 ? true : false}
              onTabClick={() => setMenu(0)}
            >
              월별순
            </TabItem>
            <S.Divder />
            <TabItem
              size="xsm"
              active={menu === 1 ? true : false}
              onTabClick={() => setMenu(1)}
            >
              전체순
            </TabItem>
          </Tab>
        </S.TabWrapper>
        <S.WinnerListWrapper>
          {menu === 0
            ? month.map((profile, idx: number) => (
                <Winner
                  key={profile.id}
                  rank={idx}
                  nickname={profile.nickname}
                  photo={profile.photo}
                />
              ))
            : total.map((profile, idx: number) => (
                <Winner
                  key={profile.id}
                  rank={idx}
                  nickname={profile.nickname}
                  photo={profile.photo}
                />
              ))}
        </S.WinnerListWrapper>
      </S.RankingDiv>
    </S.RankingWrapper>
  );
};

export default Ranking;
