import { Result } from "@/widgets";
import styles from "./styles.module.css";

export const HomePage = () => {
  return (
    <main className={styles.main}>
      <section className={styles.home}>
        <Result innerResult="default" />
      </section>
    </main>
  );
};
