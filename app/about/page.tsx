import ExactPageShell from "@/components/ExactPageShell";
import Link from "next/link";

const values = [
  ["Business-first thinking", "Technology decisions are tied to operational goals, risk and measurable value."],
  ["Security by design", "Access, resilience and data protection are considered throughout every engagement."],
  ["Professional communication", "Clear scope, documentation, progress updates and practical recommendations."],
  ["Scalable delivery", "Start with a defined project and expand into ongoing managed support as needed."],
];
export default function About(){return <ExactPageShell>
  <section className="inner-hero"><div className="inner-copy"><p className="inner-kicker">ABOUT WAVEMAN</p><h1>A dependable partner for<br/><span>modern technology operations.</span></h1><p>Waveman Integrated Solutions Limited helps organisations strengthen systems, protect operations and use technology more effectively.</p><div className="inner-actions"><Link className="inner-primary" href="/contact">Start a conversation ↗</Link><Link className="inner-secondary" href="/services">Explore capabilities</Link></div></div><div className="about-visual"><div className="about-globe">W</div><div className="about-status"><b>REMOTE-FIRST DELIVERY</b><span>International B2B support</span></div></div></section>
  <section className="inner-content"><div className="section-heading-row"><div><p className="inner-section-kicker">OUR POSITIONING</p><h2>Built to deliver clarity, confidence and continuity</h2></div><p>We combine hands-on technical delivery with the standards businesses expect from a long-term service partner.</p></div><div className="about-grid"><article className="inner-panel about-story"><span className="statement-label">OUR MISSION</span><h3>Make secure, well-managed technology accessible to ambitious businesses.</h3><p>Our work spans managed IT support, networking, cybersecurity, Microsoft 365, cloud services, web operations and workflow automation.</p><p>Every engagement begins with the business requirement. We assess the environment, define priorities, communicate the plan clearly and deliver with appropriate documentation.</p><div className="credential-row"><span>Remote-first</span><span>Security-focused</span><span>Outcome-driven</span></div></article><div className="value-grid">{values.map(([a,b])=><article className="inner-card" key={a}><span className="mini-icon">✓</span><h3>{a}</h3><p>{b}</p></article>)}</div></div></section>
</ExactPageShell>}
