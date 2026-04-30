import { useApp } from '@/context/AppContext';
import { HeroVariant, StyleVariant } from '@/lib/types';
import styles from '@/styles/portfolio.module.css';
import { useState } from 'react';

export default function StyleSwitcher() {
  const { state, setStyle, setHero } = useApp();
  const [open, setOpen] = useState(false);

  return (
    <div className={styles.switcher}>
      <button
        className={styles.switcherToggle}
        onClick={() => setOpen(o => !o)}
        aria-label="Paramètres visuels"
        title="Changer de style"
      >
        ⚙
      </button>
      {open && (
        <div className={styles.switcherPanel}>
          <div className={styles.switcherGroup}>
            <span className={styles.switcherLabel}>Style</span>
            <div className={styles.switcherBtns}>
              {(['memphis', 'aurora', 'mono'] as StyleVariant[]).map(s => (
                <button
                  key={s}
                  className={state.style === s ? styles.switcherActive : ''}
                  onClick={() => setStyle(s)}
                >
                  {s}
                </button>
              ))}
            </div>
          </div>
          <div className={styles.switcherGroup}>
            <span className={styles.switcherLabel}>Héro</span>
            <div className={styles.switcherBtns}>
              {(['split', 'asymm', 'terminal'] as HeroVariant[]).map(h => (
                <button
                  key={h}
                  className={state.hero === h ? styles.switcherActive : ''}
                  onClick={() => setHero(h)}
                >
                  {h}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
