import { DATA } from '@/lib/i18n';
import { useApp } from '@/context/AppContext';
import styles from '@/styles/portfolio.module.css';

export default function LookingForSection() {
  const { state } = useApp();
  const t = DATA[state.lang];

  return (
    <section className={styles.section} id="looking">
      <div className={styles.container}>
        <div className={styles.eyebrow}>{t.lookEyebrow}</div>
        <h2 className={styles.sectionTitle}>{t.lookTitle}</h2>
        <div className={styles.lookGrid}>
          {t.lookCards.map((g, i) => (
            <div key={i} className={styles.stackCard}>
              <div className={styles.stackCardTitle}>{g.name}</div>
              <div>
                {g.chips.map((ch, j) => (
                  <span key={j} className={`${styles.chip} ${ch.c ? styles[ch.c] : ''}`}>
                    {ch.l}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
