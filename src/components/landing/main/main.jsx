import { texts } from "../../../constants/lending-text";

import styles from "../main/main.module.css";

export const Main = (props) => (
  <main className={styles.main}>
    {texts.articles.map((articleItem, index) => (
      <article className={styles[`article-${index}`]}>{articleItem}</article>
    ))}
      {texts.asides.map((asideItem, index)=>  <aside className={styles[`aside-${index}`]}>{asideItem}</aside>)}

      {texts.bottomArticles.map((articleItem, index) => (
          <article className={styles[`articleBot-${index}`]}>{articleItem}</article>
      ))}
  </main>
);
