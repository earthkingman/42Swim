import MoreBtn from "../../atoms/MoreBtn";
import Text from "../../atoms/Text";
import { ProfileProps } from "../Profile";
import {
  CommentHeaderWrapper,
  CommentTextWrapper,
  CommentWrapper,
} from "./style";

export interface CommentProps {
  id: number;
  user: ProfileProps;
  create_at: string;
  text: string;
}

const Comment = ({ create_at, text, id }: CommentProps) => (
  <CommentWrapper key={id}>
    <CommentHeaderWrapper>
      <Text weight="bold" size="18">
        {/*{user.nickname}*/}
      </Text>
      <Text size="14" color="lightgray">
        {create_at}
      </Text>
    </CommentHeaderWrapper>
    <CommentTextWrapper>
      <Text size="18" color="lightgray">
        {text}
      </Text>
      <MoreBtn />
    </CommentTextWrapper>
  </CommentWrapper>
);

export default Comment;
