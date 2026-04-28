import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Award, Hammer, ShieldCheck, Sparkles, Phone, Star } from "lucide-react";
import heroImg from "@/assets/hero-carpenter.jpg";
import cabinetsImg from "@/assets/service-cabinets.jpg";
import trimImg from "@/assets/service-trim.jpg";
import framingImg from "@/assets/service-framing.jpg";
import remodelImg from "@/assets/service-remodel.jpg";
import additionImg from "@/assets/service-addition.jpg";
import newBuildImg from "@/assets/service-newbuild.jpg";
import { PageShell } from "@/components/PageShell";
import { CtaBanner } from "@/components/CtaBanner";
import { SITE, buildMeta } from "@/lib/seo";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: buildMeta({
      title: "Custom Carpentry in Nashville, Belle Meade, Gallatin & Lebanon",
      description:
        "Licensed and insured craftsman carpentry - custom cabinets, framing, trim, remodels, additions and new builds across the greater Nashville area. Free quotes.",
      path: "/",
      image: heroImg,
    }),
  }),
  component: HomePage,
});

const SERVICES = [
  { title: "Custom Cabinets", img: cabinetsImg, copy: "White oak, walnut, cherry - built in our shop, installed by our crew." },
  { title: "Trim & Finish", img: trimImg, copy: "Crown molding, casings, baseboards. The jewelry of a beautifully built home." },
  { title: "Framing", img: framingImg, copy: "Square corners, plumb walls, load paths done right the first time." },
  { title: "Remodels", img: remodelImg, copy: "Kitchens, baths, whole-home updates with respect for your daily life." },
  { title: "Additions", img: additionImg, copy: "Add the space you actually need without the cost of moving up." },
  { title: "New Builds", img: newBuildImg, copy: "From foundation to finish - one team, one standard, one phone number." },
];

function HomePage() {
  return (
    <PageShell>
      {/* HERO */}
      <section className="relative overflow-hidden bg-[var(--forest-deep)]">
        <div className="absolute inset-0">
          <img
            src={heroImg}
            alt="Master carpenter planing white oak in a Nashville workshop"
            className="h-full w-full object-cover opacity-55"
            width={1920}
            height={1080}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[var(--forest-deep)]/95 via-[var(--forest-deep)]/70 to-transparent" />
        </div>
        <div className="relative mx-auto grid max-w-7xl gap-8 px-6 py-28 md:py-40">
          <p className="text-xs uppercase tracking-[0.3em] text-[var(--brass)]">
            Custom Carpentry Solutions LLC · Nashville, TN
          </p>
          <h1 className="max-w-4xl font-serif text-[2.5rem] font-semibold leading-[1.02] text-[var(--cream)] text-balance md:text-7xl">
            Built with care, in every detail.
          </h1>
          <p className="max-w-2xl text-base leading-relaxed text-[var(--cream)]/85 md:text-xl text-pretty">
            Custom cabinets, framing, trim, additions and full remodels for homeowners across
            Nashville, Belle Meade, Gallatin and Lebanon. We aren't the cheapest - we're the ones
            you call when the details matter.
          </p>
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-sm bg-[var(--brass)] px-7 py-4 text-sm font-semibold text-[var(--ink)] shadow-elegant transition hover:opacity-90"
            >
              Request a Free Quote <ArrowRight className="h-4 w-4" />
            </Link>
            <a
              href={`tel:${SITE.phoneRaw}`}
              className="inline-flex items-center gap-2 rounded-sm border border-[var(--cream)]/30 px-7 py-4 text-sm font-semibold text-[var(--cream)] transition hover:bg-[var(--cream)]/10"
            >
              <Phone className="h-4 w-4" /> {SITE.phone}
            </a>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-x-8 gap-y-3 text-sm text-[var(--cream)]/75">
            <span className="flex items-center gap-2"><ShieldCheck className="h-4 w-4 text-[var(--brass)]" /> Licensed & insured</span>
            <span className="flex items-center gap-2"><Award className="h-4 w-4 text-[var(--brass)]" /> Workers comp & GL</span>
            <span className="flex items-center gap-2"><Hammer className="h-4 w-4 text-[var(--brass)]" /> Self-performed work</span>
          </div>
        </div>
      </section>

      {/* PHILOSOPHY */}
      <section className="border-y border-border/60 bg-[var(--cream-deep)] grain">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 py-24 md:grid-cols-12 md:py-32">
          <div className="md:col-span-5">
            <p className="text-xs uppercase tracking-[0.3em] text-[var(--walnut)]">Our Approach</p>
            <h2 className="mt-4 font-serif text-4xl font-semibold leading-tight text-[var(--ink)] text-balance md:text-5xl">
              We aren't the cheapest. We're the ones who care.
            </h2>
          </div>
          <div className="space-y-6 md:col-span-7">
            <p className="text-lg leading-relaxed text-foreground/85 text-pretty">
              Most carpentry crews in Nashville are racing the clock. We're racing the next
              generation - building work that still looks right, feels right and functions right
              twenty years from now.
            </p>
            <p className="text-lg leading-relaxed text-foreground/85 text-pretty">
              That means dovetail drawer boxes instead of stapled cardboard. Coped trim joints
              instead of mitered ones that open in year two. Doors that swing true the day we
              hang them and the day your kids hang them.
            </p>
            <p className="text-lg leading-relaxed text-foreground/85 text-pretty">
              Every project gets the same crew, the same standard and the same phone number from
              first measurement to final walk-through. That's the difference.
            </p>
          </div>
        </div>
      </section>

      {/* SERVICES GRID */}
      <section className="bg-background">
        <div className="mx-auto max-w-7xl px-6 py-24 md:py-32">
          <div className="flex items-end justify-between gap-8">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-[var(--walnut)]">What We Build</p>
              <h2 className="mt-3 font-serif text-4xl font-semibold leading-tight text-[var(--ink)] md:text-5xl">
                Carpentry, end to end.
              </h2>
            </div>
            <Link to="/services" className="hidden text-sm font-medium text-[var(--forest)] underline-offset-4 hover:underline md:block">
              All services →
            </Link>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map((s, i) => (
              <Link
                key={s.title}
                to="/services"
                className="group block overflow-hidden rounded-sm border border-border bg-card transition-smooth hover:border-[var(--brass)]/60 hover:shadow-warm"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={s.img}
                    alt={s.title}
                    loading={i < 2 ? "eager" : "lazy"}
                    width={1024}
                    height={768}
                    className="h-full w-full object-cover transition-smooth group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-serif text-xl font-semibold text-[var(--ink)]">{s.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.copy}</p>
                  <p className="mt-4 inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.2em] text-[var(--forest)]">
                    Learn more <ArrowRight className="h-3 w-3" />
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* WHY US */}
      <section className="bg-[var(--forest)] text-[var(--cream)]">
        <div className="mx-auto max-w-7xl px-6 py-24 md:py-32">
          <p className="text-xs uppercase tracking-[0.3em] text-[var(--brass)]">Why Homeowners Choose Us</p>
          <h2 className="mt-4 max-w-2xl font-serif text-4xl font-semibold leading-tight md:text-5xl">
            Three things we won't compromise on.
          </h2>
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {[
              { icon: Sparkles, title: "Detail obsession", body: "Coped joints, dovetail boxes, hidden fasteners, dust containment. The work that doesn't show is the work that lasts." },
              { icon: ShieldCheck, title: "Real licensing", body: "Tennessee state-licensed contractor. Workers comp and general liability current. Certificates available before we start." },
              { icon: Hammer, title: "One crew, start to finish", body: "Same hands frame the wall and hang the trim. No mystery subs, no quality drift between phases." },
            ].map((b) => (
              <div key={b.title} className="border-l border-[var(--brass)]/40 pl-6">
                <b.icon className="h-7 w-7 text-[var(--brass)]" />
                <h3 className="mt-4 font-serif text-2xl font-semibold">{b.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-[var(--cream)]/80">{b.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIAL STRIP */}
      <section className="bg-[var(--cream-deep)] grain">
        <div className="mx-auto max-w-4xl px-6 py-24 text-center md:py-32">
          <div className="flex justify-center gap-1 text-[var(--brass)]">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="h-5 w-5 fill-current" />
            ))}
          </div>
          <p className="mt-6 font-serif text-2xl font-medium leading-snug text-[var(--ink)] md:text-3xl text-pretty">
            "They cared about the parts of our remodel we didn't even know to ask about. The
            cabinets are the kind of work you don't see anymore."
          </p>
          <p className="mt-6 text-sm uppercase tracking-[0.2em] text-[var(--walnut)]">
            Belle Meade homeowner · Kitchen remodel
          </p>
        </div>
      </section>

      <CtaBanner />
    </PageShell>
  );
}
