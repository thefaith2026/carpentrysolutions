import { Link } from "@tanstack/react-router";
import { Phone } from "lucide-react";
import { SITE } from "@/lib/seo";

export function CtaBanner() {
  return (
    <section className="border-y border-border/60 bg-[var(--walnut)] text-[var(--cream)]">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-6 py-12 text-center md:flex-row md:text-left">
        <div>
          <h3 className="font-serif text-2xl font-semibold md:text-3xl">
            Ready to talk about your project?
          </h3>
          <p className="mt-2 text-sm text-[var(--cream)]/80 md:text-base">
            Free in-home consultations across Nashville, Belle Meade, Gallatin & Lebanon.
          </p>
        </div>
        <div className="flex flex-col items-center gap-3 sm:flex-row">
          <a
            href={`tel:${SITE.phoneRaw}`}
            className="inline-flex items-center gap-2 rounded-sm border border-[var(--cream)]/30 px-6 py-3 text-sm font-medium transition hover:bg-[var(--cream)]/10"
          >
            <Phone className="h-4 w-4" /> {SITE.phone}
          </a>
          <Link
            to="/contact"
            className="rounded-sm bg-[var(--brass)] px-6 py-3 text-sm font-semibold text-[var(--ink)] shadow-warm transition hover:opacity-90"
          >
            Request a Free Quote
          </Link>
        </div>
      </div>
    </section>
  );
}
