import styles from "./Layout.module.css";

const Layout = (props) => {
  const className = `${styles.layout} ${props.className}`;
  return <div className={className}>{props.children}</div>;
};

export default Layout;
