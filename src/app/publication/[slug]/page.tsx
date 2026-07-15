import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { HighlightedAuthors } from "@/components/PublicationList";
import { Burst, Reveal } from "@/components/Visuals";
import { publications } from "@/data/site";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return publications.map((publication) => ({ slug: publication.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const publication = publications.find((item) => item.slug === slug);
  if (!publication) return {};
  return {
    title: publication.title,
    description: publication.summary,
  };
}

export default async function PublicationPage({ params }: PageProps) {
  const { slug } = await params;
  const publication = publications.find((item) => item.slug === slug);
  if (!publication) notFound();

  return (
    <main id="main-content" className="inner-page publication-detail">
      <Reveal>
        <Link className="back-link" href="/publications/">
          <ArrowLeft size={15} /> All publications
        </Link>
        <header className="publication-detail__header">
          <Burst />
          <div className="publication-row__meta">
            <span>{publication.venue}</span>
            <span>{publication.year}</span>
            <span>{publication.kind}</span>
          </div>
          <h1>{publication.title}</h1>
          <p className="publication-detail__authors">
            <HighlightedAuthors authors={publication.authors} />
          </p>
          {publication.award && <p className="publication-detail__award">{publication.award}</p>}
          {publication.paperUrl && (
            <a className="primary-action" href={publication.paperUrl} target="_blank" rel="noreferrer">
              Read paper <ArrowUpRight size={17} />
            </a>
          )}
        </header>
      </Reveal>

      <Reveal delay={0.06}>
        <section className="publication-detail__section">
          <h2>Abstract</h2>
          <p>{publication.abstract}</p>
        </section>
      </Reveal>

      <Reveal delay={0.09}>
        <section className="publication-detail__section">
          <h2>In brief</h2>
          <p>{publication.summary}</p>
        </section>
      </Reveal>
    </main>
  );
}
