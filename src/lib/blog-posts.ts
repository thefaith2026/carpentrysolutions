export type BlogPost = {
  slug: string;
  title: string;
  description: string;
  date: string;
  readTime: string;
  category: string;
  cover: string; // import path resolved at usage
  body: string[]; // paragraphs (markdown-ish, plain rendered)
  headings?: { id: string; text: string; afterParagraph: number }[];
};

import cabinets from "@/assets/service-cabinets.jpg";
import trim from "@/assets/service-trim.jpg";
import framing from "@/assets/service-framing.jpg";
import remodel from "@/assets/service-remodel.jpg";
import addition from "@/assets/service-addition.jpg";
import hero from "@/assets/hero-carpenter.jpg";
import portrait from "@/assets/about-portrait.jpg";

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "custom-cabinets-nashville-belle-meade",
    title: "Custom Cabinets in Nashville & Belle Meade: What to Expect From a True Craftsman Build",
    description:
      "A homeowner's guide to commissioning custom cabinetry in Nashville and Belle Meade — wood selection, joinery, lead times, and what separates a true craftsman build from a stock install.",
    date: "March 4, 2026",
    readTime: "8 min read",
    category: "Cabinets",
    cover: cabinets,
    body: [
      "If you've ever stood in a Belle Meade kitchen and run your hand across a custom white-oak cabinet door, you already know the difference between a true craftsman build and a stock install. The wood feels alive. The seams are invisible. The drawers glide like they were grown there. That difference isn't an accident — it's the result of dozens of small decisions made by a carpenter who genuinely cares about how the piece will look in twenty years, not just on move-in day.",
      "At Custom Carpentry Solutions, we build cabinets the way we'd build them for our own homes. That means rift-sawn white oak when the grain matters, dovetail drawer boxes, soft-close hardware that won't fail in year three, and finishes hand-applied in a controlled shop environment so dust never lands wet. It's slower. It costs more. And it's the only way we know how to do it.",
      "The first conversation we have with every Nashville-area client starts with how they actually live. Do you bake on Saturday mornings? You need a flour drawer at counter height with a sealed bin. Do you entertain in Belle Meade? You need a hidden bar pull-out that disappears when guests are over. We design around these real moments, not generic floor plans.",
      "Wood selection comes next. White oak is our most-requested species in Nashville right now — it takes stain beautifully, holds tight against humidity swings off the Cumberland, and has the kind of cathedral grain that photographs well in natural light. Walnut is gaining ground in modern Belle Meade renovations, and quarter-sawn cherry is making a quiet comeback in traditional homes around Forest Hills.",
      "Joinery is where stock cabinets fail and custom work shines. Every drawer we build uses through-dovetails — visible from the side, glued only at the joint, no staples. Cabinet boxes are face-frame construction with mortise-and-tenon corners, not pocket screws. Backs are 3/4 plywood, not the 1/4 cardboard you'll find in big-box installs. None of this is visible after install. All of it is the reason your great-grandkids will still be using these cabinets.",
      "Lead times in the Nashville market are running about 10–14 weeks from final design approval to install for a standard kitchen, and 14–20 weeks for larger projects with custom millwork (range hoods, built-in pantries, library walls). We won't promise faster — anyone who does is either skipping steps or fibbing about their schedule.",
      "Pricing varies wildly with wood choice, hardware, and complexity, but for a Belle Meade kitchen of around 30 linear feet of cabinetry in white oak with brass hardware, plan on a meaningful investment. We give honest, line-itemed quotes after a free in-home consultation — no surprise charges, no upcharges for taking a phone call.",
      "If you're considering custom cabinets for a Nashville, Belle Meade, Gallatin, or Lebanon project, we'd love to walk through your space. Request a quote and we'll come measure, listen, and give you a real number — no pressure, no salesperson energy.",
    ],
  },
  {
    slug: "framing-vs-finish-carpentry-explained",
    title: "Framing vs. Finish Carpentry: What's the Difference, and Why Does It Matter for Your Build?",
    description:
      "Confused about framing carpentry vs. finish carpentry? A Nashville carpenter explains the difference, why both matter, and how to hire the right craftsman for each phase.",
    date: "February 18, 2026",
    readTime: "6 min read",
    category: "Education",
    cover: framing,
    body: [
      "Most homeowners don't realize that carpentry isn't one trade — it's two distinct disciplines that happen to share a tape measure. Framing carpentry builds the bones of your house: walls, floors, roof structure, the rough openings for doors and windows. Finish carpentry is everything you actually see and touch: trim, crown molding, built-ins, stair rails, cabinet faces, the casing around your front door.",
      "A great framer thinks in terms of load paths, square corners, and structural integrity. They're working with dimensional lumber and engineered joists, often outdoors, often racing weather. The work is fast, physical, and forgiving by a quarter inch — drywall and trim will hide minor variations later.",
      "A great finish carpenter thinks in terms of reveals, miters, and how light hits a profile. They're working with hardwoods and pre-finished material indoors, where every joint will be inspected from two feet away. The work is slow, precise, and forgiving by a sixty-fourth of an inch — there's no drywall to hide behind.",
      "Why does this matter when you're hiring? Because most contractors specialize in one or the other, and the difference shows up in your finished home. We've walked into Nashville new builds where the framing was flawless but the trim looked like it was hung by someone holding a coupon. We've also seen gorgeous finish work going up in homes whose framing was so racked the casings will crack within a year.",
      "Custom Carpentry Solutions does both — and more importantly, we do them sequentially with the same crew. That means the guys hanging your crown molding already know exactly where every stud and blocking piece sits, because they put them there. No guessing. No locator scans. No mystery fasteners hitting wires.",
      "If you're planning a new build, an addition, or a serious remodel in Nashville, Belle Meade, Gallatin, or Lebanon, ask any contractor you interview whether they self-perform framing AND finish, or sub one of them out. The answer tells you a lot about how your project will actually feel when it's done.",
    ],
  },
  {
    slug: "trim-and-molding-guide-tennessee-homes",
    title: "The Tennessee Homeowner's Guide to Trim, Crown Molding & Casing Profiles",
    description:
      "Picking trim profiles for a Tennessee home? A guide to baseboards, crown molding, and door casing that fits Nashville, Belle Meade, and Middle Tennessee architecture.",
    date: "February 6, 2026",
    readTime: "7 min read",
    category: "Trim & Finish",
    cover: trim,
    body: [
      "Trim is the jewelry of a house. Walk into a beautifully renovated Belle Meade home and you might not consciously notice the casings, baseboards, or crown — but you'll feel them. The room will read as 'finished' instead of 'painted.' That feeling is almost always the result of someone choosing trim profiles that match the architecture, then installing them with tight, sanded joints that disappear under a single coat of paint.",
      "In Middle Tennessee, the most common architectural styles are traditional Southern (formal, symmetrical, often with two-story columns), craftsman bungalow (porches, exposed rafter tails, simple straight casings), modern farmhouse (shaker profiles, painted trim, lots of shiplap), and contemporary Belle Meade luxury (oversized casings, painted in soft cream or clay tones).",
      "For a traditional Nashville home, we typically recommend a 5-1/4\" baseboard with a small cap, 3-1/2\" door casing with a back-band, and a stacked crown molding that combines a 4-5/8\" crown with a small bed molding underneath. The result reads as 'this house has good bones' — even if the bones are six months old.",
      "For a craftsman bungalow in East Nashville or 12 South, we lean into flat stock: 1x6 baseboards, 1x4 casings with a small reveal, no crown at all. Painted in a creamy off-white, this reads as authentic and quiet. It's also easier to repair when (not if) someone bumps a corner with a vacuum.",
      "Modern farmhouse trim is mostly about shaker simplicity. Think 5\" flat baseboards, 3-1/2\" flat casings, and an optional 1x4 frieze board where the wall meets the ceiling instead of true crown. The whole house reads as bright, open, and a little bit Pinterest — in the best way.",
      "Contemporary Belle Meade clients often want the opposite: oversized, formal trim that announces itself. A 7-1/4\" baseboard with a Roman ogee cap, 4-1/2\" fluted casings with rosette blocks at the corners, and a layered cornice crown that fills the wall-ceiling joint. This is the trim package that makes ten-foot ceilings feel like twelve.",
      "Whatever profile you choose, the install matters more than the lumber. Coped inside corners (not mitered), pre-primed material, glued and pinned joints, and a careful caulk-and-paint sequence are what separate trim that looks great forever from trim that opens up at every joint by year two. We do it the slow way because there's no fast way that lasts.",
    ],
  },
  {
    slug: "home-additions-nashville-cost-timeline",
    title: "Home Additions in Nashville: Cost, Timeline & What Most Homeowners Don't Expect",
    description:
      "A practical guide to home additions in Nashville and Middle Tennessee — what they cost, how long they take, and the surprises that derail unprepared homeowners.",
    date: "January 22, 2026",
    readTime: "9 min read",
    category: "Additions",
    cover: addition,
    body: [
      "Adding on to a Nashville home is one of the smartest moves a homeowner can make right now. Buying a bigger place in Belle Meade or Forest Hills means losing a low rate and paying transfer taxes, real-estate commissions, and the sheer cost of trading up in a market that hasn't softened. Building 400 more square feet onto the home you already love is almost always the better math.",
      "But additions are also where homeowners get the most surprised — by cost, by timeline, by the contractor who disappears halfway through. Here's the honest version of what to expect when you add on to a Middle Tennessee home.",
      "Cost: For a well-built ground-floor addition (think a primary suite, a sunroom, or a kitchen expansion) plan on a meaningful per-square-foot investment that varies with finish level. Second-story additions cost more — sometimes substantially more — because we're touching the existing roof, reinforcing the existing walls, and often re-plumbing or re-electric-ing big chunks of the original house. We give honest, line-itemed quotes after a free site visit.",
      "Timeline: A simple addition runs 3–5 months from permit to final walkthrough. A complex one (second story, structural changes, custom millwork) runs 6–9 months. Anyone promising faster is either skipping permits or skipping inspections. Don't hire them.",
      "Permits in Nashville: Davidson County permitting has gotten faster over the last two years but is still slower than surrounding counties. Plan on 4–8 weeks for permit issuance after we submit drawings. Gallatin and Lebanon (Sumner and Wilson counties) tend to move faster — often 2–4 weeks. We handle all permitting and inspections for our clients.",
      "Surprises homeowners don't expect: Your existing house WILL need touch-ups where it meets the new addition. Hardwood floors will need to be feathered in or fully refinished. Crown molding will need to be re-mitered at the new joint. The exterior brick or siding will need to be matched, and matching old Nashville brick to new is a craft unto itself.",
      "We also strongly recommend planning for a temporary rental or basement-living arrangement during the messiest 4–6 weeks of construction, especially if the addition touches the kitchen or primary suite. Living through a build is possible. Sleeping next to one is harder.",
      "If you're considering an addition in Nashville, Belle Meade, Gallatin, or Lebanon, the best thing you can do is bring us in early — even before you've drawn plans. We can walk your house, talk through what's structurally easy versus hard, and save you months and tens of thousands of dollars in design changes that never had to happen.",
    ],
  },
  {
    slug: "kitchen-remodel-nashville-questions",
    title: "10 Questions to Ask Before Starting a Kitchen Remodel in Nashville",
    description:
      "Before you sign a contract for a kitchen remodel in Nashville or Belle Meade, ask these ten questions. They will save you money, time, and a lot of frustration.",
    date: "January 8, 2026",
    readTime: "7 min read",
    category: "Remodels",
    cover: remodel,
    body: [
      "A kitchen remodel is the single biggest investment most Nashville homeowners will make in their house. Done well, it adds real resale value and ten years of daily joy. Done poorly, it's a six-figure regret you'll live with until you sell. The difference is almost entirely in the questions you ask before you sign anything.",
      "1. Are you licensed and insured? In Tennessee, residential contractors doing more than $25,000 of work must hold a state license. Workers comp and general liability are non-negotiable. We carry both — ask any contractor for current certificates, in writing.",
      "2. Do you self-perform the work, or sub it all out? There's nothing wrong with subs — every plumbing and electrical job involves them — but you want to know who is actually swinging the hammer. We self-perform all framing, trim, and cabinet work with our own crew.",
      "3. Who is my point of contact during the project? On a kitchen remodel, you'll have questions every day. You need one person whose phone you can call. If the answer is 'whoever's available,' walk away.",
      "4. What's your change-order process? Changes happen on every remodel. The question is whether they're documented and priced before work proceeds, or whether they show up as a surprise on the final invoice. Get the process in writing.",
      "5. How do you handle dust and protection? Kitchen remodels generate enormous amounts of dust that will travel into every room of your house unless someone takes containment seriously. We use plastic walls with zippered access, HEPA-filtered negative-air machines, and floor protection through every adjacent space.",
      "6. What's your typical cabinet lead time? In Nashville right now, custom cabinets are running 10–14 weeks. If a contractor promises faster without telling you they're using stock cabinets, you're getting stock cabinets.",
      "7. Will you pull permits? Kitchen remodels that involve electrical, plumbing, or structural changes require permits in Davidson County. Contractors who skip permits leave you holding the bag at resale.",
      "8. How do you handle payment? We invoice on milestones — never large up-front deposits, never balloon payments at the end. If a contractor wants 50% up front, that's a sign of cash-flow problems, not craftsmanship.",
      "9. Can I see a current job site in person? Photos are easy to fake. A live job site shows you how a contractor actually works — how they protect floors, organize tools, and treat the homeowners they're working for.",
      "10. What's your warranty? We warranty our craftsmanship for one year and stand behind our work for the life of the home. If a contractor's warranty is shorter than a year, ask why.",
      "Ready to start your Nashville kitchen remodel? Request a quote and we'll come walk the space, listen to how you actually use your kitchen, and give you a real number — no high-pressure sales, no surprise charges.",
    ],
  },
  {
    slug: "best-wood-species-nashville-humidity",
    title: "Best Wood Species for Nashville's Humidity (and What to Avoid)",
    description:
      "Middle Tennessee humidity is brutal on hardwood. A working carpenter's guide to the wood species that thrive in Nashville homes — and the ones that warp.",
    date: "December 19, 2025",
    readTime: "5 min read",
    category: "Materials",
    cover: cabinets,
    body: [
      "Middle Tennessee summers run hot and humid, and our winters dry out interior air with the kind of efficiency that splits boards. If you're spec'ing wood for a Nashville home — cabinets, flooring, trim, built-ins — species selection matters more here than it does in coastal California or the Pacific Northwest.",
      "White oak is our hands-down favorite for Nashville projects. It's dimensionally stable across humidity swings, takes stain beautifully, and has tight grain that doesn't telegraph through a finish. Quarter-sawn or rift-sawn white oak is the gold standard for cabinets and flooring. Plain-sawn is fine for less critical applications.",
      "Walnut is our second pick. It moves a little more than oak with humidity but has gorgeous color depth and ages into a warm, lived-in patina that no stain can mimic. Best for cabinets, mantels, and feature pieces where the grain is the point.",
      "Cherry is making a comeback in traditional Belle Meade and Forest Hills homes. It darkens naturally over the first year of sun exposure into a deep amber. Stable enough for built-ins and cabinets. Watch out for blotching with stain — we use a sealer first.",
      "Maple is a workhorse for painted cabinets and trim. Tight, dense grain that holds paint flat with no telegraphing. Not the right pick for stained applications — it tends to look plasticky.",
      "What to avoid in Nashville: Pine and other softwoods for anything you'll touch or look at — they dent, scratch, and ding too easily. Hickory unless you genuinely love the wild grain pattern (some clients do, most don't). Imported tropical species without verified moisture content — they ship dry from the equator and explode here.",
      "If you're picking wood for a Nashville carpentry project, talk to us early. The right species in the right place lasts generations. The wrong one is a service call.",
    ],
  },
  {
    slug: "how-to-hire-licensed-carpenter-nashville",
    title: "How to Hire a Licensed Carpenter in Nashville (Without Getting Burned)",
    description:
      "Vetting a carpenter for a Nashville-area project? A clear, step-by-step guide to verifying license, insurance, and craftsmanship before you sign anything.",
    date: "December 5, 2025",
    readTime: "6 min read",
    category: "Hiring",
    cover: portrait,
    body: [
      "Nashville is in the middle of a multi-year building boom, which means our market is full of great carpenters — and also full of guys who bought a truck last month and printed business cards. Telling them apart matters, because the cost of hiring the wrong one shows up in your house for years afterward.",
      "Step one: Verify the license. In Tennessee, any residential contractor doing more than $25,000 of work must hold a state contractor's license, which you can verify in 60 seconds at the Tennessee Department of Commerce and Insurance website. If the license isn't current, the conversation is over.",
      "Step two: Verify the insurance. You want two specific policies: general liability (covers damage to your property) and workers compensation (covers injury to the crew on your property). Both should be currently active. Ask for certificates of insurance with you listed — a real contractor will have these in your inbox before lunch.",
      "Step three: Look at current job sites, not just photos. Photos are trivially fake. A live, in-progress job site shows you how the contractor actually works: are floors protected, is the work area organized, are the homeowners you're meeting smiling or stressed?",
      "Step four: Ask for references from the last six months — not three years ago, when their crew was different. Call them. Ask three questions: Did the work finish on time? Were change orders handled fairly? Would you hire them again?",
      "Step five: Read the contract carefully before you sign. It should specify scope, payment milestones, change-order process, completion date, and warranty terms. If any of those are missing, don't sign.",
      "We're licensed and insured (workers comp and general liability), self-perform our framing, trim, and cabinet work with our own crew, and we'll happily walk you through a current Nashville-area job site before you commit to anything. That's how it should work.",
    ],
  },
  {
    slug: "service-areas-nashville-belle-meade-gallatin-lebanon",
    title: "Where We Work: Custom Carpentry Across Nashville, Belle Meade, Gallatin & Lebanon",
    description:
      "A look at our Middle Tennessee service area — the neighborhoods we serve from our Nashville shop and how distance affects scheduling and pricing.",
    date: "November 18, 2025",
    readTime: "5 min read",
    category: "Service Area",
    cover: hero,
    body: [
      "We're based out of Annex Avenue in West Nashville, and we serve clients throughout Middle Tennessee — generally anywhere within about an hour's drive of our shop. That radius covers most of the homes that hire us regularly, and it's intentional: we want our crew off the road and on the job site, not stuck in I-65 traffic at 7am.",
      "Nashville: This is our home base. We work projects from Sylvan Park to East Nashville to Forest Hills to Green Hills. Drive time is short, scheduling is flexible, and we can usually be on-site for emergencies the same day.",
      "Belle Meade: Some of our favorite work happens here. Belle Meade homeowners tend to value finish detail and craftsmanship in a way that makes our crew genuinely happy to show up every morning. Custom kitchens, library built-ins, primary-suite additions, and high-end trim packages are our most-requested Belle Meade services.",
      "Gallatin: Sumner County is growing fast, and we love working in Gallatin and the surrounding lake communities. Many of our Gallatin clients are building new on lake-front lots or doing major additions to mid-century homes. Permitting in Sumner County moves faster than Davidson, which is a nice bonus.",
      "Lebanon: Wilson County is about 35 minutes from our shop, and we take on work there regularly — both new builds in the growing subdivisions east of Mt. Juliet and remodels in older Lebanon homes. Same crew, same standard, slightly longer drive.",
      "We occasionally take on projects outside this radius for the right job — destination homes, vacation properties, repeat clients — but our standard service area is roughly Nashville, Belle Meade, Gallatin, and Lebanon. If you're nearby and not sure whether we'd come out, just ask. The answer is almost always yes.",
    ],
  },
];

export const POSTS_BY_SLUG = Object.fromEntries(BLOG_POSTS.map((p) => [p.slug, p]));
