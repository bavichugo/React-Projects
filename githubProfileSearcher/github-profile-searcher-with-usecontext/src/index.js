import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import ProjectContextProvider from "./store/project-context";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ProjectContextProvider>
    <App />
  </ProjectContextProvider>
);
