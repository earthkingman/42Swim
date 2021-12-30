import MediaQuery from "react-responsive";
import Desktop from "./Desktop";
import Mobile from "./Mobile";

export interface Props {
  id: number;
  title: string;
  text: string;
  photo: any;
  nickname?: string;
  is_solved: boolean;
  answer_cnt: number;
  like_count: number;
  view_count: number;
  created_at: string;
  hashtag: string[];
}

const ListItem = ({ ...props }: Props) => {
  return (
    <>
      <MediaQuery minWidth={1224}>
        <Desktop {...props} />
      </MediaQuery>
      <MediaQuery maxWidth={1224}>
        <Mobile {...props} />
      </MediaQuery>
    </>
  );
};

export default ListItem;
