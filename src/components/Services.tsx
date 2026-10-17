import { useLanguage } from "../i18n/LanguageContext";
import InlineSvg from "./InlineSvg";

export default function Services() {
  const { data } = useLanguage();
  const services = data.services;

  return (
    <div className="section px-3 px-lg-4 pt-5" id="services">
      <div className="container-narrow">
        <div className="text-center mb-5">
          <h2 className="marker marker-center">{services.title}</h2>
        </div>
        <div className="text-center">
          <p className="mx-auto mb-3" style={{ maxWidth: 600 }}>
            {services.description}
          </p>
        </div>
        <div className="row py-3">
          {services.items.map((item) => (
            <div
              className="col-md-3 text-center"
              key={item.title}
              data-aos="fade-up"
              data-aos-delay={item.delay}
            >
              <InlineSvg src={item.icon} className="mb-2" />
              <div className="h5">{item.title}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
