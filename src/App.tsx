import React from "react";
import { ThemeProvider, DefaultButton } from "@fluentui/react";

export const App = () => (
  <ThemeProvider>
    <DefaultButton onClick={() => alert("hello")}>Hello World</DefaultButton>
  </ThemeProvider>
);
