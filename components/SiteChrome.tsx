"use client";

/**
 * Page chrome is handled by each page layout:
 * - The homepage includes its navigation inside the approved visual design.
 * - Inner pages use ExactPageShell, which renders ExactHeader once.
 *
 * Keeping this wrapper navigation-free prevents duplicate menus on
 * Services, About and Contact pages.
 */
export default function SiteChrome({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
