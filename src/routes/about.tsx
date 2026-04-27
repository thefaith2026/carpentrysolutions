import { createFileRoute } from "@tanstack/react-router";
import { ShieldCheck, Award, Hammer, Heart } from "lucide-react";
import { PageShell, PageHero } from "@/components/PageShell";
import { CtaBanner } from "@/components/CtaBanner";
import { buildMeta } from "@/lib/seo";
import portrait from "@/assets/about-portrait.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: buildMeta({
      title: "About Custom Carpentry Solutions — Nashville's Detail-Obsessed Crew",
      description:
        "Meet the licensed, insured carpentry team behind Custom Carpentry Solutions LLC — serving Nashville, Belle Meade, Gallatin and Lebanon with framing, finish, cabinets and remodels.",
      path: "/about",
      image: portrait,
    }),
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="About Us"
        title="A Nashville carpentry crew that genuinely cares about the details."
        description="We started Custom Carpentry Solutions because we were tired of seeing beautiful Tennessee homes finished with rushed work. Every project we touch gets the standard we'd want in our own house."
        image={portrait}
      />

      <section className="bg-background">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 py-24 md:grid-cols-12 md:gap-16 md:py-32">
          <div className="md:col-span-5">
            <div className="overflow-hidden rounded-sm border border-border shadow-elegant">
              <img
                src={portrait}
                alt="Owner of Custom Carpentry Solutions on a Nashville job site"
                width={1080}
                height={1620}
                loading="eager"
                className="aspect-[3/4] w-full object-cover"
              />
            </div>
          </div>
          <div className="space-y-6 md:col-span-7">
            <p className="text-xs uppercase tracking-[0.3em] text-[var(--walnut)]">Our Story</p>
            <h2 className="font-serif text-4xl font-semibold leading-tight text-[var(--ink)] md:text-5xl">
              Built on a simple promise: details matter.
            </h2>
            <p className="text-lg leading-relaxed text-foreground/85 text-pretty">
              Custom Carpentry Solutions LLC is a Nashville-based carpentry company serving
              homeowners and architects across Middle Tennessee. We focus on the work most other
              crews skip — the coped joint instead of the mitered one, the dovetailed drawer box
              instead of the stapled one, the pre-finished casing instead of the painted-on-site
              shortcut.
            </p>
            <p className="text-lg leading-relaxed text-foreground/85 text-pretty">
              Our crew self-performs every phase of carpentry on every project, from rough framing
              all the way through final trim. That means the same hands hanging your crown molding
              already know exactly where every stud and blocking piece sits — because they put
              them there. No mystery fasteners. No quality drift between phases.
            </p>
            <p className="text-lg leading-relaxed text-foreground/85 text-pretty">
              We're licensed, insured (workers comp and general liability), and we'll happily
              walk you through a current Nashville-area job site before you ever sign a contract.
              That's how it should work.
            </p>
          </div>
        </div>
      </section>

      <section className="border-y border-border/60 bg-[var(--cream-deep)] grain">
        <div className="mx-auto max-w-6xl px-6 py-24 md:py-32">
          <p className="text-xs uppercase tracking-[0.3em] text-[var(--walnut)]">What We Stand For</p>
          <h2 className="mt-3 font-serif text-4xl font-semibold leading-tight text-[var(--ink)] md:text-5xl">
            Four values, no exceptions.
          </h2>
          <div className="mt-12 grid gap-8 md:grid-cols-2">
            {[
              { icon: Heart, title: "Care for the details", body: "We sweat the parts of the job that nobody sees and nobody asks about. That's where craftsmanship actually lives." },
              { icon: ShieldCheck, title: "Honesty in pricing", body: "Line-itemed quotes after a free site visit. Change orders priced and approved before work proceeds. No surprises on the final invoice." },
              { icon: Hammer, title: "Self-performed work", body: "We don't sub out our framing, trim or cabinet work. Same crew, same standard, every project." },
              { icon: Award, title: "Built to last", body: "We build for the next owner of your home, not just the current one. The work should still look right in 2046." },
            ].map((v) => (
              <div key={v.title} className="border-l-2 border-[var(--brass)] pl-6">
                <v.icon className="h-6 w-6 text-[var(--forest)]" />
                <h3 className="mt-4 font-serif text-2xl font-semibold text-[var(--ink)]">{v.title}</h3>
                <p className="mt-3 text-base leading-relaxed text-foreground/80">{v.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner />
    </PageShell>
  );
}
