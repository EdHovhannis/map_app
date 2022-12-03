import { Content } from "../components/content";
import { Navbar } from "../components/navbar";

import styles from "./layout.module.css";

export const Main = () => {
  return (
    <div className={styles.container}>
      <Navbar extClass={styles.navbar} />
      <Content extClass={styles.content} />
    </div>
  );
};
