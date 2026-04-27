export const SITE = {
  name: "Custom Carpentry Solutions LLC",
  shortName: "Custom Carpentry Solutions",
  phone: "(615) 693-9047",
  phoneRaw: "+16156939047",
  email: "info@customcarpentrytn.com",
  hours: "Mon–Fri 8am–5pm",
  baseAddress: "519 Annex Ave, Nashville, TN",
  serviceArea: "Nashville, Belle Meade, Gallatin, Lebanon",
  instagram: "https://www.instagram.com/ccs_tn_/",
  url: "https://customcarpentrytn.com",
  tagline: "Custom carpentry built with care, in every detail.",
} as const;

type MetaTag = { title?: string; name?: string; property?: string; content?: string; charSet?: string };

export function buildMeta(args: {
  title: string;
  description: string;
  path?: string;
  image?: string;
}): MetaTag[] {
  const fullTitle = args.title.includes(SITE.shortName)
    ? args.title
    : `${args.title} | ${SITE.shortName}`;
  const url = `${SITE.url}${args.path ?? "/"}`;
  const meta: MetaTag[] = [
    { title: fullTitle },
    { name: "description", content: args.description },
    { property: "og:title", content: fullTitle },
    { property: "og:description", content: args.description },
    { property: "og:type", content: "website" },
    { property: "og:url", content: url },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: fullTitle },
    { name: "twitter:description", content: args.description },
  ];
  if (args.image) {
    meta.push({ property: "og:image", content: args.image });
    meta.push({ name: "twitter:image", content: args.image });
  }
  return meta;
}

export const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "GeneralContractor",
  name: SITE.name,
  image: `${SITE.url}/og-cover.jpg`,
  telephone: SITE.phoneRaw,
  url: SITE.url,
  address: {
    "@type": "PostalAddress",
    streetAddress: "519 Annex Ave",
    addressLocality: "Nashville",
    addressRegion: "TN",
    addressCountry: "US",
  },
  areaServed: ["Nashville TN", "Belle Meade TN", "Gallatin TN", "Lebanon TN"],
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "08:00",
      closes: "17:00",
    },
  ],
  sameAs: [SITE.instagram],
  description:
    "Licensed and insured custom carpentry — framing, finish, trim, cabinets, remodels, additions, and new builds across the greater Nashville area.",
};
