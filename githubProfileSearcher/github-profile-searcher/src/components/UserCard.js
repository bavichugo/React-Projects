import Projects from "./Projects";
import Card from "./UI/Card";
import styles from "./UserCard.module.css";

const UserCard = (props) => {
  const { username, imageURL, repoList } = props;

  return (
    <div className={styles.userCard}>
      <img alt="profile" src={imageURL} />
      <h1>{username}</h1>
      {repoList.length > 0 && (
        <Card>
          <Projects repoList={repoList} />
        </Card>
      )}
      {repoList.length === 0 && (
        <Card>
          <p>{`${username} does not have any repos`}</p>
        </Card>
      )}
    </div>
  );
};

export default UserCard;
