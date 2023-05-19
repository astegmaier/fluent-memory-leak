import React from "react";
import { ThemeProvider, FocusZone, DefaultButton, Link } from "@fluentui/react";

export const FluentPage = () => (
  <ThemeProvider>
    <iframe style={{ border: "1px solid red" }}></iframe>
    <FocusZone>
      <DefaultButton onClick={() => alert("hello")}>
        Fluent DefaultButton Component FocusZone
      </DefaultButton>
      <Link href="https://bing.com" target="_blank">
        Link component FocusZone
      </Link>
    </FocusZone>
  </ThemeProvider>
);
