"use client";

import { Search, X } from "lucide-react";
import { useMemo, useState } from "react";
import { PublicationList } from "./PublicationList";
import type { Publication, PublicationKind } from "@/data/site";

const kinds: Array<PublicationKind | "All"> = ["All", "Conference", "Journal", "Preprint"];

export function PublicationsExplorer({ publications }: { publications: Publication[] }) {
  const [query, setQuery] = useState("");
  const [kind, setKind] = useState<PublicationKind | "All">("All");
  const [year, setYear] = useState<number | "All">("All");
  const years = Array.from(new Set(publications.map((publication) => publication.year))).sort((a, b) => b - a);

  const filtered = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();
    return publications.filter((publication) => {
      const matchesQuery =
        !normalizedQuery ||
        `${publication.title} ${publication.authors} ${publication.venue} ${publication.summary}`
          .toLowerCase()
          .includes(normalizedQuery);
      const matchesKind = kind === "All" || publication.kind === kind;
      const matchesYear = year === "All" || publication.year === year;
      return matchesQuery && matchesKind && matchesYear;
    });
  }, [kind, publications, query, year]);

  const reset = () => {
    setQuery("");
    setKind("All");
    setYear("All");
  };

  return (
    <>
      <div className="publication-tools">
        <label className="search-field">
          <Search size={17} aria-hidden="true" />
          <span className="sr-only">Search publications</span>
          <input
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search title, author, venue…"
          />
          {query && (
            <button type="button" onClick={() => setQuery("")} aria-label="Clear search">
              <X size={15} />
            </button>
          )}
        </label>

        <div className="filter-row" aria-label="Filter publications by type">
          {kinds.map((item) => (
            <button
              type="button"
              key={item}
              className={item === kind ? "filter-button is-active" : "filter-button"}
              onClick={() => setKind(item)}
            >
              {item}
            </button>
          ))}
        </div>

        <label className="year-filter">
          <span>Year</span>
          <select value={year} onChange={(event) => setYear(event.target.value === "All" ? "All" : Number(event.target.value))}>
            <option value="All">All years</option>
            {years.map((item) => (
              <option value={item} key={item}>{item}</option>
            ))}
          </select>
        </label>
      </div>

      <div className="publication-results-meta">
        <span>{filtered.length} {filtered.length === 1 ? "publication" : "publications"}</span>
        {(query || kind !== "All" || year !== "All") && (
          <button type="button" onClick={reset}>Reset filters</button>
        )}
      </div>

      {filtered.length ? (
        <PublicationList items={filtered} />
      ) : (
        <div className="empty-state">
          <p>No publications match these filters.</p>
          <button type="button" onClick={reset}>Show all publications</button>
        </div>
      )}
    </>
  );
}
