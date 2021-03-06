import dateChange from "../../../utils/dateChange";
import MainText from "../../atoms/MainText";
import Text from "../../atoms/Text";
import Profile, { ProfileProps } from "../Profile";

import { AnswerTitleWrapper, AnswerWrapper } from "./sytle";

export interface AnswerProps {
  key?: number;
  user: ProfileProps;
  created_at: string;
  text: string;
}

const Answer = ({ created_at, user, text, ...props }: AnswerProps) => {
  const createAt = dateChange(created_at);
  return (
    <AnswerWrapper {...props}>
      <AnswerTitleWrapper>
        <Profile {...user} size="sm" />
        <Text size="14" color="grey">
          {createAt}
        </Text>
      </AnswerTitleWrapper>
      <MainText>{text}</MainText>
    </AnswerWrapper>
  );
};

export default Answer;
