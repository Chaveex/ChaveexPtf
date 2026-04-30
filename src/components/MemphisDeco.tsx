import { useApp } from '@/context/AppContext';
import styles from '@/styles/portfolio.module.css';

export default function MemphisDeco() {
  const { state } = useApp();
  if (state.style !== 'memphis') return null;

  return (
    <div className={styles.pageDeco} aria-hidden="true">
      <div className={styles.pd} style={{ top: 120, right: 40, width: 0, height: 0, borderLeft: '22px solid transparent', borderRight: '22px solid transparent', borderBottom: '36px solid #2ec4c4', opacity: 0.7 }} />
      <div className={styles.pd} style={{ top: 170, right: 20, width: 0, height: 0, borderLeft: '14px solid transparent', borderRight: '14px solid transparent', borderBottom: '22px solid #a78bfa', opacity: 0.5 }} />
      <div className={styles.pd} style={{ left: 16, top: 260, width: 80, height: 200, background: 'radial-gradient(#ff4fa3 2px, transparent 2px) 0 0 / 14px 14px', opacity: 0.25, borderRadius: 999 }} />
      <div className={styles.pd} style={{ right: 24, bottom: 400, width: 10, height: 160, background: 'repeating-linear-gradient(180deg, #0a0a0a 0 8px, transparent 8px 16px)', opacity: 0.08 }} />
      <div className={styles.pd} style={{ right: 80, top: 300, width: 52, height: 52, background: '#ffd93d', border: '3px solid #0a0a0a', transform: 'rotate(22deg)', opacity: 0.6 }} />
    </div>
  );
}
