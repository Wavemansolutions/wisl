import type { Metadata } from "next";
import "./globals.css";
import SiteChrome from "@/components/SiteChrome";

export const metadata: Metadata = {
  title: { default: "Waveman Integrated Solutions", template: "%s | Waveman Integrated Solutions" },
  description: "Managed IT, cybersecurity, cloud, connectivity and automation services for growth-focused organisations.",
  keywords: ["managed IT services","cybersecurity services","Microsoft 365 support","network management","business automation"],
  openGraph: { title: "Waveman Integrated Solutions", description: "Secure systems. Clear outcomes. Reliable delivery.", type: "website" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body><SiteChrome>{children}</SiteChrome></body></html>;
}
