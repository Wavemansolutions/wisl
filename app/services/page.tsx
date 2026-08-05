import ExactPageShell from "@/components/ExactPageShell";
<<<<<<< HEAD
import { services } from "@/data/services";
import Link from "next/link";

export default function Services(){return <ExactPageShell>
  <section className="inner-hero"><div className="inner-copy"><p className="inner-kicker">MANAGED TECHNOLOGY SERVICES</p><h1>Technical capability,<br/><span>delivered with discipline.</span></h1><p>Flexible project and managed-service support for organisations that need secure, dependable and scalable technology operations.</p><div className="inner-actions"><Link className="inner-primary" href="/contact">Discuss your requirements ↗</Link><Link className="inner-secondary" href="/solutions">View solution packages</Link></div></div><div className="service-radar"><div className="radar-ring r1"/><div className="radar-ring r2"/><div className="radar-ring r3"/><div className="radar-core">W</div></div></section>
  <section className="inner-content"><div className="section-heading-row"><div><p className="inner-section-kicker">CORE CAPABILITIES</p><h2>Services designed around business continuity and growth</h2></div><p>Open any service to review its benefits, deliverables, technologies and suitable industries.</p></div><div className="inner-service-grid">{services.map((service,i)=><article className="inner-card service-card" key={service.slug}><span className="service-number">{String(i+1).padStart(2,"0")}</span><h3>{service.name}</h3><p>{service.short}</p><Link className="learn-more-link" href={`/services/${service.slug}`}>Learn more <span>↗</span></Link></article>)}</div>
=======
import Link from "next/link";

const items = [
 ["Managed IT Support","Responsive remote support, endpoint administration and structured issue resolution for distributed teams."],
 ["Cybersecurity Services","Risk reviews, security hardening, identity protection, awareness and practical security improvement plans."],
 ["Network & Connectivity","Secure Wi-Fi, VPN, firewall, MikroTik, branch connectivity, Starlink integration and documentation."],
 ["Microsoft 365","Tenant administration, migrations, Teams, SharePoint, OneDrive, email security and access governance."],
 ["Web Operations","Website maintenance, uptime, backups, security, performance optimisation and technical content support."],
 ["AI & Workflow Automation","n8n, API and CRM workflows that reduce repetitive work and improve response times."],
 ["Cloud Infrastructure","Cloud migration, hosting, backup strategy, access control and infrastructure optimisation."],
 ["Technology Advisory","Independent technical planning, vendor selection, implementation roadmaps and ongoing guidance."],
];
export default function Services(){return <ExactPageShell>
  <section className="inner-hero"><div className="inner-copy"><p className="inner-kicker">MANAGED TECHNOLOGY SERVICES</p><h1>Technical capability,<br/><span>delivered with discipline.</span></h1><p>Flexible project and managed-service support for organisations that need secure, dependable and scalable technology operations.</p><div className="inner-actions"><Link className="inner-primary" href="/contact">Discuss your requirements ↗</Link><Link className="inner-secondary" href="/solutions">View solution packages</Link></div></div><div className="service-radar"><div className="radar-ring r1"/><div className="radar-ring r2"/><div className="radar-ring r3"/><div className="radar-core">W</div></div></section>
  <section className="inner-content"><div className="section-heading-row"><div><p className="inner-section-kicker">CORE CAPABILITIES</p><h2>Services designed around business continuity and growth</h2></div><p>Engage Waveman for a focused project, specialist support, or an ongoing service relationship.</p></div><div className="inner-service-grid">{items.map(([a,b],i)=><article className="inner-card service-card" key={a}><span className="service-number">{String(i+1).padStart(2,"0")}</span><h3>{a}</h3><p>{b}</p><Link href="/contact">Speak with a consultant ↗</Link></article>)}</div>
>>>>>>> bec125cf2c9338e3f18ddfff8c0d5e06f00567f4
  <div className="process-band"><div><span>01</span><b>Assess</b><p>Understand the environment, risks and priorities.</p></div><div><span>02</span><b>Design</b><p>Define a practical solution and delivery plan.</p></div><div><span>03</span><b>Implement</b><p>Deploy carefully with clear communication.</p></div><div><span>04</span><b>Support</b><p>Monitor, improve and document the outcome.</p></div></div></section>
</ExactPageShell>}
