import Link from "next/link";
import { ArrowRight } from "lucide-react";

const links = [
  ["Home", "/"],
  ["Services", "/services"],
  ["Solutions", "/services"],
  ["About Us", "/about"],
  ["Resources", "/#resources"],
  ["Contact", "/contact"],
];

export default function Navbar() {
  return (
    <header className="site-header">
      <div className="container-shell nav-shell">
        <Link href="/" className="brand" aria-label="Waveman home">
          <span className="brand-mark">W</span>
          <span><strong>WAVEMAN</strong><small>INTEGRATED SOLUTIONS</small></span>
        </Link>
        <nav className="desktop-nav" aria-label="Primary navigation">
          {links.map(([label, href]) => <Link key={label} href={href}>{label}</Link>)}
        </nav>
        <Link href="/contact" className="nav-cta">Book a Consultation <ArrowRight className="h-4 w-4" /></Link>
      </div>
    </header>
  );
}
