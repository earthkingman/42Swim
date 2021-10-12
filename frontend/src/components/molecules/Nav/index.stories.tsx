import React from "react";
import { BrowserRouter } from "react-router-dom";
import GlobalThemeProvider from "../../../style/GlobalThemeProvider";
import Nav, { Props } from "./index";
import { NavItem } from "./style";

export default {
  title: "Molecules/Nav",
  component: Nav,
};

export const Default = (props: Props) => {
  return (
    <GlobalThemeProvider>
      <BrowserRouter>
        <Nav {...props}>
          <NavItem to="/1">menu1</NavItem>
          <NavItem to="/2">menu2</NavItem>
          <NavItem to="/3">menu3</NavItem>
          <NavItem to="/4">menu4</NavItem>
        </Nav>
      </BrowserRouter>
    </GlobalThemeProvider>
  );
};

export const Example = (props: Props) => {
  return (
    <GlobalThemeProvider>
      <BrowserRouter>
        <Nav {...props}>
          <NavItem to="/1">최신순</NavItem>
          <NavItem to="/2">인기순</NavItem>
          <NavItem to="/3">답변필요</NavItem>
          <NavItem to="/4">태그</NavItem>
        </Nav>
      </BrowserRouter>
    </GlobalThemeProvider>
  );
};
