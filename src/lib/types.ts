export type HeroVariant = 'split' | 'asymm' | 'terminal';
export type StyleVariant = 'memphis' | 'aurora' | 'mono';
export type Lang = 'fr' | 'en';

export interface AppState {
  hero: HeroVariant;
  style: StyleVariant;
  lang: Lang;
  accent: string;
}

export interface Chip {
  l: string;
  c: string;
}

export interface StackGroup {
  name: string;
  chips: Chip[];
}

export interface ExpItem {
  year: string;
  co: string;
  role: string;
  desc: string;
  chips: string[];
}

export interface Translations {
  cv: string;
  write: string;
  scroll: string;
  navAbout: string;
  navStack: string;
  navExp: string;
  eyebrow: string;
  splitL1: string;
  splitL2: string;
  splitL3: string;
  sub: string;
  termRole: string;
  termSub: string;
  termHint: string;
  stackTitle: string;
  expTitle: string;
  ctaBig: string;
  ctaSub: string;
  expItems: ExpItem[];
  stackGroups: StackGroup[];
  footerR: string;
}
