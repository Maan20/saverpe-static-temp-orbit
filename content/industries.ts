export interface Industry {
  slug: string;
  name: string;
  headline: string;
  intro: string;
  metaDescription: string;
  image: { prompt: string; alt: string };
  challenges: string[];
  useCases: { title: string; text: string }[];
  recommendedSolutions: string[];
  recommendedCategories: string[];
}

export const industries: Industry[] = [
  {
    slug: "it-technology",
    name: "IT & Technology",
    headline: "Rewards for fast-moving tech teams",
    intro: "Technology companies compete fiercely for talent. Distributed teams, project-based wins and frequent hiring waves need a rewards engine that's instant, flexible and location-independent.",
    metaDescription: "Corporate gifting for IT and technology companies: rewards for distributed engineering teams, hackathons, onboarding kits and festive gifts with e-gift cards.",
    image: { prompt: "Modern Indian tech office with engineers celebrating a product launch around standing desks with multiple monitors, confetti and laptops showing gift card rewards, purple and magenta neon accents, energetic corporate photography | 16:9 | 1600x900", alt: "Tech team celebrating a product launch" },
    challenges: ["Hybrid and remote teams across many cities", "High attrition and competitive hiring", "Project milestones that need quick recognition", "Large campus hiring batches"],
    useCases: [
      { title: "Hackathon and sprint rewards", text: "Instant prizes for winners and participants." },
      { title: "Remote onboarding", text: "WFH setup and first-week lunch cards for new engineers." },
      { title: "Release celebrations", text: "Food and entertainment cards after major launches." },
      { title: "Referral bonuses", text: "Gift cards to thank employees for successful referrals." },
    ],
    recommendedSolutions: ["employee-rewards-recognition", "onboarding-kits", "festive-bulk-gifting"],
    recommendedCategories: ["electronics", "food-dining", "e-commerce", "gaming", "subscriptions"],
  },
  {
    slug: "bfsi",
    name: "Banking, Financial Services & Insurance",
    headline: "Motivate sales forces and reward customers in BFSI",
    intro: "Banks, NBFCs, insurers and fintechs run large field sales teams, agent networks and customer acquisition campaigns — all of which benefit from structured, compliant reward programs.",
    metaDescription: "Corporate gifting for BFSI: sales contest rewards, agent incentives, customer acquisition campaigns and employee recognition with bulk e-gift cards.",
    image: { prompt: "Professional Indian bank relationship managers celebrating monthly targets in a sleek branch office, digital leaderboard screen and gift card rewards on tablets, confident corporate atmosphere, purple accent lighting | 16:9 | 1600x900", alt: "Banking sales team celebrating targets" },
    challenges: ["Large distributed sales and agent networks", "Monthly and quarterly target cycles", "Strict compliance and audit requirements", "Customer acquisition cost pressure"],
    useCases: [
      { title: "Sales contests", text: "Leaderboard-based rewards for relationship managers and agents." },
      { title: "Agent incentives", text: "Slab-based rewards for insurance and loan agents." },
      { title: "Customer campaigns", text: "Rewards for account openings, card activations and referrals (subject to regulatory guidelines)." },
      { title: "Branch recognition", text: "Rewards for top-performing branches and teams." },
    ],
    recommendedSolutions: ["channel-partner-incentives", "customer-loyalty-rewards", "employee-rewards-recognition"],
    recommendedCategories: ["e-commerce", "travel", "electronics", "food-dining", "jewellery"],
  },
  {
    slug: "retail-fmcg",
    name: "Retail & FMCG",
    headline: "Energise distributors, retailers and store teams",
    intro: "Retail and FMCG businesses depend on deep distribution networks and frontline store staff. Incentives that reach every town quickly can shift shelf share and sales momentum.",
    metaDescription: "Corporate gifting for retail and FMCG: distributor and retailer incentives, store staff recognition and festive gifting with bulk e-gift cards.",
    image: { prompt: "Busy Indian supermarket aisle with a store manager and sales representative reviewing a tablet showing retailer rewards, colourful shelves, bright retail lighting with subtle purple brand accents | 16:9 | 1600x900", alt: "Retail store team reviewing incentive rewards" },
    challenges: ["Wide distributor and retailer networks", "Tier-2 and tier-3 town reach", "Seasonal sales peaks", "High frontline workforce volumes"],
    useCases: [
      { title: "Retailer schemes", text: "Gift card rewards for volume and display targets." },
      { title: "Distributor incentives", text: "Quarterly and festive schemes for distribution partners." },
      { title: "Store staff recognition", text: "Rewards for customer service and sales excellence." },
      { title: "Festive workforce gifts", text: "Practical groceries and fashion cards for frontline teams." },
    ],
    recommendedSolutions: ["channel-partner-incentives", "festive-bulk-gifting", "employee-rewards-recognition"],
    recommendedCategories: ["home-needs", "e-commerce", "fashion-lifestyle", "electronics"],
  },
  {
    slug: "manufacturing",
    name: "Manufacturing & Industrial",
    headline: "Recognition for the people who keep plants running",
    intro: "Manufacturing companies employ large shop-floor workforces across plants, often with safety, productivity and attendance goals that deserve consistent recognition.",
    metaDescription: "Corporate gifting for manufacturing: safety awards, long-service recognition, dealer incentives and festive gifts for plant workforces with e-gift cards.",
    image: { prompt: "Indian manufacturing plant floor with workers in safety gear being recognised by a plant manager for a safety milestone, banner with 'Zero Incidents', warm industrial lighting, respectful corporate photography | 16:9 | 1600x900", alt: "Plant workers recognised for a safety milestone" },
    challenges: ["Large shop-floor workforces", "Multiple plant locations", "Safety and productivity programs", "Dealer and distributor networks"],
    useCases: [
      { title: "Safety milestone awards", text: "Reward teams for accident-free periods." },
      { title: "Long-service recognition", text: "Gold coin and premium cards for long-tenured employees." },
      { title: "Productivity rewards", text: "Recognise output and quality improvements." },
      { title: "Dealer incentives", text: "Motivate dealer networks for industrial products." },
    ],
    recommendedSolutions: ["employee-rewards-recognition", "festive-bulk-gifting", "channel-partner-incentives"],
    recommendedCategories: ["home-needs", "e-commerce", "jewellery", "fashion-lifestyle", "electronics"],
  },
  {
    slug: "startups",
    name: "Startups & Scale-ups",
    headline: "Big-company rewards on a startup budget",
    intro: "Startups need to build culture fast, often without a large HR team. Orbit makes it simple to reward wins, welcome hires and celebrate milestones — at any scale.",
    metaDescription: "Corporate gifting for startups: team rewards, onboarding kits, investor and client gifts, and festive gifting with flexible bulk e-gift card orders.",
    image: { prompt: "Young Indian startup founders and team celebrating a funding milestone in a colourful co-working space with sticky-note walls, laptops and phones showing gift card rewards, energetic candid photography, purple and magenta accents | 16:9 | 1600x900", alt: "Startup team celebrating a milestone" },
    challenges: ["Lean HR and admin teams", "Rapid hiring and growth", "Remote-first teams", "Tight budgets needing high impact"],
    useCases: [
      { title: "Milestone celebrations", text: "Funding rounds, product launches and revenue milestones." },
      { title: "Welcome kits", text: "Digital onboarding for fast-growing teams." },
      { title: "Investor and advisor gifts", text: "Thank the people backing your journey." },
      { title: "Customer and beta tester thank-yous", text: "Reward early adopters and feedback providers." },
    ],
    recommendedSolutions: ["employee-rewards-recognition", "onboarding-kits", "client-gifting"],
    recommendedCategories: ["food-dining", "e-commerce", "electronics", "entertainment"],
  },
  {
    slug: "healthcare-pharma",
    name: "Healthcare & Pharma",
    headline: "Appreciation for care teams and field forces",
    intro: "Hospitals, diagnostics chains and pharma companies rely on dedicated care staff and large medical representative networks. Recognition helps sustain morale in demanding roles.",
    metaDescription: "Corporate gifting for healthcare and pharma: recognition for nurses and care staff, field force incentives and festive gifting with e-gift cards.",
    image: { prompt: "Indian hospital staff lounge where nurses and doctors smile while a manager announces appreciation awards, tablets showing wellness gift cards, soft clean lighting with subtle purple accents, respectful healthcare photography | 16:9 | 1600x900", alt: "Healthcare team receiving appreciation awards" },
    challenges: ["Shift-based, high-stress roles", "Large medical representative field forces", "Industry codes governing gifts to healthcare professionals", "Multi-location operations"],
    useCases: [
      { title: "Care staff appreciation", text: "Recognise nurses, technicians and support staff." },
      { title: "Field force incentives", text: "Rewards for internal sales teams and medical representatives." },
      { title: "Wellness rewards", text: "Spa, fitness and wellness cards for burnout prevention." },
      { title: "Festive gifts", text: "Inclusive gifts for diverse hospital teams." },
    ],
    recommendedSolutions: ["employee-rewards-recognition", "festive-bulk-gifting"],
    recommendedCategories: ["health-beauty", "food-dining", "e-commerce", "hospitality"],
  },
];

export function getIndustry(slug: string) {
  return industries.find((i) => i.slug === slug);
}
