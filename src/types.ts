export interface SocialLink {
  name: string;
  title: string;
  href: string;
  icon: string;
}

export interface HeaderData {
  navItems: { label: string; href: string }[];
}

export interface HeroData {
  image: string;
  imageAlt: string;
  greeting: string;
  title: string;
  subtitles: string[];
  ctaText: string;
  ctaHref: string;
  socials: SocialLink[];
}

export interface AboutData {
  avatar: string;
  title: string;
  subtitle: string;
  items: { label: string; value: string }[];
}

export interface ServicesData {
  title: string;
  description: string;
  items: { title: string; icon: string; delay: number }[];
}

export interface Skill {
  name: string;
  level: string;
  percent: number;
}

export interface SkillsData {
  title: string;
  description: string;
  columns: Skill[][];
}

export interface PortfolioData {
  title: string;
  items: {
    title: string;
    subtitle: string;
    href: string;
    image: string;
    tall: boolean;
  }[];
}

export interface ExperienceData {
  title: string;
  items: {
    title: string;
    subtitle: string;
    description: string;
    image: string;
    imageAlt: string;
  }[];
}

export interface ContactData {
  title: string;
  paragraphs: string[];
  emailLabel: string;
  email: string;
  phoneLabel: string;
  phone: string;
}

export interface FooterData {
  name: string;
  subtitle: string;
  socials: SocialLink[];
}
