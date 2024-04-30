import { type ResultVariant, Result } from "@/widgets";
import type { FC } from "react";
import styles from "./styles.module.css";
import type { ProfileData } from "@/entities/user";

interface Props {
  data?: ProfileData;
}

export const HomePage: FC<Props> = ({ data }) => {
  const resultVariant: ResultVariant =
    data && Object.keys(data).length === 0 ? "userNotFound" : "default";
  return (
    <main className={styles.main}>
      <section className={styles.home}>
        <Result innerResult={resultVariant} />
      </section>
    </main>
  );
};
