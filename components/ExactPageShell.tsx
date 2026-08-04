import type { ReactNode } from "react";
import ExactHeader from "./ExactHeader";
import ProfessionalFooter from "./ProfessionalFooter";

export default function ExactPageShell({ children }: { children: ReactNode }) {
  return <main className="inner-page"><div className="inner-stage"><ExactHeader />{children}<ProfessionalFooter /></div></main>;
}
