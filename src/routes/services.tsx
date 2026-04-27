import { createFileRoute, Link } from "@tanstack/react-router";
import { Check, ArrowRight } from "lucide-react";
import { PageShell, PageHero } from "@/components/PageShell";
import { CtaBanner } from "@/components/CtaBanner";
import { buildMeta } from "@/lib/seo";
import cabinets from "@/assets/service-cabinets.jpg";
import trim from "@/assets/service-trim.jpg";
import framing from "@/assets/service-framing.jpg";
import remodel from "@/assets/service-remodel.jpg";
import addition from "@/assets/service-addition.jpg";
import hero from "@/assets/hero-carpenter.jpg";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: buildMeta({
      title: "Carpentry Services in Nashville — Cabinets, Framing, Trim, Remodels",
      description:
        "Custom cabinets, framing, finish carpentry, trim, remodels, additions and new builds across Nashville, Belle Meade, Gallatin and Lebanon. Licensed & insured.",
      path: "/services",
      image: cabinets,
    }),
  }),
  component: ServicesPage,
});

const SERVICES = [
  {
    img: cabinets,
    title: "Custom Cabinets",
    copy: "Built in our shop using rift-sawn white oak, walnut, cherry and quarter-sawn maple. Dovetail drawer boxes, soft-close hardware, hand-applied finishes.",
    bullets: ["Kitchens & pantries", "Library and office built-ins", "Vanities and bath storage", "Bars, banquettes & hidden storage"],
  },
  {
    img: trim,
    title: "Trim & Finish Carpentry",
    copy: "The jewelry of a beautifully built home. Crown molding, casings, baseboards, wainscoting, coffered ceilings — installed with coped joints that don't open up.",
    bullets: ["Crown molding & cornice", "Door & window casings", "Baseboards & wainscoting", "Coffered & beamed ceilings"],
  },
  {
    img: framing,
    title: "Framing",
    copy: "Square corners, plumb walls, load paths handled right the first time. The bones of your house deserve the same attention as the finish.",
    bullets: ["New construction framing", "Structural modifications", "Wall removals & beam installs", "Floor systems & roof framing"],
  },
  {
    img: remodel,
    title: "Remodels",
    copy: "Kitchens, primary suites, bathrooms, whole-home updates. We protect your floors, contain the dust and respect the fact that you still have to live there.",
    bullets: ["Kitchen remodels", "Bathroom remodels", "Whole-home updates", "Historic home renovations"],
  },
  {
    img: addition,
    title: "Home Additions",
    copy: "Add the space you actually need — primary suites, sunrooms, second stories — without the cost and stress of moving up in this market.",
    bullets: ["Primary suite additions", "Second-story additions", "Sunrooms & screened porches", "Garage & ADU builds"],
  },
  {
    img: hero,
    title: "New Builds",
    copy: "From foundation to final walk-through. One team, one standard, one phone number. We partner with select Nashville architects on custom homes.",
    bullets: ["Custom single-family builds", "Architect collaboration", "Project management", "Full carpentry self-performance"],
  },
];

function ServicesPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Our Services"
        title="Carpentry, end to end — built by people who care."
        description="Six core services. One crew. One standard. From the framing nobody sees to the trim everyone touches."
        image={cabinets}
      />

      <section className="bg-background">
        <div className="mx-auto max-w-7xl space-y-24 px-6 py-24 md:py-32">
          {SERVICES.map((s, i) => (
            <article
              key={s.title}
              className={`grid items-center gap-10 md:grid-cols-2 md:gap-16 ${i % 2 === 1 ? "md:[&>div:first-child]:order-2" : ""}`}
            >
              <div className="overflow-hidden rounded-sm border border-border shadow-warm">
                <img
                  src={s.img}
                  alt={s.title}
                  loading="lazy"
                  width={1024}
                  height={768}
                  className="aspect-[4/3] w-full object-cover"
                />
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-[var(--walnut)]">
                  Service {String(i + 1).padStart(2, "0")}
                </p>
                <h2 className="mt-3 font-serif text-3xl font-semibold leading-tight text-[var(--ink)] md:text-4xl">
                  {s.title}
                </h2>
                <p className="mt-4 text-base leading-relaxed text-foreground/80 text-pretty">
                  {s.copy}
                </p>
                <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                  {s.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-2 text-sm text-foreground/80">
                      <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-[var(--forest)]" />
                      {b}
                    </li>
                  ))}
                </ul>
                <Link
                  to="/contact"
                  className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-[var(--forest)] underline-offset-4 hover:underline"
                >
                  Get a quote for {s.title.toLowerCase()} <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      <CtaBanner />
    </PageShell>
  );
}
