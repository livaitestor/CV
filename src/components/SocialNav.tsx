import type { SocialLink } from "../types";

interface Props {
  socials: SocialLink[];
  justify?: "end" | "center";
}

export default function SocialNav({ socials, justify = "end" }: Props) {
  return (
    <nav role="navigation">
      <ul className={`nav justify-content-${justify}`}>
        {socials.map((s) => (
          <li className="nav-item" key={s.name}>
            <a className="nav-link" href={s.href} title={s.title} target="_blank" rel="noopener noreferrer">
              <i className={s.icon}></i>
              <span className="menu-title sr-only">{s.name}</span>
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
