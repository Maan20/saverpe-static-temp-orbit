"use client";

import Link from "next/link";
import { ShoppingCart } from "lucide-react";
import { quoteTotals, useQuote } from "@/lib/quote";

export default function QuotePill() {
  const lines = useQuote();
  const { cards, brands } = quoteTotals(lines);
  return (
    <Link
      href="/contact-sales#quote"
      aria-label={cards ? `Quote list: ${brands} brands, ${cards} cards` : "Quote list is empty"}
      className="relative grid size-11 place-items-center rounded-full border border-line bg-white transition hover:border-brand"
    >
      <ShoppingCart className="size-5" aria-hidden />
      {cards > 0 && (
        <span className="absolute -right-1 -top-1 grid min-w-5 place-items-center rounded-full bg-magenta px-1 text-[10px] font-extrabold text-white">{brands}</span>
      )}
    </Link>
  );
}
