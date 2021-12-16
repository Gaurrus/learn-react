import styles from "./landing.module.css";
import { Header } from "./header";
import { Main } from "./main";
import { Footer } from "./footer";

export const Landing = () => {
  return (
    <div className={styles.landing}>
      <Header />
      <Main />
      <Footer />
    </div>
  );
};
