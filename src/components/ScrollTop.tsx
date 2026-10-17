import { useLanguage } from "../i18n/LanguageContext";

export default function ScrollTop() {
  const { data } = useLanguage();
  const ui = data.ui;

  return (
    <a
      id="scrolltop"
      className="scrolltop landing"
      href="#"
      onClick={(e) => {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: "smooth" });
      }}
      aria-label={ui.scrollTopAria}
    >
      <span className="fas fa-angle-up"></span>
    </a>
  );
}
