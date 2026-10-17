import { useLanguage } from "../i18n/LanguageContext";
import { useTheme } from "../hooks/useTheme";

export default function Header() {
  const { toggle } = useTheme();
  const { data, toggle: toggleLang } = useLanguage();
  const header = data.header;
  const ui = data.ui;

  return (
    <header>
      <nav
        className="navbar navbar-expand-lg fixed-header header-shadow"
        id="header-nav"
        role="navigation"
      >
        <div className="container">
          <div className="nav-actions">
            <button
              id="theme-toggle"
              className="theme-toggle"
              aria-label={ui.themeToggleAria}
              onClick={toggle}
            >
              <div className="toggle-icons">
                <svg
                  className="sun-icon"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="12" cy="12" r="5"></circle>
                  <line x1="12" y1="1" x2="12" y2="3"></line>
                  <line x1="12" y1="21" x2="12" y2="23"></line>
                  <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
                  <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
                  <line x1="1" y1="12" x2="3" y2="12"></line>
                  <line x1="21" y1="12" x2="23" y2="12"></line>
                  <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
                  <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
                </svg>
                <svg
                  className="moon-icon"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
                </svg>
              </div>
            </button>
            <button
              className="lang-toggle"
              aria-label={ui.langToggleAria}
              onClick={toggleLang}
            >
              {ui.langName}
            </button>
          </div>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              viewBox="0 0 30 30"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeMiterlimit="10"
            >
              <path d="M4,7 L26,7"></path>
              <path d="M4,15 L26,15"></path>
              <path d="M4,23 L26,23"></path>
            </svg>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto me-2">
              {header.navItems.map((item) => (
                <li className="nav-item" key={item.href}>
                  <a className="nav-link" href={item.href}>
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
