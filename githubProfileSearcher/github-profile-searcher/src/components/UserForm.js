// Form component used to search for a user profile

import { useRef } from "react";

const UserForm = () => {
  const usernameRef = useRef();

  const submitHandler = async (event) => {
    event.preventDefault();
    const username = usernameRef.current.value;
    const response = await fetch(`https://api.github.com/users/${username}`);

    if (!response.ok) {
      console.log("Did not work bro: response.ok === false");
      return;
    }

    if (response.status === 404) {
      console.log("Did not work bro: status 404");
    }

    const data = await response.json();
    usernameRef.current.value = "";
  };

  return (
    <form onSubmit={submitHandler}>
      <label htmlFor="usernameInput">Username:</label>
      <input
        id="usernameInput"
        type="text"
        placeholder="Username"
        ref={usernameRef}
      />
      <button type="submit">Search</button>
    </form>
  );
};

export default UserForm;
