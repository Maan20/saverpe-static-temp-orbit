// ILLUSTRATIVE ONLY — these are composite example scenarios, not real clients.
// Replace with verified client case studies before launch (see CONTENT-TODO.md).
export interface CaseStudy {
  slug: string;
  title: string;
  client: string;
  industry: string;
  solution: string;
  summary: string;
  image: { prompt: string; alt: string };
  challenge: string[];
  approach: string[];
  brandMix: { category: string; share: string }[];
  outcomes: string[];
  quote: { text: string; by: string };
}

export const caseStudies: CaseStudy[] = [
  {
    slug: "multi-city-diwali-gifting-it-services",
    title: "How a multi-city IT services company simplified Diwali gifting for its workforce",
    client: "A mid-sized IT services company (illustrative)",
    industry: "it-technology",
    solution: "festive-bulk-gifting",
    summary: "Replacing physical hampers with a multi-brand digital gifting menu for employees across several cities and remote locations.",
    image: { prompt: "Wide shot of a modern Indian IT campus decorated for Diwali with lanterns and rangoli, employees in ethnic wear smiling at phones showing gift cards, golden evening light with purple accents | 16:9 | 1600x900", alt: "IT campus celebrating Diwali with digital gifts" },
    challenge: [
      "The company previously shipped physical Diwali hampers to offices in multiple cities. Every year, the admin team spent weeks coordinating vendors, dealing with late deliveries to remote employees and replacing damaged boxes.",
      "Employee feedback showed that many hampers went unused, and remote staff felt left out when deliveries arrived after Diwali.",
    ],
    approach: [
      "Grouped employees into three tiers: all employees, people managers and leadership.",
      "Offered a menu of marketplace, sweets, fashion and electronics brands for all employees, with gold coin cards added for leadership.",
      "Used Orbit's quote builder to add each brand with its own denomination and quantity per tier.",
      "Scheduled digital delivery for the Monday of Diwali week with a message from the CEO.",
    ],
    brandMix: [
      { category: "Marketplace", share: "Largest share" },
      { category: "Fashion", share: "Significant" },
      { category: "Sweets & food", share: "Moderate" },
      { category: "Electronics", share: "Moderate" },
      { category: "Gold coins (leadership)", share: "Small" },
    ],
    outcomes: [
      "Every employee — including remote staff — received their gift on the same day.",
      "The admin team avoided warehousing, packing and courier coordination.",
      "Employees chose brands that suited them rather than receiving identical hampers.",
      "Finance received a single consolidated invoice for the program.",
    ],
    quote: { text: "For the first time, our remote team members felt as included in Diwali as people in the office.", by: "Head of HR (illustrative)" },
  },
  {
    slug: "dealer-incentive-program-consumer-durables",
    title: "Driving festive season sell-through with a dealer incentive program",
    client: "A consumer durables brand (illustrative)",
    industry: "retail-fmcg",
    solution: "channel-partner-incentives",
    summary: "A slab-based gift card incentive scheme for dealers across tier-1, tier-2 and tier-3 towns during the festive quarter.",
    image: { prompt: "Indian consumer electronics dealer store with a proud owner standing beside appliances, a banner announcing a festive dealer scheme and a phone showing a reward gift card, bright store lighting, purple accents | 16:9 | 1600x900", alt: "Dealer store owner with festive incentive reward" },
    challenge: [
      "The brand's dealers stocked several competing brands, and previous cash-based schemes were absorbed into margins without changing sales behaviour.",
      "Physical gifts were expensive to deliver to smaller towns and arrived too late to motivate during the festive window.",
    ],
    approach: [
      "Designed three volume slabs with escalating gift card values.",
      "Offered high-utility brands (marketplace, groceries, fuel) at lower slabs and aspirational brands (travel, jewellery, electronics) at higher slabs.",
      "Distributed rewards digitally in batches as dealers qualified each fortnight.",
      "Communicated the scheme through the brand's sales team with a simple leaderboard.",
    ],
    brandMix: [
      { category: "Marketplace", share: "Largest share" },
      { category: "Groceries & home needs", share: "Significant" },
      { category: "Electronics", share: "Moderate" },
      { category: "Travel", share: "Top slab" },
      { category: "Jewellery", share: "Top slab" },
    ],
    outcomes: [
      "Dealers received rewards within days of qualifying, reinforcing the scheme's credibility.",
      "Aspirational rewards at top slabs gave dealers a clear goal to aim for.",
      "The sales team could focus on selling instead of reward logistics.",
    ],
    quote: { text: "When dealers saw rewards arrive within days, participation in the next scheme went up on its own.", by: "National Sales Manager (illustrative)" },
  },
  {
    slug: "remote-onboarding-kits-fintech-startup",
    title: "Building a digital onboarding experience for a fast-growing fintech startup",
    client: "A fintech startup (illustrative)",
    industry: "startups",
    solution: "onboarding-kits",
    summary: "Monthly digital welcome kits for new hires joining from different cities — delivered on day one.",
    image: { prompt: "Young new hire at a bright home workspace joining a welcome video call with a startup team, laptop screen showing 'Welcome aboard!' and a digital gift card, plants and coffee mug, purple and magenta accents | 16:9 | 1600x900", alt: "New hire joining a welcome call with a digital onboarding kit" },
    challenge: [
      "The startup was hiring across multiple cities, with most new employees working remotely for their first weeks.",
      "Physical welcome kits often arrived late, and the small People team couldn't manage inventory for monthly hiring batches.",
    ],
    approach: [
      "Created a standard kit: a home-office electronics card, a first-week food delivery card and a coffee card.",
      "Added a premium variant for senior hires with a travel card for their first in-person team offsite.",
      "Placed monthly orders sized to the hiring plan using the Orbit quote builder.",
      "Delivered cards on joining day with a welcome message from the founders.",
    ],
    brandMix: [
      { category: "Electronics", share: "Largest share" },
      { category: "Food delivery", share: "Significant" },
      { category: "Coffee", share: "Moderate" },
      { category: "Travel (senior hires)", share: "Small" },
    ],
    outcomes: [
      "New hires received their welcome gifts on day one, regardless of location.",
      "The People team replaced inventory management with a simple monthly order.",
      "Welcome kits became a frequently mentioned highlight in onboarding feedback.",
    ],
    quote: { text: "Our onboarding now feels personal even though half our joiners never visit the office in week one.", by: "Head of People (illustrative)" },
  },
];

export function getCaseStudy(slug: string) {
  return caseStudies.find((c) => c.slug === slug);
}
