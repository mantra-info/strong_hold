export const siteConfig = {
  name: "Stronghold Structures",
  url: "https://strongholdstructures.in",
  phone: "+91-9656588444",
  email: "leads@strongholdstructures.in",
  description:
    "Stronghold Structures is a Kochi-based post-tensioning and civil construction company offering structural design, BOQ, prefabricated steel buildings and structural retrofitting across India.",
  address: {
    streetAddress:
      "2nd Floor, Muhammed Haji Building, Near Sai Service Centre, Opp. Lulu Mall, Edappally",
    addressLocality: "Kochi",
    addressRegion: "Kerala",
    addressCountry: "IN",
  },
  sameAs: [
    "https://www.facebook.com/profile.php?id=61578992766366",
    "https://www.instagram.com/stronghold_structures",
    "https://www.linkedin.com/company/strongholdstructures/",
  ],
};

export function JsonLd({ data }: { data: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data).replace(/</g, "\\u003c"),
      }}
    />
  );
}
