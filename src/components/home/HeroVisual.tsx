import styles from "./Home.module.css";

// Composição abstrata de interface: não representa um projeto ou resultado real.
export function HeroVisual() {
  return (
    <div aria-hidden="true" className={`${styles.visual} hidden sm:block`}>
      <div className={styles.browser}>
        <div className={styles.browserBar}><span /><span /><span /></div>
        <div className={styles.browserContent}>
          <div className={styles.mockHero}>
            <div>
              <div className={`${styles.line} ${styles.mockTitle}`} />
              <div className={`${styles.line} ${styles.mockTitle}`} />
              <div className={styles.line} />
              <div className={styles.line} />
              <div className={styles.mockButton} />
            </div>
            <div className={styles.mockArt} />
          </div>
          <div className={styles.mockCards}>
            {[0, 1, 2].map((item) => (
              <div key={item} className={styles.mockCard}>
                <div className={styles.line} /><div className={styles.line} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
