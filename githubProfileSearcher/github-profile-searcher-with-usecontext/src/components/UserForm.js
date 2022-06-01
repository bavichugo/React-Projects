// Form component used to search for a user profile

import { useRef, useEffect, useContext } from "react";
import { ProjectContext } from "../store/project-context";
import Card from "./UI/Card";
import styles from "./UserForm.module.css";

const UserForm = () => {
  const projectCtx = useContext(ProjectContext);
  const usernameRef = useRef();

  const submitHandler = async (event) => {
    event.preventDefault();
    const username = usernameRef.current.value;
    projectCtx.setUserInfo(usernameRef.current.value);

    const response = await fetch(`https://api.github.com/users/${username}`);

    if (!response.ok || response.status === 404) {
      console.log("Did not work bro: response.ok === false");
      return;
    }

    const data = await response.json();
    const { login: username_login, avatar_url, repos_url } = data;
    console.log(avatar_url);
    console.log(repos_url);

    const repoResponse = await fetch(repos_url);
    if (!repoResponse.ok || repoResponse.status === 404) {
      console.log("Did not work bro: response.ok === false");
      return;
    }
    const repoData = await repoResponse.json();

    projectCtx.setUserInfo(username_login, avatar_url, repoData);
    usernameRef.current.value = "";
  };

  return (
    <Card>
      <form onSubmit={submitHandler} className={styles.formstyles}>
        <label htmlFor="usernameInput">Username:</label>
        <input
          id="usernameInput"
          type="text"
          placeholder="Type here"
          ref={usernameRef}
        />
        <button type="submit">Search</button>
      </form>
    </Card>
  );
};

export default UserForm;
