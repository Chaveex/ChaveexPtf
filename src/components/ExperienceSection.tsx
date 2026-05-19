import { DATA } from '@/lib/i18n';
import { useApp } from '@/context/AppContext';
import styles from '@/styles/portfolio.module.css';

const CHIP_COLORS = ['c-pink', 'c-teal', 'c-yellow', 'c-purple'] as const;

function DescPara({ text, className }: { text: string; className: string }) {
  const sep = ' — ';
  const idx = text.indexOf(sep);
  if (idx === -1) return <p className={className}>{text}</p>;
  return (
    <p className={className}>
      <strong>{text.slice(0, idx)}</strong>
      {sep + text.slice(idx + sep.length)}
    </p>
  );
}

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
              {it.desc.map((p, k) =>
                Array.isArray(p)
                  ? <ul key={k} className={styles.tlList}>{p.map((b, j) => <li key={j}>{b}</li>)}</ul>
                  : <DescPara key={k} text={p} className={styles.tlDesc} />
              )}
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
