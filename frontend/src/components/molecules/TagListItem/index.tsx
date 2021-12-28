import * as S from "./style";

interface TagListItemType {
  id: number;
  name: string;
  onClick: any;
  questionCount: number;
}

export default function TagListItem({
  name,
  questionCount,
  onClick,
  ...props
}: TagListItemType) {
  return (
    <S.Wrap {...props}>
      <S.Title onClick={onClick}>{name}</S.Title>
      <S.Sub>질문 {questionCount}개</S.Sub>
    </S.Wrap>
  );
}
