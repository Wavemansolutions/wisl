import Link from "next/link";
import BrandMark from "./BrandMark";
import MobileMenu from "./MobileMenu";

const nav = [
  ["Home", "/"],
  ["Services", "/services"],
  ["Solutions", "/solutions"],
  ["About", "/about"],
  ["Resources", "/resources"],
  ["Contact", "/contact"],
];

export default function ExactHeader() {
  return (
    <header className="inner-header">
      <Link href="/" className="inner-brand" aria-label="Waveman Integrated Solutions home">
        <BrandMark />
      </Link>

      <nav className="inner-nav" aria-label="Primary navigation">
        {nav.map(([label, href]) => (
          <Link key={href} href={href}>
            {label}
          </Link>
        ))}
      </nav>

      <Link href="/contact" className="inner-cta">
        Schedule a Consultation <span>↗</span>
      </Link>

      <MobileMenu />
    </header>
  );
}
