import React from "react";
import Footer from "../../organisms/Footer";
import { Container, Header } from "./style";

interface Props {
  header: React.ReactNode;
  content: React.ReactNode;
}

const BasicTemplate = ({ header, content, ...props }: Props) => {
  return (
    <>
      <Container {...props}>
        <Header>{header}</Header>
        {content}
      </Container>
      <Footer />
    </>
  );
};

export default BasicTemplate;
