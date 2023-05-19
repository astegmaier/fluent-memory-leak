import React from "react";
import { ThemeProvider, DefaultButton } from "@fluentui/react";

export const FluentPage = () => (
  <ThemeProvider>
    <DefaultButton onClick={() => alert("hello")}>
      Fluent DefaultButton Component
    </DefaultButton>
  </ThemeProvider>
);
