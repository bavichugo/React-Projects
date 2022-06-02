// Form component used to search for a user profile

import { useRef, useContext, Fragment, useState } from "react";
import { ProjectContext } from "../../store/project-context";
import Card from "../UI/Card";
import styles from "./UserForm.module.css";
import Modal from "../UI/Modal";

const UserForm = () => {
  const projectCtx = useContext(ProjectContext);
  const usernameRef = useRef();
  const [modalErrorMessage, setModalErrorMessage] = useState("Error");

  const submitHandler = async (event) => {
    event.preventDefault();
    const username = usernameRef.current.value;

    if (username.trim().length === 0) {
      projectCtx.setShowErrorModal(true);
      setModalErrorMessage("Username cannot be empty");
      return;
    }

    const response = await fetch(`https://api.github.com/users/${username}`);

    if (!response.ok || response.status === 404) {
      projectCtx.setShowErrorModal(true);
      setModalErrorMessage(`${username} is not a GitHub user`);
      usernameRef.current.value = "";
      return;
    }

    projectCtx.setUserInfo(usernameRef.current.value);
    const data = await response.json();
    const { login: username_login, avatar_url, repos_url } = data;
    const repoResponse = await fetch(repos_url);

    if (!repoResponse.ok || repoResponse.status === 404) {
      console.log("Did not work bro: response.ok === false");
      return;
    }

    const repoData = await repoResponse.json();
    projectCtx.setUserInfo(username_login, avatar_url, repoData);
    usernameRef.current.value = "";
  };

  const modalError = projectCtx.showErrorModal && (
    <Modal modalErrorMessage={modalErrorMessage} />
  );

  return (
    <Fragment>
      {modalError}
      <Card>
        <form onSubmit={submitHandler} className={styles.formstyles}>
          <label htmlFor="usernameInput">Username:</label>
          <input
            id="usernameInput"
            type="text"
            placeholder="Type here"
            ref={usernameRef}
          />
          <button className={styles.formButton} type="submit">
            Search
          </button>
        </form>
      </Card>
    </Fragment>
  );
};

export default UserForm;
