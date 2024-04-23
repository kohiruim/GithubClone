import { Input } from "@/shared";
import { SearchIcon } from "@/shared/assets";
import styles from "./styles.module.css";

export const SearchForm = () => {
  const img = <img src={SearchIcon} alt="search" className={styles.serchIcon}/>;
  return (
    <form className={styles.form} action="/search" method="get">
      <Input leftSection={img} id ="search" placeholder="Enter Github username" />
    </form>
  );
};