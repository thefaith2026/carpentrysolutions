import { Outlet, Link, createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";

import appCss from "../styles.css?url";
import { SITE, localBusinessJsonLd } from "@/lib/seo";
import { CallChatWidget } from "@/components/CallChatWidget";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-6">
      <div className="max-w-md text-center">
        <p className="font-serif text-7xl font-semibold text-[var(--forest)]">404</p>
        <h1 className="mt-4 font-serif text-2xl font-semibold text-foreground">
          This page wasn't built here.
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist. Let's get you back to solid ground.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-sm bg-[var(--forest)] px-5 py-2.5 text-sm font-medium text-[var(--cream)] shadow-warm transition hover:bg-[var(--forest-deep)]"
          >
            Back to home
          </Link>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: `${SITE.name} | Custom Carpentry in Nashville, TN` },
      {
        name: "description",
        content:
          "Licensed and insured custom carpentry in Nashville, Belle Meade, Gallatin & Lebanon. Framing, finish, trim, cabinets, remodels, additions and new builds.",
      },
      { name: "theme-color", content: "#1f3a2c" },
      { title: "custom carpentry" },
      { property: "og:title", content: "custom carpentry" },
      { name: "twitter:title", content: "custom carpentry" },
      { name: "description", content: "Custom Carpentry Solutions LLC offers expert carpentry services for residential projects, from framing to custom cabinets." },
      { property: "og:description", content: "Custom Carpentry Solutions LLC offers expert carpentry services for residential projects, from framing to custom cabinets." },
      { name: "twitter:description", content: "Custom Carpentry Solutions LLC offers expert carpentry services for residential projects, from framing to custom cabinets." },
      { property: "og:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/1a32bef3-a039-4343-895f-3623b076c3b1/id-preview-e0830616--6b8a15fd-0244-4318-bb82-545488158346.lovable.app-1777314081430.png" },
      { name: "twitter:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/1a32bef3-a039-4343-895f-3623b076c3b1/id-preview-e0830616--6b8a15fd-0244-4318-bb82-545488158346.lovable.app-1777314081430.png" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:type", content: "website" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(localBusinessJsonLd),
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  return (
    <>
      <Outlet />
      <CallChatWidget />
    </>
  );
}
