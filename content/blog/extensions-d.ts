import type { Extension } from "./extensions";

// Additional FAQs for every Orbit article (feeds on-page FAQ sections and FAQPage schema).
const f = (...faqs: [string, string][]): Extension => ({ faqs: faqs.map(([q, a]) => ({ q, a })) });

export const extensionsD: Record<string, Extension> = {
  "employee-rewards-that-actually-work-2026": f(
    ["What types of employee rewards do people value most?", "Choice-led rewards, timely recognition and experiences tend to be valued more than generic merchandise. Multi-brand gift cards let employees pick what matters to them."],
    ["How do we keep reward programs fair across teams?", "Publish criteria and values, set budgets per team and review recognition distribution by team, level and location every quarter."],
    ["Can small companies run effective reward programs?", "Yes. Start with spot awards and work anniversaries, use modest values and focus on specific, timely messages."],
  ),
  "gift-cards-vs-physical-gifts-employee-recognition": f(
    ["Do employees prefer gift cards over physical gifts?", "Many employees value the choice gift cards provide, especially in diverse and distributed workforces. Physical keepsakes still matter for ceremonial awards."],
    ["Are physical hampers more expensive than gift cards?", "Hampers often carry hidden costs for packaging, storage and delivery, so the total cost can be higher for the same recipient value."],
    ["Can we combine physical gifts and gift cards?", "Yes. A small keepsake paired with a gift card employees choose themselves is a popular hybrid approach."],
  ),
  "spot-awards-guide": f(
    ["How much should a spot award be worth?", "Many companies use modest fixed values such as ₹500, ₹1,000 and ₹2,000 based on the level of contribution."],
    ["Who should approve spot awards?", "Typically the nominee's manager or HR, with a quick turnaround so recognition stays timely."],
    ["How many spot awards should a team give?", "Set a quarterly budget per team and review usage; the goal is frequent recognition without concentration on a few people."],
  ),
  "work-anniversary-rewards-by-tenure": f(
    ["Which work anniversaries should companies celebrate?", "Every anniversary deserves acknowledgement, with bigger rewards at milestones such as 1, 3, 5, 10, 15, 20 and 25 years."],
    ["What is a good 10-year work anniversary gift?", "Experiences such as hotel stays, gold coin gift cards or premium brand cards, paired with public recognition."],
    ["How can we avoid missing anniversaries?", "Automate reminders from your HRMS and place monthly consolidated orders for upcoming anniversaries."],
  ),
  "peer-to-peer-recognition-programs": f(
    ["Should peer recognition include monetary rewards?", "Many programs combine free public kudos with periodic gift card rewards for standout nominations."],
    ["How do we stop peer recognition becoming a popularity contest?", "Use caps per recipient, block reciprocal nominations, encourage cross-team recognition and review distribution regularly."],
    ["Can managers participate in peer recognition?", "Yes. Managers recognising peers and team members models the behaviour for everyone."],
  ),
  "rewarding-remote-and-hybrid-teams": f(
    ["How do we make remote employees feel recognised?", "Use digital rewards, recognise contributions in shared channels, time celebrations for everyone and check recognition data for proximity bias."],
    ["What's a good reward for a remote team milestone?", "Food delivery gift cards for a synchronised virtual lunch are simple and popular."],
    ["Should hybrid employees get the same rewards as office staff?", "Yes. Company-wide rewards should reach everyone at the same time regardless of work mode."],
  ),
  "recognition-budget-how-much-to-spend": f(
    ["What is a typical recognition budget per employee?", "It varies by company and industry. Many organisations build budgets from planned programs — festive gifts, anniversaries, spot and annual awards — rather than a fixed benchmark."],
    ["How do we justify a recognition budget to finance?", "Link it to goals such as reduced attrition and improved engagement, and report usage, fairness and outcomes quarterly."],
    ["Should recognition budgets be managed centrally or by departments?", "A common approach is central ownership by HR with departmental allocations based on headcount."],
  ),
  "measuring-roi-of-employee-recognition": f(
    ["Which recognition metrics matter most?", "Recognition coverage, frequency, distribution fairness, redemption rates, engagement survey scores and regretted attrition."],
    ["How long before recognition programs show results?", "Usage metrics change quickly, while engagement and attrition trends typically need several quarters to show clear movement."],
    ["Can gift card data help measure recognition?", "Yes. Order and redemption data show which rewards employees value and where recognition is reaching."],
  ),
  "how-to-plan-festive-corporate-gifting-at-scale": f(
    ["How do we handle new joiners during festive gifting?", "Order for confirmed headcount plus a small buffer, or plan a top-up order close to the delivery date."],
    ["Can different employee groups receive different brands?", "Yes. Multi-brand orders let you assign brands, denominations and quantities by recipient group."],
    ["What's the biggest mistake in festive corporate gifting?", "Starting late — it compresses approvals, limits choices and increases delivery risk."],
  ),
  "diwali-corporate-gifting-checklist": f(
    ["Who should own Diwali gifting in a company?", "HR usually leads, with finance for budgets, procurement for vendors and internal communications for messaging."],
    ["Should contract staff receive Diwali gifts?", "Many companies include contract staff directly or through agencies; inclusion is noticed and appreciated."],
    ["How do we collect feedback after Diwali gifting?", "Run a short pulse survey and review redemption data and support tickets."],
  ),
  "corporate-diwali-gift-ideas-by-employee-tier": f(
    ["Is it fair to give different Diwali gifts by level?", "Tiering by budget is common. Keep choice, warmth and delivery timing consistent across tiers and avoid publicising values."],
    ["What's a good Diwali gift for frontline employees?", "Practical grocery, household, fashion or marketplace cards with nearby redemption options."],
    ["What Diwali gifts suit senior leadership?", "Gold coin cards, luxury hotel experiences and premium brand gift cards."],
  ),
  "inclusive-festive-gifting-diverse-workforce": f(
    ["Should companies give gifts for every festival?", "Not necessarily. Many companies run one main festive program and send greetings for other major festivals."],
    ["How do we name an inclusive festive gift program?", "Neutral names like 'festive season gift' or 'year-end appreciation' include everyone."],
    ["What gift items should be avoided for diverse teams?", "Alcohol, religious items and assumptions about diet or lifestyle."],
  ),
  "new-year-corporate-gifts-clients-employees": f(
    ["Is New Year a good alternative to Diwali gifting?", "Yes. New Year gifting is inclusive and less crowded, and suits companies with diverse or international teams."],
    ["What New Year gifts suit employees?", "Wellness, learning, travel and celebration gift cards that support fresh-start goals."],
    ["When should New Year client gifts arrive?", "Between mid-December and the first week of January, avoiding the quietest holiday week."],
  ),
  "year-end-gifting-for-frontline-and-blue-collar-teams": f(
    ["What gift cards do frontline workers value most?", "Practical brands for groceries, household needs, value fashion and marketplace shopping."],
    ["How can we help frontline employees redeem gift cards?", "Provide local-language instructions, choose brands with nearby stores and set up on-site help."],
    ["Should frontline gifts be the same value as office gifts?", "Many companies keep the base festive gift consistent across the workforce to reinforce fairness."],
  ),
  "dhanteras-gold-coin-corporate-gifts": f(
    ["When should Dhanteras gold coin gift cards be delivered?", "A few days before Dhanteras so recipients can plan their purchase."],
    ["Can recipients choose a heavier coin than the card value?", "Usually yes, by paying the difference at the store, subject to brand terms."],
    ["Are gold coin gift cards suitable for clients?", "Only where client gifting policies allow; many organisations restrict high-value gifts."],
  ),
  "festive-gifting-timeline-template": f(
    ["How many weeks does festive gifting take to plan?", "Around eight weeks for larger organisations and four weeks for smaller, fast-moving teams."],
    ["What should be done after the festival?", "Review delivery completion, redemption, support tickets, budget and feedback, and document lessons."],
    ["Can the same timeline work for other festivals?", "Yes. Shift dates to the festival and adjust for your approval cycles."],
  ),
  "buyers-guide-bulk-gift-card-procurement": f(
    ["How do we ensure bulk gift cards are genuine?", "Work with vendors that source from brands or authorised program partners and can explain their sourcing."],
    ["Should we order all brands from a single vendor?", "Consolidating with one vendor simplifies approvals, invoicing and support, provided the catalog meets your needs."],
    ["What delivery options exist for bulk gift cards?", "Direct-to-recipient delivery, bulk codes to the company, or a hybrid of both."],
  ),
  "employee-gift-card-tax-rules-india": f(
    ["Is the ₹5,000 exemption per gift or per year?", "It is generally applied to the aggregate value of gifts and vouchers received from the employer during a financial year. Confirm with your tax advisor."],
    ["Are cash gifts to employees treated the same as vouchers?", "Cash gifts are typically treated as part of salary rather than under the voucher exemption."],
    ["Do we need to deduct TDS on taxable employee gifts?", "Taxable perquisites are generally processed through payroll with applicable TDS. Coordinate with payroll."],
  ),
  "gst-on-gift-vouchers-india": f(
    ["Do corporate buyers pay GST on voucher face value?", "Per the December 2024 clarification, voucher transactions themselves are generally not treated as a supply, but confirm treatment for your transactions with your CA."],
    ["Is GST charged on vendor service fees?", "Separate services such as distribution or platform fees may attract GST and should be shown separately on invoices."],
    ["Can companies claim input tax credit on gift purchases?", "Credit eligibility depends on the nature of the expense and applicable restrictions. Consult your CA."],
  ),
  "evaluating-corporate-gifting-vendors": f(
    ["What's the most important criterion for a gifting vendor?", "Authorised sourcing and reliable fulfilment are foundational, followed by catalog fit, invoicing and support."],
    ["Should we run a pilot with a new vendor?", "Yes. A small real program tests delivery, support and invoicing before you commit to peak festive volumes."],
    ["What questions should we ask vendor references?", "Ask about peak-season reliability, issue resolution speed, invoice accuracy and account management."],
  ),
  "gift-card-program-security-and-fraud-controls": f(
    ["What is the most common gift card fraud targeting companies?", "Executive impersonation scams asking employees to urgently buy gift cards and share codes."],
    ["How can we securely share bulk gift card codes internally?", "Limit access to named custodians, use encrypted or password-protected files and avoid chat or personal email."],
    ["What should we do if gift card codes are leaked?", "Stop distribution, notify the vendor immediately, assess exposure, report as required and strengthen controls."],
  ),
  "managing-gift-card-distribution-at-scale": f(
    ["What causes most gift card delivery issues?", "Incorrect or outdated email addresses and emails landing in spam folders."],
    ["Should we send gift cards to personal or work emails?", "Follow your data policy and employee preferences; work emails are common for active employees."],
    ["How do we distribute gift cards to employees without email?", "Use supervisor-led distribution, printed instructions or other approved channels such as SMS."],
  ),
  "building-a-gifting-policy": f(
    ["Does every company need a gifting policy?", "Any company that gives gifts to employees, clients or partners benefits from a clear policy for fairness, compliance and security."],
    ["What value limits should a gifting policy set?", "Limits vary by company, recipient type and occasion; compliance and finance teams should set them."],
    ["How often should a gifting policy be reviewed?", "At least annually, and whenever tax rules or business practices change."],
  ),
  "multi-brand-vs-single-brand-gift-cards-for-companies": f(
    ["How many brands should a corporate gift menu include?", "Most employee programs work well with five to eight brands covering practical and aspirational categories."],
    ["Do multi-brand programs cost more to run?", "Not necessarily. With a consolidated ordering platform, the effort is similar to single-brand orders."],
    ["When should a company choose a single brand?", "For themed moments, homogeneous groups or specific incentives tied to one brand."],
  ),
  "channel-partner-incentive-programs-explained": f(
    ["Who counts as a channel partner?", "Distributors, dealers, resellers, retailers, agents, installers and other third parties who sell or support your products."],
    ["How long should a channel incentive scheme run?", "Most schemes run for a month to a quarter; short contests may run a few weeks."],
    ["Can channel incentives be combined with margins?", "Yes. Many companies keep margin structures and add targeted gift card incentives for specific behaviours."],
  ),
  "designing-dealer-slab-schemes": f(
    ["How many slabs should a dealer scheme have?", "Three to four slabs keep schemes simple while offering stretch goals."],
    ["Should slabs be absolute or growth-based?", "Growth-based slabs are fairer to smaller dealers; many companies combine both approaches."],
    ["How quickly should dealer rewards be paid?", "Within days of verification to keep schemes credible and motivating."],
  ),
  "sales-contest-ideas-with-gift-cards": f(
    ["How long should a sales contest run?", "Two to six weeks keeps urgency high without causing fatigue."],
    ["How do we prevent contests from encouraging bad deals?", "Set quality criteria such as minimum margin, deal size or customer fit."],
    ["What rewards work best for sales contests?", "Instant gift cards for qualifying actions plus premium rewards for top performers."],
  ),
  "retailer-incentive-programs-fmcg": f(
    ["How do FMCG brands verify retailer displays?", "Field representatives capture photos through apps, supported by periodic audits."],
    ["What rewards motivate kirana store owners?", "Practical rewards such as grocery, household and marketplace gift cards, plus electronics or jewellery for top performers."],
    ["How do we communicate retailer schemes?", "Through field sales representatives and distributors, using simple, local-language scheme cards."],
  ),
  "incentive-programs-for-insurance-and-loan-agents": f(
    ["Are non-cash incentives allowed for insurance agents?", "Rewards for intermediaries are governed by applicable regulations. Design programs with your compliance team and current regulatory guidance."],
    ["Why should agent incentives include quality metrics?", "Quality gates such as persistency and low complaints reduce the risk of mis-selling."],
    ["What are achievers clubs?", "Recognition clubs where agents who meet qualification criteria receive status, events and rewards."],
  ),
  "why-cash-incentives-underperform": f(
    ["Are gift cards always better than cash for incentives?", "Not always. Cash remains essential for core compensation; non-cash rewards often work better for contests and recognition."],
    ["Why are non-cash rewards more memorable?", "They're tied to a specific treat or experience, discussed with others and separated from regular income."],
    ["How can non-cash incentives stay flexible?", "Offer multi-brand menus so recipients can choose rewards that suit them."],
  ),
  "launching-new-products-with-channel-incentives": f(
    ["What's the most important launch incentive?", "It depends on the barrier: training rewards for knowledge gaps, stocking rewards for distribution and first-sale bonuses for hesitation."],
    ["How long should launch incentives last?", "Typically four to eight weeks, then taper into regular schemes."],
    ["Should retail sales staff receive launch incentives directly?", "Rewarding staff who talk to customers can significantly influence recommendations, subject to partner agreements."],
  ),
  "onboarding-kits-new-employee-experience-trend": f(
    ["How much should a company spend on onboarding kits?", "Budgets vary; many companies define a standard kit value with small premiums for leadership or relocation."],
    ["Are digital onboarding kits better than physical swag?", "Digital kits guarantee on-time delivery and practical value; a small physical keepsake can complement them."],
    ["Should interns receive onboarding kits?", "Yes. A lighter kit for interns strengthens employer brand and conversion."],
  ),
  "employee-wellness-rewards": f(
    ["What wellness rewards are most inclusive?", "Participation-based rewards across physical, mental and social wellbeing activities, with low-impact options."],
    ["Should wellness challenges be competitive?", "Friendly team-based challenges work well; emphasise participation over top scores."],
    ["How do we protect privacy in wellness programs?", "Avoid collecting health data, keep participation voluntary and never reward disclosures."],
  ),
  "rewarding-interns-and-campus-hires": f(
    ["How can we reduce campus hire drop-offs before joining?", "Stay engaged between offer and joining with congratulations gifts, meetups and regular updates."],
    ["What rewards suit interns?", "Food, learning and fashion gift cards, plus awards for final project presentations."],
    ["Do intern gifts affect taxes?", "Treatment depends on the intern's engagement terms; check with payroll."],
  ),
  "farewell-and-retirement-gifts": f(
    ["Should companies pay for farewell gifts for resigning employees?", "Many companies leave farewell gifts to team contributions while funding retirement gifts centrally."],
    ["What is a meaningful retirement gift?", "Premium travel, gold or jewellery, hobby-related gifts or family experiences, paired with personal tributes."],
    ["How can we stay connected with retirees?", "Invite them to alumni networks and send occasional festive greetings or updates."],
  ),
  "recognising-managers-and-leaders": f(
    ["Why are managers often under-recognised?", "Recognition programs tend to focus on individual contributors and business results rather than people leadership."],
    ["How do upward nominations work?", "Team members nominate their managers with specific examples of support, growth and positive culture."],
    ["What rewards suit people managers?", "Experiences, learning opportunities and premium choice-led gift cards alongside public recognition."],
  ),
  "employee-referral-rewards": f(
    ["When should referral rewards be paid?", "Staged rewards at interview, hire and probation completion keep referrers engaged."],
    ["Should hiring managers be eligible for referral rewards?", "Many companies exclude referrals into a manager's own team to avoid conflicts."],
    ["Do gift cards work for referral bonuses?", "They work especially well for early-stage rewards, campaign bonuses and recognition of top referrers."],
  ),
  "celebrating-employee-life-events": f(
    ["Which life events should companies recognise?", "Common events include marriages, births and adoptions, new homes, and support during bereavement or illness."],
    ["How do we respect privacy for life events?", "Only announce with consent and let employees choose how much to share."],
    ["What should companies send for bereavement?", "A sincere private note and practical support such as meal delivery, never celebratory gifts."],
  ),
  "client-appreciation-gifting-playbook": f(
    ["How often should B2B companies gift clients?", "A few meaningful moments per year — festive season, milestones and renewals — is typical."],
    ["Should client gifts go to executives or teams?", "Both. Recognise decision-makers and the project teams who make partnerships work."],
    ["How do we track client gifts?", "Maintain a gifting register or CRM log with recipients, values, dates and purposes."],
  ),
  "customer-referral-programs-with-gift-cards": f(
    ["Are gift cards better than discounts for referrals?", "Gift cards often feel more valuable and protect your own pricing, while discounts can train customers to wait for deals."],
    ["How do we prevent referral fraud?", "Reward after qualifying actions, detect self-referrals and cap rewards per referrer."],
    ["What gift cards suit consumer referral programs?", "Food delivery, entertainment and marketplace brands appeal to broad audiences."],
  ),
  "survey-and-research-incentives": f(
    ["Do incentives bias survey results?", "Not when rewards are independent of answers and fairly sized. Never reward specific responses."],
    ["How much should user interview incentives be?", "Size incentives to session length, audience and complexity; B2B experts typically warrant higher incentives."],
    ["How quickly should research incentives be delivered?", "Within a few days of completion, as promised in the invitation."],
  ),
  "event-and-conference-gifting": f(
    ["Can digital gift cards replace conference swag?", "Yes. They reduce logistics and waste while offering attendees something they value."],
    ["How do we deliver gift cards at in-person events?", "Via QR codes at booths, event apps or email after badge scans."],
    ["Are gift cards appropriate for webinar attendees?", "Yes, especially small coffee or food cards timed around the session."],
  ),
  "b2b-account-based-gifting": f(
    ["Is account-based gifting ethical?", "Yes, when gifts are modest, transparent, policy-compliant and never tied to purchase decisions."],
    ["When should sales teams avoid gifting prospects?", "During tenders, final negotiations or when recipient policies prohibit gifts."],
    ["How do we measure ABM gifting impact?", "Track meeting rates, engagement and pipeline progression in gifted accounts as directional indicators."],
  ),
  "customer-service-recovery-gifts": f(
    ["Should every complaint receive a gift?", "No. Reserve gestures for meaningful inconvenience; a sincere apology and fix are always the foundation."],
    ["How do we stop agents over-using recovery gifts?", "Set clear value bands, approval thresholds for high values and monitor usage."],
    ["Are gift cards better than refunds for service recovery?", "They serve different purposes: refunds correct the transaction, while gift cards acknowledge the experience."],
  ),
  "loyalty-program-rewards-gift-cards-vs-points": f(
    ["Why add gift cards to a points program?", "Gift cards give points tangible, aspirational value and broaden reward choice."],
    ["How do we keep loyalty members engaged?", "Offer an early achievable reward, regular reminders, seasonal bonuses and personalised recommendations."],
    ["Do gift card rewards hurt margins?", "They typically have predictable costs and avoid discounting your own products."],
  ),
};
