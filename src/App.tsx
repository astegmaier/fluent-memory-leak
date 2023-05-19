import React from "react";
import { FluentPage } from "./FluentPage";

export const App = () => {
  const [showFluentPage, setShowFluentPage] = React.useState(true);
  return (
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
      </p>
      {showFluentPage && (
        <div className="p-3 border border-secondary-subtle rounded-3">
          <FluentPage />
        </div>
      )}
    </div>
  );
};
