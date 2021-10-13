import React from "react";
import { Container, ContentWrapper, Footer, Header, Panel } from "./style";

interface Props {
  header: React.ReactNode;
  panel?: React.ReactNode;
  content1: React.ReactNode;
  content2: React.ReactNode;
  footer: React.ReactNode;
}

const MainTemplate = ({
  header,
  panel,
  content1,
  content2,
  footer,
  ...props
}: Props) => {
  return (
    <>
      <Container {...props}>
        <Header>{header}</Header>
        <Panel>{panel}</Panel>
        <ContentWrapper>
          {content1}
          {content2}
        </ContentWrapper>
      </Container>
      <Footer>{footer}</Footer>
    </>
  );
};

export default MainTemplate;
