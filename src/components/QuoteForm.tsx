import { useState } from "react";
import { z } from "zod";
import { supabase } from "@/integrations/supabase/client";
import { CheckCircle2, AlertCircle, Loader2 } from "lucide-react";

const QuoteSchema = z.object({
  name: z.string().trim().min(2, "Please enter your name").max(100),
  email: z.string().trim().email("Please enter a valid email").max(255),
  phone: z.string().trim().max(30).optional().or(z.literal("")),
  location: z.string().trim().max(100).optional().or(z.literal("")),
  project_type: z.string().trim().max(100).optional().or(z.literal("")),
  message: z.string().trim().min(10, "Tell us a little about your project").max(2000),
});

const PROJECT_TYPES = [
  "Custom Cabinets",
  "Kitchen Remodel",
  "Bathroom Remodel",
  "Trim & Finish Carpentry",
  "Framing",
  "Home Addition",
  "New Build",
  "Other / Not Sure",
];

export function QuoteForm() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setErrors({});
    setErrorMsg("");

    const formData = new FormData(e.currentTarget);
    const raw = {
      name: String(formData.get("name") ?? ""),
      email: String(formData.get("email") ?? ""),
      phone: String(formData.get("phone") ?? ""),
      location: String(formData.get("location") ?? ""),
      project_type: String(formData.get("project_type") ?? ""),
      message: String(formData.get("message") ?? ""),
    };

    const parsed = QuoteSchema.safeParse(raw);
    if (!parsed.success) {
      const fieldErrors: Record<string, string> = {};
      parsed.error.issues.forEach((issue) => {
        const field = issue.path[0];
        if (typeof field === "string" && !fieldErrors[field]) {
          fieldErrors[field] = issue.message;
        }
      });
      setErrors(fieldErrors);
      return;
    }

    setStatus("submitting");
    const { error } = await supabase.from("quote_requests").insert({
      name: parsed.data.name,
      email: parsed.data.email,
      phone: parsed.data.phone || null,
      location: parsed.data.location || null,
      project_type: parsed.data.project_type || null,
      message: parsed.data.message,
    });

    if (error) {
      setStatus("error");
      setErrorMsg("Something went wrong. Please call us at (615) 693-9047.");
      return;
    }

    setStatus("success");
    (e.target as HTMLFormElement).reset();
  }

  if (status === "success") {
    return (
      <div className="rounded-sm border border-[var(--forest)]/30 bg-[var(--cream-deep)] p-10 text-center shadow-warm">
        <CheckCircle2 className="mx-auto h-12 w-12 text-[var(--forest)]" />
        <h3 className="mt-4 font-serif text-2xl font-semibold text-[var(--ink)]">
          Thank you - we'll be in touch.
        </h3>
        <p className="mt-2 text-sm text-muted-foreground">
          Your quote request was received. We typically respond within one business day, often
          sooner. For urgent projects, please call <a href="tel:+16156939047" className="font-medium text-[var(--forest)] underline-offset-4 hover:underline">(615) 693-9047</a>.
        </p>
        <button
          onClick={() => setStatus("idle")}
          className="mt-6 text-sm font-medium text-[var(--walnut)] underline-offset-4 hover:underline"
        >
          Submit another request
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="grid gap-5 rounded-sm border border-border bg-[var(--cream)] p-6 shadow-warm md:p-10">
      <div className="grid gap-5 md:grid-cols-2">
        <Field label="Name" name="name" error={errors.name} required />
        <Field label="Email" name="email" type="email" error={errors.email} required />
        <Field label="Phone" name="phone" type="tel" error={errors.phone} />
        <Field label="Project location" name="location" placeholder="City or neighborhood" error={errors.location} />
      </div>

      <div className="grid gap-2">
        <label htmlFor="project_type" className="text-sm font-medium text-[var(--ink)]">
          Project type
        </label>
        <select
          id="project_type"
          name="project_type"
          className="rounded-sm border border-input bg-background px-4 py-3 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-[var(--forest)]/30"
          defaultValue=""
        >
          <option value="" disabled>Select a project type…</option>
          {PROJECT_TYPES.map((t) => (
            <option key={t} value={t}>{t}</option>
          ))}
        </select>
      </div>

      <div className="grid gap-2">
        <label htmlFor="message" className="text-sm font-medium text-[var(--ink)]">
          Tell us about your project <span className="text-destructive">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          rows={6}
          placeholder="A few sentences about scope, timeline, and what you're hoping for…"
          className="rounded-sm border border-input bg-background px-4 py-3 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-[var(--forest)]/30"
        />
        {errors.message && <p className="text-xs text-destructive">{errors.message}</p>}
      </div>

      {errorMsg && (
        <div className="flex items-start gap-2 rounded-sm border border-destructive/40 bg-destructive/10 p-3 text-sm text-destructive">
          <AlertCircle className="mt-0.5 h-4 w-4 flex-shrink-0" />
          <span>{errorMsg}</span>
        </div>
      )}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="inline-flex items-center justify-center gap-2 rounded-sm bg-[var(--forest)] px-6 py-3.5 text-sm font-semibold text-[var(--cream)] shadow-warm transition hover:bg-[var(--forest-deep)] disabled:opacity-60"
      >
        {status === "submitting" ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" /> Sending…
          </>
        ) : (
          "Request My Free Quote"
        )}
      </button>
      <p className="text-xs text-muted-foreground">
        We respect your time. No spam, no high-pressure sales.
      </p>
    </form>
  );
}

function Field({
  label,
  name,
  type = "text",
  error,
  placeholder,
  required,
}: {
  label: string;
  name: string;
  type?: string;
  error?: string;
  placeholder?: string;
  required?: boolean;
}) {
  return (
    <div className="grid gap-2">
      <label htmlFor={name} className="text-sm font-medium text-[var(--ink)]">
        {label} {required && <span className="text-destructive">*</span>}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        className="rounded-sm border border-input bg-background px-4 py-3 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-[var(--forest)]/30"
      />
      {error && <p className="text-xs text-destructive">{error}</p>}
    </div>
  );
}
