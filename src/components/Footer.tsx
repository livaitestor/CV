import { useLanguage } from "../i18n/LanguageContext";
import SocialNav from "./SocialNav";

export default function Footer() {
  const { data } = useLanguage();
  const footer = data.footer;

  return (
    <footer className="site-footer pt-4 pb-4 text-center">
      <div className="container">
        <div className="my-3">
          <div className="h4 footer-name">{footer.name}</div>
          <p className="footer-subtitle" dir={data.ui.dir}>
            {footer.subtitle}
          </p>
          <div className="social-nav footer-social">
            <SocialNav socials={footer.socials} justify="center" />
          </div>
        </div>
      </div>
    </footer>
  );
}
