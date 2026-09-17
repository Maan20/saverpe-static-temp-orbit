import type { Extension } from "./extensions";

// Extended sections for Employee Rewards + Festive posts (merged into the post body in lib/blog.ts).
export const extensionsA: Record<string, Extension> = {
  "employee-rewards-that-actually-work-2026": {
    body: `## A worked example: a 400-person services company

Consider a 400-person professional services firm with teams in three cities and a growing remote workforce. Engagement surveys show that only a minority of employees feel recognised, and exit interviews mention "no appreciation" as a recurring theme.

**Program design:**

| Layer | Design | Estimated annual volume |
|---|---|---|
| Spot awards | ₹1,000 food, coffee or marketplace cards, manager-nominated | ~300 awards |
| Peer awards | ₹500 cards, peer-nominated with light approval | ~400 awards |
| Anniversaries | Tenure-based cards from ₹1,000 upwards | ~350 awards |
| Quarterly stars | ₹5,000 electronics, fashion or travel cards | ~40 awards |
| Annual awards | Premium hotel or travel experiences | ~10 awards |

*Illustrative volumes — every organisation will differ.*

**Rollout sequence:** anniversaries and spot awards in month one, peer awards in month three once managers model the behaviour, quarterly stars from the next quarter.

**What to watch in the first two quarters:** recognition coverage by team, whether remote employees receive a fair share, redemption rates by brand category, and early movement on the "I feel recognised" survey item.

## Checklist before launch

- [ ] Program goals linked to company values
- [ ] Reward layers, criteria and values documented
- [ ] Brand menu covering practical and aspirational categories
- [ ] Nomination and approval flow tested
- [ ] Manager training delivered
- [ ] Payroll aligned on tax tracking
- [ ] Communication plan for launch
- [ ] Quarterly review scheduled

## Key takeaways

- Frequency beats size: many small, timely recognitions outperform a single annual event.
- Choice-led rewards respect diverse preferences and improve redemption.
- Specific messages turn rewards into recognition.
- Design for remote and frontline employees from the start.
- Measure coverage, fairness and outcomes — not just spend.`,
    faqs: [{ q: "Should every employee receive some recognition each year?", a: "Broad coverage is a healthy goal. Tracking the share of employees recognised each quarter helps spot teams or locations that are being overlooked." }],
  },
  "gift-cards-vs-physical-gifts-employee-recognition": {
    body: `## Total cost of ownership: looking beyond the item price

The sticker price of a hamper or branded gift is only part of the cost. When comparing options, include:

| Cost element | Physical gifts | Digital gift cards |
|---|---|---|
| Item or face value | Yes | Yes |
| Packaging | Often significant | None |
| Warehousing | For bulk orders | None |
| Courier & last-mile | Per recipient | None |
| Breakage & replacements | Possible | Rare (code reissue) |
| Admin time | High (tracking, follow-ups) | Low |
| Unused value | Unwanted items | Unredeemed balances (reduced with choice) |

A fair comparison often shows that digital gift cards deliver more recipient value per rupee spent, because less budget goes into logistics.

## A decision framework

Ask these five questions:

1. **How many recipients, and where are they?** Distributed audiences favour digital.
2. **How diverse are their preferences?** Diversity favours choice-led gift cards.
3. **Is a keepsake important?** Ceremonial awards may justify a physical item.
4. **What's the deadline?** Tight timelines favour digital delivery.
5. **What are your sustainability goals?** Digital reduces packaging and transport.

If most answers point to scale, diversity and speed, gift cards are the stronger default.

## Case for a hybrid festive program

A practical hybrid for a mid-sized company might look like this:

- **Every employee:** multi-brand gift card with a personal leadership message
- **Office celebration:** sweets and decorations on site
- **Long-service employees:** a small engraved keepsake plus a premium gift card

This preserves the tangible moment for those who value it while giving everyone meaningful choice.

## Key takeaways

- Compare total cost, not item cost.
- Choice and speed make gift cards the better default for most recognition.
- Keep physical gifts for keepsakes and ceremony.
- Hybrid programs can combine the best of both.`,
  },
  "spot-awards-guide": {
    body: `## Real examples of spot award nominations

Good nominations are short and specific. Here are three illustrative examples:

> **Customer rescue:** "Rohit stayed on a call until 10 pm to restore a client's reporting dashboard before their board meeting. The client emailed our CEO to say thank you."

> **Process improvement:** "Ananya automated the monthly reconciliation spreadsheet. It used to take two days; now it takes two hours."

> **Team support:** "When half the team was down with flu, Farhan covered three extra shifts and trained a new joiner at the same time."

Each nomination names the action, the context and the impact — exactly what the recipient's message should echo.

## Spot award operating calendar

| Cadence | Activity |
|---|---|
| Weekly | Managers review nominations and approve |
| Weekly | Approved rewards issued with messages |
| Monthly | Highlights shared in team meetings or newsletters |
| Quarterly | Budget and distribution review |
| Annually | Criteria and values refreshed |

## Common spot award mistakes

- **Vague messages** like "thanks for your hard work"
- **Approval bottlenecks** that delay rewards by weeks
- **Concentration** — the same visible people winning repeatedly
- **Budget hoarding** — managers saving budget until year-end
- **No visibility** — recognition that no one else hears about

## Spot awards checklist

- [ ] Three to five clear criteria
- [ ] Two or three fixed reward values
- [ ] Brand menu for instant enjoyment
- [ ] Nomination form under two minutes
- [ ] Approval SLA of 48 hours
- [ ] Budget per team per quarter
- [ ] Quarterly fairness review

## Key takeaways

Spot awards work because they are fast, specific and frequent. Keep the process light, the messages meaningful and the rewards easy to enjoy.`,
    faqs: [{ q: "Should spot awards be cash or gift cards?", a: "Gift cards are popular for spot awards because they feel like a treat, can be issued instantly and don't blur into salary. Some companies use both." }],
  },
  "work-anniversary-rewards-by-tenure": {
    body: `## Designing an anniversary program in five steps

1. **Pull a tenure report** from your HRMS showing upcoming anniversaries by month.
2. **Define milestone bands** — for example, 1, 3, 5, 10, 15, 20 and 25 years.
3. **Assign values and brand menus** to each band.
4. **Automate triggers** so managers receive reminders one week before each anniversary.
5. **Place monthly consolidated orders** covering all anniversaries in the coming month.

## Sample monthly order

For a company with 1,200 employees, a typical month might include:

| Milestone | Employees this month | Reward approach |
|---|---|---|
| 1 year | 18 | Food or coffee card |
| 3 years | 9 | Electronics or fashion card |
| 5 years | 5 | Premium card or experience |
| 10 years | 2 | Hotel stay or gold coin card |
| 15+ years | 1 | Luxury experience |

*Illustrative numbers.*

A single consolidated order with multiple brands and denominations covers the whole month.

## Making milestone moments memorable

- **Video messages** from colleagues who have worked with the employee over the years
- **A "then and now" photo** in the team channel
- **Leadership calls** for 10-year-plus milestones
- **Family inclusion** — experiences they can share

## Anniversary programs for fast-growing companies

Startups often have few long-tenured employees but many first anniversaries. Focus early budgets on making year one and year two memorable — these are high-attrition windows.

## Key takeaways

- Tenure-based rewards should escalate meaningfully.
- Automation ensures no anniversary is missed.
- Specific reflections on contribution matter as much as the reward.
- Monthly consolidated orders keep operations simple.`,
  },
  "peer-to-peer-recognition-programs": {
    body: `## Peer recognition across locations and levels

One of the biggest benefits of peer recognition is breaking silos. Encourage recognition that crosses boundaries:

- **Cross-functional:** engineering thanking customer support for insights
- **Cross-location:** a Pune team thanking a Chennai team for weekend support
- **Upward:** team members recognising managers
- **Downward and lateral:** managers participating as peers

Report on these patterns — they reveal collaboration health across the organisation.

## A sample monthly peer recognition cycle

| Week | Activity |
|---|---|
| Week 1–4 | Employees post kudos and nominations |
| Week 4 | Committee reviews nominations for monetary awards |
| Week 4 | Winners notified with gift card rewards |
| Following week | Highlights shared in all-hands |

## Keeping the program fresh

Peer programs can lose energy after the launch buzz. Keep them alive with:

- **Themed months** — "customer obsession month", "mentorship month"
- **Recognition streaks** — celebrate people who consistently appreciate others
- **Leadership participation** — leaders giving peer-style kudos publicly
- **Refreshing the brand menu** each quarter

## Peer recognition checklist

- [ ] Nomination form with three questions
- [ ] Public kudos channel
- [ ] Reward values and monthly caps
- [ ] Anti-gaming rules (no reciprocal awards)
- [ ] Monthly committee or manager review
- [ ] Quarterly distribution analysis

## Key takeaways

Peer recognition scales appreciation beyond managers, strengthens collaboration and surfaces hidden contributions. Simple mechanics, fair guardrails and visible celebration keep it thriving.`,
  },
  "rewarding-remote-and-hybrid-teams": {
    body: `## A 90-day plan to fix remote recognition gaps

### Days 1–30: Diagnose

- Pull recognition data by work mode (office, hybrid, remote)
- Run a short pulse survey on feeling recognised
- Interview a few remote employees

### Days 31–60: Redesign

- Replace office-only perks with digital equivalents
- Launch an async kudos channel
- Train managers on proximity bias
- Set a rule: every company-wide reward must reach remote employees on the same day

### Days 61–90: Measure and refine

- Compare recognition frequency by work mode
- Review redemption of digital rewards
- Repeat the pulse survey

## Remote celebration playbook

| Moment | Remote-first format |
|---|---|
| New joiner | Welcome kit + virtual team lunch |
| Birthday | Gift card + team video message |
| Project launch | Food cards + launch call |
| Quarterly awards | Virtual ceremony + instant rewards |
| Festive season | Multi-brand gift cards + online celebration |

## Tips for managers of distributed teams

- Keep a simple log of recognition given to avoid unintentional bias
- Recognise asynchronous contributions — documentation, code reviews, mentoring
- Rotate who presents in meetings so remote voices are heard
- Celebrate results in shared channels, not just in the office

## Key takeaways

Distributed teams need recognition designed for them, not adapted as an afterthought. Digital rewards, synchronised celebrations and deliberate fairness checks close the gap.`,
    faqs: [{ q: "How do we celebrate remote employees' birthdays?", a: "A common approach is a gift card delivered on the day, plus a short team video message or a few minutes of celebration at the start of a team call." }],
  },
  "recognition-budget-how-much-to-spend": {
    body: `## A sample budget build for a 250-person company

The following is an illustrative bottom-up estimate:

| Program | Assumption | Estimated annual cost |
|---|---|---|
| Festive gift | 250 employees × ₹2,000 | ₹5,00,000 |
| Work anniversaries | ~150 anniversaries × ₹1,500 average | ₹2,25,000 |
| Spot awards | ~200 awards × ₹1,000 | ₹2,00,000 |
| Peer awards | ~250 awards × ₹500 | ₹1,25,000 |
| Quarterly awards | 20 awards × ₹5,000 | ₹1,00,000 |
| Annual awards | 5 awards × ₹20,000 | ₹1,00,000 |
| Contingency | ~10% | ₹1,25,000 |
| **Total** | | **~₹13,75,000** |

*Illustrative only — adjust to your context, values and tax planning.*

## Phasing the budget through the year

Recognition spend is uneven. Festive gifting concentrates spend in one quarter, while spot and anniversary programs run steadily. Build a monthly phasing plan so finance isn't surprised by seasonal peaks.

## Budget governance

- **Owner:** HR or People team
- **Allocations:** by department, proportional to headcount
- **Approvals:** thresholds for high-value awards
- **Reporting:** monthly spend vs plan
- **Reallocation:** quarterly, based on usage

## Signs your budget is too small

- Managers stop nominating because "there's no budget"
- Recognition concentrates in a few teams
- Rewards feel token-sized relative to effort

## Signs your budget isn't being used well

- Low redemption rates
- High spend on a single annual event
- Recognition not linked to specific behaviours

## Key takeaways

Build budgets from programs and participation, phase them through the year, govern them lightly and review usage quarterly.`,
  },
  "measuring-roi-of-employee-recognition": {
    body: `## Setting up your measurement baseline

Before launching or redesigning a program, capture a baseline:

1. **Engagement survey** items related to recognition and appreciation
2. **Regretted attrition** over the last 12 months by team
3. **Recognition activity** (if any existing program) by team and location
4. **Qualitative themes** from exit interviews

Without a baseline, it's hard to show change.

## Sample quarterly dashboard

| Metric | Last quarter | This quarter | Trend |
|---|---|---|---|
| Recognition coverage | 38% | 57% | Up |
| Recognitions per 100 employees | 42 | 71 | Up |
| Remote vs office coverage gap | 14 pts | 6 pts | Improving |
| Gift card redemption rate | 81% | 88% | Up |
| "I feel recognised" survey score | 3.4 | 3.7 | Up |

*Illustrative numbers to show format.*

## Telling the story to leadership

Numbers matter, but stories persuade. Pair your dashboard with:

- One example of recognition that retained a key employee
- A quote from a pulse survey
- A before-and-after for a team that adopted the program

## Linking recognition to business KPIs

Where possible, look for directional relationships between recognition activity and:

- Customer satisfaction in service teams
- Safety incidents in operations teams
- Sales productivity in commercial teams

Treat these as signals, not proof, and look for consistency over several quarters.

## Key takeaways

Establish a baseline, track leading and lagging indicators quarterly, highlight fairness and combine data with stories. Consistent measurement builds the case for sustained investment.`,
  },
  "how-to-plan-festive-corporate-gifting-at-scale": {
    body: `## Example: a 2,500-person festive program

An illustrative festive plan for a company with 2,500 employees, 60 key clients and 300 channel partners:

| Group | Recipients | Brand menu | Value per recipient |
|---|---|---|---|
| Employees | 2,300 | Marketplace, fashion, sweets, groceries | ₹1,500 |
| People managers | 180 | Electronics, fashion, home decor | ₹3,000 |
| Leadership | 20 | Gold coin, luxury hotel, premium electronics | ₹10,000 |
| Key clients | 60 | Premium dining, gourmet, hotel | Per client policy |
| Channel partners | 300 | Marketplace, electronics, jewellery by tier | ₹2,000–₹10,000 |

*Illustrative structure — values should reflect your budget, policies and tax planning.*

All five groups can be captured in a single consolidated order, with each brand's denominations and quantities listed separately.

## Communication templates

**Pre-announcement (one week before):**

> "This festive season, we're thanking every member of our team with a gift you can choose yourself. Look out for an email on [date] with details."

**Delivery day:**

> "Wishing you and your family a joyful festive season. Thank you for everything you've contributed this year. — [Leader name]"

## Risk register

| Risk | Mitigation |
|---|---|
| Late approvals | Start 8 weeks early, pre-book finance review |
| Incorrect emails | Validate data at T-4 weeks |
| Headcount changes | Buffer quantity or top-up order |
| Code issues | Support inbox and vendor escalation path |
| Holiday banking delays | Complete payment at T-3 weeks |

## Key takeaways

Scale festive gifting through segmentation, early planning, a consolidated order, clean data and clear communication. Digital multi-brand gifting removes most of the logistical risk.`,
  },
  "diwali-corporate-gifting-checklist": {
    body: `## Who owns what

Assigning owners prevents tasks from falling through the cracks:

| Area | Owner |
|---|---|
| Budget and approvals | Finance + HR head |
| Recipient data | HR operations |
| Brand selection | HR + employee committee |
| Vendor and quote | Procurement |
| Messaging | Internal communications + leadership |
| Delivery and support | HR operations |
| Review | HR analytics |

## Employee FAQ template

Share a short FAQ with employees before delivery:

- **When will I receive my gift?** On [date] by email.
- **What if I don't see the email?** Check spam or promotions; then contact [support email].
- **Can I use it online or in stores?** It depends on the brand; details are in the email.
- **How long is it valid?** Validity is listed in the email; please use it before it expires.
- **Who do I contact with problems?** [Support email].

## Post-Diwali review questions

1. Did every eligible employee receive their gift on time?
2. Which brands were most popular?
3. How many support tickets were raised, and how quickly were they resolved?
4. Did we stay within budget?
5. What would we do differently next year?

## Key takeaways

A checklist with named owners, an employee FAQ and a structured post-festival review turns Diwali gifting into a repeatable, low-stress program.`,
  },
  "corporate-diwali-gift-ideas-by-employee-tier": {
    body: `## Making every tier feel special

Tiering is about budget, not about how much people matter. A few practices keep every tier feeling valued:

- **Identical leadership message** for everyone
- **Same delivery date and time** for all tiers
- **Choice at every level** — no tier gets a single, fixed item
- **Discreet values** — employees see their own gift, not others'

## Sample tier menus with brand examples

| Tier | Example brands from a typical catalog |
|---|---|
| All employees | Amazon, Flipkart, BigBasket, Lifestyle, Bikanervala |
| Managers | Croma, Myntra, Pepperfry, Westside |
| Leadership | Tanishq gold coin, Taj Hotels, Samsung |

*Brand availability should be confirmed at the time of ordering.*

## Handling edge cases

- **Promotions during the season:** apply the tier the employee held on the cut-off date
- **Employees on notice:** follow a clear, pre-announced policy
- **Part-time and contract staff:** consider a standard tier gift
- **Employees on long leave:** include them — digital delivery makes it easy

## Budget example for tiered gifting

For 1,000 employees with 850 in tier 1, 130 in tier 2 and 20 in tier 3, a simple multiplication of recipients by tier values gives the total budget. Adding a small buffer covers late joiners.

## Key takeaways

Tier by budget, not by care. Keep choice, warmth and timing consistent across tiers, and handle edge cases with clear rules.`,
  },
  "inclusive-festive-gifting-diverse-workforce": {
    body: `## An inclusive festive calendar for Indian workplaces

Recognising a range of festivals across the year signals respect. An illustrative internal greetings calendar might include:

| Period | Festivals to acknowledge |
|---|---|
| January | Makar Sankranti, Pongal, Lohri |
| March–April | Holi, Eid (dates vary), Easter, regional new years |
| August–September | Raksha Bandhan, Onam, Ganesh Chaturthi, Janmashtami |
| October–November | Navratri, Durga Puja, Dussehra, Diwali, Guru Nanak Jayanti, Chhath |
| December | Christmas |

*Festival dates vary each year; confirm annually.*

## Employee resource groups can help

If your organisation has employee resource groups or culture committees, involve them in:

- Reviewing the brand menu for inclusivity
- Suggesting how different festivals can be acknowledged
- Drafting inclusive messages

## Checklist for inclusive festive gifting

- [ ] Neutral, welcoming framing for the main program
- [ ] Multi-brand menu with broadly useful options
- [ ] No alcohol, religious items or assumptions about diet
- [ ] Contract and remote staff included
- [ ] Greetings calendar for major festivals
- [ ] Feedback channel after the program

## Key takeaways

Inclusive festive gifting is about choice, respectful framing and recognising the diversity of celebrations across the year. It strengthens belonging without diluting festive joy.`,
  },
  "new-year-corporate-gifts-clients-employees": {
    body: `## New Year client gifting by account tier

| Account tier | Gift approach |
|---|---|
| Strategic | Premium dining or hotel experience + CEO note |
| Core | Gourmet, coffee or marketplace card + account owner note |
| Growth | Warm greeting + small treat |

## Employee kick-off ideas

Many companies hold a January kick-off. Gift cards can make it memorable:

- **Kick-off lunch:** food delivery cards for remote attendees
- **Goal-setting rewards:** wellness or learning cards
- **Last year's champions:** premium experiences announced on stage

## Year-in-review note template

> "Dear [Name],
> This year, together we [specific achievement 1] and [specific achievement 2]. Thank you for your trust and partnership. As a small token of appreciation, please enjoy [gift]. We're looking forward to [shared goal] next year.
> Warm regards, [Account owner]"

## Timing considerations

- Many offices slow down in the last week of December. Deliver client gifts a little earlier so they aren't lost in holiday inboxes.
- For employees, a gift delivered during the last working week often lands better than one that arrives while people are on leave.

## Key takeaways

New Year gifting is inclusive, forward-looking and less crowded than Diwali. Tier client gifts, personalise notes and align employee gifts with fresh-start themes.`,
  },
  "year-end-gifting-for-frontline-and-blue-collar-teams": {
    body: `## A distribution model for plants and warehouses

For sites where many employees don't use email, a supervised distribution model works well:

1. **Prepare recipient lists by shift and supervisor**
2. **Print simple, local-language instruction slips** explaining how to use the gift card
3. **Share codes securely** with supervisors or directly via SMS, as appropriate
4. **Hold a short celebration at shift change** with sweets and a leadership message
5. **Set up a help desk** on site for a few days after distribution

## Redemption support matters

Frontline employees may be less familiar with online redemption. Help by:

- Choosing brands with stores near the site
- Demonstrating redemption at the celebration
- Providing a phone-friendly help guide
- Nominating "gift champions" among supervisors

## Recognition beyond the gift

Frontline teams often feel distant from leadership. Consider:

- Leaders visiting sites during the festive season
- Recognising safety and quality achievements publicly
- Including frontline stories in company newsletters

## Key takeaways

Practical brands, supervised distribution, local-language support and visible leadership appreciation make festive gifting meaningful for frontline teams.`,
    faqs: [{ q: "How can gift cards be distributed to employees without email?", a: "Common approaches include supervisor-led distribution with printed instructions, SMS-based delivery where appropriate, or on-site help desks during celebrations." }],
  },
  "dhanteras-gold-coin-corporate-gifts": {
    body: `## Choosing jewellery brands for coin gift cards

Consider these factors:

| Factor | Why it matters |
|---|---|
| Store presence in recipients' cities | Recipients need convenient redemption |
| Coin availability | Ensure coins are stocked around Dhanteras |
| Card variant | Coin-only vs jewellery cards |
| Online redemption | Helpful for remote recipients |
| Brand trust | Hallmarked, established jewellers |

## Communicating the gift

Recipients should understand:

- That the card is for a gold or silver coin (or jewellery, if that variant)
- That the final coin weight depends on prevailing metal rates and applicable charges
- Participating stores and validity
- That they may need to pay a difference for larger coins

## Combining coin cards with a broader festive program

Coin cards typically sit in the leadership or long-service tier of a festive program, alongside marketplace and fashion cards for other employees. A single consolidated order can include all of them.

## Key takeaways

Gold and silver coin gift cards are a culturally meaningful Dhanteras gift for senior employees and key relationships. Choose widely available brands, deliver early, explain how the card works and plan for tax treatment.`,
  },
  "festive-gifting-timeline-template": {
    body: `## A compressed four-week version for smaller teams

| Week | Milestones |
|---|---|
| T-4 | Budget, recipient groups, brand menu |
| T-3 | Clean data, request and approve quote |
| T-2 | Payment, messaging, FAQ |
| T-1 | Schedule delivery, brief managers |
| T-0 | Deliver and support |

This works well for companies with fewer than 200 recipients and fast approvals.

## RACI for festive gifting

| Task | Responsible | Accountable | Consulted | Informed |
|---|---|---|---|---|
| Budget | HR | Finance head | Leadership | Managers |
| Brand menu | HR | HR head | Employee committee | Employees |
| Data | HR ops | HR head | IT | — |
| Quote & PO | Procurement | Procurement head | Finance | HR |
| Messaging | Internal comms | HR head | Leadership | Employees |
| Delivery | HR ops | HR head | Vendor | Managers |

## Retrospective template

- **What went well?**
- **What didn't go well?**
- **What surprised us?**
- **What will we change next year?**
- **Which dates should we lock in now for next year?**

## Key takeaways

Treat festive gifting as a time-boxed project with owners, milestones and a retrospective. Reusing the template each year compounds improvements.`,
  },
};
