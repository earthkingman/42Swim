import * as S from "./style";

interface TagListItemType {
  id: number;
  name: string;
  questionCount: number;
}

export default function TagListItem({
  name,
  questionCount,
  ...props
}: TagListItemType) {
  return (
    <S.Wrap {...props}>
      <S.Title>{name}</S.Title>
      <S.Sub>질문 {questionCount}개</S.Sub>
    </S.Wrap>
  );
}
