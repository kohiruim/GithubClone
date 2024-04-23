import { SearchIcon, EmptyIcon, UserIcon } from "@/shared/assets";
import styles from "./styles.module.css";
export type ResultVariant = "default" | "userNotFound" | "emptyRepo";
type ValueType = {
  icon: JSX.Element;
  text: string;
};
type InnerResultType = Record<ResultVariant, ValueType>;

export const resultViewMapper: InnerResultType = {
  default: {
    icon: <img className={styles.icon} src={SearchIcon} alt="search" />,
    text: "Start with searching a Github user",
  },
  userNotFound: {
    icon: <img className={styles.icon} src={UserIcon} alt="search" />,
    text: "User not found",
  },
  emptyRepo: {
    icon: <img className={styles.icon} src={EmptyIcon} alt="search" />,
    text: "Repository list is empty",
  }
};
