import type { PostInput } from "@/lib/blog";

export const procurement: PostInput[] = [
  {
    slug: "buyers-guide-bulk-gift-card-procurement",
    title: "A Buyer's Guide to Bulk Gift Card Procurement",
    description: "Everything procurement teams need to buy gift cards in bulk: requirements, brand selection, vendor evaluation, pricing, invoicing, compliance, security and distribution.",
    category: "procurement",
    tags: ["procurement", "bulk gift cards", "vendor selection", "buyers guide"],
    date: "2026-09-11",
    cover: { prompt: "Indian procurement manager at a clean desk comparing vendor proposals for bulk gift cards on dual monitors, checklist and invoice documents, calculator, focused professional mood, purple accent lighting, corporate photography | 16:9 | 1600x900", alt: "Procurement manager evaluating bulk gift card vendors" },
    tldr: "To procure gift cards in bulk: define requirements (occasion, recipients, budget, timelines), choose a brand mix, evaluate vendors on catalog breadth, authorised sourcing, invoicing, security and support, request a consolidated quote with brand-wise denominations and quantities, clarify tax treatment with finance, and plan distribution and issue resolution.",
    body: `Gift cards look simple to buy — until you need 3,000 of them across 12 brands, delivered on a specific date, with invoices finance can process and codes handled securely. This guide walks procurement teams through the full process.

## Step 1: Define requirements

Gather the basics from the business owner (HR, sales, marketing):

- **Purpose:** rewards, festive gifts, incentives, client gifts, promotions
- **Recipient groups** and counts
- **Budget** per recipient and total
- **Timeline** and delivery date
- **Delivery method:** to recipients directly, or codes to the company for distribution
- **Reporting** needs

## Step 2: Choose the brand mix

| Consideration | Why it matters |
|---|---|
| Recipient demographics | Different groups prefer different brands |
| Geography | In-store brands need local presence |
| Redemption flexibility | Multi-use cards reduce wasted value |
| Validity | Must suit when recipients will redeem |
| Denominations | Fixed slabs vs flexible ranges |

Most corporate programs combine a few broad brands (marketplaces, food) with a few aspirational brands (electronics, travel). Read [multi-brand vs single-brand gift cards](/blog/multi-brand-vs-single-brand-gift-cards-for-companies).

![Procurement team building a brand mix spreadsheet](gemini: Spreadsheet on a laptop listing brand names, denominations and quantities for a corporate gift card order, with totals highlighted, notebook and pen beside, clean corporate flat lay with purple accents | 16:9 | 1600x900)

## Step 3: Evaluate vendors

Key criteria:

1. **Catalog breadth** — enough brands for your audience
2. **Authorised sourcing** — cards issued by brands or authorised program partners
3. **Multi-brand ordering** — one order across brands, denominations and quantities
4. **Invoicing** — GST-ready invoices and clear documentation
5. **Delivery options** — scheduled, bulk, direct-to-recipient
6. **Security** — secure code handling and access controls
7. **Support** — dedicated contact and issue resolution timelines
8. **Data protection** — minimal data collection, compliance with applicable data protection law

See our detailed [vendor evaluation guide](/blog/evaluating-corporate-gifting-vendors).

## Step 4: Request a consolidated quote

Provide a structured brief:

| Brand | Denomination | Quantity | Recipient group |
|---|---|---|---|
| Marketplace | ₹1,000 | 1,200 | All employees |
| Food delivery | ₹500 | 800 | All employees |
| Electronics | ₹5,000 | 150 | Managers |
| Luxury hotel | ₹15,000 | 20 | Leadership |

A consolidated quote simplifies approval and gives visibility into total face value and any applicable fees or discounts.

## Step 5: Clarify tax and accounting

- **Employee gifts** may be taxable perquisites above annual exemption limits. See [employee gift card tax rules](/blog/employee-gift-card-tax-rules-india).
- **Benefits to business partners** may have TDS implications.
- **GST treatment of vouchers** has specific rules. See [GST on gift vouchers](/blog/gst-on-gift-vouchers-india).
- Decide the expense account and cost centre allocations.

:::note Always involve finance early
Tax and accounting treatment can affect budget, vendor documentation and even which recipients are included.
:::

## Step 6: Contract and payment

- Confirm pricing, validity, delivery timelines and support SLAs in writing.
- Agree payment terms — bank transfer against proforma or tax invoice is common.
- Clarify policies for undelivered or invalid codes.

## Step 7: Plan distribution

- Direct delivery to recipients or bulk codes to your team?
- Who handles recipient questions?
- How will you track delivery completion?

See [managing gift card distribution at scale](/blog/managing-gift-card-distribution-at-scale).

## Step 8: Security controls

- Restrict access to bulk code files.
- Use secure transfer methods.
- Maintain an audit trail of who accessed and distributed codes.

Read [gift card program security and fraud controls](/blog/gift-card-program-security-and-fraud-controls).

## Step 9: Review and report

After fulfilment, review delivery completion, issues raised, redemption where available, and budget vs actual.

## Procurement checklist

- [ ] Requirements documented
- [ ] Brand mix approved
- [ ] Vendor evaluated
- [ ] Consolidated quote received
- [ ] Tax treatment confirmed
- [ ] PO issued and invoice received
- [ ] Payment completed
- [ ] Distribution plan ready
- [ ] Security controls in place
- [ ] Post-program review scheduled

## Working with Orbit

[Orbit by SaverPe](/why-orbit) offers 290+ brands, a quote builder for multi-brand orders with different denominations and quantities, consolidated quotes and GST-ready invoicing. [Request a quote](/contact-sales).`,
    faqs: [
      { q: "What information do vendors need for a bulk gift card quote?", a: "Brands, denominations, quantities, delivery date, delivery method and billing details. Recipient group information helps vendors recommend the right mix." },
      { q: "How are bulk gift card orders usually paid?", a: "Commonly via bank transfer against a proforma or tax invoice, following your procurement process." },
    ],
  },
  {
    slug: "employee-gift-card-tax-rules-india",
    title: "Are Employee Gift Cards Taxable in India? A Plain-English Guide",
    description: "Understand how gifts and vouchers from employers are taxed in India — the ₹5,000 perquisite exemption, payroll treatment, festive gifts, awards and practical planning tips.",
    category: "procurement",
    tags: ["tax", "perquisites", "payroll", "employee gifts", "compliance"],
    date: "2026-08-24",
    cover: { prompt: "Calm, professional illustration of an Indian payroll specialist reviewing tax rules on a laptop with a gift card icon, a calculator and a document labelled 'Perquisites', clean infographic style with purple and magenta highlights | 16:9 | 1600x900", alt: "Payroll specialist reviewing employee gift tax rules" },
    tldr: "In India, gifts and vouchers given by an employer are generally treated as perquisites. Under the Income-tax Rules, gifts or vouchers with an aggregate value below ₹5,000 per employee in a financial year are typically treated as nil for tax purposes; above that, the value is commonly treated as taxable salary income subject to TDS. Confirm current rules with your tax advisor.",
    body: `:::warning Not tax advice
This article explains general principles for awareness. Tax rules and interpretations change. Always consult a qualified tax professional or your payroll provider before designing or accounting for gift programs.
:::

HR teams love gift cards for recognition, but payroll teams inevitably ask: "Is this taxable?" Here's a plain-English overview of how employee gifts and vouchers are generally treated in India.

## Gifts from employers are perquisites

Under Indian income tax law, benefits provided by an employer to an employee — beyond salary — are generally treated as **perquisites**. Gifts, vouchers and tokens given in connection with employment fall into this category.

## The ₹5,000 exemption

The Income-tax Rules provide specific treatment for **gifts, vouchers or tokens** given by an employer:

- If the **aggregate value** of such gifts or vouchers received by an employee during a financial year is **below ₹5,000**, the value is generally treated as **nil** (not taxable).
- If the aggregate value **exceeds** this threshold, the value is commonly treated as **taxable** perquisite income. Many practitioners interpret this as making the entire value taxable, not just the excess — confirm the interpretation your advisors follow.

![Visual explanation of the gift exemption threshold](gemini: Simple infographic showing a horizontal bar with gift card icons adding up to a threshold line marked rupees 5,000 per year, below the line green exempt label, above it amber taxable label, clean flat design with purple accents | 16:9 | 1600x900)

## What counts towards the aggregate?

Generally, gifts and vouchers given during the financial year are added together. That may include:

- Festive gift cards (e.g., Diwali)
- Birthday and anniversary gift cards
- Spot award vouchers
- Other gift vouchers provided by the employer

Cash gifts are typically treated as part of salary and taxed accordingly, rather than under the voucher exemption.

## Awards and recognition

Performance awards, long-service awards and incentives may be treated differently depending on their nature and how they are structured. Some are clearly salary or bonus in nature. Discuss specific programs with your advisors.

## Practical planning tips

### 1. Track aggregate values per employee

Maintain a record of all gift and voucher values per employee per financial year.

### 2. Design tiers with the threshold in mind

For broad-based programs (festive gifts, birthdays), many companies keep annual aggregate values within the exemption threshold.

### 3. Process taxable values through payroll

Where values exceed the threshold, coordinate with payroll to include them as perquisites and apply TDS.

### 4. Communicate transparently

If a high-value award will be taxable, let the employee know — surprises on payslips damage the goodwill the gift created.

:::tip Consolidated order records help
Ordering through one partner with brand-wise, denomination-wise records makes it easier to reconcile values per employee for payroll.
:::

## Example scenarios (illustrative)

| Scenario | Aggregate annual value | General treatment |
|---|---|---|
| Diwali gift card only | ₹3,000 | Typically within exemption |
| Diwali + birthday + spot award | ₹4,500 | Typically within exemption |
| Diwali + anniversary award | ₹12,000 | Typically taxable as perquisite |

*Illustrative only. Actual treatment depends on facts and current law.*

## Gifts to non-employees

Gifts or incentives to business associates such as channel partners can have other implications, including TDS under specific provisions for benefits provided in the course of business. See [channel partner incentive programs explained](/blog/channel-partner-incentive-programs-explained) and consult your advisors.

## GST

GST treatment of vouchers is a separate topic. See [GST on gift vouchers](/blog/gst-on-gift-vouchers-india).

## Key takeaways

- Employer gifts and vouchers are generally perquisites.
- Aggregate annual values below ₹5,000 are typically exempt.
- Track values per employee across all programs.
- Work with payroll for taxable values.
- Always confirm with a tax professional.

[Orbit](/contact-sales) provides consolidated order documentation to support your finance team's reconciliation.`,
  },
  {
    slug: "gst-on-gift-vouchers-india",
    title: "GST on Gift Vouchers in India: What Corporate Buyers Should Know",
    description: "An overview of GST treatment of gift vouchers for corporate buyers in India — vouchers as instruments, the December 2024 CBIC clarification, invoices and questions to ask your CA.",
    category: "procurement",
    tags: ["GST", "vouchers", "tax", "invoicing", "compliance"],
    date: "2026-08-08",
    cover: { prompt: "Professional illustration of a GST invoice document next to a stack of digital gift vouchers and a magnifying glass, Indian finance office context, clean flat infographic style, purple and magenta accents on light background | 16:9 | 1600x900", alt: "GST invoice and gift vouchers illustration" },
    tldr: "Gift vouchers are generally treated as instruments representing consideration for a future supply. In a December 2024 circular, CBIC clarified that transactions in vouchers themselves are neither a supply of goods nor services, with GST applying when the underlying goods or services are supplied on redemption, while separate services such as distribution or commissions may attract GST. Confirm your specific accounting treatment with your CA.",
    body: `:::warning Not tax advice
This article summarises publicly discussed principles for awareness only. GST law and clarifications evolve. Please consult a qualified chartered accountant for your specific transactions.
:::

Finance teams buying gift cards in bulk often ask how GST applies. The answer has evolved, and the details matter for invoicing and input tax credit decisions.

## What is a voucher under GST?

Under the CGST Act, a **voucher** is broadly an instrument where there is an obligation to accept it as consideration (or part consideration) for a supply of goods or services, with the goods or services, their identity or redemption terms indicated on or in documentation related to the instrument.

Gift cards and e-gift vouchers generally fit this description.

## The December 2024 clarification

In December 2024, the Central Board of Indirect Taxes and Customs (CBIC) issued a circular clarifying several aspects of voucher taxation. Commonly discussed points include:

- **Transactions in vouchers** are treated as neither a supply of goods nor a supply of services.
- **GST applies on the underlying supply** of goods or services when the voucher is redeemed.
- **Services related to vouchers** — for example, distribution, commission or other services provided by intermediaries for a fee — may be taxable services.
- **Unredeemed vouchers**, in general, don't trigger GST as a supply by themselves.

![Flow diagram of voucher purchase and redemption](gemini: Clean flow diagram illustration showing a company buying vouchers from a distributor, employees redeeming them at brand stores, with small labels marking where GST applies on the underlying purchase and on service fees, flat vector style with purple accents | 16:9 | 1600x900)

## What this means for corporate buyers

### Voucher face value

The face value of vouchers purchased is generally not itself subject to GST as a supply, per the clarification.

### Service fees or commissions

If a vendor charges a separate fee for services — platform, distribution, customisation or logistics — GST may apply to that fee. Your invoice should clearly separate such components.

### Input tax credit

Eligibility for input tax credit on any GST-charged components depends on the nature of the expense and applicable restrictions (for example, on gifts). Discuss with your CA.

:::note Invoices should be clear
Ask your vendor for documentation that clearly distinguishes voucher value from any taxable service charges. It simplifies accounting and audits.
:::

## Questions to ask your CA

1. How should we account for voucher purchases — expense, prepaid or other?
2. Is GST applicable to any fees on our vendor's invoice?
3. Can we claim input tax credit on any component, given the purpose (employee gifts, client gifts, promotions)?
4. How do income tax perquisite rules interact with our accounting?
5. What documentation should we retain?

## Questions to ask your gifting vendor

1. Will the invoice separate voucher value and service fees?
2. What GST registration details will appear on the invoice?
3. Can you provide brand-wise and denomination-wise order summaries?

## Related compliance topics

- **Employee perquisite taxation** — see [employee gift card tax rules](/blog/employee-gift-card-tax-rules-india).
- **TDS on business benefits** — relevant for channel partner incentives.
- **Data protection** — for recipient information shared with vendors.

## Key takeaways

- Vouchers are treated as instruments, with GST generally applying on the underlying supply at redemption, as clarified in December 2024.
- Separate service fees may attract GST.
- Ask for clear invoices.
- Confirm accounting and credit treatment with your CA.

[Orbit](/contact-sales) provides GST-ready invoicing and consolidated order documentation for business customers.`,
  },
  {
    slug: "evaluating-corporate-gifting-vendors",
    title: "How to Evaluate Corporate Gifting Vendors: A Scorecard",
    description: "A practical vendor evaluation scorecard for corporate gifting and gift card platforms — catalog, sourcing, ordering, invoicing, security, support, data protection and pricing.",
    category: "procurement",
    tags: ["vendor evaluation", "procurement", "RFP", "scorecard"],
    date: "2026-07-27",
    cover: { prompt: "Procurement committee in a modern Indian meeting room scoring vendor presentations on a large screen scorecard with categories like catalog, security, invoicing and support, focused analytical mood, purple accents, corporate photography | 16:9 | 1600x900", alt: "Procurement team scoring corporate gifting vendors" },
    tldr: "Evaluate corporate gifting vendors on catalog breadth, authorised sourcing, multi-brand ordering, invoicing quality, delivery flexibility, security controls, data protection, support responsiveness and total cost. Weight criteria to your priorities, run reference checks and pilot with a small program before scaling.",
    body: `Choosing a corporate gifting vendor affects employee experience, finance workload and security risk. A structured evaluation prevents surprises.

## The evaluation scorecard

| Criterion | Weight (example) | What to look for |
|---|---|---|
| Catalog breadth & relevance | 15% | Brands your recipients use, across categories |
| Authorised sourcing | 15% | Cards issued by brands or authorised program partners |
| Ordering flexibility | 15% | Multi-brand, multi-denomination, bulk quantities |
| Invoicing & documentation | 10% | GST-ready invoices, order summaries |
| Delivery options | 10% | Scheduled, bulk, direct-to-recipient |
| Security | 10% | Code handling, access control, audit trails |
| Data protection | 5% | Minimal data, clear retention, legal compliance |
| Support | 10% | Named contact, resolution SLAs |
| Pricing & terms | 10% | Transparent fees, clear payment terms |

*Adjust weights to your priorities.*

## Detailed criteria

### Catalog breadth and relevance

- Number of brands and categories
- Brands relevant to your geography and demographics
- Availability of premium and practical options
- Clarity on denominations and validity

### Authorised sourcing

- Are cards sourced from brands or authorised program managers?
- Can the vendor explain its sourcing?

![Comparison of vendor capabilities on a whiteboard](gemini: Whiteboard in an Indian corporate office with a comparison matrix of three anonymous gifting vendors across criteria with tick marks and scores, markers and sticky notes, clean professional photography with purple accents | 16:9 | 1600x900)

### Ordering flexibility

- Can you order many brands in one request?
- Can each brand have multiple denominations and quantities?
- Are there practical minimums?

### Invoicing and documentation

- GST-ready invoices
- Clear separation of voucher value and service fees
- Brand-wise and denomination-wise order summaries

### Delivery

- Scheduled delivery dates
- Direct-to-recipient or bulk code delivery
- Delivery confirmation

### Security

- Encrypted transfer of codes
- Access controls
- Handling of failed or invalid codes

### Data protection

- What recipient data is required?
- Retention and deletion practices
- Alignment with applicable data protection law

### Support

- Dedicated account contact
- Response and resolution timelines
- Escalation process

### Pricing and terms

- Transparent pricing
- Payment terms
- Refund or replacement policy for invalid codes

## Questions for vendor demos

1. Walk us through ordering 10 brands with different denominations and quantities.
2. Show a sample invoice and order summary.
3. How do you deliver codes securely?
4. What happens if a recipient reports a code issue?
5. What data do you need about recipients?

:::tip Pilot before committing
Run a small program — a quarter of spot awards or a team celebration — before moving your festive program to a new vendor.
:::

## Reference checks

Ask references about:

- Delivery reliability during peak season
- Issue resolution speed
- Invoice accuracy
- Account management quality

## Red flags

- Unclear sourcing
- No clear invoice documentation
- Vague answers on security
- No escalation path

Evaluate [Orbit by SaverPe](/why-orbit) against this scorecard — [request a demo](/contact-sales).`,
  },
  {
    slug: "gift-card-program-security-and-fraud-controls",
    title: "Gift Card Program Security: Fraud Controls for Corporate Buyers",
    description: "Protect corporate gift card programs from fraud and leakage — secure code handling, access controls, social engineering defences, reconciliation and incident response.",
    category: "procurement",
    tags: ["security", "fraud prevention", "controls", "risk"],
    date: "2026-07-13",
    cover: { prompt: "Cybersecurity concept illustration of a digital vault protecting glowing gift card codes with shields, locks and an audit log, Indian corporate IT security team in background, purple and magenta neon palette, modern tech illustration | 16:9 | 1600x900", alt: "Secure vault protecting corporate gift card codes" },
    tldr: "Gift card codes are cash-equivalent, so corporate programs need controls: limit access to code files, use secure delivery, segregate ordering and distribution duties, verify any request to buy gift cards through a second channel, reconcile orders against recipients, and have an incident response plan for leaked or misused codes.",
    body: `Gift card codes are as good as cash and hard to recover once redeemed. Corporate programs — with large volumes and many people involved — need controls similar to other financial processes.

## Key risks

### 1. Social engineering ("CEO fraud")

Fraudsters impersonate executives and ask employees to urgently buy gift cards and share codes.

### 2. Internal misuse

Employees with access to bulk code files could misuse codes.

### 3. Leaked code files

Spreadsheets of codes shared insecurely via email or chat can be intercepted or forwarded.

### 4. Delivery errors

Wrong email addresses send codes to unintended recipients.

### 5. Vendor risk

Unreliable or unauthorised sources can deliver invalid codes.

![Warning about executive impersonation gift card scams](gemini: Illustration of an office employee receiving a suspicious chat message impersonating a CEO asking to buy gift cards urgently, with red warning icons and a shield, clean modern flat style with purple and red accents | 16:9 | 1600x900)

## Controls framework

### Governance

- Documented gifting policy — see [building a gifting policy](/blog/building-a-gifting-policy)
- Approved vendor list
- Approval workflows for orders above thresholds

### Segregation of duties

| Activity | Owner |
|---|---|
| Request | Business team (HR/sales) |
| Approve | Budget owner + procurement |
| Order | Procurement |
| Receive codes | Designated custodian |
| Distribute | HR operations |
| Reconcile | Finance |

### Access control

- Restrict code files to named custodians
- Use password-protected or encrypted files
- Avoid sharing codes over chat or personal email
- Remove access after distribution

### Direct-to-recipient delivery

Where possible, have codes delivered directly to verified recipient emails, reducing internal handling.

### Verification of requests

**Any** request to buy gift cards outside the formal process — especially urgent ones — must be verified through a separate channel, such as a phone call to a known number.

:::warning Train everyone, not just finance
Executive assistants, office administrators and new employees are frequent targets of gift card scams. Include gift card fraud in security awareness training.
:::

### Data hygiene

- Validate recipient emails before ordering
- Remove exits from lists
- Double-check bulk uploads

### Reconciliation

- Match codes ordered to recipients delivered
- Track undelivered codes
- Review exceptions monthly

## Incident response

1. **Contain:** stop further distribution and secure files.
2. **Notify the vendor** immediately with affected codes.
3. **Assess:** determine which codes were exposed or redeemed.
4. **Report:** follow internal policy; for cybercrime, report on India's cybercrime portal or helpline 1930.
5. **Review:** update controls to prevent recurrence.

## Choosing a secure partner

Ask vendors about sourcing, code delivery security, access controls and incident handling. [Orbit](/why-orbit) is built around authorised sourcing and controlled code handling — [talk to us](/contact-sales) about your security requirements.`,
  },
  {
    slug: "managing-gift-card-distribution-at-scale",
    title: "Managing Gift Card Distribution at Scale: A Practical Operations Guide",
    description: "How HR and operations teams distribute thousands of gift cards accurately — data preparation, delivery models, communication, support desks and reconciliation.",
    category: "procurement",
    tags: ["operations", "distribution", "HR operations", "bulk delivery"],
    date: "2026-06-29",
    cover: { prompt: "Operations control room style office in India with a large screen showing gift card delivery progress across cities on a map with green checkmarks, operations team monitoring laptops, calm efficient mood, purple and magenta interface | 16:9 | 1600x900", alt: "Operations team monitoring gift card distribution" },
    tldr: "Distribute gift cards at scale by cleaning recipient data first, choosing between direct-to-recipient and bulk-code models, sending clear communications with redemption help, staffing a support channel during delivery, and reconciling delivered, failed and pending codes afterwards.",
    body: `Ordering 5,000 gift cards is the easy part. Getting the right card to the right person, on the right day, with the right instructions — and handling the inevitable questions — is where programs succeed or struggle.

## Step 1: Prepare clean data

| Field | Why it matters |
|---|---|
| Employee ID | Unique reference for reconciliation |
| Name | Personalisation |
| Email | Delivery |
| Location | Brand relevance and support |
| Recipient group | Correct brand and value |

Checks:

- Remove duplicates and exits
- Validate email formats
- Confirm joiners before the delivery date
- Get sign-off from HR business partners

## Step 2: Choose a delivery model

### Model A: Direct-to-recipient

The vendor delivers codes directly to each recipient's email.

**Pros:** minimal internal handling, better security, faster.
**Cons:** requires accurate emails and recipient data sharing.

### Model B: Bulk codes to the company

The company receives codes and distributes them internally.

**Pros:** control over timing and messaging.
**Cons:** more handling, higher security risk, more effort.

### Model C: Hybrid

Direct delivery for most employees, bulk codes for special groups (for example, frontline staff without email).

![Diagram of gift card delivery models](gemini: Clean infographic comparing three gift card delivery models: direct to recipient, bulk codes to company, and hybrid, with arrows, envelope and people icons, flat vector style with purple and magenta colours | 16:9 | 1600x900)

## Step 3: Communicate clearly

Before delivery:

- Announce the gift and delivery date
- Explain what the email will look like (to avoid it being mistaken for spam)
- Share a redemption FAQ

At delivery:

- Leadership message
- Support contact

## Step 4: Staff a support channel

Common questions:

- "I didn't receive my code"
- "My code isn't working"
- "Which stores accept this?"
- "Can I change the brand?"

Prepare templated answers and an escalation path to your vendor.

:::tip Ask recipients to check spam
Many "not received" tickets are resolved by checking spam or promotions folders. Mention this in advance communications.
:::

## Step 5: Handle exceptions

| Exception | Action |
|---|---|
| Bounced email | Correct email, request re-send |
| Employee exited before delivery | Follow policy on cancellation or reallocation |
| Code invalid | Escalate to vendor with details |
| Wrong group assigned | Correct and reissue per policy |

## Step 6: Reconcile

- Codes ordered vs delivered
- Failed deliveries resolved
- Unused or unallocated codes secured
- Summary shared with finance

## Frontline and non-email employees

Plan alternative delivery — supervisor-led distribution, printed instructions in local languages, or mobile-based delivery where appropriate.

## Timelines

For large programs, schedule delivery on a weekday morning so support teams are available, and avoid last-minute delivery on the festival day itself.

[Orbit](/solutions/festive-bulk-gifting) supports scheduled bulk delivery for large programs — [contact sales](/contact-sales) to plan your distribution model.`,
  },
  {
    slug: "building-a-gifting-policy",
    title: "How to Build a Corporate Gifting Policy (with Template Sections)",
    description: "A practical guide to writing a corporate gifting policy covering employee gifts, client gifts, approvals, value limits, tax, anti-bribery, records and security.",
    category: "procurement",
    tags: ["gifting policy", "governance", "compliance", "anti-bribery"],
    date: "2026-06-15",
    cover: { prompt: "Professional document titled 'Corporate Gifting Policy' open on a desk with sections highlighted, pen, laptop and gift card icons, Indian legal and HR context, clean top-down corporate photography with purple accents | 16:9 | 1600x900", alt: "Corporate gifting policy document" },
    tldr: "A corporate gifting policy should define purpose and scope, occasions and eligible recipients, value limits by recipient type, approval workflows, rules for client and government-related gifts, anti-bribery safeguards, tax handling, approved vendors, security controls, record-keeping and exceptions.",
    body: `A clear gifting policy protects your company from compliance risk, keeps programs fair and saves teams from reinventing decisions every festive season.

## Why you need a gifting policy

- **Consistency** across teams and locations
- **Compliance** with anti-bribery and tax requirements
- **Budget control**
- **Security** against fraud and misuse
- **Speed** — fewer ad-hoc approvals

## Recommended policy sections

### 1. Purpose and scope

Explain why the company gives gifts (recognition, relationships, celebrations) and who the policy applies to — employees, contractors, and teams gifting clients, partners and vendors.

### 2. Definitions

Define gifts, gift cards, awards, incentives, business partners and public officials.

### 3. Occasions

| Occasion | Recipients |
|---|---|
| Festive season | Employees, clients, partners |
| Work anniversaries | Employees |
| Spot and peer awards | Employees |
| Onboarding | New hires |
| Client milestones | Clients |
| Channel schemes | Partners |

### 4. Value limits

Set maximum values per recipient type and occasion. Example structure:

| Recipient | Occasion | Maximum value |
|---|---|---|
| Employee | Festive | Defined by HR |
| Employee | Spot award | Defined by HR |
| Client | Festive | Defined by compliance |
| Public official | Any | Typically prohibited or strictly limited |

![Policy approval workflow diagram](gemini: Clean flowchart illustration of a gifting approval workflow: request, budget owner approval, compliance check, procurement order, delivery, record-keeping, with icons and arrows, flat vector design in purple and magenta | 16:9 | 1600x900)

### 5. Approval workflow

- Who can request gifts
- Approval thresholds
- Compliance review for client and partner gifts

### 6. Anti-bribery safeguards

- No gifts intended to influence business decisions
- No gifts during active tenders or negotiations
- Strict rules for public officials and government-linked entities
- Respect recipients' own gifting policies

:::warning Public officials
Gifts to government officials or employees of public sector entities carry heightened legal risk. Many companies prohibit them entirely. Seek legal advice.
:::

### 7. Tax handling

- Tracking of employee gift values against perquisite exemptions
- TDS considerations for business partner benefits
- GST documentation requirements

See [employee gift card tax rules](/blog/employee-gift-card-tax-rules-india) and [GST on gift vouchers](/blog/gst-on-gift-vouchers-india).

### 8. Approved vendors

Specify approved gifting vendors and the process for adding new ones.

### 9. Security controls

- Code handling rules
- Verification of gift card purchase requests
- Access restrictions

See [gift card program security](/blog/gift-card-program-security-and-fraud-controls).

### 10. Record-keeping

Maintain records of recipients, values, dates, approvals and purposes for audit.

### 11. Receiving gifts

Rules for employees receiving gifts from vendors or clients.

### 12. Exceptions and violations

Process for exceptions and consequences for violations.

## Rolling out the policy

1. Draft with HR, finance, legal and procurement.
2. Review with leadership.
3. Publish on the intranet.
4. Train relevant teams.
5. Review annually.

## Making policy practical

Policies work when compliance is easy. A consolidated gifting partner with clear order records and invoices — like [Orbit](/why-orbit) — reduces the effort of following the rules.`,
  },
  {
    slug: "multi-brand-vs-single-brand-gift-cards-for-companies",
    title: "Multi-Brand vs Single-Brand Gift Cards: What Should Companies Choose?",
    description: "Compare single-brand gift cards and multi-brand gift card programs for corporate rewards — choice, redemption, administration, cost and when each approach works best.",
    category: "procurement",
    tags: ["multi-brand", "single brand", "program design", "redemption"],
    date: "2026-06-01",
    cover: { prompt: "Visual comparison illustration: left a single large gift card of one brand, right a colourful fan of many brand gift cards with happy employees choosing, purple and magenta background, modern flat 3D style | 16:9 | 1600x900", alt: "Single brand versus multi-brand gift cards" },
    tldr: "Single-brand gift cards are simple and work when one brand suits nearly all recipients or fits a specific theme. Multi-brand programs give recipients choice, improve relevance across diverse audiences and usually lead to better redemption. Most companies combine both: a multi-brand menu for broad programs and single brands for targeted rewards.",
    body: `When companies start using gift cards, the first instinct is often to pick one popular brand for everyone. It's simple — but is it effective? Here's how single-brand and multi-brand approaches compare.

## Single-brand gift cards

One brand for all recipients.

### Advantages

- **Simple ordering** and communication
- **Consistent experience** for all recipients
- **Clear theming** (for example, a coffee brand for a "coffee on us" thank-you)

### Disadvantages

- **Doesn't suit everyone**
- **Local availability** issues for in-store brands
- **Lower redemption** among people who don't use the brand

## Multi-brand programs

Recipients get a choice from a menu, or different groups receive different brands.

### Advantages

- **Higher relevance** across diverse employees
- **Better redemption** because people pick brands they use
- **Inclusive** of different preferences and locations
- **Flexible tiering** by recipient group

### Disadvantages

- **More planning** to design menus
- **More brands** to manage in orders

![Employees choosing different brands from a menu](gemini: Diverse Indian employees in a bright office each holding phones showing different brand gift card choices from a colourful menu screen on a wall display, cheerful inclusive mood, purple accents | 16:9 | 1600x900)

## Comparison

| Factor | Single brand | Multi-brand |
|---|---|---|
| Recipient choice | Low | High |
| Relevance across diverse teams | Variable | High |
| Ordering complexity | Low | Moderate (low with the right tool) |
| Redemption likelihood | Variable | Typically higher |
| Theming | Easy | Flexible |
| Tiering by group | Limited | Easy |

## When single-brand works

- **Themed moments:** "Lunch on us" with a food delivery brand
- **Homogeneous groups:** a small team with shared preferences
- **Specific incentives:** a travel card for a sales trip contest

## When multi-brand works best

- **Festive gifting** for large workforces
- **Recognition programs** across functions and locations
- **Channel incentives** for partners in different towns
- **Client gifting** across varied relationships

:::tip The practical middle ground
Offer a menu of 4–8 well-chosen brands per program: one or two marketplaces, a food brand, a fashion brand, an electronics brand and a premium option.
:::

## Designing a great brand menu

1. **Cover essentials:** marketplace and groceries
2. **Add everyday treats:** food and coffee
3. **Include aspiration:** electronics, travel
4. **Consider identity:** fashion, beauty, books
5. **Check geography:** ensure local availability

## Reducing ordering complexity

The main downside of multi-brand programs — ordering complexity — disappears with a platform that supports multiple brands, denominations and quantities in one order. [Orbit's quote builder](/contact-sales) was built for exactly this, with consolidated quotes and invoicing.`,
  },
];
