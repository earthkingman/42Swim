import React from "react";
import Footer from "../../organisms/Footer";
import { Container, Header } from "./style";

interface Props {
  header: React.ReactNode;
  children: any;
  content?: React.ReactNode;
}

const BasicTemplate = ({ header, content, children, ...props }: Props) => {
  return (
    <>
      <Container {...props}>
        <Header>{header}</Header>
        {content}
        {children}
      </Container>
      <Footer />
    </>
  );
};

export default BasicTemplate;
