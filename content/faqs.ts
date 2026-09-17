export interface FaqGroup {
  id: string;
  title: string;
  faqs: { q: string; a: string }[];
}

export const faqGroups: FaqGroup[] = [
  {
    id: "platform",
    title: "About Orbit",
    faqs: [
      { q: "What is Orbit by SaverPe?", a: "Orbit by SaverPe is a corporate gifting platform for businesses in India. Companies use Orbit to order bulk e-gift cards from 290+ brands for employee rewards, channel partner incentives, client gifting, onboarding kits and festive programs." },
      { q: "How is Orbit different from SaverPe?", a: "[SaverPe](https://saverpe.com) is for individuals gifting friends and family. Orbit is built for businesses — bulk quantities, multiple brands and denominations in one order, consolidated quotes and GST-ready invoicing." },
      { q: "Which brands are available for corporate gifting?", a: "The Orbit catalog includes 290+ brands across e-commerce, food & dining, fashion, electronics, travel, jewellery, hospitality, health & beauty, entertainment and more. [Browse the brand catalog](/brands)." },
      { q: "Is there a live self-serve checkout?", a: "Not yet. Today, you build your brand mix with the quote builder and our sales team sends a consolidated quote. An API and self-serve dashboard are on our roadmap." },
    ],
  },
  {
    id: "ordering",
    title: "Ordering & delivery",
    faqs: [
      { q: "Can I order multiple brands with different quantities?", a: "Yes. Add as many brands as you like, each with one or more denominations and its own quantity, using the quote builder on the [Contact Sales](/contact-sales) page." },
      { q: "Is there a minimum order quantity?", a: "Orbit supports programs of all sizes. Share your requirement and our team will recommend the best way to fulfil it." },
      { q: "How are gift cards delivered to recipients?", a: "E-gift cards are delivered digitally. Depending on your program, codes can be delivered to recipients directly or shared with your team for distribution." },
      { q: "Can delivery be scheduled for a specific date?", a: "Yes — for example, Diwali week, a year-end party or employees' joining dates. Mention your timeline when requesting a quote." },
      { q: "Can we choose custom denominations?", a: "Many brands support flexible values within a range, while others offer fixed denominations. The brand page and quote builder show what each brand allows." },
    ],
  },
  {
    id: "billing",
    title: "Billing, tax & compliance",
    faqs: [
      { q: "Do you provide GST invoices?", a: "Yes, Orbit provides GST-ready invoicing for business orders. Share your company billing details during the quote process." },
      { q: "Are employee gift cards taxable?", a: "In India, gifts and vouchers from an employer are generally treated as a perquisite, with an exemption of up to ₹5,000 per employee per financial year under the Income-tax Rules. Amounts above this are typically taxable. Please confirm with your tax advisor." },
      { q: "Is GST charged on gift vouchers?", a: "GST treatment of vouchers has specific rules and clarifications. Your formal quote and invoice will reflect applicable taxes; consult your CA for your accounting treatment." },
      { q: "What payment methods are supported?", a: "Business orders are typically paid via bank transfer against a proforma or tax invoice. Our sales team will share payment details with your quote." },
    ],
  },
  {
    id: "programs",
    title: "Programs & support",
    faqs: [
      { q: "Can you help design a rewards program?", a: "Yes. Our team can suggest reward tiers, brand menus and budgets based on your goals, headcount and occasions." },
      { q: "Do we get a dedicated account manager?", a: "Business customers are supported by a dedicated account contact for planning, quotes and fulfilment." },
      { q: "What happens if a recipient has an issue with a code?", a: "Email [contact@saverpe.com](mailto:contact@saverpe.com) with the details and our team will coordinate with the brand to resolve it." },
      { q: "Do you offer an API integration?", a: "An API for automated reward fulfilment is on our roadmap. [Contact sales](/contact-sales) to register interest." },
    ],
  },
];

export const homeFaqs = [faqGroups[0].faqs[0], faqGroups[1].faqs[0], faqGroups[1].faqs[1], faqGroups[2].faqs[0], faqGroups[2].faqs[1], faqGroups[3].faqs[0]];
