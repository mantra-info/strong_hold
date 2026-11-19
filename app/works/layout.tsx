import type { Metadata } from "next";

export const metadata: Metadata = {
  title: { default: "Our Works", template: "%s | Stronghold Structures" },
  description:
    "Explore completed and ongoing projects by Stronghold Structures — commercial complexes, malls, hotels, masjids, warehouses and residences built with post-tensioning and civil construction expertise.",
  alternates: { canonical: "/works" },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
