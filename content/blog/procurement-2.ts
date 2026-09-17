import type { PostInput } from "@/lib/blog";

export const procurement2: PostInput[] = [
  {
    slug: "corporate-gifting-budget-template",
    title: "Corporate Gifting Budget Template: Plan a Full Year of Gifting",
    description: "A practical annual corporate gifting budget template — recipient groups, occasions, per-person values, phasing by quarter, contingency and reporting for finance.",
    category: "procurement",
    tags: ["budget", "template", "finance", "annual planning"],
    date: "2026-09-12",
    cover: { prompt: "Clean spreadsheet on a large monitor showing an annual corporate gifting budget with quarterly columns, recipient groups and totals, Indian finance professional reviewing it with a coffee, organised office, purple chart accents | 16:9 | 1600x900", alt: "Annual corporate gifting budget spreadsheet" },
    tldr: "Build a corporate gifting budget by listing recipient groups (employees, managers, leadership, clients, partners), mapping occasions to each, setting per-person values, multiplying by headcount, phasing spend by quarter and adding a 10% contingency. Review actuals monthly and adjust quarterly.",
    body: `Gifting spend is often scattered across HR, sales and marketing budgets — making it hard to control. A single annual template brings clarity.

## Step 1: List recipient groups

| Group | Owner |
|---|---|
| All employees | HR |
| People managers | HR |
| Leadership | HR / CEO office |
| Key clients | Sales / account management |
| Channel partners | Sales / channel team |
| Vendors & service staff | Admin |

## Step 2: Map occasions

| Occasion | Groups |
|---|---|
| Diwali / year-end | All |
| Work anniversaries | Employees |
| Spot and quarterly awards | Employees |
| Onboarding kits | New hires |
| Client renewals & festive | Clients |
| Channel schemes | Partners |

## Step 3: Set per-person values and volumes

A simple formula per line: **recipients × value × frequency**.

![Finance and HR planning a gifting budget](gemini: Indian HR head and finance manager working together at a table with laptops showing budget charts and a printed annual gifting plan, focused collaborative office meeting, purple accents | 16:9 | 1600x900)

## Step 4: Phase by quarter

| Quarter | Typical spend drivers |
|---|---|
| Q1 (Apr–Jun) | Appraisal rewards, onboarding for campus hires |
| Q2 (Jul–Sep) | Regional festivals, festive planning deposits |
| Q3 (Oct–Dec) | Diwali, year-end client and employee gifts |
| Q4 (Jan–Mar) | New Year, year-end awards, service awards |

*Based on an April–March financial year; adjust to yours.*

## Step 5: Add contingency

Keep around 10% for headcount growth and unplanned occasions.

## Step 6: Track and report

- Monthly actuals vs plan
- Spend by group and occasion
- Redemption data where available

## Template columns

| Group | Occasion | Recipients | Value per person | Frequency | Annual total | Quarter | Owner | Actual |
|---|---|---|---|---|---|---|---|---|
| All employees | Diwali | 500 | ₹1,500 | 1 | ₹7,50,000 | Q3 | HR | — |

## Key takeaways

- Consolidate gifting budgets across departments.
- Build lines from recipients × value × frequency.
- Phase spend by quarter and keep a contingency.
- Review actuals monthly.

See [recognition budgeting](/blog/recognition-budget-how-much-to-spend).`,
    faqs: [
      { q: "How do I create a corporate gifting budget?", a: "List recipient groups and occasions, set per-person values, multiply by volumes, phase by quarter and add contingency." },
      { q: "Which quarter has the highest gifting spend?", a: "For many Indian companies, the October–December quarter due to Diwali and year-end gifting." },
      { q: "Should gifting budgets be centralised?", a: "Centralising visibility helps control spend, even if departments own their allocations." },
    ],
  },
  {
    slug: "gift-card-rfp-template",
    title: "Gift Card Vendor RFP Template for Procurement Teams",
    description: "A ready-to-adapt RFP template for selecting a corporate gift card vendor — scope, requirements, security, invoicing, SLAs, commercials and evaluation criteria.",
    category: "procurement",
    tags: ["RFP", "vendor selection", "procurement", "template"],
    date: "2026-08-25",
    cover: { prompt: "Professional RFP document titled 'Request for Proposal – Corporate Gift Cards' on a desk with a pen, laptop showing vendor comparison, Indian procurement office setting, clean top-down corporate photography with purple accents | 16:9 | 1600x900", alt: "Gift card vendor RFP document on a desk" },
    tldr: "A strong gift card RFP covers company background, program scope, brand and denomination requirements, delivery methods, security and data protection, invoicing, support SLAs, commercial terms, references and a weighted evaluation matrix. Ask vendors to demonstrate multi-brand ordering live.",
    body: `A structured RFP helps procurement compare gift card vendors fairly and select a partner that meets business, finance and security needs.

## RFP structure

### 1. Introduction

- Company overview
- Purpose of the RFP
- Timeline for responses and decision

### 2. Program scope

- Programs covered (festive, rewards, incentives, client gifts)
- Estimated annual volumes and values
- Locations and recipient groups

### 3. Catalog requirements

- Mandatory brands or categories
- Denomination flexibility (fixed and range)
- Ability to order multiple brands, denominations and quantities in one order

![Procurement team reviewing RFP responses](gemini: Indian procurement committee around a conference table reviewing printed RFP responses and a scoring matrix on a wall screen, analytical focused mood, modern office with purple accents | 16:9 | 1600x900)

### 4. Delivery requirements

- Direct-to-recipient and bulk code options
- Scheduled delivery
- Delivery confirmation and reporting

### 5. Security and data protection

- Card sourcing and authorisation
- Code transfer security
- Access controls and audit trails
- Compliance with applicable data protection law

### 6. Invoicing and finance

- GST-ready invoices
- Separation of voucher value and service fees
- PO matching and payment terms

### 7. Support and SLAs

- Named account manager
- Response and resolution times
- Escalation matrix

### 8. Commercials

- Pricing structure
- Discounts or fees
- Validity and replacement policies

### 9. References

- Similar programs delivered

## Evaluation matrix

| Criterion | Weight |
|---|---|
| Catalog fit | 15% |
| Sourcing & security | 20% |
| Ordering flexibility | 15% |
| Invoicing | 10% |
| Delivery | 10% |
| Support | 15% |
| Commercials | 15% |

*Adjust weights to priorities.*

## Key takeaways

- Structure the RFP around scope, catalog, delivery, security, invoicing, support and commercials.
- Require live demos of multi-brand ordering.
- Use a weighted evaluation matrix.
- Check references for peak-season performance.

See [evaluating corporate gifting vendors](/blog/evaluating-corporate-gifting-vendors).`,
    faqs: [
      { q: "What should a gift card RFP include?", a: "Scope, catalog, delivery, security, invoicing, support SLAs, commercials, references and evaluation criteria." },
      { q: "Should vendors demo their platform during an RFP?", a: "Yes — a live demo of multi-brand ordering and invoicing is highly revealing." },
      { q: "How do we weight RFP criteria?", a: "Weight sourcing, security and support highly, then catalog, ordering, invoicing and commercials." },
    ],
  },
  {
    slug: "bulk-gift-card-order-checklist",
    title: "Bulk Gift Card Order Checklist: Before, During and After",
    description: "A step-by-step checklist for placing bulk gift card orders — requirements, brand mix validation, recipient data, approvals, invoice checks, delivery and reconciliation.",
    category: "procurement",
    tags: ["checklist", "bulk orders", "operations", "procurement"],
    date: "2026-08-08",
    cover: { prompt: "Digital checklist on a tablet with ticked items for a bulk gift card order next to a laptop with an order summary table and a coffee cup, clean desk top-down view, purple and magenta accents | 16:9 | 1600x900", alt: "Bulk gift card order checklist on a tablet" },
    tldr: "Before ordering, confirm purpose, budget, brand mix, denominations, quantities and recipient data. During ordering, validate the consolidated quote, approvals and invoice details. After ordering, confirm delivery, handle exceptions and reconcile codes against recipients.",
    body: `Bulk orders involve money, data and deadlines. A consistent checklist prevents costly mistakes.

## Before ordering

- [ ] Program purpose and occasion documented
- [ ] Budget approved
- [ ] Recipient groups and counts confirmed
- [ ] Brand mix selected per group
- [ ] Denominations checked against each brand's allowed values
- [ ] Quantities include a small buffer for joiners
- [ ] Recipient emails validated
- [ ] Delivery date agreed

## During ordering

- [ ] Consolidated quote reviewed line by line
- [ ] Brand, denomination and quantity match the plan
- [ ] Taxes and fees understood
- [ ] Purchase order raised
- [ ] Billing details correct on invoice
- [ ] Payment processed ahead of holidays

![Operations specialist verifying order details](gemini: Indian operations specialist comparing an order summary on screen against a printed recipient list with a highlighter, meticulous focused mood, bright modern office, purple accents | 16:9 | 1600x900)

## Delivery day

- [ ] Delivery initiated on schedule
- [ ] Leadership message shared
- [ ] Support inbox monitored
- [ ] Bounced emails corrected

## After delivery

- [ ] Delivery completion confirmed
- [ ] Exceptions resolved
- [ ] Unused codes secured
- [ ] Order reconciled with finance
- [ ] Feedback collected
- [ ] Lessons documented

## Common errors this checklist prevents

| Error | Prevention |
|---|---|
| Invalid denominations | Check brand allowed values |
| Missing joiners | Buffer quantities |
| Bounced emails | Validate data early |
| Invoice mismatches | Review billing details |
| Lost codes | Secure storage and reconciliation |

## Key takeaways

- Validate brand denominations and recipient data before ordering.
- Review the consolidated quote line by line.
- Monitor delivery and resolve exceptions quickly.
- Reconcile everything with finance.

Build your brand mix with the [Orbit quote builder](/contact-sales).`,
    faqs: [
      { q: "What is the most common mistake in bulk gift card orders?", a: "Incorrect recipient email data and denominations the brand doesn't support." },
      { q: "Should bulk orders include a buffer?", a: "A small buffer or planned top-up order helps cover late joiners." },
      { q: "What should be reconciled after a bulk order?", a: "Codes ordered versus delivered, exceptions, unused codes and invoice amounts." },
    ],
  },
  {
    slug: "dpdp-act-corporate-gifting-data",
    title: "Recipient Data and India's DPDP Act: What Corporate Gifting Teams Should Know",
    description: "An overview of handling employee and client data for gifting under India's Digital Personal Data Protection Act, 2023 — purpose, minimisation, vendors and retention.",
    category: "procurement",
    tags: ["DPDP Act", "data protection", "privacy", "compliance"],
    date: "2026-07-20",
    cover: { prompt: "Conceptual illustration of personal data records protected by a digital lock and shield flowing securely between a company building and a gift card, Indian corporate context, clean flat infographic style in purple and magenta | 16:9 | 1600x900", alt: "Illustration of protected recipient data for gifting" },
    tldr: "Gifting programs process personal data such as names and emails. India's Digital Personal Data Protection Act, 2023 emphasises lawful purpose, data minimisation, security safeguards and appropriate handling by processors. Share only what vendors need, define retention, secure transfers and document your processing. Confirm obligations with legal counsel.",
    body: `:::warning Not legal advice
This article offers a general overview for awareness. Data protection obligations depend on your specific circumstances and evolving rules. Consult legal counsel.
:::

Every gifting program involves personal data — names, email addresses, sometimes phone numbers. India's **Digital Personal Data Protection Act, 2023 (DPDP Act)** sets expectations for how such data is handled.

## Key principles relevant to gifting

| Principle | What it means for gifting |
|---|---|
| Lawful purpose | Use recipient data only for delivering gifts and related communication |
| Data minimisation | Share only what the vendor needs |
| Security safeguards | Protect data in storage and transit |
| Processor oversight | Ensure vendors handle data on your instructions |
| Retention limits | Delete data when no longer needed |

## What data do gifting vendors need?

Usually:

- Recipient name
- Email address (for digital delivery)

Often **not** needed:

- Employee IDs beyond internal reference
- Salary information
- Home addresses for digital gifts
- Personal phone numbers (unless the delivery method requires it)

![Secure data handover between teams](gemini: Indian HR professional securely uploading an encrypted recipient file on a laptop with a lock icon on screen, calm secure office environment, purple accent lighting | 16:9 | 1600x900)

## Practical steps

1. **Map the data flow** — HRMS → gifting team → vendor → recipient.
2. **Minimise fields** shared with vendors.
3. **Use secure transfer** — encrypted files or secure portals.
4. **Agree processing terms** with vendors.
5. **Define retention** — how long order and recipient data is kept.
6. **Prepare for requests** from individuals about their data.

## Digital gifts reduce data exposure

Digital gift cards avoid collecting home addresses — a practical privacy benefit over physical hampers.

## Key takeaways

- Gifting programs process personal data.
- Minimise data shared with vendors.
- Secure transfers and define retention.
- Confirm obligations with legal counsel.

See [gift card program security](/blog/gift-card-program-security-and-fraud-controls).`,
    faqs: [
      { q: "Does the DPDP Act apply to employee gifting data?", a: "Personal data such as names and emails used for gifting is generally in scope of data protection obligations; confirm specifics with counsel." },
      { q: "What recipient data should we share with a gifting vendor?", a: "Typically only what's needed for delivery, such as name and email." },
      { q: "Do digital gift cards help with privacy?", a: "Yes — they avoid collecting home addresses needed for physical gifts." },
    ],
  },
  {
    slug: "gift-card-redemption-rates",
    title: "Gift Card Redemption Rates: Why They Matter and How to Improve Them",
    description: "Understand gift card redemption rates in corporate programs — what drives unredeemed value, how to measure it and practical ways to make sure rewards get used.",
    category: "procurement",
    tags: ["redemption", "breakage", "program ROI", "analytics"],
    date: "2026-07-02",
    cover: { prompt: "Analytics dashboard showing a rising gift card redemption rate chart, pie chart by brand category and reminder email icons, Indian HR analyst reviewing results, modern office, purple and magenta data visuals | 16:9 | 1600x900", alt: "Gift card redemption analytics dashboard" },
    tldr: "A gift card only creates value when it's redeemed. Improve redemption with relevant multi-brand menus, clear redemption instructions, adequate validity, reminders before expiry, brands available where recipients live, and easy support for code issues.",
    body: `Companies spend on gift cards to create appreciation. Unredeemed cards mean that appreciation never landed. Redemption rate is one of the clearest measures of program effectiveness.

## What drives low redemption

| Driver | Example |
|---|---|
| Irrelevant brands | A café card for someone who doesn't drink coffee |
| Local availability | In-store brands with no nearby outlets |
| Confusing redemption | Unclear steps for app wallets or PINs |
| Short validity | Cards expiring before planned purchases |
| Emails missed | Delivery lands in spam |
| Awkward values | Single-use cards with values that don't match purchases |

## How to improve redemption

1. **Offer choice** — multi-brand menus.
2. **Check availability** by location.
3. **Explain redemption** clearly in delivery communication.
4. **Choose appropriate validity** for the occasion.
5. **Send reminders** a few weeks before expiry.
6. **Provide support** for code issues.

![Employee redeeming a reward card on a phone](gemini: Happy Indian employee on a sofa redeeming a reward gift card on a smartphone shopping app, checkout screen with applied voucher, relaxed evening home setting | 16:9 | 1600x900)

## Measuring redemption

Where available, track:

- Share of codes redeemed within 30, 90 and 180 days
- Redemption by brand category
- Support tickets per 1,000 recipients

## Using redemption data

- Remove low-redemption brands from menus
- Add categories employees favour
- Adjust values and validity

## Key takeaways

- Redemption rate reflects whether rewards land.
- Choice, availability and clear instructions drive redemption.
- Send reminders and provide support.
- Use redemption data to refine brand menus.

See [multi-brand vs single-brand gift cards](/blog/multi-brand-vs-single-brand-gift-cards-for-companies).`,
    faqs: [
      { q: "What is a gift card redemption rate?", a: "The share of issued gift card value or codes that recipients actually use." },
      { q: "How can companies improve gift card redemption?", a: "Offer relevant brand choices, clear instructions, adequate validity, reminders and support." },
      { q: "Why do employees not redeem gift cards?", a: "Common reasons include irrelevant brands, missed emails, short validity and confusing redemption steps." },
    ],
  },
  {
    slug: "gift-card-invoice-reconciliation",
    title: "Gift Card Invoicing and Reconciliation for Finance Teams",
    description: "How finance teams can reconcile corporate gift card orders — PO matching, invoice review, order summaries, cost centre allocation, payroll inputs and audit documentation.",
    category: "procurement",
    tags: ["finance", "reconciliation", "invoicing", "audit"],
    date: "2026-06-18",
    cover: { prompt: "Indian finance analyst reconciling a gift card invoice against a purchase order and order summary on dual monitors, calculator and highlighted documents, precise focused office mood, purple accents | 16:9 | 1600x900", alt: "Finance analyst reconciling gift card invoices" },
    tldr: "Reconcile gift card orders by matching the PO, consolidated quote, invoice and brand-wise order summary; verifying delivery records; allocating costs to cost centres; sharing employee-wise values with payroll for perquisite tracking; and archiving documentation for audit.",
    body: `Gift card programs can create reconciliation headaches if documentation is scattered. A clear process keeps finance and auditors comfortable.

## Documents to collect

| Document | Purpose |
|---|---|
| Purchase order | Authorisation |
| Consolidated quote | Agreed brands, values, quantities |
| Tax invoice | Accounting and tax |
| Order summary | Brand × denomination × quantity |
| Delivery report | Proof of fulfilment |
| Recipient mapping | Payroll and audit |

## Reconciliation steps

1. **Match PO to quote** — brands, denominations, quantities, totals.
2. **Match quote to invoice** — amounts, taxes, fees.
3. **Verify delivery** — delivered vs ordered codes.
4. **Handle exceptions** — reissues, cancellations, undelivered codes.
5. **Allocate cost centres** — by department or program.
6. **Share payroll inputs** — employee-wise gift values where relevant.
7. **Archive** — store all documents together.

![Organised digital audit folder structure](gemini: Laptop screen showing a neatly organised digital folder structure labelled PO, quote, invoice, delivery report and recipient mapping, clean desk with notebook, professional finance aesthetic, purple accents | 16:9 | 1600x900)

## Payroll coordination

Employee gifts may be taxable perquisites above exemption thresholds. Share employee-level values with payroll. See [employee gift card tax rules](/blog/employee-gift-card-tax-rules-india).

## GST documentation

Ensure invoices clearly separate voucher value from any service fees. See [GST on gift vouchers](/blog/gst-on-gift-vouchers-india).

## Tips

- Use one vendor per program to simplify matching.
- Standardise naming for orders and programs.
- Reconcile within a month of delivery.

## Key takeaways

- Match PO, quote, invoice, order summary and delivery reports.
- Allocate costs and share payroll inputs.
- Separate voucher value and fees on invoices.
- Archive documentation for audits.`,
    faqs: [
      { q: "What documents are needed to reconcile gift card orders?", a: "Purchase order, quote, tax invoice, order summary, delivery report and recipient mapping." },
      { q: "Why should payroll receive gift card data?", a: "Employee gift values may need perquisite tax treatment above exemption limits." },
      { q: "How soon should gift card orders be reconciled?", a: "Ideally within a month of delivery." },
    ],
  },
  {
    slug: "centralised-vs-decentralised-gifting",
    title: "Centralised vs Decentralised Corporate Gifting: Which Model Fits?",
    description: "Compare centralised and decentralised corporate gifting models — control, speed, consistency, compliance and cost — plus a hybrid model for growing companies.",
    category: "procurement",
    tags: ["operating model", "governance", "procurement", "scale"],
    date: "2026-06-04",
    cover: { prompt: "Diagram-style illustration comparing a central hub connected to departments versus multiple independent department nodes, with gift card icons flowing through each, clean corporate infographic in purple and magenta | 16:9 | 1600x900", alt: "Centralised versus decentralised gifting model diagram" },
    tldr: "Centralised gifting gives consistency, spend visibility and compliance; decentralised gifting gives teams speed and flexibility. Most growing companies benefit from a hybrid: central policy, approved vendor, brand menus and budgets, with departments placing orders within guardrails.",
    body: `As companies grow, gifting often spreads across HR, sales, marketing and admin — each with their own vendors and rules. Choosing an operating model brings order.

## Centralised model

A single team manages all gifting.

**Pros:** consistency, negotiated terms, compliance, clear reporting
**Cons:** slower for teams, potential bottleneck

## Decentralised model

Departments manage their own gifting.

**Pros:** speed, local relevance, flexibility
**Cons:** inconsistent experiences, duplicated vendors, weak visibility, compliance risk

## Comparison

| Factor | Centralised | Decentralised |
|---|---|---|
| Consistency | High | Low |
| Speed | Medium | High |
| Spend visibility | High | Low |
| Compliance | Strong | Variable |
| Local relevance | Medium | High |

![Hybrid governance model illustration](gemini: Clean illustration of a central governance hub setting rules and vendor connections while department teams independently place gift card orders within a shaded guardrail boundary, modern corporate infographic, purple and magenta | 16:9 | 1600x900)

## The hybrid model

| Central team owns | Departments own |
|---|---|
| Gifting policy | Recipient selection |
| Approved vendor | Timing of orders |
| Brand menus and value limits | Personal messages |
| Budget allocations | Order placement within limits |
| Reporting | Program feedback |

## Choosing your model

- **Small companies:** centralised by default
- **Scaling companies:** hybrid
- **Large enterprises:** hybrid with strong reporting

## Key takeaways

- Centralised gives control; decentralised gives speed.
- A hybrid model balances both.
- Central policy, vendor and reporting are essential at scale.
- Let departments personalise within guardrails.

See [building a gifting policy](/blog/building-a-gifting-policy).`,
    faqs: [
      { q: "What is centralised corporate gifting?", a: "A model where one team manages policy, vendors, budgets and ordering for all gifting." },
      { q: "Which gifting model suits growing companies?", a: "A hybrid model with central policy and vendors, and departmental ordering within limits." },
      { q: "What are the risks of decentralised gifting?", a: "Inconsistent experiences, duplicated vendors, weak spend visibility and compliance gaps." },
    ],
  },
  {
    slug: "gifting-approval-workflows",
    title: "Designing Gifting Approval Workflows That Don't Slow Teams Down",
    description: "How to design approval workflows for corporate gifts and rewards — thresholds, pre-approved programs, compliance checks for client gifts and fast turnaround.",
    category: "procurement",
    tags: ["approvals", "workflow", "governance", "compliance"],
    date: "2026-05-21",
    cover: { prompt: "Flowchart on a glass wall showing a gifting approval workflow with request, threshold check, auto-approve and compliance review branches, Indian team members discussing it with markers, modern office, purple sticky notes | 16:9 | 1600x900", alt: "Gifting approval workflow flowchart" },
    tldr: "Good gifting approval workflows use value thresholds, pre-approved programs and clear owners: small, standard rewards are auto-approved within budget, higher values need manager or HR approval, and client or partner gifts get a compliance check. Aim for 24–48 hour turnaround.",
    body: `Approvals protect budgets and compliance — but slow approvals kill recognition. The goal is right-sized control.

## Principles

1. **Pre-approve standard programs** (festive, anniversaries, spot awards).
2. **Use value thresholds** to route approvals.
3. **Add compliance checks** only where risk exists.
4. **Set turnaround targets**.

## Sample threshold model

| Request type | Value | Approver |
|---|---|---|
| Spot award (within team budget) | Standard values | Auto-approved |
| Employee award above standard | Mid-tier | Manager + HR |
| Leadership or premium award | High | HR head |
| Client gift | Any | Account owner + compliance |
| Channel incentive scheme | Scheme-level | Sales head + finance |

*Illustrative — set thresholds to your policy.*

![Manager approving a request on mobile](gemini: Indian manager approving a reward request notification on a smartphone while walking through a modern office corridor, quick efficient action, bright natural light, purple UI accents | 16:9 | 1600x900)

## Compliance checkpoints

- Client and partner gifting policies
- Public officials (typically prohibited)
- Active tenders or negotiations
- Tax implications of high-value gifts

## Keeping it fast

- Mobile approvals
- Clear request forms with required details
- Escalation after 48 hours
- Monthly review of bottlenecks

## Audit trail

Record who requested, who approved, value, purpose and date.

## Key takeaways

- Pre-approve standard programs.
- Route approvals by value and risk.
- Add compliance checks for client and partner gifts.
- Keep turnaround within 24–48 hours.

See [building a gifting policy](/blog/building-a-gifting-policy).`,
    faqs: [
      { q: "Should every employee reward need approval?", a: "Standard rewards within budget can be pre-approved; higher values should route to approvers." },
      { q: "Why do client gifts need compliance checks?", a: "To respect client gifting policies and avoid gifts that could be seen as inducements." },
      { q: "How fast should gifting approvals be?", a: "Aim for 24–48 hours so recognition stays timely." },
    ],
  },
];
