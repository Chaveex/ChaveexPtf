import Image from 'next/image';
import { useApp } from '@/context/AppContext';
import { DATA } from '@/lib/i18n';
import styles from '@/styles/portfolio.module.css';

export default function Nav() {
  const { state, setLang } = useApp();
  const t = DATA[state.lang];
  const logoSrc = `/assets/logo-${state.style}.svg`;

  return (
    <header className={styles.navOuter}>
      <div className={styles.container}>
        <div className={styles.navInner}>
          <a className={styles.navLogo} href="#" onClick={e => e.preventDefault()} aria-label="Chaveex">
            <Image src={logoSrc} alt="Chaveex" width={120} height={32} priority />
          </a>
          <nav className={styles.navLinks} aria-label="Navigation principale">
            <a href="#about" className={styles.navHide}>{t.navAbout}</a>
            <a href="#stack" className={styles.navHide}>{t.navStack}</a>
            <a href="#exp" className={styles.navHide}>{t.navExp}</a>
            <div className={styles.navLang} role="group" aria-label="Langue">
              {(['fr', 'en'] as const).map(l => (
                <button
                  key={l}
                  className={state.lang === l ? styles.active : ''}
                  onClick={() => setLang(l)}
                  aria-pressed={state.lang === l}
                >
                  {l.toUpperCase()}
                </button>
              ))}
            </div>
            <a className={styles.navCv} href="/CV-Vivien-Chavee.pdf" download>
              {t.cv} ↓
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
}
