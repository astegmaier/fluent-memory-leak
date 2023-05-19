import React from "react";
import { FluentPage } from "./FluentPage";
import { ThemeProvider } from "@fluentui/react";

export const App = () => {
  const [showFluentPage, setShowFluentPage] = React.useState(true);
  const forceRender = useForceRender();
  return (
    <>
      <ThemeProvider>
        <div className="container">
          <h1 className="display-2">Fluent Memory Leak</h1>
          <p className="lead">
            This page contains a reproduction of a memory leak in Fluent UI.
          </p>
          <p>
            <button
              className="btn btn-primary"
              onClick={() => setShowFluentPage((prev) => !prev)}
            >
              {showFluentPage ? "Hide" : "Show"} page with FluentUI
            </button>
            <button onClick={forceRender} className="btn btn-secondary">
              Force Render
            </button>
          </p>
          {showFluentPage && (
            <div className="p-3 border border-secondary-subtle rounded-3">
              <FluentPage />
            </div>
          )}
        </div>
      </ThemeProvider>
    </>
  );
};

function useForceRender() {
  const [, updateState] = React.useState<any>();
  return React.useCallback(() => updateState({}), []);
}
