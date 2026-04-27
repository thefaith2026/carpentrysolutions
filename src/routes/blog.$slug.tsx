import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight, Calendar, Clock } from "lucide-react";
import { PageShell } from "@/components/PageShell";
import { CtaBanner } from "@/components/CtaBanner";
import { buildMeta } from "@/lib/seo";
import { POSTS_BY_SLUG, BLOG_POSTS } from "@/lib/blog-posts";

export const Route = createFileRoute("/blog/$slug")({
  loader: ({ params }) => {
    const post = POSTS_BY_SLUG[params.slug];
    if (!post) throw notFound();
    return { post };
  },
  head: ({ loaderData }) => {
    if (!loaderData?.post) {
      return { meta: buildMeta({ title: "Article not found", description: "" }) };
    }
    return {
      meta: buildMeta({
        title: loaderData.post.title,
        description: loaderData.post.description,
        path: `/blog/${loaderData.post.slug}`,
        image: loaderData.post.cover,
      }),
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: loaderData.post.title,
            description: loaderData.post.description,
            image: loaderData.post.cover,
            datePublished: loaderData.post.date,
            author: {
              "@type": "Organization",
              name: "Custom Carpentry Solutions LLC",
            },
          }),
        },
      ],
    };
  },
  notFoundComponent: () => (
    <PageShell>
      <div className="mx-auto max-w-3xl px-6 py-32 text-center">
        <h1 className="font-serif text-4xl font-semibold text-[var(--ink)]">Article not found</h1>
        <Link to="/blog" className="mt-6 inline-block text-[var(--forest)] underline-offset-4 hover:underline">
          ← Back to all articles
        </Link>
      </div>
    </PageShell>
  ),
  component: BlogPostPage,
});

function BlogPostPage() {
  const { post } = Route.useLoaderData();
  const idx = BLOG_POSTS.findIndex((p) => p.slug === post.slug);
  const next = BLOG_POSTS[(idx + 1) % BLOG_POSTS.length];

  return (
    <PageShell>
      {/* Hero */}
      <article className="bg-background">
        <header className="border-b border-border/60 bg-[var(--cream-deep)] grain">
          <div className="mx-auto max-w-3xl px-6 py-16 md:py-24">
            <Link
              to="/blog"
              className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-[var(--walnut)] hover:text-[var(--forest)]"
            >
              <ArrowLeft className="h-3 w-3" /> All articles
            </Link>
            <p className="mt-6 text-xs uppercase tracking-[0.3em] text-[var(--brass)]">
              {post.category}
            </p>
            <h1 className="mt-4 font-serif text-4xl font-semibold leading-tight text-[var(--ink)] md:text-5xl text-balance">
              {post.title}
            </h1>
            <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-muted-foreground">
              <span className="inline-flex items-center gap-2"><Calendar className="h-3.5 w-3.5" /> {post.date}</span>
              <span className="inline-flex items-center gap-2"><Clock className="h-3.5 w-3.5" /> {post.readTime}</span>
            </div>
          </div>
        </header>

        <div className="mx-auto max-w-5xl px-6 pt-12">
          <div className="overflow-hidden rounded-sm border border-border shadow-elegant">
            <img
              src={post.cover}
              alt={post.title}
              width={1280}
              height={800}
              loading="eager"
              className="aspect-[16/10] w-full object-cover"
            />
          </div>
        </div>

        <div className="mx-auto max-w-3xl px-6 py-16 md:py-20">
          <div className="space-y-6">
            {post.body.map((para, i) => (
              <p key={i} className="font-serif text-lg leading-[1.75] text-foreground/90 first:text-xl first:font-medium first:text-[var(--ink)] text-pretty">
                {para}
              </p>
            ))}
          </div>

          {/* Author / CTA */}
          <div className="mt-16 rounded-sm border border-border bg-[var(--cream-deep)] p-8">
            <p className="text-xs uppercase tracking-[0.3em] text-[var(--brass)]">About the writer</p>
            <h3 className="mt-3 font-serif text-2xl font-semibold text-[var(--ink)]">
              Custom Carpentry Solutions LLC
            </h3>
            <p className="mt-3 text-base leading-relaxed text-muted-foreground">
              We're a licensed and insured carpentry crew based in Nashville, serving Belle Meade,
              Gallatin, Lebanon and the rest of Middle Tennessee. We write here about the work we
              do every day.
            </p>
            <Link
              to="/contact"
              className="mt-6 inline-flex items-center gap-2 rounded-sm bg-[var(--forest)] px-5 py-3 text-sm font-medium text-[var(--cream)] shadow-warm transition hover:bg-[var(--forest-deep)]"
            >
              Request a free quote <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          {/* Next article */}
          <Link
            to="/blog/$slug"
            params={{ slug: next.slug }}
            className="mt-12 block rounded-sm border border-border p-6 transition hover:border-[var(--brass)]/60 hover:shadow-warm"
          >
            <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Read next</p>
            <p className="mt-2 font-serif text-xl font-semibold text-[var(--ink)]">
              {next.title}
            </p>
          </Link>
        </div>
      </article>

      <CtaBanner />
    </PageShell>
  );
}
