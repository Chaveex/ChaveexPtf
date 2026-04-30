'use client';
import React, { createContext, useContext, useEffect, useState } from 'react';
import { AppState, HeroVariant, Lang, StyleVariant } from '@/lib/types';

const DEFAULT_ACCENTS: Record<StyleVariant, string> = {
  memphis: '#ff4fa3',
  aurora: '#22d3ee',
  mono: '#2b50ff',
};

const DEFAULTS: AppState = {
  hero: 'terminal',
  style: 'memphis',
  lang: 'fr',
  accent: '#ff4fa3',
};

interface AppContextValue {
  state: AppState;
  setHero: (v: HeroVariant) => void;
  setStyle: (v: StyleVariant) => void;
  setLang: (v: Lang) => void;
  setAccent: (v: string) => void;
}

const AppContext = createContext<AppContextValue | null>(null);

export function AppProvider({ children }: { children: React.ReactNode }) {
  const [state, setState] = useState<AppState>(DEFAULTS);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    try {
      const saved = localStorage.getItem('chaveex-portfolio-state');
      if (saved) {
        setState({ ...DEFAULTS, ...JSON.parse(saved) });
      }
    } catch {}
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    try {
      localStorage.setItem('chaveex-portfolio-state', JSON.stringify(state));
    } catch {}
  }, [state, mounted]);

  // Apply data-style and lang to <html>
  useEffect(() => {
    if (!mounted) return;
    document.documentElement.setAttribute('data-style', state.style);
    document.documentElement.lang = state.lang;
    document.documentElement.style.setProperty('--accent', state.accent);
    if (state.style === 'memphis') {
      document.documentElement.style.setProperty('--pink', state.accent);
    }
  }, [state, mounted]);

  const setHero = (v: HeroVariant) => setState(s => ({ ...s, hero: v }));
  const setStyle = (v: StyleVariant) =>
    setState(s => ({ ...s, style: v, accent: DEFAULT_ACCENTS[v] }));
  const setLang = (v: Lang) => setState(s => ({ ...s, lang: v }));
  const setAccent = (v: string) => setState(s => ({ ...s, accent: v }));

  return (
    <AppContext.Provider value={{ state, setHero, setStyle, setLang, setAccent }}>
      {children}
    </AppContext.Provider>
  );
}

export function useApp() {
  const ctx = useContext(AppContext);
  if (!ctx) throw new Error('useApp must be used inside AppProvider');
  return ctx;
}
