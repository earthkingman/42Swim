import React from "react";
import Footer from "../../organisms/Footer";
import { Container, Header, Wrapper } from "./style";

interface Props {
  header: React.ReactNode;
  children: any;
  content?: React.ReactNode;
}

const BasicTemplate = ({ header, content, children, ...props }: Props) => {
  return (
    <Wrapper>
      <Container {...props}>
        <Header>{header}</Header>
        {content}
        {children}
      </Container>
      <Footer />
    </Wrapper>
  );
};

export default BasicTemplate;
