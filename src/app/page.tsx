import Link from "next/link";
import { ArrowRight, FileText } from "lucide-react";
import { ProfileRail } from "@/components/ProfileRail";
import { PublicationList } from "@/components/PublicationList";
import { SectionHeading } from "@/components/SectionHeading";
import { Reveal, TypedKeyword } from "@/components/Visuals";
import { news, publications, site } from "@/data/site";

export default function HomePage() {
  const selectedPublications = publications.filter((publication) => publication.selected).slice(0, 4);

  return (
    <main id="main-content" className="page-shell home-shell">
      <ProfileRail />

      <div className="content-column">
        <Reveal>
          <section className="intro-section" aria-labelledby="intro-title">
            <p className="eyebrow">Generative Models · AI for Science</p>
            <h1 id="intro-title">
              Generative models for<br />
              <em>scientific discovery.</em>
            </h1>
            <div className="intro-copy">
              <p>
                I am a PhD student in Computer Science at NYU, advised by{" "}
                <a href={site.adviser.href} target="_blank" rel="noreferrer">
                  {site.adviser.name}
                </a>
                .
              </p>
              <p>
                My research centers on <TypedKeyword text="generative models" delay={120} />,
                including <strong>LLM post-training</strong>, <strong>diffusion models for drug
                discovery</strong>, and <strong>foundation models for RNA, proteins, and
                antibodies</strong>. My long-term goal is to build AI systems that accelerate the
                discovery of new therapies and, ultimately, help cure disease and extend human
                lifespan.
              </p>
            </div>
            <div className="intro-actions">
              <Link className="primary-action" href="/publications/">
                Explore publications <ArrowRight size={17} />
              </Link>
              <a className="text-action" href={site.cv} target="_blank" rel="noreferrer">
                <FileText size={16} /> Download CV
              </a>
            </div>
          </section>
        </Reveal>

        <Reveal delay={0.04}>
          <section className="content-section" aria-labelledby="selected-publications-title">
            <SectionHeading
              title="Selected publications"
              id="selected-publications-title"
              action={
                <Link className="section-action" href="/publications/">
                  View all <ArrowRight size={15} />
                </Link>
              }
            />
            <div>
              <PublicationList items={selectedPublications} compact />
            </div>
          </section>
        </Reveal>

        <Reveal delay={0.06}>
          <section className="content-section" id="news" aria-labelledby="news-title">
            <SectionHeading title="News" id="news-title" />
            <div className="news-list">
              {news.map((item) => (
                <article className="news-item" key={`${item.date}-${item.label}`}>
                  <time>{item.date}</time>
                  {item.href ? (
                    <a href={item.href} target="_blank" rel="noreferrer">{item.label}</a>
                  ) : (
                    <p>{item.label}</p>
                  )}
                </article>
              ))}
            </div>
          </section>
        </Reveal>
      </div>
    </main>
  );
}
