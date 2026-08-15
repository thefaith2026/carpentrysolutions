import deckAsset from "@/assets/deck-cable-rail.png.asset.json";
import bridgeAsset from "@/assets/footbridge.jpg.asset.json";
import videoAsset from "@/assets/project-video.mp4.asset.json";
import porchImg from "@/assets/gallery-porch.jpg";

export function ProjectGallery() {
  return (
    <section className="border-y border-border/60 bg-background">
      <div className="mx-auto max-w-7xl px-6 py-24 md:py-32">
        <p className="text-xs uppercase tracking-[0.3em] text-[var(--walnut)]">Recent Work</p>
        <h2 className="mt-3 max-w-3xl font-serif text-4xl font-semibold leading-tight text-[var(--ink)] md:text-5xl">
          Straight from our Middle Tennessee job sites.
        </h2>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground">
          Decks, cable railing, custom footbridges, covered porches and outdoor structures built to
          hold up to Tennessee weather.
        </p>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          <figure className="overflow-hidden rounded-sm border border-border shadow-warm">
            <img
              src={deckAsset.url}
              alt="Custom deck with tile surface, hardwood stair treads and black cable railing overlooking the lake"
              loading="lazy"
              className="aspect-[4/3] w-full object-cover transition-smooth hover:scale-[1.02]"
            />
            <figcaption className="bg-[var(--cream-deep)] px-5 py-4 text-sm text-foreground/80">
              Lakeside deck with cable railing and hardwood stair treads
            </figcaption>
          </figure>

          <figure className="overflow-hidden rounded-sm border border-border shadow-warm">
            <img
              src={bridgeAsset.url}
              alt="Custom pressure-treated footbridge with cable railing over a creek on a wooded trail"
              loading="lazy"
              className="aspect-[4/3] w-full object-cover transition-smooth hover:scale-[1.02]"
            />
            <figcaption className="bg-[var(--cream-deep)] px-5 py-4 text-sm text-foreground/80">
              Custom footbridge with cable rail and capped posts
            </figcaption>
          </figure>

          <figure className="overflow-hidden rounded-sm border border-border shadow-warm md:col-span-1">
            <video
              src={videoAsset.url}
              controls
              playsInline
              muted
              preload="metadata"
              className="aspect-[4/3] w-full bg-black object-cover"
            />
            <figcaption className="bg-[var(--cream-deep)] px-5 py-4 text-sm text-foreground/80">
              Walkthrough video of a recent build
            </figcaption>
          </figure>

          <figure className="overflow-hidden rounded-sm border border-border shadow-warm">
            <img
              src={porchImg}
              alt="Covered porch with cedar posts, tongue-and-groove ceiling and railing"
              width={1200}
              height={900}
              loading="lazy"
              className="aspect-[4/3] w-full object-cover transition-smooth hover:scale-[1.02]"
            />
            <figcaption className="bg-[var(--cream-deep)] px-5 py-4 text-sm text-foreground/80">
              Covered porch with cedar posts and T&amp;G ceiling
            </figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
}
