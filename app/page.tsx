import Image from "next/image";
import Link from "next/link";

const hotspots = [
  { label: "Home", href: "/", className: "hotspot hotspot-home" },
  { label: "Services", href: "/services", className: "hotspot hotspot-services" },
  { label: "Solutions", href: "/services", className: "hotspot hotspot-solutions" },
  { label: "About Us", href: "/about", className: "hotspot hotspot-about" },
  { label: "Resources", href: "/#services", className: "hotspot hotspot-resources" },
  { label: "Contact", href: "/contact", className: "hotspot hotspot-contact" },
  { label: "Book a Consultation", href: "/contact", className: "hotspot hotspot-nav-cta" },
  { label: "Book a Free Consultation", href: "/contact", className: "hotspot hotspot-hero-cta" },
  { label: "Explore Services", href: "/services", className: "hotspot hotspot-explore" },
  { label: "Book a Free Consultation", href: "/contact", className: "hotspot hotspot-bottom-cta" },
];

export default function Home() {
  return (
    <main className="exact-page">
      <div className="exact-stage" aria-label="Waveman Integrated Solutions homepage">
        <Image
          src="/waveman-exact-home.png"
          alt="Waveman Integrated Solutions IT and cybersecurity services homepage"
          width={1536}
          height={1024}
          priority
          className="exact-home-image"
          sizes="100vw"
        />

        <div className="exact-ambient exact-ambient-one" />
        <div className="exact-ambient exact-ambient-two" />

        {hotspots.map((item) => (
          <Link
            key={`${item.label}-${item.className}`}
            href={item.href}
            className={item.className}
            aria-label={item.label}
          >
            <span>{item.label}</span>
          </Link>
        ))}

        <div className="exact-logo-marquee" aria-label="Technology partners">
          <div className="exact-logo-track">
            {[
              "Microsoft 365", "Azure", "AWS", "Google Cloud", "MikroTik", "Bitdefender", "Starlink",
              "Microsoft 365", "Azure", "AWS", "Google Cloud", "MikroTik", "Bitdefender", "Starlink"
            ].map((name, index) => <span key={`${name}-${index}`}>{name}</span>)}
          </div>
        </div>

        <div id="services" className="services-anchor" aria-hidden="true" />
      </div>
    </main>
  );
}
