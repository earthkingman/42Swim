import Text from "../../atoms/Text";
import Profile, { ProfileProps } from "../Profile";

import { AnswerMain, AnswerTitleWrapper, AnswerWrapper } from "./sytle";

export interface AnswerProps {
  user: ProfileProps;
  created_at: string;
  text: string;
}

const Answer = ({ created_at, user, text }: AnswerProps) => {
  return (
    <AnswerWrapper>
      <AnswerTitleWrapper>
        <Profile {...user} size="sm" />
        <Text size="14" color="lightgray">
          {created_at}
        </Text>
      </AnswerTitleWrapper>
      <AnswerMain size="18" color="black">
        {text}
      </AnswerMain>
    </AnswerWrapper>
  );
};

export default Answer;
