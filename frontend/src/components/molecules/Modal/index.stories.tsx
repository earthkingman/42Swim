import React from "react";
import GlobalThemeProvider from "../../../style/GlobalThemeProvider";
import Modal, { Props } from "./index";
import { ModalContent, ModalSubtitle, ModalTitle } from "./style";

export default {
  title: "Molecules/Modal",
  component: Modal,
};

export const Default = (props: Props) => {
  return (
    <GlobalThemeProvider>
      <Modal {...props}>
        <ModalTitle size="h1">Title</ModalTitle>
        <ModalSubtitle>subtitle</ModalSubtitle>
        <ModalContent
          height="210px"
          style={{ background: "#f2f2f2", fontSize: "18px" }}
        >
          Content
        </ModalContent>
      </Modal>
    </GlobalThemeProvider>
  );
};
