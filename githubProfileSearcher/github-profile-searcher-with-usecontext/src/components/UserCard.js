import { useContext } from "react";
import { ProjectContext } from "../store/project-context";
import Projects from "./Projects";
import Card from "./UI/Card";
import styles from "./UserCard.module.css";

const UserCard = () => {
  const projectCtx = useContext(ProjectContext);
  const { username, avatarURL, repoList, firstExecution } = projectCtx;

  return (
    <div className={styles.userCard}>
      <img alt="profile" src={avatarURL} />
      <h1>{username}</h1>
      {repoList.length > 0 && (
        <Card>
          <Projects repoList={repoList} />
        </Card>
      )}
      {repoList.length === 0 && !firstExecution && (
        <Card>
          <p>{`${username} does not have any repository`}</p>
        </Card>
      )}
    </div>
  );
};

export default UserCard;
