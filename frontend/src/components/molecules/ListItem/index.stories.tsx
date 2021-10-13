import GlobalThemeProvider from "../../../style/GlobalThemeProvider";
import ListItem, { Props } from "./index";

export default {
  title: "Molecules/ListItem",
  component: ListItem,
};

export const Default = (props: Props) => {
  const tag = ["TAG1", "TAG2"];
  return (
    <GlobalThemeProvider>
      <ListItem
        title="글 제목 글 제목"
        desc="글 미리보기 미리보기 미리보기 글 미리보기 미리보기 미리보기글 미리보기 미리보기 미리보기글 미리보기 미리보기 미리보기글 미리보기 미리보기 미리보기글 미리보기 미리보기 미리보기글 미리보기 미리보기 미리보기"
        check={true}
        answer_cnt={1}
        like_cnt={2}
        view_cnt={4}
        tag={tag}
        create_time="2021-10-01T00:10:20.000Z"
        {...props}
      />
    </GlobalThemeProvider>
  );
};
