import { Github, GraduationCap, Mail, MapPin } from "lucide-react";
import { site } from "@/data/site";
import { VisitorMap } from "@/components/VisitorMap";

function ScholarIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 3 2.8 8.1 12 13l7.3-3.9v5.2h1.5V8.1L12 3Z" />
      <path d="M6.4 11.8v4.3c0 1.8 2.5 3.2 5.6 3.2s5.6-1.4 5.6-3.2v-4.3L12 14.7l-5.6-2.9Z" />
    </svg>
  );
}

function OrcidIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 2.2A9.8 9.8 0 1 0 12 21.8 9.8 9.8 0 0 0 12 2.2Zm-4.1 4a.9.9 0 1 1 0 1.8.9.9 0 0 1 0-1.8Zm-.7 3h1.4v7.6H7.2V9.2Zm3 0h3c2.9 0 4.3 2 4.3 3.8 0 2-1.6 3.8-4.3 3.8h-3V9.2Zm1.4 1.3v5h1.5c2.2 0 3-1.5 3-2.5 0-1.4-1-2.5-3-2.5h-1.5Z" />
    </svg>
  );
}

export function ProfileRail() {
  const links = [
    { label: "Email", href: `mailto:${site.email}`, icon: <Mail /> },
    { label: "Google Scholar", href: site.social.scholar, icon: <ScholarIcon /> },
    { label: "GitHub", href: site.social.github, icon: <Github /> },
    { label: "ORCID", href: site.social.orcid, icon: <OrcidIcon /> },
  ];

  return (
    <aside className="profile-rail">
      <div className="profile-rail__sticky">
        <figure className="portrait-frame">
          <img src={site.avatar} alt={`Portrait of ${site.name}`} />
        </figure>

        <div className="profile-identity">
          <p className="profile-identity__name">{site.name}</p>
          <p className="profile-identity__title">{site.title}</p>
          <p className="profile-identity__institution">{site.institution}</p>
        </div>

        <div className="social-links" aria-label="Academic and social profiles">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="social-link"
              aria-label={link.label}
              data-label={link.label}
              target={link.href.startsWith("http") ? "_blank" : undefined}
              rel={link.href.startsWith("http") ? "noreferrer" : undefined}
            >
              {link.icon}
            </a>
          ))}
        </div>

        <div className="profile-meta">
          <span><MapPin size={15} />{site.location}</span>
          <span><GraduationCap size={15} />PhD student</span>
        </div>

        <VisitorMap />
      </div>
    </aside>
  );
}
