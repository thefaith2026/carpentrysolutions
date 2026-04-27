import { ReactNode } from "react";
import { SiteHeader } from "./SiteHeader";
import { SiteFooter } from "./SiteFooter";

export function PageShell({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <SiteHeader />
      <main className="flex-1">{children}</main>
      <SiteFooter />
    </div>
  );
}

export function PageHero({
  eyebrow,
  title,
  description,
  image,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  image?: string;
}) {
  return (
    <section className="relative overflow-hidden border-b border-border/60 bg-[var(--forest-deep)]">
      {image && (
        <div className="absolute inset-0">
          <img
            src={image}
            alt=""
            aria-hidden="true"
            className="h-full w-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-hero" />
        </div>
      )}
      <div className="relative mx-auto grid max-w-7xl gap-6 px-6 py-24 md:py-32">
        {eyebrow && (
          <p className="text-xs uppercase tracking-[0.3em] text-[var(--brass)]">{eyebrow}</p>
        )}
        <h1 className="max-w-4xl font-serif text-4xl font-semibold leading-[1.05] text-[var(--cream)] text-balance md:text-6xl">
          {title}
        </h1>
        {description && (
          <p className="max-w-2xl text-base leading-relaxed text-[var(--cream)]/80 md:text-lg text-pretty">
            {description}
          </p>
        )}
      </div>
    </section>
  );
}
