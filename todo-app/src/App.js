import { Fragment } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/layout/Header";
import Todo from "./components/todo/Todo";
import Info from "./components/info/Info";
import UserProfile from "./components/user/UserProfile";

function App() {
  return (
    <Fragment>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Todo />} />
          <Route path="todos" element={<Todo />} />
          <Route path="info" element={<Info />} />
          <Route path="user" element={<UserProfile />} />
        </Routes>
      </Router>
    </Fragment>
  );
}

export default App;
