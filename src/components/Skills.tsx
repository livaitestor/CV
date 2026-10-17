import { useState } from "react";
import { useLanguage } from "../i18n/LanguageContext";
import type { Skill } from "../types";

const VISIBLE_COUNT = 5;

function SkillRow({ skill, index }: { skill: Skill; index: number }) {
  return (
    <div className="py-1">
      <div className="d-flex text-small fw-bolder">
        <span className="me-auto">{skill.name}</span>
        <span>{skill.level}</span>
      </div>
      <div className="progress my-1">
        <div
          className="progress-bar"
          role="progressbar"
          data-aos="zoom-in-right"
          data-aos-delay={String((index + 1) * 100)}
          data-aos-anchor=".skills-card"
          style={{ width: `${skill.percent}%` }}
          aria-valuenow={skill.percent}
          aria-valuemin={0}
          aria-valuemax={100}
        ></div>
      </div>
    </div>
  );
}

export default function Skills() {
  const { data } = useLanguage();
  const skills = data.skills;
  const ui = data.ui;
  const [expanded, setExpanded] = useState(false);

  const needsToggle = skills.columns.some((c) => c.length > VISIBLE_COUNT);

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
        <div className="p-3 skills-card">
          <div className="row">
            {skills.columns.map((column, ci) => (
              <div
                className={`col-md-5${ci === 1 ? " offset-md-2" : ""}`}
                key={ci}
              >
                {/* always-visible skills */}
                {column.slice(0, VISIBLE_COUNT).map((skill, i) => (
                  <SkillRow key={skill.name} skill={skill} index={i} />
                ))}
                {/* collapsible extra skills */}
                <div
                  className={`skills-collapse ${
                    expanded ? "skills-open" : ""
                  }`}
                >
                  <div className="skills-collapse-inner">
                    {column.slice(VISIBLE_COUNT).map((skill, i) => (
                      <SkillRow
                        key={skill.name}
                        skill={skill}
                        index={VISIBLE_COUNT + i}
                      />
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
          {needsToggle && (
            <div className="text-center mt-3">
              <button
                type="button"
                className={`skills-toggle ${expanded ? "expanded" : ""}`}
                onClick={() => setExpanded((e) => !e)}
              >
                <svg
                  className="skills-toggle-icon"
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="6 9 12 15 18 9"></polyline>
                </svg>
                <span>{expanded ? ui.showLess : ui.showMore}</span>
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
