import { ogCard, ogSize } from "@/lib/og";

export const alt = "Orbit by SaverPe — corporate gifting at scale";
export const size = ogSize;
export const contentType = "image/png";

export default function OpengraphImage() {
  return ogCard({ eyebrow: "For business", title: "Corporate gifting at scale with bulk gift cards from 290+ brands", footer: "Employee rewards · Channel incentives · Festive gifting" });
}
