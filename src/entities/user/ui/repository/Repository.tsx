import type { FC } from "react";
import styles from "./styles.module.css";

type Props = {
  title: string;
  description: string;
  url: string;
};

export const Repository: FC<Props> = ({ title, description, url }) => {
  return (
    <div className={styles.container}>
      <a className={styles.title} href={url} target="_blank">
        {title}
      </a>
      <p className={styles.description}>{description}</p>
    </div>
  );
};
