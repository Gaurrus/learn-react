import styles from './landing.module.css'

export const Landing = () => {
  return (
    <div className={styles.landing}>
      <header className={styles.header}>
        <div class={styles.orange}>logo</div>
        <nav className={styles.nav}>nav</nav>
      </header>
      <main className={styles.main}>
        <article className={styles.articleOne}>article</article>
        <article className={styles.articleTwo}>article</article>
        <aside className={styles.asideOne}>aside</aside>
        <aside className={styles.asideTwo}>aside</aside>
        <article className={styles.articleThree}>article</article>
        <article className={styles.articleFour}>article</article>
        <article className={styles.articleFive}>article</article>
      </main>
      <footer className={styles.footer}>footer</footer>
    </div>
  )
}