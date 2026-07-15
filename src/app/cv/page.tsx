import type { Metadata } from "next";
import { ArrowUpRight, Download } from "lucide-react";
import { Burst, Reveal } from "@/components/Visuals";
import { education, experience, site } from "@/data/site";

export const metadata: Metadata = {
  title: "CV",
  description: "Curriculum vitae of Xi Wang.",
};

function Timeline({ items }: { items: typeof education }) {
  return (
    <div className="cv-timeline">
      {items.map((item) => (
        <article key={`${item.period}-${item.title}`} className="cv-entry">
          <time>{item.period}</time>
          <div>
            <h3>{item.title}</h3>
            <p>{item.institution}</p>
            {item.note && <span>{item.note}</span>}
          </div>
        </article>
      ))}
    </div>
  );
}

export default function CvPage() {
  return (
    <main id="main-content" className="inner-page cv-page">
      <Reveal>
        <header className="page-intro cv-intro">
          <div>
            <p className="eyebrow">Curriculum vitae</p>
            <div className="page-intro__title"><Burst /><h1>Experience & education</h1></div>
            <p>A concise record of my academic training and research appointments.</p>
          </div>
          <a className="primary-action" href={site.cv} target="_blank" rel="noreferrer">
            <Download size={17} /> Download PDF
          </a>
        </header>
      </Reveal>

      <Reveal delay={0.05}>
        <section className="cv-section">
          <h2>Education</h2>
          <Timeline items={education} />
        </section>
      </Reveal>

      <Reveal delay={0.08}>
        <section className="cv-section">
          <h2>Research experience</h2>
          <Timeline items={experience} />
        </section>
      </Reveal>

      <Reveal delay={0.1}>
        <section className="cv-section cv-links">
          <h2>Profiles</h2>
          <div>
            <a href={site.social.scholar} target="_blank" rel="noreferrer">Google Scholar <ArrowUpRight size={15} /></a>
            <a href={site.social.github} target="_blank" rel="noreferrer">GitHub <ArrowUpRight size={15} /></a>
            <a href={site.social.orcid} target="_blank" rel="noreferrer">ORCID <ArrowUpRight size={15} /></a>
          </div>
        </section>
      </Reveal>
    </main>
  );
}
