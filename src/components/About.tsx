import { Fragment } from "react";
import { useLanguage } from "../i18n/LanguageContext";

export default function About() {
  const { data } = useLanguage();
  const about = data.about;

  return (
    <div className="section pt-4 px-3 px-lg-4" id="about">
      <div className="container-narrow">
        <div className="row">
          <div
            className="col-md-5 me-5"
            data-aos="fade-left"
            data-aos-delay="100"
          >
            <img
              className="avatar img-fluid mt-2"
              src={about.avatar}
              width="400"
              height="400"
              loading="lazy"
            />
          </div>
          <div className="col-md-6 text-end justify-content-end">
            <h2 className="h4 my-2">{about.title}</h2>
            <p className="mt-2">{about.subtitle}</p>
            <div className="row mt-4">
              {about.items.map((item) => (
                <Fragment key={item.label}>
                  <div className="col-sm-6 text-start">
                    <div className="pb-1 fw-bolder">{item.value}</div>
                  </div>
                  <div className="col-sm-6">
                    <div className="pb-1">: {item.label}</div>
                  </div>
                </Fragment>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
