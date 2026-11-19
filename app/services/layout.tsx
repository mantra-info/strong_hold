import type { Metadata } from "next";

export const metadata: Metadata = {
  title: { default: "Our Services", template: "%s | Stronghold Structures" },
  description:
    "Post-tensioning, civil construction, structural design & BOQ, prefabricated steel buildings, architectural planning and structural retrofitting services from Stronghold Structures, Kochi.",
  alternates: { canonical: "/services" },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
