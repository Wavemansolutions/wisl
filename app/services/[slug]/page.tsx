import ExactPageShell from "@/components/ExactPageShell";
import { getService, services } from "@/data/services";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

export function generateStaticParams() { return services.map(({ slug }) => ({ slug })); }

export async function generateMetadata({ params }: { params: Promise<{slug:string}> }): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);
  return service ? { title: service.name, description: service.short } : {};
}

export default async function ServicePage({ params }: { params: Promise<{slug:string}> }) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();
  return <ExactPageShell>
    <section className="detail-hero">
      <div className="detail-hero-copy"><Link href="/services" className="detail-back">← All services</Link><p className="inner-kicker">WAVEMAN SERVICE CAPABILITY</p><h1>{service.name}</h1><p>{service.overview}</p><div className="inner-actions"><Link className="inner-primary" href={`/contact?service=${service.slug}`}>Discuss this service ↗</Link><Link className="inner-secondary" href="/solutions">View solution packages</Link></div></div>
      <div className="detail-signal"><span>Service readiness</span><strong>Available</strong><div className="signal-bars"><i/><i/><i/><i/><i/></div><small>Remote delivery · International clients</small></div>
    </section>
    <section className="detail-content">
      <div className="detail-main">
        <article className="inner-card detail-panel"><p className="inner-section-kicker">BUSINESS BENEFITS</p><h2>What this service helps you achieve</h2><div className="benefit-grid">{service.benefits.map((item)=><div key={item}><span>✓</span><b>{item}</b></div>)}</div></article>
        <article className="inner-card detail-panel"><p className="inner-section-kicker">DELIVERY SCOPE</p><h2>Typical deliverables</h2><ul className="deliverable-list">{service.deliverables.map((item)=><li key={item}>{item}</li>)}</ul></article>
      </div>
      <aside className="detail-aside">
        <div className="inner-card detail-panel"><p className="inner-section-kicker">TECHNOLOGIES</p><div className="tag-list">{service.technologies.map((item)=><span key={item}>{item}</span>)}</div></div>
        <div className="inner-card detail-panel"><p className="inner-section-kicker">SUITABLE FOR</p><div className="industry-list">{service.industries.map((item)=><span key={item}>{item}</span>)}</div></div>
        <div className="detail-cta-card"><h3>Need a tailored scope?</h3><p>Tell us about your environment, priorities and timeline.</p><Link href={`/contact?service=${service.slug}`}>Request a consultation ↗</Link></div>
      </aside>
    </section>
  </ExactPageShell>;
}
