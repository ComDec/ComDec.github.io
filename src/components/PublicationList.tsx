import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Publication } from "@/data/site";

export function HighlightedAuthors({ authors }: { authors: string }) {
  const parts = authors.split(/(Xi Wang)/g);
  return (
    <>
      {parts.map((part, index) =>
        part === "Xi Wang" ? <strong key={`${part}-${index}`}>{part}</strong> : part,
      )}
    </>
  );
}

export function PublicationList({
  items,
  compact = false,
}: {
  items: Publication[];
  compact?: boolean;
}) {
  return (
    <div className={compact ? "publication-list is-compact" : "publication-list"}>
      {items.map((publication, index) => (
        <article className="publication-row" key={publication.slug}>
          <div className="publication-row__index" aria-hidden="true">
            {String(index + 1).padStart(2, "0")}
          </div>
          <div className="publication-row__body">
            <div className="publication-row__meta">
              <span>{publication.venue}</span>
              <span>{publication.year}</span>
              <span>{publication.kind}</span>
              {publication.award && <span className="award-label">{publication.award}</span>}
            </div>
            <h3>
              <Link href={`/publication/${publication.slug}/`}>{publication.title}</Link>
            </h3>
            <p className="publication-row__authors">
              <HighlightedAuthors authors={publication.authors} />
            </p>
            {!compact && <p className="publication-row__summary">{publication.summary}</p>}
          </div>
          <Link
            className="publication-row__open"
            href={`/publication/${publication.slug}/`}
            aria-label={`Open ${publication.title}`}
          >
            <ArrowUpRight size={18} />
          </Link>
        </article>
      ))}
    </div>
  );
}
