import { DATA } from '@/lib/i18n';
import { useApp } from '@/context/AppContext';
import styles from '@/styles/portfolio.module.css';

export default function HeroTerminal() {
  const { state } = useApp();
  const t = DATA[state.lang];

  return (
    <section className={styles.heroSection} id="about">
      <div className={styles.container}>
        <div className={styles.heroTermGrid}>
          <div>
            <div className={styles.eyebrow}>{t.eyebrow}</div>
            <h1 className={styles.heroTermName}>Vivien<br />Chavee.</h1>
            <div className={styles.heroTermRole}>{t.termRole}</div>
            <p className={styles.heroTermSub}>{t.termSub}</p>
            <div className={styles.heroTermCtas}>
              <a className={`${styles.btn} ${styles.btnPrimary}`} href="/CV-Vivien-Chavee.pdf" download>
                {t.cv} ↓
              </a>
              <a className={`${styles.btn} ${styles.btnSecondary}`} href="#contact">
                {t.write} →
              </a>
            </div>
          </div>
          <div>
            <div className={styles.termCard} role="img" aria-label="Terminal showing developer profile">
              <div className={styles.termBar}>
                <span className={`${styles.tdot} ${styles.tdotR}`} />
                <span className={`${styles.tdot} ${styles.tdotY}`} />
                <span className={`${styles.tdot} ${styles.tdotG}`} />
                <span className={styles.tbarTitle}>~/chaveex — whoami.sh</span>
              </div>
              <div className={styles.termBody}>
                <div><span className={styles.tPs}>$</span> whoami</div>
                <div>vivien.chavee</div>
                <br />
                <div><span className={styles.tPs}>$</span> cat profile.json</div>
                <div>{'{'}</div>
                <div>&nbsp;&nbsp;<span className={styles.tK}>&quot;role&quot;</span>: <span className={styles.tV}>&quot;Software Engineer&quot;</span>,</div>
                <div>&nbsp;&nbsp;<span className={styles.tK}>&quot;focus&quot;</span>: <span className={styles.tV}>&quot;backend &amp; full-stack&quot;</span>,</div>
                <div>&nbsp;&nbsp;<span className={styles.tK}>&quot;xp&quot;</span>: <span className={styles.tV}>&quot;12 years&quot;</span>,</div>
                <div>&nbsp;&nbsp;<span className={styles.tK}>&quot;stack&quot;</span>: [<span className={styles.tV}>&quot;java&quot;</span>, <span className={styles.tV}>&quot;spring&quot;</span>, <span className={styles.tV}>&quot;ts&quot;</span>, <span className={styles.tV}>&quot;k8s&quot;</span>],</div>
                <div>&nbsp;&nbsp;<span className={styles.tK}>&quot;clients&quot;</span>: [<span className={styles.tV}>&quot;BNP&quot;</span>, <span className={styles.tV}>&quot;SocGen&quot;</span>, <span className={styles.tV}>&quot;Datafab&quot;</span>],</div>
                <div>&nbsp;&nbsp;<span className={styles.tK}>&quot;available&quot;</span>: <span className={styles.tB}>true</span></div>
                <div>{'}'}</div>
                <br />
                <div><span className={styles.tPs}>$</span> <span className={styles.tCursor} aria-hidden="true" /></div>
                <div className={styles.tC} style={{ marginTop: 8 }}>{t.termHint}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
