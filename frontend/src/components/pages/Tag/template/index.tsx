import React from "react";
import { ContentWrapper, Panel } from "./style";

interface Props {
  panel?: React.ReactNode;
  content: React.ReactNode;
}

const TagTemplate = ({ panel, content }: Props) => {
  return (
    <>
      <Panel>{panel}</Panel>
      <ContentWrapper>{content}</ContentWrapper>
    </>
  );
};

export default TagTemplate;
