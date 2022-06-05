import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import TodoContextProvider from "./storage/todo-context";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <TodoContextProvider>
    <App />
  </TodoContextProvider>
);
