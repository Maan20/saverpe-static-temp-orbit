export interface GlossaryTerm {
  term: string;
  /** Anchor id on /glossary. */
  id: string;
  definition: string;
  /** Optional internal link for further reading. */
  link?: { href: string; label: string };
}

export const glossary: GlossaryTerm[] = [
  { term: "Corporate gifting", id: "corporate-gifting", definition: "Gifts a business gives to employees, clients, partners or customers to recognise, thank or motivate them — for festivals, milestones, events or campaigns. Digital gift cards have become the most flexible format for Indian companies.", link: { href: "/solutions", label: "Orbit gifting solutions" } },
  { term: "Bulk gift cards", id: "bulk-gift-cards", definition: "Gift cards bought in large quantities, often across several brands and denominations, for a program or event. Bulk orders are usually invoiced once and delivered as a batch of digital codes.", link: { href: "/brands", label: "Browse the bulk catalog" } },
  { term: "E-gift card", id: "e-gift-card", definition: "A brand-issued gift card delivered digitally as a code (and sometimes a PIN) that the recipient redeems online or in store, as per the brand's terms." },
  { term: "Closed-loop gift card", id: "closed-loop", definition: "A gift card that works only with the issuing brand, such as a fashion, food or electronics retailer. Brand e-gift cards in the Orbit catalog are closed-loop." },
  { term: "Open-loop prepaid card", id: "open-loop", definition: "A network-branded prepaid card usable at many merchants. In India these are prepaid payment instruments (PPIs) regulated by the RBI and come with KYC and usage rules that brand gift cards don't." },
  { term: "Multi-brand quote", id: "multi-brand-quote", definition: "A single quote covering several brands, denominations and quantities, so procurement approves one document and finance processes one invoice.", link: { href: "/contact-sales", label: "Build a quote" } },
  { term: "Denomination mix", id: "denomination-mix", definition: "The combination of card values in an order — for example 200 cards at ₹1,000 and 50 at ₹5,000 — usually aligned to reward tiers or recipient groups." },
  { term: "Employee rewards & recognition (R&R)", id: "rewards-recognition", definition: "Programs that acknowledge employee contributions through spot awards, milestone rewards, long-service awards and peer recognition. Gift cards are popular because employees choose what they value.", link: { href: "/solutions/employee-rewards-recognition", label: "Employee rewards with Orbit" } },
  { term: "Spot award", id: "spot-award", definition: "An on-the-spot reward given soon after a notable contribution, typically smaller in value and delivered quickly to reinforce the behaviour." },
  { term: "Long-service award", id: "long-service-award", definition: "A reward marking work anniversaries such as 5, 10 or 15 years, often tiered by tenure." },
  { term: "Channel partner incentive", id: "channel-incentive", definition: "Rewards given to distributors, dealers, retailers or resellers for hitting sales, activation or training targets.", link: { href: "/solutions/channel-partner-incentives", label: "Channel partner rewards" } },
  { term: "Customer loyalty reward", id: "loyalty-reward", definition: "A gift card given to customers for referrals, purchases, sign-ups, surveys or points redemption, used to lift retention and engagement.", link: { href: "/solutions/customer-loyalty-rewards", label: "Customer loyalty programs" } },
  { term: "Points-to-voucher redemption", id: "points-redemption", definition: "Letting members of a loyalty or incentive program convert accumulated points into brand gift cards from a catalog." },
  { term: "Reward catalog", id: "reward-catalog", definition: "The curated list of brands and values that recipients can choose from in a rewards program." },
  { term: "GST invoice", id: "gst-invoice", definition: "The tax invoice issued for an order. How GST applies to gift cards depends on the type of voucher and when it is redeemed, so companies confirm treatment with their tax advisors.", link: { href: "/faq", label: "Billing & GST FAQs" } },
  { term: "Perquisite tax on gifts", id: "perquisite-tax", definition: "Under Indian income tax rules, gifts and vouchers from an employer can be treated as a taxable perquisite for the employee beyond an annual exemption threshold. HR and finance teams should verify the current limit before planning values." },
  { term: "Scheduled delivery", id: "scheduled-delivery", definition: "Sending codes at a chosen date and time — for example on a birthday, work anniversary or festival morning — rather than all at once." },
  { term: "Code file delivery", id: "code-file", definition: "Receiving bulk codes as a secure file so a company can distribute them through its own HR platform, CRM or event workflow." },
  { term: "Gift card API", id: "gift-card-api", definition: "An API that lets a company's software order and deliver gift cards automatically, for example when a CRM, HRMS or loyalty platform triggers a reward.", link: { href: "/api-integration", label: "Orbit API & SDK" } },
  { term: "Webhook", id: "webhook", definition: "An automatic message one system sends to another when an event happens — such as an order being fulfilled — so the receiving system can update its records." },
  { term: "Breakage", id: "breakage", definition: "The value of gift cards that are never redeemed before expiry. Well-run programs reduce breakage by choosing popular brands, sensible values and reminding recipients to redeem." },
  { term: "Validity", id: "validity", definition: "How long a gift card can be used from issue or activation, set by each brand. Programs should choose brands whose validity comfortably covers when recipients will use them." },
  { term: "Partial redemption", id: "partial-redemption", definition: "Whether a card balance can be spent across more than one purchase. Many brand cards are single-use, which matters when choosing denominations." },
  { term: "Procurement approval", id: "procurement-approval", definition: "The internal sign-off process for a purchase — vendor onboarding, quote comparison, PO issuance and payment terms. Consolidated quotes and GST invoices shorten this cycle.", link: { href: "/how-it-works", label: "How ordering works" } },
  { term: "Diwali corporate gifting", id: "diwali-gifting", definition: "India's biggest corporate gifting season. Companies increasingly swap hampers for digital gift cards to cover distributed teams, avoid logistics and let recipients choose." },
];
