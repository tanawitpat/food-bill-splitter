import React from "react";
import { ThemeProvider } from "styled-components";
import { AppContext, AppInitialProps, AppProps } from "next/app";
import { NextComponentType } from "next";

const theme = {
  colors: {
    primary: "red",
    white: "#ffffff",
    black: "#000000",
  },
};

const MyApp: NextComponentType<AppContext, AppInitialProps, AppProps> = ({
  Component,
  pageProps,
}) => {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
};

export default MyApp;
