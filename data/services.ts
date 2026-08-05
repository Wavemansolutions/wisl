export type Service = {
  slug: string;
  name: string;
  short: string;
  overview: string;
  benefits: string[];
  deliverables: string[];
  technologies: string[];
  industries: string[];
};

export const services: Service[] = [
  {
    slug: "managed-it-support",
    name: "Managed IT Support",
    short: "Responsive remote support, endpoint administration and structured issue resolution for distributed teams.",
    overview: "A practical outsourced IT function for growing organisations that need dependable day-to-day support without maintaining a large internal technical team.",
    benefits: ["Faster issue resolution", "Predictable support process", "Improved staff productivity", "Clear technical documentation"],
    deliverables: ["Remote help desk", "Endpoint health checks", "User onboarding and offboarding", "Patch and software coordination", "Monthly service reporting"],
    technologies: ["Windows", "macOS", "Microsoft 365", "Google Workspace", "Remote monitoring"],
    industries: ["Professional services", "Logistics", "Construction", "Retail", "Distributed teams"],
  },
  {
    slug: "cybersecurity-services",
    name: "Cybersecurity Services",
    short: "Risk reviews, security hardening, identity protection, awareness and practical security improvement plans.",
    overview: "Security improvement designed around your real operating environment, business priorities and available resources—not generic checklists.",
    benefits: ["Reduced security exposure", "Stronger identity controls", "Improved staff awareness", "Better incident readiness"],
    deliverables: ["Security posture assessment", "Account and access review", "Endpoint hardening", "Email security review", "Security awareness guidance"],
    technologies: ["Microsoft Defender", "Bitdefender", "MFA", "Firewall controls", "Security monitoring"],
    industries: ["SMEs", "Financial services", "Healthcare suppliers", "Legal firms", "E-commerce"],
  },
  {
    slug: "network-connectivity",
    name: "Network & Connectivity",
    short: "Secure Wi-Fi, VPN, firewall, MikroTik, branch connectivity, Starlink integration and documentation.",
    overview: "Reliable office and multi-site connectivity engineered for secure access, operational visibility and easier troubleshooting.",
    benefits: ["More stable connectivity", "Secure remote access", "Improved network visibility", "Documented configurations"],
    deliverables: ["Network assessment", "Router and firewall configuration", "VPN deployment", "Wi-Fi optimisation", "Branch connectivity planning"],
    technologies: ["MikroTik", "Starlink", "WireGuard", "VLANs", "Managed Wi-Fi"],
    industries: ["Construction", "Marine operations", "Hospitality", "Remote sites", "Small offices"],
  },
  {
    slug: "microsoft-365",
    name: "Microsoft 365",
    short: "Tenant administration, migrations, Teams, SharePoint, OneDrive, email security and access governance.",
    overview: "Structured Microsoft 365 administration that helps teams collaborate securely while keeping identities, data and permissions under control.",
    benefits: ["Secure collaboration", "Cleaner access management", "Better data organisation", "Simpler user administration"],
    deliverables: ["Tenant review", "Mailbox and domain setup", "Teams and SharePoint configuration", "OneDrive migration", "Security baseline configuration"],
    technologies: ["Microsoft 365", "Exchange Online", "Teams", "SharePoint", "Entra ID"],
    industries: ["Professional services", "Education", "Non-profits", "Consultancies", "Growing SMEs"],
  },
  {
    slug: "web-operations",
    name: "Web Operations",
    short: "Website maintenance, uptime, backups, security, performance optimisation and technical content support.",
    overview: "Ongoing technical care for business websites so internal teams can focus on customers, content and growth.",
    benefits: ["Improved uptime", "Faster website performance", "Reduced maintenance risk", "Reliable backups"],
    deliverables: ["Website health checks", "Updates and backups", "Performance optimisation", "Security monitoring", "Content implementation support"],
    technologies: ["Next.js", "WordPress", "Vercel", "Cloudflare", "Analytics"],
    industries: ["B2B companies", "Retail", "Training businesses", "Professional services", "Startups"],
  },
  {
    slug: "ai-workflow-automation",
    name: "AI & Workflow Automation",
    short: "n8n, API and CRM workflows that reduce repetitive work and improve response times.",
    overview: "Business automation focused on measurable time savings, fewer manual errors and faster customer response—not automation for its own sake.",
    benefits: ["Less repetitive work", "Faster lead response", "Consistent processes", "Improved operational visibility"],
    deliverables: ["Workflow discovery", "Automation design", "API integration", "Notifications and approvals", "Operational documentation"],
    technologies: ["n8n", "REST APIs", "CRM systems", "Supabase", "AI assistants"],
    industries: ["Sales teams", "Customer support", "Recruitment", "E-commerce", "Service businesses"],
  },
  {
    slug: "cloud-infrastructure",
    name: "Cloud Infrastructure",
    short: "Cloud migration, hosting, backup strategy, access control and infrastructure optimisation.",
    overview: "Cloud infrastructure planned around reliability, sensible cost control and secure access for teams and applications.",
    benefits: ["Scalable infrastructure", "Improved resilience", "Controlled access", "Clearer cloud costs"],
    deliverables: ["Cloud readiness review", "Migration planning", "Hosting configuration", "Backup design", "Access and cost review"],
    technologies: ["AWS", "Microsoft Azure", "Google Cloud", "Vercel", "Oracle Cloud"],
    industries: ["Software businesses", "Digital agencies", "Professional services", "Online platforms", "Remote teams"],
  },
  {
    slug: "technology-advisory",
    name: "Technology Advisory",
    short: "Independent technical planning, vendor selection, implementation roadmaps and ongoing guidance.",
    overview: "Independent guidance for leaders making technology decisions without a full-time CTO or senior infrastructure team.",
    benefits: ["Better technology decisions", "Reduced vendor confusion", "Clear implementation priorities", "Improved budget planning"],
    deliverables: ["Technology assessment", "Vendor comparison", "Architecture recommendations", "Implementation roadmap", "Leadership advisory sessions"],
    technologies: ["Cloud platforms", "Security tools", "Business software", "Network systems", "Automation platforms"],
    industries: ["Growing SMEs", "Startups", "Family businesses", "Project-based companies", "International teams"],
  },
];

export function getService(slug: string) {
  return services.find((service) => service.slug === slug);
}
