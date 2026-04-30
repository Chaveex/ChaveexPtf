import { DATA } from '@/lib/i18n';
import { useApp } from '@/context/AppContext';
import styles from '@/styles/portfolio.module.css';

export default function Footer() {
  const { state } = useApp();
  const t = DATA[state.lang];

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.footerInner}>
          <span>© 2026 Vivien Chavee</span>
          <a href="https://github.com/Chaveex" target="_blank" rel="noopener noreferrer">
            {t.footerR}
          </a>
        </div>
      </div>
    </footer>
  );
}
