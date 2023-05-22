import React from "react";
import { AppLayoutWrapper, Container } from "./styles";
import { Header } from "./Header";
import { Footer } from "./Footer";

export const AppLayout: React.FC<React.HTMLAttributes<HTMLElement>> = ({
  children,
}) => {
  return (
    <AppLayoutWrapper>
      <Header />
      <Container>{children}</Container>
      <Footer />
    </AppLayoutWrapper>
  );
};
