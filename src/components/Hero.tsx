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
              <div className="mt-5">
                <p className="lead text-uppercase mb-1">{hero.greeting}</p>
                <h1
                  className="intro-title marker"
                  data-aos="fade-left"
                  data-aos-delay="50"
                >
                  {hero.title}
                </h1>
                <p
                  className="lead fw-normal mt-3 text-start"
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
      <div className="wave-bg">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
        >
          <path
            fillOpacity="10"
            d="M0,256L21.8,250.7C43.6,245,87,235,131,192C174.5,149,218,75,262,80C305.5,85,349,171,393,186.7C436.4,203,480,149,524,149.3C567.3,149,611,203,655,197.3C698.2,192,742,128,785,90.7C829.1,53,873,43,916,69.3C960,96,1004,160,1047,176C1090.9,192,1135,160,1178,138.7C1221.8,117,1265,107,1309,112C1352.7,117,1396,139,1418,149.3L1440,160L1440,0L1418.2,0C1396.4,0,1353,0,1309,0C1265.5,0,1222,0,1178,0C1134.5,0,1091,0,1047,0C1003.6,0,960,0,916,0C872.7,0,829,0,785,0C741.8,0,698,0,655,0C610.9,0,567,0,524,0C480,0,436,0,393,0C349.1,0,305,0,262,0C218.2,0,175,0,131,0C87.3,0,44,0,22,0L0,0Z"
          ></path>
        </svg>
      </div>
    </header>
  );
}
