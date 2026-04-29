import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { PageShell, PageHero } from "@/components/PageShell";
import { CtaBanner } from "@/components/CtaBanner";
import { buildMeta } from "@/lib/seo";
import { BLOG_POSTS } from "@/lib/blog-posts";
import hero from "@/assets/blog-hero.jpg";

export const Route = createFileRoute("/blog/")({
  head: () => ({
    meta: buildMeta({
      title: "Carpentry Blog - Tips, Guides & Insights from a Nashville Carpenter",
      description:
        "Practical guides to custom cabinets, framing, trim, remodels and additions in Nashville, Belle Meade, Gallatin and Lebanon - written by working Tennessee carpenters.",
      path: "/blog",
      image: hero,
    }),
  }),
  component: BlogIndex,
});

function BlogIndex() {
  const [featured, ...rest] = BLOG_POSTS;
  return (
    <PageShell>
      <PageHero
        eyebrow="The Workshop Journal"
        title="Notes from the job site."
        description="Honest writing about custom carpentry in Middle Tennessee - what to ask, what to expect, what separates a craftsman build from a stock install."
        image={hero}
      />

      <section className="bg-background">
        <div className="mx-auto max-w-7xl px-6 py-20 md:py-28">
          {/* Featured */}
          <Link
            to="/blog/$slug"
            params={{ slug: featured.slug }}
            className="group grid items-stretch gap-8 overflow-hidden rounded-sm border border-border bg-card shadow-warm transition-smooth hover:border-[var(--brass)]/60 md:grid-cols-2"
          >
            <div className="aspect-[16/10] overflow-hidden md:aspect-auto">
              <img
                src={featured.cover}
                alt={featured.title}
                width={1280}
                height={800}
                loading="eager"
                className="h-full w-full object-cover transition-smooth group-hover:scale-105"
              />
            </div>
            <div className="flex flex-col justify-center p-8 md:p-12">
              <p className="text-xs uppercase tracking-[0.3em] text-[var(--brass)]">
                Featured · {featured.category}
              </p>
              <h2 className="mt-4 font-serif text-3xl font-semibold leading-tight text-[var(--ink)] md:text-4xl text-balance">
                {featured.title}
              </h2>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground text-pretty">
                {featured.description}
              </p>
              <p className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-[var(--forest)]">
                Read article <ArrowRight className="h-4 w-4" />
              </p>
              <p className="mt-2 text-xs text-muted-foreground">
                {featured.date} · {featured.readTime}
              </p>
            </div>
          </Link>

          {/* Grid */}
          <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {rest.map((post) => (
              <Link
                key={post.slug}
                to="/blog/$slug"
                params={{ slug: post.slug }}
                className="group flex flex-col overflow-hidden rounded-sm border border-border bg-card transition-smooth hover:border-[var(--brass)]/60 hover:shadow-warm"
              >
                <div className="aspect-[16/10] overflow-hidden">
                  <img
                    src={post.cover}
                    alt={post.title}
                    width={1024}
                    height={640}
                    loading="lazy"
                    className="h-full w-full object-cover transition-smooth group-hover:scale-105"
                  />
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <p className="text-xs uppercase tracking-[0.2em] text-[var(--brass)]">{post.category}</p>
                  <h3 className="mt-3 font-serif text-xl font-semibold leading-snug text-[var(--ink)]">
                    {post.title}
                  </h3>
                  <p className="mt-3 line-clamp-3 text-sm leading-relaxed text-muted-foreground">
                    {post.description}
                  </p>
                  <p className="mt-auto pt-4 text-xs text-muted-foreground">
                    {post.date} · {post.readTime}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner />
    </PageShell>
  );
}
