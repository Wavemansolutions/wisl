import Link from "next/link";
import BrandMark from "./BrandMark";
<<<<<<< HEAD
import MobileMenu from "./MobileMenu";

const nav = [
  ["Home", "/"], ["Services", "/services"], ["Solutions", "/solutions"],
  ["About", "/about"], ["Resources", "/resources"], ["Contact", "/contact"],
=======

const nav = [
  ["Home", "/"],
  ["Services", "/services"],
  ["Solutions", "/solutions"],
  ["About", "/about"],
  ["Resources", "/resources"],
  ["Contact", "/contact"],
>>>>>>> bec125cf2c9338e3f18ddfff8c0d5e06f00567f4
];

export default function ExactHeader() {
  return (
    <header className="inner-header">
      <Link href="/" className="inner-brand" aria-label="Waveman Integrated Solutions home"><BrandMark /></Link>
      <nav className="inner-nav" aria-label="Primary navigation">
        {nav.map(([label, href]) => <Link key={href} href={href}>{label}</Link>)}
      </nav>
      <Link href="/contact" className="inner-cta">Schedule a Consultation <span>↗</span></Link>
<<<<<<< HEAD
      <MobileMenu />
=======
>>>>>>> bec125cf2c9338e3f18ddfff8c0d5e06f00567f4
    </header>
  );
}
