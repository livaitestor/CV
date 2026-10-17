import { useLanguage } from "../i18n/LanguageContext";
import SocialNav from "./SocialNav";

export default function Footer() {
  const { data } = useLanguage();
  const footer = data.footer;

  return (
    <footer className="pt-4 pb-4 text-center">
      <div className="container">
        <div className="my-3">
          <div className="h4">{footer.name}</div>
          <p>{footer.subtitle}</p>
          <div className="social-nav">
            <SocialNav socials={footer.socials} justify="center" />
          </div>
        </div>
      </div>
    </footer>
  );
}
