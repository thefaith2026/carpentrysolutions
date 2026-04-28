import { Link } from "@tanstack/react-router";
import { Phone, Menu, X } from "lucide-react";
import { useState } from "react";
import { SITE } from "@/lib/seo";
import logo from "@/assets/logo.png";

const NAV = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Services" },
  { to: "/about", label: "About" },
  { to: "/service-areas", label: "Service Areas" },
  { to: "/blog", label: "Blog" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/85 backdrop-blur-md">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        <Link to="/" className="group flex items-center gap-3" onClick={() => setOpen(false)}>
          <img
            src={logo}
            alt="Custom Carpentry Solutions LLC"
            width={44}
            height={44}
            className="h-11 w-11 rounded-sm object-contain transition-smooth group-hover:scale-105"
          />
          <div className="hidden flex-col leading-tight sm:flex">
            <span className="font-serif text-base font-bold text-black">
              Custom Carpentry
            </span>
            <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-black">
              Solutions LLC
            </span>
          </div>
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {NAV.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="text-sm font-medium text-foreground/80 transition-smooth hover:text-[var(--forest)]"
              activeProps={{ className: "text-[var(--forest)]" }}
              activeOptions={{ exact: item.to === "/" }}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={`tel:${SITE.phoneRaw}`}
            className="hidden items-center gap-2 text-sm font-medium text-[var(--ink)] transition-smooth hover:text-[var(--forest)] md:flex"
          >
            <Phone className="h-4 w-4 text-[var(--brass)]" />
            {SITE.phone}
          </a>
          <Link
            to="/contact"
            className="hidden rounded-sm bg-[var(--forest)] px-5 py-2.5 text-sm font-medium text-[var(--cream)] shadow-warm transition-smooth hover:bg-[var(--forest-deep)] md:inline-block"
          >
            Request a Quote
          </Link>
          <button
            onClick={() => setOpen((o) => !o)}
            aria-label="Toggle menu"
            className="rounded-sm p-2 text-foreground lg:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <nav className="border-t border-border/60 bg-background lg:hidden">
          <div className="mx-auto flex max-w-7xl flex-col px-6 py-4">
            {NAV.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className="border-b border-border/40 py-3 text-sm font-medium text-foreground/80 transition-smooth hover:text-[var(--forest)]"
                activeProps={{ className: "text-[var(--forest)]" }}
                activeOptions={{ exact: item.to === "/" }}
              >
                {item.label}
              </Link>
            ))}
            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="mt-4 rounded-sm bg-[var(--forest)] px-5 py-3 text-center text-sm font-medium text-[var(--cream)] shadow-warm"
            >
              Request a Quote
            </Link>
            <a
              href={`tel:${SITE.phoneRaw}`}
              className="mt-2 flex items-center justify-center gap-2 py-3 text-sm font-medium text-[var(--ink)]"
            >
              <Phone className="h-4 w-4 text-[var(--brass)]" />
              {SITE.phone}
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}
