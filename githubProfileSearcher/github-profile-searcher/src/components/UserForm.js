// Form component used to search for a user profile

import { useRef, useEffect } from "react";
import Card from "./UI/Card";
import styles from "./UserForm.module.css";

const UserForm = (props) => {
  const usernameRef = useRef();

  const httpRequest = async (username) => {
    const response = await fetch(`https://api.github.com/users/${username}`);

    if (!response.ok || response.status === 404) {
      console.log("Did not work bro: response.ok === false");
      return;
    }

    const data = await response.json();
    const { login: username_login, avatar_url, repos_url } = data;
    const repoResponse = await fetch(repos_url);

    if (!repoResponse.ok || repoResponse.status === 404) {
      console.log("Did not work bro: response.ok === false");
      return;
    }

    const repoData = await repoResponse.json();
    props.userInfoHandler(username_login, avatar_url, repoData);
    usernameRef.current.value = "";
  };

  const submitHandler = async (event) => {
    event.preventDefault();
    const username = usernameRef.current.value;
    await httpRequest(username);
  };

  // Runs once the page is loaded to populate an initial screen
  useEffect(() => {
    httpRequest("Bavichugo");
  }, []);

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
