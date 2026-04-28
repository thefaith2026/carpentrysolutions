import { createFileRoute } from "@tanstack/react-router";
import { Phone, MapPin, Clock, Instagram } from "lucide-react";
import { PageShell, PageHero } from "@/components/PageShell";
import { QuoteForm } from "@/components/QuoteForm";
import { SITE, buildMeta } from "@/lib/seo";
import contactHero from "@/assets/contact-hero.jpg";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: buildMeta({
      title: "Request a Quote - Custom Carpentry Solutions Nashville",
      description:
        "Tell us about your carpentry project in Nashville, Belle Meade, Gallatin or Lebanon. Free in-home consultations, line-itemed quotes, no high-pressure sales.",
      path: "/contact",
      image: contactHero,
    }),
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Request a Quote"
        title="Tell us about your project."
        description="A few details below and we'll be in touch within one business day. For urgent calls, the phone is fastest."
        image={contactHero}
      />

      <section className="bg-background">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 py-20 md:grid-cols-12 md:gap-16 md:py-28">
          <div className="md:col-span-5">
            <h2 className="font-serif text-3xl font-semibold text-[var(--ink)]">Get in touch</h2>
            <p className="mt-3 text-base text-muted-foreground">
              We respond to every inquiry personally - usually same day, never longer than the
              next business day.
            </p>

            <ul className="mt-8 space-y-5">
              <li className="flex items-start gap-4">
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-sm bg-[var(--forest)]/10">
                  <Phone className="h-4 w-4 text-[var(--forest)]" />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Phone</p>
                  <a href={`tel:${SITE.phoneRaw}`} className="font-serif text-lg font-medium text-[var(--ink)] hover:text-[var(--forest)]">
                    {SITE.phone}
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-sm bg-[var(--forest)]/10">
                  <Clock className="h-4 w-4 text-[var(--forest)]" />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Hours</p>
                  <p className="font-serif text-lg font-medium text-[var(--ink)]">{SITE.hours}</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-sm bg-[var(--forest)]/10">
                  <MapPin className="h-4 w-4 text-[var(--forest)]" />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Based in</p>
                  <p className="font-serif text-lg font-medium text-[var(--ink)]">{SITE.baseAddress}</p>
                  <p className="mt-1 text-sm text-muted-foreground">Serving {SITE.serviceArea}</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-sm bg-[var(--forest)]/10">
                  <Instagram className="h-4 w-4 text-[var(--forest)]" />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Follow our work</p>
                  <a href={SITE.instagram} target="_blank" rel="noopener noreferrer" className="font-serif text-lg font-medium text-[var(--ink)] hover:text-[var(--forest)]">
                    @ccs_tn_
                  </a>
                </div>
              </li>
            </ul>
          </div>

          <div className="md:col-span-7">
            <QuoteForm />
          </div>
        </div>
      </section>
    </PageShell>
  );
}
