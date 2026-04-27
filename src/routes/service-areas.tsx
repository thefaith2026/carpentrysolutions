import { createFileRoute, Link } from "@tanstack/react-router";
import { MapPin } from "lucide-react";
import { PageShell, PageHero } from "@/components/PageShell";
import { CtaBanner } from "@/components/CtaBanner";
import { buildMeta } from "@/lib/seo";
import addition from "@/assets/service-addition.jpg";

export const Route = createFileRoute("/service-areas")({
  head: () => ({
    meta: buildMeta({
      title: "Carpentry Service Areas — Nashville, Belle Meade, Gallatin & Lebanon",
      description:
        "Custom Carpentry Solutions serves the greater Nashville area within roughly an hour of Annex Avenue — Nashville, Belle Meade, Gallatin, Lebanon and surrounding communities.",
      path: "/service-areas",
      image: addition,
    }),
  }),
  component: ServiceAreasPage,
});

const AREAS = [
  {
    name: "Nashville, TN",
    body: "Our home base. We work projects from Sylvan Park to East Nashville to Forest Hills to Green Hills. Custom cabinets, kitchen and bath remodels, additions and full new builds.",
    keywords: "carpenter Nashville TN",
  },
  {
    name: "Belle Meade, TN",
    body: "Some of our favorite work happens in Belle Meade. Library built-ins, primary-suite additions, formal trim packages and high-end custom kitchens for clients who value finish detail.",
    keywords: "carpenter Belle Meade TN",
  },
  {
    name: "Gallatin, TN",
    body: "Sumner County is growing fast. We take on lake-front new builds and major additions to mid-century Gallatin homes. Permitting moves quickly here, which is a nice bonus.",
    keywords: "carpenter Gallatin TN",
  },
  {
    name: "Lebanon, TN",
    body: "About 35 minutes from our shop. We handle new builds in growing Wilson County subdivisions and remodels in older Lebanon homes — same crew, same standard.",
    keywords: "carpenter Lebanon TN",
  },
  {
    name: "Mt. Juliet & Hermitage",
    body: "On the route to Lebanon and easy to reach. Custom cabinets, additions and trim packages for homes in growing Wilson and Davidson County subdivisions.",
    keywords: "carpenter Mt Juliet TN",
  },
  {
    name: "Hendersonville & Goodlettsville",
    body: "Sumner County clients between Nashville and Gallatin. Lake-area homes, additions, custom kitchens and full remodels.",
    keywords: "carpenter Hendersonville TN",
  },
  {
    name: "Brentwood & Franklin",
    body: "Williamson County's premium neighborhoods. Detailed finish work, custom cabinetry and primary-suite additions for homeowners who appreciate craftsman builds.",
    keywords: "carpenter Brentwood TN",
  },
  {
    name: "Forest Hills & Oak Hill",
    body: "Established Davidson County neighborhoods with beautiful older homes. Sympathetic remodels, additions and trim restoration are our most-requested services here.",
    keywords: "carpenter Forest Hills TN",
  },
];

function ServiceAreasPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Where We Work"
        title="Custom carpentry across Middle Tennessee."
        description="Based on Annex Avenue in West Nashville, we serve clients within roughly an hour of our shop. That covers most of greater Nashville, Belle Meade, Gallatin and Lebanon."
        image={addition}
      />

      <section className="bg-background">
        <div className="mx-auto max-w-7xl px-6 py-24 md:py-32">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {AREAS.map((area) => (
              <article
                key={area.name}
                className="group rounded-sm border border-border bg-card p-8 transition-smooth hover:border-[var(--brass)]/60 hover:shadow-warm"
              >
                <MapPin className="h-6 w-6 text-[var(--brass)]" />
                <h2 className="mt-4 font-serif text-2xl font-semibold text-[var(--ink)]">
                  {area.name}
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground text-pretty">
                  {area.body}
                </p>
                <Link
                  to="/contact"
                  className="mt-6 inline-block text-sm font-medium text-[var(--forest)] underline-offset-4 hover:underline"
                >
                  Get a quote in {area.name.split(",")[0]} →
                </Link>
              </article>
            ))}
          </div>

          <div className="mt-16 rounded-sm border border-border bg-[var(--cream-deep)] p-8 text-center md:p-12">
            <h3 className="font-serif text-2xl font-semibold text-[var(--ink)] md:text-3xl">
              Outside this list?
            </h3>
            <p className="mx-auto mt-3 max-w-xl text-base text-muted-foreground">
              We occasionally take projects beyond our standard radius for the right job. If
              you're nearby and not sure whether we'd come out, just ask — the answer is almost
              always yes.
            </p>
            <Link
              to="/contact"
              className="mt-6 inline-block rounded-sm bg-[var(--forest)] px-6 py-3 text-sm font-medium text-[var(--cream)] shadow-warm transition hover:bg-[var(--forest-deep)]"
            >
              Ask about your area
            </Link>
          </div>
        </div>
      </section>

      <CtaBanner />
    </PageShell>
  );
}
