import styles from '../styles/Hero.module.css';

export default function Hero() {
  return (
    <section className={styles.hero}>
      <h1 className={styles.title}>
        Hello, I am <mark>Anthony Chen</mark>.
      </h1>
    </section>
  );
}
