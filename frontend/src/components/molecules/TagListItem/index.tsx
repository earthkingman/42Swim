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
    <div {...props}>
      <p>{name}</p>
      <p>{questionCount}</p>
    </div>
  );
}
