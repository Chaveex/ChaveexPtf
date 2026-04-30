import Head from "next/head";
import { useApp } from "@/context/AppContext";
import { DATA } from "@/lib/i18n";
import Nav from "@/components/Nav";
import HeroSplit from "@/components/HeroSplit";
import HeroAsymm from "@/components/HeroAsymm";
import HeroTerminal from "@/components/HeroTerminal";
import StackSection from "@/components/StackSection";
import ExperienceSection from "@/components/ExperienceSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import MemphisDeco from "@/components/MemphisDeco";
import StyleSwitcher from "@/components/StyleSwitcher";
import styles from "@/styles/portfolio.module.css";

const HERO_COMPONENTS = {
  split: HeroSplit,
  asymm: HeroAsymm,
  terminal: HeroTerminal,
} as const;

export default function Home() {
  const { state } = useApp();
  const t = DATA[state.lang];
  const HeroComp = HERO_COMPONENTS[state.hero];

  return (
    <>
      <Head>
        <title>Vivien Chavee — Portfolio</title>
        <meta name="description" content="Software Engineer Backend & Full-stack · Paris · 12 ans d'expérience · Java, Spring Boot, Kubernetes, React" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <meta property="og:title" content="Vivien Chavee — Portfolio" />
        <meta property="og:description" content={t.sub} />
        <meta property="og:type" content="website" />
      </Head>
      <div className={styles.page}>
        <MemphisDeco />
        <Nav />
        <HeroComp />
        <StackSection />
        <ExperienceSection />
        <ContactSection />
        <Footer />
        <StyleSwitcher />
      </div>
    </>
  );
}
