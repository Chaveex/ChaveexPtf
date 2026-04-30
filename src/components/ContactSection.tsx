import { DATA } from '@/lib/i18n';
import { useApp } from '@/context/AppContext';
import styles from '@/styles/portfolio.module.css';

export default function ContactSection() {
  const { state } = useApp();
  const t = DATA[state.lang];

  return (
    <div className={styles.ctaStrip} id="contact">
      <div className={styles.container}>
        <div className={styles.ctaInner}>
          <div>
            <div className={styles.ctaBig}>{t.ctaBig}</div>
            <div className={styles.ctaSub}>{t.ctaSub}</div>
          </div>
          <div className={styles.ctaContacts}>
            <div className={styles.ctaRow}>
              <div className={styles.ctaIcon} aria-hidden="true">@</div>
              <a href="mailto:chaveev@gmail.com" className={styles.ctaLink}>chaveev@gmail.com</a>
            </div>
            <div className={styles.ctaRow}>
              <div className={styles.ctaIcon} aria-hidden="true">in</div>
              <a href="https://linkedin.com/in/vivien-chavee-40124792" target="_blank" rel="noopener noreferrer" className={styles.ctaLink}>
                vivien-chavee-40124792
              </a>
            </div>
            <div className={styles.ctaRow}>
              <div className={styles.ctaIcon} aria-hidden="true">gh</div>
              <a href="https://github.com/Chaveex" target="_blank" rel="noopener noreferrer" className={styles.ctaLink}>
                github.com/Chaveex
              </a>
            </div>
          </div>
          <a className={styles.ctaStripBtn} href="mailto:chaveev@gmail.com">
            {t.write} →
          </a>
        </div>
      </div>
    </div>
  );
}
