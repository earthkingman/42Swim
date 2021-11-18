import React from "react";
import Footer from "../../organisms/Footer";
import Header from "../../organisms/Header";
import { Container, Wrapper } from "./style";

interface Props {
  header?: React.ReactNode;
  children: any;
  //   content?: React.ReactNode;
}

const BasicTemplate = ({ children, ...props }: Props) => {
  return (
    <Wrapper>
      <Header />
      <Container {...props}>{children}</Container>
      <Footer />
    </Wrapper>
  );
};

export default BasicTemplate;
