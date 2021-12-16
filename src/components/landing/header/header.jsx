import { texts } from "../../../constants/lending-text";
import styles from "../header/header.module.css";

export const Header = () => (
  <header className={styles.header}>
    <div className={styles.orange}>{texts.logo}</div>
    <nav className={styles.nav}>{texts.nav}</nav>
  </header>
);
