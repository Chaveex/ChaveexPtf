import { DATA } from '@/lib/i18n';
import { useApp } from '@/context/AppContext';
import styles from '@/styles/portfolio.module.css';

export default function HeroAsymm() {
  const { state } = useApp();
  const t = DATA[state.lang];

  return (
    <section className={styles.heroSection} id="about">
      <div className={styles.container}>
        <div className={styles.heroAasmmGrid}>
          <div>
            <div className={styles.heroAasmmEyebrow}>{t.eyebrow}</div>
            <h1 className={styles.heroAasmmName}>
              Vivien<br /><span className={styles.name2}>Chavee.</span>
            </h1>
            <div className={styles.asmmBar} />
          </div>
          <div className={styles.asmmMeta}>
            <div className={styles.asmmStamp} aria-label="12 ans de prod">
              12 ans<br />de prod
            </div>
            <div className={styles.asmmBlk}>
              <span className={styles.lbl}>Rôle</span>
              <div className={styles.asmmRoleTxt}>Backend Java<br />Full-stack web</div>
            </div>
            <div className={styles.asmmBlk}>
              <span className={styles.lbl}>Stack</span>
              <div>
                {[['Java', 'c-pink'], ['Spring', 'c-pink'], ['TypeScript', 'c-teal'], ['React', 'c-teal'], ['K8s', 'c-yellow']].map(([l, c]) => (
                  <span key={l} className={`${styles.chip} ${styles[c]}`}>{l}</span>
                ))}
              </div>
            </div>
            <div className={styles.asmmCtas}>
              <a className={`${styles.btn} ${styles.btnPrimary}`} href="/CV-Vivien-Chavee.pdf" download>
                {t.cv} ↓
              </a>
              <a className={`${styles.btn} ${styles.btnSecondary}`} href="#contact">
                {t.write} →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
