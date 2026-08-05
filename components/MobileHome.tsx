import Link from "next/link";
import BrandMark from "./BrandMark";
import MobileMenu from "./MobileMenu";
import { services } from "@/data/services";

export default function MobileHome() {
  return <div className="mobile-home">
    <header className="mobile-home-header"><Link href="/" className="inner-brand"><BrandMark /></Link><MobileMenu /></header>
    <section className="mobile-home-hero">
      <div className="mobile-home-glow" />
      <p className="inner-kicker">MANAGED IT · CYBERSECURITY · CLOUD</p>
      <h1>Secure technology.<br/><span>Reliable business outcomes.</span></h1>
      <p>Waveman helps growth-focused organisations manage IT, strengthen security, connect teams and automate operations.</p>
      <div className="mobile-home-actions"><Link className="inner-primary" href="/contact">Book a Consultation ↗</Link><Link className="inner-secondary" href="/services">Explore Services</Link></div>
      <div className="mobile-trust"><span>✓ International delivery</span><span>✓ Responsive support</span><span>✓ Practical solutions</span></div>
    </section>
    <section className="mobile-partners"><p>TECHNOLOGY ECOSYSTEM</p><div><span>Microsoft 365</span><span>AWS</span><span>Azure</span><span>Google Cloud</span><span>MikroTik</span><span>Starlink</span></div></section>
    <section className="mobile-services"><p className="inner-section-kicker">CORE CAPABILITIES</p><h2>Technology services built around your business</h2><div>{services.slice(0,6).map((service)=><article key={service.slug}><h3>{service.name}</h3><p>{service.short}</p><Link href={`/services/${service.slug}`}>Learn more ↗</Link></article>)}</div><Link className="mobile-all-services" href="/services">View all services</Link></section>
    <section className="mobile-home-cta"><p className="inner-kicker">START A CONVERSATION</p><h2>Let’s improve your technology operations.</h2><p>Tell us what is slowing your team down or creating risk.</p><Link className="inner-primary" href="/contact">Schedule a Consultation ↗</Link></section>
  </div>;
}
