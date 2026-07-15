import { Burst } from "./Visuals";
import type { ReactNode } from "react";

export function SectionHeading({
  title,
  action,
  id,
}: {
  title: string;
  action?: ReactNode;
  id?: string;
}) {
  return (
    <div className="section-heading">
      <div className="section-heading__title">
        <Burst />
        <h2 id={id}>{title}</h2>
      </div>
      {action}
    </div>
  );
}
