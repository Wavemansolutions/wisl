"use client";

import Link from "next/link";
import { useState } from "react";

const nav = [
  ["Home", "/"], ["Services", "/services"], ["Solutions", "/solutions"],
  ["About", "/about"], ["Resources", "/resources"], ["Contact", "/contact"],
];

export default function MobileMenu() {
  const [open, setOpen] = useState(false);
  return (
    <div className="mobile-menu-wrap">
      <button className="mobile-menu-button" onClick={() => setOpen(!open)} aria-expanded={open} aria-label="Open navigation menu">
        <span/><span/><span/>
      </button>
      {open && <div className="mobile-menu-panel">
        {nav.map(([label, href]) => <Link key={href} href={href} onClick={() => setOpen(false)}>{label}</Link>)}
        <Link className="mobile-menu-cta" href="/contact" onClick={() => setOpen(false)}>Schedule a Consultation ↗</Link>
      </div>}
    </div>
  );
}
