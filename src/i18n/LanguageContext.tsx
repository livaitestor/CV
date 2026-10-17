import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";
import type {
  AboutData,
  ContactData,
  ExperienceData,
  FooterData,
  HeaderData,
  HeroData,
  PortfolioData,
  ServicesData,
  SkillsData,
} from "../types";

import faHeader from "../data/fa/header.json";
import faHero from "../data/fa/hero.json";
import faAbout from "../data/fa/about.json";
import faServices from "../data/fa/services.json";
import faSkills from "../data/fa/skills.json";
import faPortfolio from "../data/fa/portfolio.json";
import faExperience from "../data/fa/experience.json";
import faContact from "../data/fa/contact.json";
import faFooter from "../data/fa/footer.json";
import faUi from "../data/fa/ui.json";

import enHeader from "../data/en/header.json";
import enHero from "../data/en/hero.json";
import enAbout from "../data/en/about.json";
import enServices from "../data/en/services.json";
import enSkills from "../data/en/skills.json";
import enPortfolio from "../data/en/portfolio.json";
import enExperience from "../data/en/experience.json";
import enContact from "../data/en/contact.json";
import enFooter from "../data/en/footer.json";
import enUi from "../data/en/ui.json";

export type Language = "fa" | "en";

export interface UiStrings {
  themeToggleAria: string;
  langToggleAria: string;
  scrollTopAria: string;
  langName: string;
  aboutColon: string;
  dir: "rtl" | "ltr";
  showMore: string;
  showLess: string;
  viewProject: string;
}

export interface SiteData {
  header: HeaderData;
  hero: HeroData;
  about: AboutData;
  services: ServicesData;
  skills: SkillsData;
  portfolio: PortfolioData;
  experience: ExperienceData;
  contact: ContactData;
  footer: FooterData;
  ui: UiStrings;
}

const faData: SiteData = {
  header: faHeader as HeaderData,
  hero: faHero as HeroData,
  about: faAbout as AboutData,
  services: faServices as ServicesData,
  skills: faSkills as SkillsData,
  portfolio: faPortfolio as PortfolioData,
  experience: faExperience as ExperienceData,
  contact: faContact as ContactData,
  footer: faFooter as FooterData,
  ui: faUi as UiStrings,
};

const enData: SiteData = {
  header: enHeader as HeaderData,
  hero: enHero as HeroData,
  about: enAbout as AboutData,
  services: enServices as ServicesData,
  skills: enSkills as SkillsData,
  portfolio: enPortfolio as PortfolioData,
  experience: enExperience as ExperienceData,
  contact: enContact as ContactData,
  footer: enFooter as FooterData,
  ui: enUi as UiStrings,
};

interface LanguageContextValue {
  lang: Language;
  dir: "rtl" | "ltr";
  data: SiteData;
  toggle: () => void;
}

const LanguageContext = createContext<LanguageContextValue>({
  lang: "fa",
  dir: "rtl",
  data: faData,
  toggle: () => {},
});

const STORAGE_KEY = "lang";

function getInitialLang(): Language {
  const saved = localStorage.getItem(STORAGE_KEY);
  return saved === "en" ? "en" : "fa";
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Language>(getInitialLang);
  const data = lang === "fa" ? faData : enData;
  const dir = data.ui.dir;

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, lang);
    document.documentElement.lang = lang === "fa" ? "fa-Ir" : "en";
  }, [lang]);

  const toggle = useCallback(() => {
    setLang((l) => (l === "fa" ? "en" : "fa"));
  }, []);

  return (
    <LanguageContext.Provider value={{ lang, dir, data, toggle }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
