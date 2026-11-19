import type { Metadata } from "next";

export const metadata: Metadata = {
  title: { default: "Blogs", template: "%s | Stronghold Structures" },
  description:
    "Construction insights from Stronghold Structures — planning, structural engineering, post-tensioning and how to avoid costly mistakes on site.",
  alternates: { canonical: "/blogs" },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
