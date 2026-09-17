# Orbit by SaverPe — content to review before launch

## Illustrative or placeholder content

- [ ] **Case studies** (`content/case-studies.ts`) are **illustrative composite examples**, clearly labelled on the site. Replace them with verified client stories and permissions.
- [ ] **Home page sample quote** ("Diwali program — sample quote", 1,710 cards, ₹17,50,000) and the "12 brands · 4,800 cards" hero badge are illustrative UI examples.
- [ ] **Enterprise claims** to confirm before launch:
  - "GST-ready invoicing"
  - "Dedicated account management"
  - "Reply within 1 business day"
  - Security wording on `/why-orbit` (certifications are deliberately not claimed)
  - "API-ready roadmap" (worded as roadmap only; no live API is claimed)
- [ ] **About page story** (`app/about-us/page.tsx`): add real history, leadership and milestones.
- [ ] **Industry pages** (`content/industries.ts`): make sure the regulatory mentions (IRDAI, RBI, pharma codes) match your compliance guidance.

## Legal (TODO: legal review)

- [ ] `app/privacy-policy/page.tsx`: template copy, including recipient data processing.
- [ ] `app/terms-of-service/page.tsx`: template copy, including quote and ordering terms.

## Brand catalog (`data/brands.json`, generated)

- [ ] Logos missing for about 121 brands (the default e-gift card image is shown instead; `// TODO: swap in licensed brand logo asset`).
- [ ] Descriptions flagged with `descriptionNeedsReview` show generic copy.
- [ ] Confirm that B2B-specific SKUs (for example Pepperfry B2B, Oberoi Corporate) are available for bulk orders.
- [ ] Denomination presets for range brands (₹250 to ₹10,000 within the brand's min/max) are UI suggestions only. Confirm what's actually orderable.

## Blog (`content/blog/*.ts`)

- [ ] 95 articles. Pharma, DPDP Act and disclosure-related articles also need legal review. Have tax, GST and regulatory statements (the ₹5,000 perquisite exemption, the CBIC voucher circular from December 2024, TDS on business benefits) reviewed by a CA before publishing.
- [ ] Illustrative numbers in example tables are labelled as such. Keep those labels in place.

## Images

- [ ] Run `npm run build && node scripts/list-gemini-prompts.mjs`, generate every image in `GEMINI-PROMPTS.md` into `public/images/gemini/` and rebuild.

## Config

- [ ] Set `NEXT_PUBLIC_LEADS_API_URL` (for example `https://api.saverpe.com`), analytics and search console tokens.
- [ ] Submit `https://orbit.saverpe.com/sitemap.xml` to search consoles.
