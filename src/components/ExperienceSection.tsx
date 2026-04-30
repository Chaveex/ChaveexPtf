import { DATA } from '@/lib/i18n';
import { useApp } from '@/context/AppContext';
import styles from '@/styles/portfolio.module.css';

const CHIP_COLORS = ['c-pink', 'c-teal', 'c-yellow', 'c-purple'] as const;

export default function ExperienceSection() {
  const { state } = useApp();
  const t = DATA[state.lang];

  return (
    <section className={styles.section} id="exp">
      <div className={styles.container}>
        <div className={styles.eyebrow}>{t.navExp}</div>
        <h2 className={styles.sectionTitle}>{t.expTitle}</h2>
        <div className={styles.timeline}>
          {t.expItems.map((it, i) => (
            <div key={i} className={styles.tlItem}>
              <div className={styles.tlDot} />
              <div className={styles.tlWhen}>{it.year}</div>
              <div className={styles.tlRole}>{it.role}</div>
              <div className={styles.tlCompany}>{it.co}</div>
              <p className={styles.tlDesc}>{it.desc}</p>
              <div>
                {it.chips.map((ch, j) => (
                  <span key={j} className={`${styles.chip} ${styles[CHIP_COLORS[j % 4]]}`}>
                    {ch}
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
