import { Link } from "@tanstack/react-router";
import { Phone, MapPin, Clock, Instagram } from "lucide-react";
import { SITE } from "@/lib/seo";
import logo from "@/assets/logo.png";

export function SiteFooter() {
  return (
    <footer className="border-t border-border/60 bg-[var(--forest-deep)] text-[var(--cream)]">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-3">
              <img
                src={logo}
                alt="Custom Carpentry Solutions LLC"
                width={44}
                height={44}
                className="h-11 w-11 rounded-sm object-contain"
              />
              <div className="leading-tight">
                <p className="font-serif text-base font-bold text-[var(--cream)]">Custom Carpentry</p>
                <p className="text-[11px] uppercase tracking-[0.2em] text-[var(--brass)]">
                  Solutions LLC
                </p>
              </div>
            </div>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-[var(--cream)]/75">
              Licensed and insured custom carpentry across Middle Tennessee. Built with care, in
              every detail.
            </p>
          </div>

          <div>
            <h4 className="font-serif text-sm uppercase tracking-[0.2em] text-[var(--brass)]">
              Services
            </h4>
            <ul className="mt-4 space-y-2 text-sm text-[var(--cream)]/75">
              <li><Link to="/services" className="transition hover:text-[var(--cream)]">Custom Cabinets</Link></li>
              <li><Link to="/services" className="transition hover:text-[var(--cream)]">Framing</Link></li>
              <li><Link to="/services" className="transition hover:text-[var(--cream)]">Trim & Finish</Link></li>
              <li><Link to="/services" className="transition hover:text-[var(--cream)]">Remodels</Link></li>
              <li><Link to="/services" className="transition hover:text-[var(--cream)]">Additions</Link></li>
              <li><Link to="/services" className="transition hover:text-[var(--cream)]">New Builds</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-serif text-sm uppercase tracking-[0.2em] text-[var(--brass)]">
              Service Areas
            </h4>
            <ul className="mt-4 space-y-2 text-sm text-[var(--cream)]/75">
              <li>Nashville, TN</li>
              <li>Belle Meade, TN</li>
              <li>Gallatin, TN</li>
              <li>Lebanon, TN</li>
              <li className="pt-2"><Link to="/service-areas" className="text-[var(--brass)] underline-offset-4 hover:underline">View all areas →</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-serif text-sm uppercase tracking-[0.2em] text-[var(--brass)]">
              Contact
            </h4>
            <ul className="mt-4 space-y-3 text-sm text-[var(--cream)]/75">
              <li className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-[var(--brass)]" />
                <a href={`tel:${SITE.phoneRaw}`} className="hover:text-[var(--cream)]">{SITE.phone}</a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 text-[var(--brass)]" />
                <span>{SITE.baseAddress}</span>
              </li>
              <li className="flex items-center gap-3">
                <Clock className="h-4 w-4 text-[var(--brass)]" />
                <span>{SITE.hours}</span>
              </li>
              <li className="flex items-center gap-3">
                <Instagram className="h-4 w-4 text-[var(--brass)]" />
                <a href={SITE.instagram} target="_blank" rel="noopener noreferrer" className="hover:text-[var(--cream)]">@ccs_tn_</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-3 border-t border-[var(--cream)]/15 pt-6 text-xs text-[var(--cream)]/60 sm:flex-row sm:items-center">
          <p>© {new Date().getFullYear()} Custom Carpentry Solutions LLC. All rights reserved.</p>
          <p>Licensed & insured · Workers comp & general liability</p>
        </div>
      </div>
    </footer>
  );
}
