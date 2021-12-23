import * as S from "./style";

const ScoreModal = () => {
  return (
    <S.ScoreWrapper>
      <S.ScoreTitle>
        점수산정 기준
        <span
          style={{ fontSize: "40px", marginLeft: "1rem" }}
          role="img"
          aria-label="swim"
        >
          🏊
        </span>
      </S.ScoreTitle>
      <S.ScoreContent>+5 점 : 내 질문에 좋아요가 달림</S.ScoreContent>
      <S.ScoreContent>+5 점 : 내 질문의 답변 중 하나를 채택</S.ScoreContent>
      <S.ScoreContent>+10 점 : 내가 올린 답변에 좋아요가 달림</S.ScoreContent>
      <S.ScoreContent>+15 점 : 내가 올린 답변이 채택</S.ScoreContent>
      <S.ScoreContent>
        -1 점 : 다른 사람의 질문/답변에 싫어요를 닮
      </S.ScoreContent>
      <S.ScoreAlert>
        너무 성의없게 적혀진 글들은 통보없이 삭제되며, 이벤트에서 제외될 수
        있습니다.{" "}
        <S.ScoreA href="https://gratis-cardboard-45e.notion.site/42swim-7d4fd87c1cbd4686a7218788610955d3">
          커뮤니티 양식
        </S.ScoreA>{" "}
        을 지켜주세요!
      </S.ScoreAlert>
    </S.ScoreWrapper>
  );
};

export default ScoreModal;
