import { useLanguage } from "../i18n/LanguageContext";

export default function Contact() {
  const { data } = useLanguage();
  const contact = data.contact;

  return (
    <div className="section px-2 px-lg-4 pb-4 pt-5 mb-5" id="contact">
      <div className="container-narrow">
        <div className="text-center mb-5">
          <h2 className="marker marker-center">{contact.title}</h2>
        </div>
        <div className="row justify-content-center">
          <div
            className="col-md-8 text-center"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <div dir={data.ui.dir}>
              <div className="mt-3 px-1">
                {contact.paragraphs.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
              <div className="mt-5 d-flex flex-column flex-sm-row justify-content-center gap-4">
                <div className="text-center">
                  <div className="fw-bolder mb-2">{contact.emailLabel}</div>
                  <div dir="ltr" className="text-muted">
                    <a href={`mailto:${contact.email}`}>{contact.email}</a>
                  </div>
                </div>
                <div className="text-center">
                  <div className="fw-bolder mb-2">{contact.phoneLabel}</div>
                  <div dir="ltr" className="text-muted">
                    <a href={`tel:${contact.phone}`}>{contact.phone}</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
