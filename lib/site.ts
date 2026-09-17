export const site = {
  name: "Orbit by SaverPe",
  shortName: "Orbit",
  url: (process.env.NEXT_PUBLIC_SITE_URL ?? "https://orbit.saverpe.com").replace(/\/$/, ""),
  consumerUrl: (process.env.NEXT_PUBLIC_CONSUMER_URL ?? "https://saverpe.com").replace(/\/$/, ""),
  email: "contact@saverpe.com",
  tagline: "Corporate gifting and rewards, at scale",
  description:
    "Orbit by SaverPe is a B2B corporate gifting platform for bulk e-gift cards from 290+ brands — employee rewards, channel partner incentives, client gifting and festive bulk orders across India.",
  locale: "en_IN",
  keywords: [
    "corporate gifting India",
    "bulk gift cards",
    "employee rewards and recognition",
    "corporate gift vouchers",
    "channel partner incentives",
    "Diwali corporate gifts",
    "B2B gift cards",
    "bulk e-vouchers",
    "employee gift cards",
  ],
} as const;

export const mainNav = [
  { href: "/solutions", label: "Solutions" },
  { href: "/industries", label: "Industries" },
  { href: "/brands", label: "Brands" },
  { href: "/why-orbit", label: "Why Orbit" },
  { href: "/case-studies", label: "Case studies" },
  { href: "/blog", label: "Insights" },
] as const;

export function absoluteUrl(path = "/") {
  return `${site.url}${path.startsWith("/") ? path : `/${path}`}`;
}
