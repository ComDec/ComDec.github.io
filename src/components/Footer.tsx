import Link from "next/link";
import { site } from "@/data/site";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-footer__inner">
        <p>© {new Date().getFullYear()} {site.name}</p>
        <div>
          <a href={`mailto:${site.email}`}>Email</a>
          <a href={site.social.scholar} target="_blank" rel="noreferrer">Scholar</a>
          <Link href="/cv/">CV</Link>
        </div>
      </div>
    </footer>
  );
}
