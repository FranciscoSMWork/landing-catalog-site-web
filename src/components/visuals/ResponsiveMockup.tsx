import styles from "./ResponsiveMockup.module.css";

function PreviewContent() {
  return (
    <div className={styles.page}>
      <div className={styles.navigation}>
        <span className={styles.logo} />
        <div className={styles.menu}><span /><span /><span /></div>
      </div>
      <div className={styles.hero}>
        <div>
          <div className={styles.eyebrow} />
          <div className={styles.title} /><div className={styles.titleShort} />
          <div className={styles.line} /><div className={styles.lineShort} />
          <div className={styles.actions}><span /><span /></div>
        </div>
        <div className={styles.art}><span /><span /></div>
      </div>
      <div className={styles.cards}>
        {[0, 1, 2].map((item) => (
          <div key={item} className={styles.card}>
            <span /><div className={styles.line} /><div className={styles.lineShort} />
          </div>
        ))}
      </div>
      <div className={styles.footer} />
    </div>
  );
}

// Ilustração local em HTML/CSS; não é uma captura de projeto ou template à venda.
export function ResponsiveMockup() {
  return (
    <figure className={styles.figure}>
      <div aria-hidden="true" className={styles.stage}>
        <div className={styles.browser}>
          <div className={styles.browserBar}>
            <div className={styles.dots}><span /><span /><span /></div>
            <div className={styles.address} />
          </div>
          <PreviewContent />
        </div>
        <div className={styles.phone}>
          <div className={styles.speaker} />
          <PreviewContent />
          <div className={styles.homeIndicator} />
        </div>
      </div>
      <figcaption className="mt-4 text-center text-xs leading-relaxed text-muted-foreground">
        Demonstração conceitual de website. Não representa um projeto entregue.
      </figcaption>
    </figure>
  );
}
