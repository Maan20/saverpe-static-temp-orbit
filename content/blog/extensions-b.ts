import type { Extension } from "./extensions";

// Extended sections for Procurement + Channel Incentive posts.
export const extensionsB: Record<string, Extension> = {
  "buyers-guide-bulk-gift-card-procurement": {
    body: `## Sample RFQ structure for bulk gift cards

When requesting quotes from vendors, a standard structure makes comparison easier:

1. **Company overview** and program purpose
2. **Recipient groups** with approximate counts
3. **Brand requirements** — mandatory brands, preferred categories, open to recommendations
4. **Denominations and quantities** per brand
5. **Delivery requirements** — date, method, direct-to-recipient or bulk
6. **Invoicing requirements** — GST details, PO references, documentation
7. **Security requirements** — code delivery, access, incident handling
8. **Support requirements** — contact, SLAs, escalation
9. **Commercials** — pricing, fees, payment terms
10. **References** — similar programs delivered

## Comparing quotes fairly

| Compare | Watch for |
|---|---|
| Total face value | Same brands, denominations and quantities |
| Fees or charges | Separate service or platform fees |
| Discounts | Brand-specific vs overall |
| Delivery timelines | Especially for peak festive dates |
| Validity | Differences between brands and sources |
| Support | Named contact vs generic inbox |

## Negotiation levers

- **Volume consolidation:** combining festive, rewards and incentives with one partner
- **Advance planning:** earlier orders ahead of peak periods
- **Payment terms:** faster payment in exchange for better commercials
- **Multi-year relationship:** annual programs rather than one-off orders

## Key takeaways

Good procurement starts with clear requirements, uses a structured RFQ, compares quotes like-for-like and secures strong support and security commitments — not just price.`,
  },
  "employee-gift-card-tax-rules-india": {
    body: `## Building a simple tracking sheet

A lightweight tracker helps payroll teams stay on top of aggregate values:

| Employee ID | Program | Date | Brand | Value | Running total (FY) |
|---|---|---|---|---|---|
| E1024 | Festive | Oct | Marketplace | ₹2,000 | ₹2,000 |
| E1024 | Birthday | Dec | Food | ₹500 | ₹2,500 |
| E1024 | Spot award | Feb | Electronics | ₹3,000 | ₹5,500 |

When the running total approaches the threshold, payroll can plan the appropriate treatment. Consolidated order records from your gifting partner make it easier to populate this sheet.

## Communication to employees

If some awards are expected to be taxable:

- Mention it in award letters or messages in plain language
- Explain that the value will appear as a perquisite on payslips
- Offer a contact for questions

Transparency protects the positive impact of the reward.

## Questions to ask your tax advisor

1. Which of our programs fall under the gift/voucher perquisite rules?
2. How should awards linked to performance be treated?
3. How should we treat gifts to interns, consultants or contract staff?
4. What documentation should we maintain?
5. How should values be reflected in payroll and Form 16?

## Key takeaways

Track every gift and voucher per employee, understand the exemption threshold, communicate clearly when awards are taxable and rely on qualified advice for specific programs.`,
    faqs: [{ q: "Do festive gift cards count towards the annual gift exemption?", a: "Generally yes — gifts and vouchers given during the financial year, including festive gifts, are typically aggregated. Confirm treatment with your tax advisor." }],
  },
  "gst-on-gift-vouchers-india": {
    body: `## Practical documentation checklist for finance teams

- [ ] Purchase order referencing voucher quantities and denominations
- [ ] Invoice clearly separating voucher value and any service charges
- [ ] Vendor GST registration details (where GST is charged on services)
- [ ] Order summary by brand and denomination
- [ ] Delivery confirmation records
- [ ] Internal approval records
- [ ] Mapping of recipients to programs (for income tax purposes)

## Scenarios to discuss with your CA

| Scenario | Question to explore |
|---|---|
| Employee festive gifts | Expense classification and any credit restrictions on gifts |
| Channel partner incentives | Interaction with TDS provisions on business benefits |
| Customer promotions | Treatment as marketing expense |
| Client gifts | Documentation and policy compliance |
| Service fees from vendor | GST applicability and credit eligibility |

## Keeping up with changes

Indirect tax rules and clarifications can change. Ask your CA to review your gifting process annually, and confirm current guidance before large festive programs.

## Key takeaways

Understand the difference between voucher value and service fees, keep strong documentation, and review treatment with your CA — especially before high-volume festive and incentive programs.`,
  },
  "evaluating-corporate-gifting-vendors": {
    body: `## A sample scored comparison

| Criterion (weight) | Vendor A | Vendor B | Vendor C |
|---|---|---|---|
| Catalog (15%) | 4 | 3 | 5 |
| Authorised sourcing (15%) | 5 | 3 | 4 |
| Ordering flexibility (15%) | 3 | 4 | 5 |
| Invoicing (10%) | 4 | 4 | 4 |
| Delivery (10%) | 3 | 4 | 4 |
| Security (10%) | 4 | 3 | 4 |
| Data protection (5%) | 4 | 3 | 4 |
| Support (10%) | 3 | 5 | 4 |
| Pricing (10%) | 5 | 4 | 3 |

*Scores on a 1–5 scale; multiply by weights to get totals. Illustrative only.*

## Running a pilot

A good pilot:

- Uses a real but limited program (for example, one quarter of spot awards)
- Includes at least five brands and two denominations
- Tests delivery, a support ticket and invoicing
- Collects recipient feedback

## Ongoing vendor management

After selection:

- Hold quarterly business reviews
- Track SLAs for delivery and issue resolution
- Review brand catalog relevance annually
- Monitor invoice accuracy

## Key takeaways

Use a weighted scorecard, validate claims in demos, check references and pilot before scaling. Ongoing reviews keep the partnership performing.`,
  },
  "gift-card-program-security-and-fraud-controls": {
    body: `## Security awareness message template

Share a short message with employees before festive season:

> "Reminder: our company will never ask you to buy gift cards or share gift card codes via chat, email or phone — even if the message appears to come from a senior leader. If you receive such a request, do not act on it. Verify by calling the person on their known number and report it to [security contact]."

## Control self-assessment

Rate each control as in place, partial or missing:

| Control | Status |
|---|---|
| Documented gifting policy | |
| Approval workflow with thresholds | |
| Segregation of ordering and distribution | |
| Restricted access to code files | |
| Encrypted transfer of codes | |
| Direct-to-recipient delivery where possible | |
| Verification of out-of-process requests | |
| Monthly reconciliation | |
| Incident response plan | |
| Security awareness training | |

## Red flags in vendor or internal processes

- Codes shared in plain spreadsheets over email
- One person orders, receives and distributes codes
- No reconciliation of undistributed codes
- Urgent, undocumented gift card purchases

## Key takeaways

Treat gift card codes like cash. Combine governance, segregation of duties, secure delivery, verification of unusual requests and reconciliation to keep programs safe.`,
  },
  "managing-gift-card-distribution-at-scale": {
    body: `## Sample support macros

**Not received:**

> "Thanks for reaching out. Your gift was sent to [email] on [date]. Please check your spam and promotions folders. If you still can't find it, reply with your employee ID and we'll check the delivery status."

**Code not working:**

> "Sorry for the trouble. Please share the brand name, the last four digits of the code and a screenshot of the error. We'll escalate to our gifting partner and update you within one business day."

**Which stores accept it?**

> "Redemption details, including participating stores and online use, are included in your gift email. You can also find the brand's terms at [link]."

## Delivery day run-of-show

| Time | Activity |
|---|---|
| 9:00 am | Confirm vendor delivery initiation |
| 9:30 am | Leadership message published |
| 10:00 am | Support inbox monitoring begins |
| 1:00 pm | Midday check on bounced emails |
| 5:00 pm | Day-one summary: delivered, pending, issues |
| Next day | Resolve outstanding tickets |

## Metrics to track

- Delivery success rate
- Bounce rate and correction time
- Support tickets per 1,000 recipients
- Average resolution time

## Key takeaways

Clean data, the right delivery model, proactive communication, prepared support and disciplined reconciliation turn large-scale distribution into a smooth operation.`,
  },
  "building-a-gifting-policy": {
    body: `## Sample policy clauses (for adaptation)

**Purpose:**

> "This policy sets out how [Company] gives gifts, rewards and incentives to employees, clients, partners and other stakeholders, to ensure they are appropriate, fair, compliant and secure."

**Client gifts:**

> "Gifts to clients must be of modest value, must not be given during active tenders or negotiations, must comply with the recipient organisation's gifting policies, and must be recorded in the gifting register."

**Verification of requests:**

> "Any request to purchase gift cards or share gift card codes outside the approved process must be verified through a separate, known communication channel before action is taken."

*These are illustrative starting points; have legal and compliance teams review your final policy.*

## Gifting register template

| Date | Recipient | Organisation | Occasion | Value | Approved by | Purpose |
|---|---|---|---|---|---|---|

## Policy rollout checklist

- [ ] Draft reviewed by HR, finance, legal and procurement
- [ ] Approved by leadership
- [ ] Published on intranet
- [ ] Training for HR, sales, procurement and executive assistants
- [ ] Gifting register set up
- [ ] Annual review date set

## Key takeaways

A clear gifting policy balances generosity with compliance and security. Keep it practical, train the people who use it and review it annually.`,
  },
  "multi-brand-vs-single-brand-gift-cards-for-companies": {
    body: `## Example menus by program

| Program | Suggested menu |
|---|---|
| Festive employee gifts | Marketplace, groceries, fashion, sweets, electronics |
| Spot awards | Food delivery, coffee, marketplace, entertainment |
| Channel incentives (lower slabs) | Marketplace, groceries, fuel, fashion |
| Channel incentives (top slabs) | Electronics, jewellery, travel |
| Client gifts | Premium dining, gourmet, hotels |
| Onboarding kits | Electronics accessories, food delivery, coffee |

## How to choose menu size

- **3–4 brands** for small, themed programs
- **5–8 brands** for most employee programs
- **8–12 brands** for large, diverse workforces

Too many options can overwhelm; too few limit relevance.

## Refreshing menus

Review menus annually using:

- Redemption data by brand
- Employee survey feedback
- New brand availability
- Regional preferences

## Key takeaways

Multi-brand menus usually deliver better relevance and redemption, while single brands suit themed or homogeneous programs. With a consolidated ordering tool, multi-brand programs are just as easy to run.`,
  },
  "channel-partner-incentive-programs-explained": {
    body: `## Program design template

| Element | Your program |
|---|---|
| Objective | e.g., grow festive-quarter sales of a product line |
| Eligible partners | e.g., authorised dealers in selected regions |
| Period | e.g., 1 September – 30 November |
| Metric | e.g., sell-in volume vs last year |
| Tiers | e.g., three growth slabs |
| Rewards | e.g., multi-brand gift cards by slab |
| Verification | e.g., distributor invoices |
| Fulfilment | e.g., fortnightly batches |
| Communication | e.g., sales team briefings + weekly updates |

## Communication cadence

- **Launch:** scheme summary, examples, FAQ
- **Weekly:** progress updates and leaderboard
- **Mid-scheme:** reminders and highlight early winners
- **Final week:** "last chance" push
- **Post-scheme:** results and thank-you

## Partner feedback loop

After each scheme, ask a sample of partners:

- Were the rules clear?
- Were rewards motivating?
- Did rewards arrive on time?
- What would make the next scheme better?

## Key takeaways

Great channel incentives have one clear objective, simple tiers, credible fast rewards and consistent communication. Measure incremental impact and iterate each scheme.`,
  },
  "designing-dealer-slab-schemes": {
    body: `## Worked example: festive quarter slab scheme

A consumer durables brand runs a growth-based scheme for dealers:

| Slab | Target (vs last year's festive quarter) | Reward |
|---|---|---|
| Slab 1 | +10% | ₹2,000 in marketplace or grocery gift cards |
| Slab 2 | +25% | ₹7,500 in electronics or fashion gift cards |
| Slab 3 | +40% | ₹20,000 in jewellery or electronics gift cards |
| Top 10 nationally | Highest growth | Travel experience |

*Illustrative values; calibrate to margins and incremental revenue.*

**Cost check:** Estimate expected dealers per slab, multiply by rewards, and compare total cost with projected incremental gross margin.

## Handling edge cases

- **New dealers without baseline:** use absolute slabs or regional averages
- **Stock returns:** net returns from qualifying volume
- **Disputes:** define a clear resolution window and data source
- **Mergers or ownership changes:** decide eligibility rules upfront

## Communication example

> "Namaste! You're at 18% growth this quarter. Just 7% more to reach Slab 2 and unlock ₹7,500 in gift cards of your choice. Scheme ends 30 November."

## Key takeaways

Calibrate slabs to baselines, keep them few and clear, escalate rewards meaningfully, communicate progress personally and fulfil fast.`,
  },
  "sales-contest-ideas-with-gift-cards": {
    body: `## Contest planning template

| Field | Example |
|---|---|
| Contest name | "Q3 New Logo Sprint" |
| Objective | Win new customers in target segment |
| Duration | 4 weeks |
| Eligible participants | Account executives in two regions |
| Metric | Signed new logos meeting minimum deal size |
| Rewards | ₹2,000 per new logo; top 3 get premium electronics cards |
| Tracking | CRM report, updated daily |
| Communication | Kick-off call, weekly leaderboard, final celebration |

## Keeping contests healthy

- **Guard against bad deals:** set minimum deal quality or margin criteria
- **Avoid pull-forward:** watch for deals moved from the next month
- **Rotate formats:** different contest types keep energy fresh
- **Celebrate effort:** recognise activity and improvement, not just totals

## Sample contest calendar for a year

| Quarter | Contest |
|---|---|
| Q1 | Pipeline build activity blitz |
| Q2 | Product focus challenge |
| Q3 | New logo sprint |
| Q4 | Festive season push + team relay |

## Key takeaways

Short, clear, fair contests with instant rewards energise teams. Mix threshold and ranking rewards, protect deal quality and rotate formats through the year.`,
  },
  "retailer-incentive-programs-fmcg": {
    body: `## Example: display contest for a beverage brand

| Element | Design |
|---|---|
| Objective | Improve cooler and shelf visibility in summer |
| Eligible retailers | Selected outlets in three cities |
| Criteria | Planogram compliance on four photo audits |
| Verification | Field rep photos via app |
| Rewards | Monthly gift cards for compliant stores; grand prize for best displays |
| Brands | Grocery, marketplace, electronics |

*Illustrative example.*

## Engaging retailers with limited time

Retailers are busy. Make participation effortless:

- Field reps handle photo submissions
- Rewards are explained in one sentence
- Progress is shared during regular visits
- Winners are celebrated with photos (with permission)

## Distributor collaboration

Distributors are key partners in retailer programs. Align with them on:

- Data for offtake-based schemes
- Communication through their salesmen
- Their own incentives for driving retailer participation

## Key takeaways

Retailer programs should be simple, verifiable and rewarding. Practical gift cards, field-rep-led communication and fast fulfilment drive participation and visibility.`,
  },
  "incentive-programs-for-insurance-and-loan-agents": {
    body: `## Sample achievers club structure

| Tier | Illustrative qualification | Benefits |
|---|---|---|
| Silver | Business target + minimum quality score | Gift cards + certificate |
| Gold | Higher business target + persistency threshold | Premium gift cards + regional event |
| Platinum | Top performers with strong quality metrics | Travel experience + leadership recognition |

*Qualification criteria must comply with applicable regulations and internal policies.*

## Quality-weighted scoring

Instead of pure volume, score agents on a combination such as:

- Business volume
- Persistency or repayment quality
- Complaint ratio
- Compliance training status

A balanced score reduces the risk of rewarding poor-quality business.

## Engaging agents digitally

- App-based progress trackers
- Monthly digital certificates
- Instant gift card rewards for short contests
- Recognition posts in agent communities

## Key takeaways

Agent incentives in BFSI should reward quality alongside volume, be designed with compliance teams, and combine recognition with fast, meaningful rewards.`,
  },
  "why-cash-incentives-underperform": {
    body: `## Illustrative comparison: same budget, different design

Imagine two sales teams with the same incentive budget for a quarter:

**Team A** receives cash bonuses credited with salary at the end of the quarter.

**Team B** receives:
- Instant gift cards for qualifying deals
- Public recognition in weekly calls
- A choice of electronics or travel rewards for top performers

In many organisations, Team B's program generates more conversation, visible excitement and a stronger link between action and reward — even though the budget is identical. The difference lies in timing, visibility and emotional value.

## Designing a hybrid approach

- Keep **commissions and core variable pay** in cash
- Use **non-cash rewards** for contests, spot incentives and recognition
- Offer **choice menus** to preserve flexibility
- **Celebrate winners publicly** to amplify impact

## Questions to ask before choosing incentive type

1. Is this compensation or recognition?
2. Do we want the reward to be memorable and discussed?
3. How quickly can we deliver it?
4. Will recipients see it as part of their normal pay?

## Key takeaways

Cash remains essential for core compensation, but for contests, recognition and targeted incentives, non-cash rewards often create stronger motivation per rupee.`,
  },
  "launching-new-products-with-channel-incentives": {
    body: `## Launch incentive budget planning

Estimate costs by incentive component:

| Component | Driver | Estimate method |
|---|---|---|
| Training rewards | Number of trained staff | Staff × reward value |
| Stocking rewards | Partners stocking | Partners × reward |
| First-sale bonuses | First units sold | Expected partners × units × reward |
| Display rewards | Verified displays | Displays × reward |
| Leaderboard prizes | Winners | Fixed prize pool |

Compare total cost with expected launch-period gross margin and long-term product value.

## Post-launch transition

Launch incentives should taper into regular programs:

- Fold the new product into standard slab schemes
- Keep a smaller product-focus bonus for a few months
- Continue recognising top sellers

## Launch checklist

- [ ] Product training content ready
- [ ] Scheme rules documented and translated
- [ ] Verification process defined
- [ ] Reward menu and budget approved
- [ ] Sales team briefed
- [ ] Progress tracking set up
- [ ] Rewards pre-ordered for fast fulfilment

## Key takeaways

Launch incentives work when they target the specific barriers to adoption — knowledge, stocking and first sales — in a short, focused window with fast rewards.`,
  },
};
