export interface Solution {
  slug: string;
  name: string;
  shortName: string;
  icon: "trophy" | "handshake" | "sparkles" | "package" | "briefcase" | "heart";
  headline: string;
  summary: string;
  metaTitle: string;
  metaDescription: string;
  image: { prompt: string; alt: string };
  problem: string[];
  approach: { title: string; text: string }[];
  programs: { title: string; text: string }[];
  recommendedCategories: string[];
  steps: string[];
  faqs: { q: string; a: string }[];
}

export const solutions: Solution[] = [
  {
    slug: "employee-rewards-recognition",
    name: "Employee Rewards & Recognition",
    shortName: "Employee rewards",
    icon: "trophy",
    headline: "Recognition your people actually value",
    summary: "Reward milestones, performance and everyday wins with e-gift cards employees choose themselves — from 290+ brands, delivered digitally to every location.",
    metaTitle: "Employee Rewards & Recognition with Gift Cards",
    metaDescription: "Run employee rewards and recognition programs with bulk e-gift cards from 290+ brands. Spot awards, anniversaries, performance rewards — delivered digitally.",
    image: { prompt: "Diverse Indian corporate team applauding a smiling colleague receiving recognition on stage at a modern office town hall, large screen showing 'Star Performer' and a digital gift card, purple and magenta accent lighting, candid corporate photography | 16:9 | 1600x900", alt: "Employee receiving recognition at a company town hall" },
    problem: [
      "Most employees want to feel that their work is noticed. Yet traditional rewards — trophies, generic hampers, one-size-fits-all merchandise — often miss the mark and rarely get used.",
      "HR teams also struggle with the logistics: sourcing gifts for different locations, managing inventory, and keeping reward values fair and consistent across teams.",
    ],
    approach: [
      { title: "Choice-led rewards", text: "Offer marketplace, food, fashion, travel, electronics and wellness brands so every employee picks what matters to them." },
      { title: "Multi-tier programs", text: "Structure rewards by occasion and impact — spot awards, quarterly stars, long-service milestones and leadership awards." },
      { title: "Instant digital delivery", text: "Send rewards the moment achievements happen, to office, hybrid and remote employees alike." },
      { title: "Consolidated ordering", text: "Order many brands, denominations and quantities in one request, with GST-ready invoicing for finance." },
    ],
    programs: [
      { title: "Spot awards", text: "Low-friction, same-week rewards for going above and beyond — food, coffee and entertainment cards work well." },
      { title: "Work anniversaries", text: "Tenure-based rewards that grow with years of service, from marketplace cards to gold coins." },
      { title: "Performance & sales awards", text: "Quarterly or annual awards for top performers — travel, electronics and premium experiences." },
      { title: "Peer-to-peer recognition", text: "Let teams nominate colleagues and reward the winners with a choice of brands." },
      { title: "Wellness milestones", text: "Reward participation in step challenges and wellness weeks with fitness and health brands." },
      { title: "Long-service awards", text: "Mark 5, 10 and 25-year milestones with jewellery, gold coin or luxury hotel cards." },
    ],
    recommendedCategories: ["e-commerce", "food-dining", "electronics", "travel", "jewellery", "health-beauty"],
    steps: ["Define reward tiers, occasions and budgets", "Choose a brand menu for each tier", "Share recipient counts, denominations and quantities with Orbit", "Receive a consolidated quote and invoice", "Codes delivered digitally on your schedule"],
    faqs: [
      { q: "Can employees choose their own brand?", a: "Yes. Many companies offer a menu of brands per reward tier so employees pick what they value most. Share your preferred brand mix and our team will help structure it." },
      { q: "Are employee gift cards taxable in India?", a: "Gifts and vouchers from employers are generally treated as perquisites, with an exemption up to ₹5,000 per employee per financial year under the Income-tax Rules. Amounts above that are typically taxable. Please confirm current rules with your tax advisor." },
      { q: "Can we reward remote and multi-city teams?", a: "Yes. E-gift cards are delivered digitally, so employees in any city receive rewards at the same time." },
      { q: "What is the minimum order?", a: "There's no rigid minimum — Orbit supports programs from small teams to thousands of employees. Tell us your requirement through Contact Sales." },
    ],
  },
  {
    slug: "channel-partner-incentives",
    name: "Channel Partner Incentives",
    shortName: "Channel incentives",
    icon: "handshake",
    headline: "Incentives that move your channel",
    summary: "Motivate distributors, dealers, retailers and sales partners with gift card incentives tied to targets, schemes and seasonal pushes.",
    metaTitle: "Channel Partner Incentive Programs with Gift Cards",
    metaDescription: "Drive dealer, distributor and retailer performance with channel partner incentive programs powered by bulk e-gift cards from 290+ brands.",
    image: { prompt: "Indian distributor and retailer shaking hands in a well-stocked modern store, tablet showing sales targets achieved and a reward gift card, warm confident mood, purple accent tones, business photography | 16:9 | 1600x900", alt: "Distributor and retailer celebrating an incentive reward" },
    problem: [
      "Channel partners sell many brands. To earn their focus, your incentive has to be attractive, easy to understand and quick to reach them.",
      "Cash incentives blur into regular margins, while physical gifts are slow and costly to deliver across towns and districts.",
    ],
    approach: [
      { title: "Target-linked rewards", text: "Tie gift card values to slabs, volumes or growth targets that partners can track." },
      { title: "Seasonal schemes", text: "Run festive, quarter-end and new-launch schemes with brand choices partners love." },
      { title: "Nationwide reach", text: "Digital delivery reaches partners in metros, tier-2 and tier-3 towns without courier delays." },
      { title: "Mixed brand pools", text: "Offer high-utility brands like marketplaces, groceries and fuel alongside aspirational travel and electronics." },
    ],
    programs: [
      { title: "Dealer slab schemes", text: "Unlock higher-value gift cards as partners cross volume slabs." },
      { title: "Retailer display contests", text: "Reward in-store visibility and merchandising compliance." },
      { title: "New product launch pushes", text: "Short, high-energy incentives for early adoption of new SKUs." },
      { title: "Sales team contests", text: "Motivate channel sales executives with instant rewards." },
      { title: "Loyalty tiers for partners", text: "Silver, gold and platinum tiers with escalating rewards." },
      { title: "Festive partner gifts", text: "Thank channel partners during Diwali and year-end with premium brands." },
    ],
    recommendedCategories: ["e-commerce", "home-needs", "electronics", "travel", "jewellery", "fashion-lifestyle"],
    steps: ["Define scheme rules, slabs and eligibility", "Select brands suited to your partner base", "Share expected partner counts and reward values", "Get a consolidated quote", "Distribute rewards digitally as partners qualify"],
    faqs: [
      { q: "Which brands work best for channel partners?", a: "High-utility brands — marketplaces, groceries, electronics and fashion — typically see strong redemption. Aspirational brands like travel and jewellery work well for top slabs." },
      { q: "Can rewards be sent in batches as partners qualify?", a: "Yes. Share your distribution schedule and our team will plan batched orders accordingly." },
      { q: "Are incentive gift cards compliant for tax purposes?", a: "Incentives to business partners can have income tax (including TDS) and GST implications. Consult your tax advisor to structure the program correctly." },
    ],
  },
  {
    slug: "festive-bulk-gifting",
    name: "Festive & Bulk Corporate Gifting",
    shortName: "Festive gifting",
    icon: "sparkles",
    headline: "Festive gifting for thousands, without the chaos",
    summary: "Diwali, New Year, Eid, Christmas and year-end gifting for employees, clients and partners — multiple brands, denominations and recipient groups in a single order.",
    metaTitle: "Diwali & Festive Corporate Gifting in Bulk",
    metaDescription: "Plan Diwali, New Year and festive corporate gifting at scale with bulk e-gift cards from 290+ brands. Multi-brand orders, GST-ready invoicing, digital delivery.",
    image: { prompt: "Elegant corporate Diwali celebration in a modern Indian office with diyas, marigold decor and employees opening digital gift cards on phones and laptops, warm golden light with purple and magenta accents, festive corporate photography | 16:9 | 1600x900", alt: "Employees celebrating Diwali at the office with gift cards" },
    problem: [
      "Festive gifting is the biggest gifting moment of the year for most Indian companies — and the most stressful. Sourcing hampers, tracking addresses, handling breakages and last-minute headcount changes eat up weeks of HR and admin time.",
      "Employees increasingly prefer choice over generic hampers, and remote teams make physical logistics even harder.",
    ],
    approach: [
      { title: "Plan by recipient group", text: "Set different brands and values for employees, leadership, clients and partners in one plan." },
      { title: "Multi-brand, multi-denomination", text: "Mix marketplaces, sweets, fashion, gold coins and electronics — each with its own quantities." },
      { title: "Scheduled delivery", text: "Time delivery for Dhanteras, Diwali week or your year-end celebration." },
      { title: "Finance-friendly", text: "One consolidated quote and GST-ready invoicing for the entire festive program." },
    ],
    programs: [
      { title: "Diwali employee gifts", text: "Marketplace, fashion, sweets and electronics choices for the whole workforce." },
      { title: "Dhanteras gold coin gifts", text: "Gold and silver coin gift cards for leadership and long-serving employees." },
      { title: "Client festive greetings", text: "Premium brands for key accounts, with personalised messages." },
      { title: "New Year thank-yous", text: "Experience and travel cards to start the year on a high." },
      { title: "Eid and Christmas gifting", text: "Inclusive festive gifts across your diverse workforce." },
      { title: "Year-end celebrations", text: "Party-season food, entertainment and dining cards for teams." },
    ],
    recommendedCategories: ["e-commerce", "food-dining", "jewellery", "fashion-lifestyle", "electronics", "home-furnishings"],
    steps: ["Finalise recipient groups and headcounts", "Pick brands and values per group", "Add brands, denominations and quantities in the quote builder", "Approve the quote and invoice", "Schedule delivery for your festive date"],
    faqs: [
      { q: "How early should we plan Diwali gifting?", a: "Ideally 4–6 weeks before Diwali. It leaves time for approvals, brand selection and scheduling without last-minute pressure." },
      { q: "Can we choose different brands for different employee groups?", a: "Yes. The Orbit quote builder lets you add any number of brands, each with multiple denominations and quantities." },
      { q: "Do you provide GST invoices?", a: "Orbit provides GST-ready invoicing for business orders. Share your billing details during the quote process." },
    ],
  },
  {
    slug: "onboarding-kits",
    name: "Onboarding Kits",
    shortName: "Onboarding kits",
    icon: "package",
    headline: "Day-one delight for every new hire",
    summary: "Welcome new employees with digital onboarding gifts — work-from-home setup, first-week lunches, wellness and learning — wherever they join from.",
    metaTitle: "Digital Onboarding Kits & Welcome Gifts for New Hires",
    metaDescription: "Create memorable onboarding kits with digital gift cards for WFH setup, meals, learning and wellness. Welcome new hires in any city from day one.",
    image: { prompt: "Excited new employee at a home desk unboxing a welcome kit with a laptop, notebook, coffee mug and a tablet showing a welcome e-gift card from the company, bright airy room with purple and magenta accents, lifestyle photography | 16:9 | 1600x900", alt: "New hire receiving a digital onboarding gift" },
    problem: [
      "The first week shapes how new employees feel about a company. Yet physical welcome kits are hard to deliver on time, especially for remote hires and multi-city joiners.",
      "Generic swag also rarely addresses what new hires actually need in their first days — a comfortable workspace, meals and a feeling of belonging.",
    ],
    approach: [
      { title: "Needs-based kits", text: "Combine electronics accessories, food, coffee and wellness brands into a meaningful welcome." },
      { title: "On-time, every time", text: "Digital delivery ensures the welcome arrives on day one, even for last-minute joiners." },
      { title: "Role-based variations", text: "Different kits for interns, laterals, leadership and remote hires." },
      { title: "Scalable for hiring waves", text: "Campus batches and hiring sprints handled with bulk ordering." },
    ],
    programs: [
      { title: "Remote setup kit", text: "Electronics and furniture cards for a productive home workspace." },
      { title: "First-week lunch", text: "Food delivery cards so new hires can join virtual team lunches." },
      { title: "Campus joiners", text: "Fashion and essentials cards for graduates starting their first job." },
      { title: "Relocation support", text: "Cab, grocery and home essentials cards for employees moving cities." },
      { title: "Leadership welcome", text: "Premium experiences for senior hires." },
      { title: "Buddy program rewards", text: "Thank the onboarding buddies who help new joiners settle in." },
    ],
    recommendedCategories: ["electronics", "food-dining", "home-furnishings", "home-needs", "fashion-lifestyle", "travel"],
    steps: ["Map joiner profiles and monthly hiring volumes", "Design kit brands and values per profile", "Order in bulk or in monthly batches", "Deliver digitally with a welcome message", "Collect feedback and refine the kit"],
    faqs: [
      { q: "Can onboarding gifts be sent monthly as people join?", a: "Yes. Many companies place monthly or batch orders aligned to joining dates." },
      { q: "What should a digital onboarding kit include?", a: "Common combinations include an electronics or home-office card, a food delivery card for the first week, and a coffee or wellness card." },
    ],
  },
  {
    slug: "client-gifting",
    name: "Client & Stakeholder Gifting",
    shortName: "Client gifting",
    icon: "briefcase",
    headline: "Strengthen relationships with thoughtful client gifts",
    summary: "Thank clients, investors and stakeholders with premium, policy-friendly gift cards — personalised by relationship tier.",
    metaTitle: "Client Gifting Programs with Premium Gift Cards",
    metaDescription: "Build stronger client relationships with premium e-gift cards for key accounts, project teams and stakeholders — personalised by tier and delivered digitally.",
    image: { prompt: "Two business leaders in a premium Indian boardroom exchanging a handshake, elegant envelope with a gift card on the glass table, city skyline at dusk behind, sophisticated purple-toned corporate photography | 16:9 | 1600x900", alt: "Business leaders with a client appreciation gift" },
    problem: [
      "Client gifts should feel personal and premium — but gifting across dozens of accounts, cities and company gifting policies is complex.",
      "Physical gifts risk arriving late, breaking in transit, or ending up unused on an office shelf.",
    ],
    approach: [
      { title: "Tiered by relationship", text: "Premium experiences for key decision-makers, team treats for project groups." },
      { title: "Policy-aware values", text: "Choose values that respect client gifting policies." },
      { title: "Personal messages", text: "Pair every gift with a note from the relationship owner." },
      { title: "One consolidated order", text: "Manage all accounts in a single quote and invoice." },
    ],
    programs: [
      { title: "Festive client greetings", text: "Diwali and New Year gifts for key accounts." },
      { title: "Project go-live thank-yous", text: "Treat client project teams after successful launches." },
      { title: "Renewal celebrations", text: "Celebrate long-term partnerships and renewals." },
      { title: "Event and conference gifts", text: "Digital gifts for attendees and speakers." },
      { title: "Investor and board gifts", text: "Premium experiences for stakeholders." },
      { title: "Referral thank-yous", text: "Reward clients who refer new business." },
    ],
    recommendedCategories: ["hospitality", "international-brands", "food-dining", "electronics", "e-commerce", "travel"],
    steps: ["Segment accounts by relationship tier", "Choose brands and values per tier", "Collect recipient details and messages", "Place a consolidated order", "Deliver digitally or with printed notes"],
    faqs: [
      { q: "How do we respect client gifting policies?", a: "Check each client's gifting limits, keep values modest where required, and avoid gifting during active tenders or negotiations." },
      { q: "Can we include a personal message from our team?", a: "Yes — personal notes are strongly recommended and can be shared with your order details." },
    ],
  },
  {
    slug: "customer-loyalty-rewards",
    name: "Customer Loyalty & Promotions",
    shortName: "Customer loyalty",
    icon: "heart",
    headline: "Rewards that bring customers back",
    summary: "Power referral programs, cashback-style rewards, surveys and promotional campaigns with e-gift cards customers love.",
    metaTitle: "Customer Loyalty, Referral & Promotion Rewards",
    metaDescription: "Use e-gift cards from 290+ brands to power customer loyalty programs, referral rewards, survey incentives and promotional campaigns.",
    image: { prompt: "Happy young Indian customer on a smartphone receiving a reward notification with a brand gift card after referring a friend, colourful app interface, purple and magenta gradient background, modern fintech illustration style | 16:9 | 1600x900", alt: "Customer receiving a loyalty reward gift card" },
    problem: [
      "Discounts erode margins and customers quickly forget cashback. Brands need rewards that feel valuable and create positive associations.",
      "Running promotions also requires fast, reliable reward fulfilment — slow rewards kill campaign trust.",
    ],
    approach: [
      { title: "High perceived value", text: "Gift cards from brands customers love feel more rewarding than generic points." },
      { title: "Campaign-ready volumes", text: "Plan rewards for referral, survey and promotional campaigns of any size." },
      { title: "Fast fulfilment", text: "Digital codes keep reward delivery quick and trustworthy." },
      { title: "Flexible brand mix", text: "Match rewards to your customer segments." },
    ],
    programs: [
      { title: "Referral rewards", text: "Reward customers who bring in new customers." },
      { title: "Survey and research incentives", text: "Thank participants for feedback." },
      { title: "Purchase-with-reward promotions", text: "Add a gift card to high-value purchases." },
      { title: "Loyalty tier upgrades", text: "Celebrate customers reaching new tiers." },
      { title: "Contest prizes", text: "Social media and in-app contest rewards." },
      { title: "Service recovery", text: "Apologise meaningfully when things go wrong." },
    ],
    recommendedCategories: ["e-commerce", "food-dining", "entertainment", "subscriptions", "health-beauty", "fashion-lifestyle"],
    steps: ["Define campaign mechanics and reward rules", "Estimate reward volumes", "Select brands for your audience", "Place an order sized to your campaign", "Fulfil rewards digitally"],
    faqs: [
      { q: "Can gift cards be used for promotional campaigns?", a: "Yes, gift cards are widely used for referral, survey and promotional rewards. Ensure your campaign terms and any contest regulations are followed." },
      { q: "Which brands suit customer rewards?", a: "Food delivery, entertainment, marketplace and subscription brands are popular for broad customer audiences." },
    ],
  },
];

export function getSolution(slug: string) {
  return solutions.find((s) => s.slug === slug);
}
