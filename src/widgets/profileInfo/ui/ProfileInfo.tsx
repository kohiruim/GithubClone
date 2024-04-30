import type { FC } from "react";
import type { ProfileData } from "@/entities/user";
import styles from "./styles.module.css";
import { Followers, Following, formattedNumber } from "../../profileInfo/lib";

interface Props {
  data: ProfileData;
}

export const ProfileInfo: FC<Props> = ({ data }) => {
  const countFollowers = formattedNumber(data.followers);
  const countFollowing = formattedNumber(data.following);
  const formattedFollowers = (data.followers == 1) ? ("follower") : ("followers"); 
  return (
    <div className={styles.profileInfo}>
      <div className={styles.description}>
        <img className={styles.avatar} src={data.avatar_url} alt="avatar" />
        <div className={styles.nameContainer}>
          <h1 className={styles.name}>{data.name}</h1>
          <a className={styles.login} href={data.html_url} target="_blank">
            {data.login}
          </a>
        </div>
      </div>
      <div className={styles.follow}>
        <div className={styles.followContainer}>
          <img src={Followers} alt="followers" />
          <p className={styles.followers}>{countFollowers} {formattedFollowers}</p>
        </div>
        <div className={styles.followContainer}>
          <img src={Following} alt="followers" />
          <p className={styles.following}>{countFollowing} following</p>
        </div>
      </div>
    </div>
  );
};
