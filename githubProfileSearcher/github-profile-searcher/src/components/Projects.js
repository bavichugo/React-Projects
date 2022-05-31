import styles from "./Projects.module.css";

const Projects = (props) => {
  const { repoList } = props;

  const repoItems = repoList.map((repo) => (
    <li key={repo.id} name={repo.name}>
      {repo.name}
    </li>
  ));

  return <ul className={styles.projects}>{repoItems}</ul>;
};

export default Projects;
