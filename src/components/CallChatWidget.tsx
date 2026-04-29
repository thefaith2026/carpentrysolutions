import { useState } from "react";
import { MessageCircle, Phone, X } from "lucide-react";

const PHONE_DISPLAY = "(615) 693-9047";
const PHONE_HREF = "tel:+16156939047";

export function CallChatWidget() {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col items-end gap-3 print:hidden">
      {open && (
        <div className="w-[300px] overflow-hidden rounded-md border border-border bg-card shadow-elegant animate-in fade-in slide-in-from-bottom-2">
          <div className="flex items-center justify-between bg-[var(--forest)] px-4 py-3">
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-[var(--cream)]/70">
                Custom Carpentry
              </p>
              <p className="font-serif text-base font-semibold text-[var(--cream)]">
                Free estimate
              </p>
            </div>
            <button
              onClick={() => setOpen(false)}
              aria-label="Close chat"
              className="rounded-sm p-1 text-[var(--cream)]/80 transition hover:bg-white/10 hover:text-[var(--cream)]"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
          <div className="space-y-4 p-4">
            <p className="text-sm leading-relaxed text-foreground">
              Hi! Thanks for stopping by. Please give us a call for a{" "}
              <span className="font-semibold text-[var(--ink)]">free estimate</span> — we'd
              love to talk through your project.
            </p>
            <a
              href={PHONE_HREF}
              className="flex items-center justify-center gap-2 rounded-sm bg-[var(--forest)] px-4 py-3 text-sm font-medium text-[var(--cream)] shadow-warm transition hover:bg-[var(--forest-deep)]"
            >
              <Phone className="h-4 w-4" />
              Call {PHONE_DISPLAY}
            </a>
            <p className="text-center text-xs text-muted-foreground">
              Licensed & insured · Nashville, TN
            </p>
          </div>
        </div>
      )}

      <button
        onClick={() => setOpen((v) => !v)}
        aria-label={open ? "Close chat" : "Open chat"}
        className="flex h-14 w-14 items-center justify-center rounded-full bg-[var(--forest)] text-[var(--cream)] shadow-elegant transition hover:scale-105 hover:bg-[var(--forest-deep)]"
      >
        {open ? <X className="h-6 w-6" /> : <MessageCircle className="h-6 w-6" />}
      </button>
    </div>
  );
}
