import { Fragment } from "react";
import UserCard from "./components/UserCard";
import UserForm from "./components/UserForm";

function App() {
  return (
    <Fragment>
      <UserForm />
      <UserCard />
    </Fragment>
  );
}

export default App;
