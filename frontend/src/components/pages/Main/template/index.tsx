import React from "react";
import { ContentWrapper, Panel } from "./style";

interface Props {
  panel?: React.ReactNode;
  content1: React.ReactNode;
  content2: React.ReactNode;
}

const MainTemplate = ({ panel, content1, content2 }: Props) => {
  return (
    <>
      <Panel>{panel}</Panel>
      <ContentWrapper>
        {content1}
        {content2}
      </ContentWrapper>
    </>
  );
};

export default MainTemplate;
