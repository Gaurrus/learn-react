import Logo from './export-logo'
import {texts} from "../../../constants/lending-text";
import styles from "../header/header.module.css";
import {Image} from "./image-component/image";

export const Header = () => (
    <header className={styles.header}>
        <Image/>
        <div className={styles.orange}>
            <Image/>
        </div>
        <nav className={styles.nav}>{texts.nav}</nav>
    </header>
);
