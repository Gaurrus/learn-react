import { texts } from "../../../constants/lending-text";

import styles from "../main/main.module.css";

export const Main = (props) => (
  <main className={styles.main}>
    {texts.articles.map((articleItem, index) => (
      <article className={styles[`article-${index}`]}>{articleItem}</article>
    ))}
    {/* <article className={styles.articleOne}>{texts.articles[0]}</article>
    <article className={styles.articleTwo}>{texts.articles[1]}</article> */}
    <aside className={styles.asideOne}>{texts.aside}</aside>
    <aside className={styles.asideTwo}>{texts.aside}</aside>
    <article className={styles.articleThree}>{texts.article}</article>
    <article className={styles.articleFour}>{texts.article}</article>
    <article className={styles.articleFive}>{texts.article}</article>
  </main>
);
