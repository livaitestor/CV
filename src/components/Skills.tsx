import { useLanguage } from "../i18n/LanguageContext";

export default function Skills() {
  const { data } = useLanguage();
  const skills = data.skills;

  return (
    <div className="section px-3 px-lg-4 pt-5" id="skills">
      <div className="container-narrow">
        <div className="text-center mb-5">
          <h2 className="marker marker-center">{skills.title}</h2>
        </div>
        <div className="text-center">
          <p className="mx-auto mb-3" style={{ maxWidth: 600 }}>
            {skills.description}
          </p>
        </div>
        <div className="p-3 skills-card" id="skills-section">
          <div className="row">
            {skills.columns.map((column, ci) => (
              <div className="col-md-5" key={ci}>
                {column.map((skill, i) => (
                  <div className="py-1" key={skill.name}>
                    <div className="d-flex text-small fw-bolder">
                      <span className="me-auto">{skill.name}</span>
                      <span>{skill.level}</span>
                    </div>
                    <div className="progress my-1">
                      <div
                        className="progress-bar"
                        role="progressbar"
                        data-aos="zoom-in-right"
                        data-aos-delay={String((i + 1) * 100)}
                        data-aos-anchor=".skills-card"
                        style={{ width: `${skill.percent}%` }}
                        aria-valuenow={skill.percent}
                        aria-valuemin={0}
                        aria-valuemax={100}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
