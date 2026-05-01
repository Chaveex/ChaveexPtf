import Image from 'next/image';
import { DATA } from '@/lib/i18n';
import { useApp } from '@/context/AppContext';
import styles from '@/styles/portfolio.module.css';

export default function HeroSplit() {
  const { state } = useApp();
  const t = DATA[state.lang];

  return (
    <section className={styles.heroSection} id="about">
      <div className={styles.container}>
        <div className={styles.heroSplitGrid}>
          <div>
            <div className={styles.eyebrow}>{t.eyebrow}</div>
            <h1 className={styles.heroSplitTitle}>
              {t.splitL1}<br />
              <span className={styles.hl}>{t.splitL2}</span><br />
              {t.splitL3}
            </h1>
            <p className={styles.heroSplitSub}>{t.sub}</p>
            <div className={styles.heroSplitCtas}>
              <a className={`${styles.btn} ${styles.btnPrimary}`} href="/CV-Vivien-Chavee.pdf" download>
                {t.cv} ↓
              </a>
              <a className={`${styles.btn} ${styles.btnSecondary}`} href="#contact">
                {t.write} →
              </a>
            </div>
          </div>
          <div className={styles.heroSplitRight}>
            <div className={styles.splitSq} />
            <div className={styles.photoFrame}>
              <div className={styles.photoInner}>
                <Image src="/assets/portrait.png" alt="Vivien Chavée" fill style={{ objectFit: 'cover' }} />
              </div>
            </div>
            <div className={styles.splitCircle} />
            <div className={styles.splitTri} />
          </div>
        </div>
      </div>
    </section>
  );
}
