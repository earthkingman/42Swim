import Crown from "../../asset/icons/Crown";
import Box from "../../atoms/Box";
import { RowSADiv } from "../../atoms/Div";
import Title from "../../atoms/Title";
// eslint-disable-next-line import/no-unresolved
import Catwork from "../../asset/png/Cats-at-work.png";
import * as S from "./style";

const Ranking = () => {
  return (
    <S.RankingDiv>
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
          src={Catwork}
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
    </S.RankingDiv>
  );
};

export default Ranking;
