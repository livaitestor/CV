import { useLanguage } from "../i18n/LanguageContext";
import { asset } from "../utils/asset";

export default function Portfolio() {
  const { data } = useLanguage();
  const portfolio = data.portfolio;
  const ui = data.ui;

  return (
    <div className="section px-2 px-lg-4 pt-5" id="portfolio">
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="marker marker-center">{portfolio.title}</h2>
        </div>
        <div
          className="custom-portfolio-grid tech-grid"
          data-aos="zoom-in-up"
          data-aos-delay="100"
        >
          {portfolio.items.map((item, i) => (
            <div
              key={item.title}
              className={`grid-item${item.tall ? " tall" : ""}`}
            >
              <a
                href={item.href}
                className="portfolio-link"
                target="_blank"
                rel="noreferrer"
              >
                <figure className="portfolio-item tech-card">
                  <span className="tc-index" aria-hidden="true">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <img src={asset(item.image)} alt={item.title} loading="lazy" />
                  <figcaption className="tc-caption">
                    <h4 className="h5 mb-1 tc-title">{item.title}</h4>
                    <div className="tc-sub">
                      <span className="tc-chip">{item.subtitle}</span>
                      <span className="tc-visit">
                        {ui.viewProject} ↗
                      </span>
                    </div>
                  </figcaption>
                  <span className="tc-scan" aria-hidden="true" />
                </figure>
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
