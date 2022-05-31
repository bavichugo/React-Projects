import { useState } from "react";
import Layout from "./components/UI/Layout";
import UserCard from "./components/UserCard";
import UserForm from "./components/UserForm";

function App() {
  const [username, setUsername] = useState("");
  const [imageURL, setImageURL] = useState("");
  const [repoList, setRepoList] = useState([]);

  const userInfoHandler = (user_name, image_url, repo_data) => {
    setUsername(user_name);
    setImageURL(image_url);
    setRepoList(repo_data);
  };

  return (
    <Layout>
      <UserForm userInfoHandler={userInfoHandler} />
      <UserCard username={username} imageURL={imageURL} repoList={repoList} />
    </Layout>
  );
}

export default App;
