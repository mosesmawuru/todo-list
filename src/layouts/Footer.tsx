import React from "react";
import { Copyright, FooterWrapper } from "./styles";

export const Footer: React.FC = () => {
  return (
    <FooterWrapper>
      <Copyright>
        &copy; {new Date().getFullYear()}, All rights reserved.
      </Copyright>
      <p>Made by milan</p>
    </FooterWrapper>
  );
};
