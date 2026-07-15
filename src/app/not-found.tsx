import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Burst } from "@/components/Visuals";

export default function NotFound() {
  return (
    <main id="main-content" className="inner-page not-found">
      <Burst />
      <p className="eyebrow">404</p>
      <h1>This page is not in the archive.</h1>
      <p>The address may be outdated, or the content may have moved.</p>
      <Link className="primary-action" href="/"><ArrowLeft size={17} /> Return home</Link>
    </main>
  );
}
