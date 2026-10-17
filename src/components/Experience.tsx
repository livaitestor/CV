import { useLanguage } from "../i18n/LanguageContext";
import InlineSvg from "./InlineSvg";

export default function Experience() {
  const { data } = useLanguage();
  const experience = data.experience;

  return (
    <div className="section px-3 px-lg-4 pt-5" id="experience">
      <div className="container-narrow">
        <div className="text-center mb-5">
          <h2 className="marker marker-center">{experience.title}</h2>
        </div>
        <div className="row">
          {experience.items.map((item) => (
            <div className="col-md-6" key={item.title}>
              <div
                className="card mb-3"
                data-aos="fade-right"
                data-aos-delay="100"
              >
                <div className="card-header px-3 py-2">
                  <div className="d-flex justify-content-between">
                    <InlineSvg src={item.image} className="experience-icon" />
                    <div className="text-end">
                      <h3 className="h5 mb-1">{item.title}</h3>
                      <div className="text-muted text-small">
                        {item.subtitle}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card-body px-3 text-end">
                  <p dir={data.ui.dir}>{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
