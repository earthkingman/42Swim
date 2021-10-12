import Text from "../../atoms/Text";
import Profile from "../Profile";

import { AnswerMain, AnswerTitleWrapper, AnswerWrapper } from "./sytle";

export interface AnswerProps {
  nickname: string;
  img?: string;
  createAt: string;
  main: string;
}

const Answer = ({ createAt, img, nickname, main }: AnswerProps) => {
  return (
    <AnswerWrapper>
      <AnswerTitleWrapper>
        <Profile nickname={nickname} size="sm" img={img} />
        <Text size="14" color="lightgray">
          {createAt}
        </Text>
      </AnswerTitleWrapper>
      <AnswerMain size="18" color="black">
        {main}
      </AnswerMain>
    </AnswerWrapper>
  );
};

export default Answer;
