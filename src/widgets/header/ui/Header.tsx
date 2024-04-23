import { SearchForm } from "@/features";
import styles from "./style.module.css";
import Logo from "@/widgets/header/lib/github.png";

export const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.inner}>
          <a href="#">
            <img className={styles.logo} src={Logo} alt="logo" />
          </a>
          <SearchForm />
        </div>
      </div>
    </header>
  );
};
