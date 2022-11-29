import styles from "./index.module.css";
import logo from "../../assets/logo.svg";

export function Header() {
  return (
    <div className={styles.header}>
      <div className={styles.header__wrapper}>
        <img src={logo} alt="ToDo" />
      </div>
    </div>
  );
}
