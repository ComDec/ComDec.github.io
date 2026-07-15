import type { Metadata } from "next";
import { PublicationsExplorer } from "@/components/PublicationsExplorer";
import { Burst, Reveal } from "@/components/Visuals";
import { publications } from "@/data/site";

export const metadata: Metadata = {
  title: "Publications",
  description:
    "Publications by Xi Wang on LLM post-training, diffusion models for drug discovery, and foundation models for biomolecules.",
};

export default function PublicationsPage() {
  return (
    <main id="main-content" className="inner-page">
      <Reveal>
        <header className="page-intro">
          <p className="eyebrow">Research archive</p>
          <div className="page-intro__title"><Burst /><h1>Publications</h1></div>
          <p>
            Research on generative models, spanning LLM post-training, diffusion models for drug
            discovery, and foundation models for RNA, proteins, and antibodies.
          </p>
        </header>
      </Reveal>
      <Reveal delay={0.05}>
        <PublicationsExplorer publications={publications} />
      </Reveal>
    </main>
  );
}
