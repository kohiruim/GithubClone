import type { FC } from "react";
import type { ProfileData } from "@/entities/user";
import styles from "./styles.module.css";
import { ProfileInfo, ProfileRepositories, Result } from "@/widgets";

interface Props {
  data: ProfileData;
}

export const ProfilePage: FC<Props> = ({ data }) => {
  let widget = (
    <ProfileRepositories username={data.login} countRepos={data.public_repos} />
  );
  if (data.public_repos === 0) {
    widget = <Result innerResult="emptyRepo" />;
  }
  return (
    <main className={styles.main}>
      <section className={styles.repo}>
        <ProfileInfo data={data} />
        {widget}
      </section>
    </main>
  );
};
