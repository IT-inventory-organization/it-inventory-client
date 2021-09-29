import React from "react";
import { Container, ThemeProvider } from "@mui/material";
import THEME from "../styles/dashboard/theme";

function MainLayout(props) {
  const { children } = props;
  return (
    <ThemeProvider theme={THEME}>
      <Container>{children}</Container>
    </ThemeProvider>
  );
}

export default MainLayout;
