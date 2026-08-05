import Link from "next/link";
import BrandMark from "./BrandMark";

export default function ProfessionalFooter(){
  return <footer className="pro-footer">
    <div className="pro-footer-grid">
      <div><BrandMark /><p>Managed technology, cybersecurity and automation services for growth-focused organisations.</p></div>
      <div><b>Capabilities</b><Link href="/services">Managed IT</Link><Link href="/services">Cybersecurity</Link><Link href="/solutions">Cloud & Automation</Link></div>
      <div><b>Company</b><Link href="/about">About</Link><Link href="/resources">Resources</Link><Link href="/contact">Contact</Link></div>
      <div><b>Global delivery</b><span>Remote-first service</span><span>USA · UK · Canada · Europe</span><span>hello@wavemansolutions.com</span></div>
    </div>
    <div className="pro-footer-bottom"><span>© 2026 Waveman Integrated Solutions Limited.</span><span>Secure systems. Clear outcomes. Reliable delivery.</span></div>
  </footer>
}
