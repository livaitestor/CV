import { useLanguage } from "../i18n/LanguageContext";

export default function Portfolio() {
  const { data } = useLanguage();
  const portfolio = data.portfolio;

  return (
    <div className="section px-2 px-lg-4 pt-5" id="portfolio">
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="marker marker-center">{portfolio.title}</h2>
        </div>
        <div
          className="custom-portfolio-grid"
          data-aos="zoom-in-up"
          data-aos-delay="100"
        >
          {portfolio.items.map((item) => (
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
                <figure className="portfolio-item">
                  <img src={item.image} alt={item.title} loading="lazy" />
                  <figcaption>
                    <h4 className="h5 mb-0">{item.title}</h4>
                    <div>{item.subtitle}</div>
                  </figcaption>
                </figure>
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
