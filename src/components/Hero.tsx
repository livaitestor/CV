import { useLanguage } from "../i18n/LanguageContext";
import SocialNav from "./SocialNav";
import Typewriter from "./Typewriter";

export default function Hero() {
  const { data, dir } = useLanguage();
  const hero = data.hero;

  return (
    <header>
      <div className="cover hero-header">
        <div className="container px-3">
          <div className="row">
            <div className="col-lg-6 p-2">
              <img className="img-fluid" src={hero.image} alt={hero.imageAlt} />
            </div>
            <div className="col-lg-6 justify-content-end text-end">
              <div className="mt-5 text-start">
                <p className="lead text-uppercase mb-1">{hero.greeting}</p>
                <h1
                  className="intro-title marker"
                  data-aos="fade-left"
                  data-aos-delay="50"
                >
                  {hero.title}
                </h1>
                <p
                  className="lead fw-normal mt-3"
                  data-aos="fade-up"
                  data-aos-delay="100"
                >
                  <Typewriter texts={hero.subtitles} dir={dir} />
                </p>
                <div
                  className="social-nav"
                  data-aos="fade-up"
                  data-aos-delay="200"
                >
                  <SocialNav socials={hero.socials} justify="end" />
                </div>
                <div className="mt-3">
                  <a
                    className="btn-Contact mt-1 hover-effect"
                    href={hero.ctaHref}
                  >
                    <i className="fas fa-arrow-left"></i> {hero.ctaText}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="tech-divider" aria-hidden="true">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 90"
          preserveAspectRatio="none"
        >
          {/* hero-colored angular fill — sharp circuit edges instead of a wave */}
          <path
            className="td-fill"
            d="M0,0 H1440 V20 L1300,20 L1260,55 L980,55 L950,30 L640,30 L600,65 L300,65 L270,40 L0,40 Z"
          />
          {/* circuit trace along the fill edge — flowing dashed data line */}
          <path
            id="td-trace"
            className="td-trace"
            d="M1440,20 L1300,20 L1260,55 L980,55 L950,30 L640,30 L600,65 L300,65 L270,40 L0,40"
          />
          {/* circuit nodes at trace junctions */}
          <rect className="td-node" x="1256" y="51" width="8" height="8" />
          <rect className="td-node" x="946" y="26" width="8" height="8" />
          <rect className="td-node" x="596" y="61" width="8" height="8" />
          {/* glowing pulse travelling along the trace */}
          <circle className="td-pulse" r="4">
            <animateMotion dur="5s" repeatCount="indefinite" rotate="auto">
              <mpath href="#td-trace" />
            </animateMotion>
          </circle>
        </svg>
      </div>
    </header>
  );
}
