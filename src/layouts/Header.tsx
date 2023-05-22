import React from "react";
import { HeaderWrapper } from "./styles";

export const Header: React.FC = () => {
  return (
    <HeaderWrapper>
      <img src="/logo.png" alt="" />
      <h2>My To-do List</h2>
    </HeaderWrapper>
  );
};
