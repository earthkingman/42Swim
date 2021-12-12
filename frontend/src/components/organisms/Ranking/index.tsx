import { RowSADiv } from "../../atoms/Div";
import Text from "../../atoms/Text";
import * as S from "./style";
import Help from "../../asset/icons/Help";
import Tab, { TabItem } from "../../molecules/Tab";
import { useState } from "react";
import Profile from "../../molecules/Profile";

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

const month = [
  {
    id: 20,
    score: "5",
    photo: null,
    nickname: "iha",
  },
  {
    id: 16,
    score: "5",
    photo: null,
    nickname: "yejeong",
  },
  {
    id: 17,
    score: "5",
    photo: null,
    nickname: "ji-park",
  },
  {
    id: 21,
    score: "5",
    photo: "https://cdn.intra.42.fr/users/nkim.jpg",
    nickname: "nkim",
  },
];

const Ranking = () => {
  const [menu, setMenu] = useState(0);

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
          {month.map((profile, idx: number) => (
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
