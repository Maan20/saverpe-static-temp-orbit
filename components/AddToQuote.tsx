"use client";

import Link from "next/link";
import { useState } from "react";
import { CircleCheck, Minus, Plus, ShoppingCart } from "lucide-react";
import { addToQuote, denominationOptions, formatInr, isValidDenomination, quoteTotals, useQuote, type QuoteBrand } from "@/lib/quote";

const QTY_PRESETS = [10, 50, 100, 500, 1000];

export default function AddToQuote({ brand, compact = false }: { brand: QuoteBrand; compact?: boolean }) {
  const options = denominationOptions(brand.price);
  const isRange = brand.price.type === "range";
  const [denomination, setDenomination] = useState<number>(options[Math.min(1, options.length - 1)] ?? 0);
  const [custom, setCustom] = useState("");
  const [quantity, setQuantity] = useState(50);
  const [added, setAdded] = useState(false);
  const lines = useQuote();
  const totals = quoteTotals(lines);

  const value = custom ? Number(custom) : denomination;
  const valid = isValidDenomination(brand.price, value) && quantity > 0;

  function add() {
    if (!valid) return;
    addToQuote(brand, value, quantity);
    setAdded(true);
    setTimeout(() => setAdded(false), 2500);
  }

  return (
    <div className={compact ? "space-y-3" : "card space-y-5 p-6"}>
      {!compact && (
        <div>
          <p className="font-display text-lg font-bold">Add {brand.name} to your bulk quote</p>
          <p className="text-sm text-muted">Mix any number of brands, denominations and quantities — our team prepares a consolidated quote.</p>
        </div>
      )}

      <fieldset>
        <legend className="mb-2 text-xs font-bold uppercase tracking-wider text-muted">Denomination per card</legend>
        <div className="flex flex-wrap gap-2">
          {options.map((d) => (
            <button
              key={d}
              type="button"
              onClick={() => {
                setDenomination(d);
                setCustom("");
              }}
              aria-pressed={!custom && denomination === d}
              className={`rounded-full border px-3.5 py-1.5 text-sm font-bold transition ${!custom && denomination === d ? "border-brand bg-brand text-white" : "border-line bg-white hover:border-brand"}`}
            >
              {formatInr(d)}
            </button>
          ))}
        </div>
        {isRange && (
          <label className="mt-3 block">
            <span className="sr-only">Custom denomination</span>
            <input
              type="number"
              inputMode="numeric"
              min={brand.price.type === "range" ? (brand.price.min ?? undefined) : undefined}
              max={brand.price.type === "range" ? (brand.price.max ?? undefined) : undefined}
              value={custom}
              onChange={(e) => setCustom(e.target.value)}
              placeholder={brand.price.type === "range" && brand.price.min && brand.price.max ? `Custom: ${formatInr(brand.price.min)} – ${formatInr(brand.price.max)}` : "Custom value"}
              className="field !py-2.5"
            />
          </label>
        )}
        {custom && !isValidDenomination(brand.price, Number(custom)) && <p className="mt-1 text-xs font-semibold text-accent">Enter a value within the brand&apos;s allowed range.</p>}
      </fieldset>

      <fieldset>
        <legend className="mb-2 text-xs font-bold uppercase tracking-wider text-muted">Number of cards</legend>
        <div className="flex items-center gap-2">
          <button type="button" aria-label="Decrease quantity" onClick={() => setQuantity((q) => Math.max(1, q - 10))} className="grid size-10 place-items-center rounded-full border border-line bg-white hover:border-brand">
            <Minus className="size-4" />
          </button>
          <input type="number" inputMode="numeric" min={1} value={quantity} onChange={(e) => setQuantity(Math.max(0, Math.floor(Number(e.target.value) || 0)))} aria-label="Quantity" className="field !w-28 !py-2 text-center font-bold" />
          <button type="button" aria-label="Increase quantity" onClick={() => setQuantity((q) => q + 10)} className="grid size-10 place-items-center rounded-full border border-line bg-white hover:border-brand">
            <Plus className="size-4" />
          </button>
        </div>
        <div className="mt-2 flex flex-wrap gap-1.5">
          {QTY_PRESETS.map((q) => (
            <button key={q} type="button" onClick={() => setQuantity(q)} className="rounded-full bg-sand px-2.5 py-1 text-xs font-bold text-muted hover:bg-brand-100 hover:text-brand-700">
              {q}
            </button>
          ))}
        </div>
      </fieldset>

      <div className="flex items-center justify-between rounded-2xl bg-brand-50 px-4 py-3 text-sm">
        <span className="text-muted">Line value</span>
        <span className="font-display text-lg font-extrabold text-brand-700">{valid ? formatInr(value * quantity) : "—"}</span>
      </div>

      <button type="button" onClick={add} disabled={!valid} className="btn-primary w-full disabled:opacity-50">
        {added ? <CircleCheck className="size-4" aria-hidden /> : <ShoppingCart className="size-4" aria-hidden />}
        {added ? "Added to quote" : "Add to quote"}
      </button>

      {totals.cards > 0 && (
        <p className="text-center text-sm" aria-live="polite">
          Quote: <strong>{totals.brands}</strong> brand{totals.brands === 1 ? "" : "s"} · <strong>{totals.cards.toLocaleString("en-IN")}</strong> cards ·{" "}
          <Link href="/contact-sales#quote" className="font-bold text-brand-700 underline decoration-magenta/40 underline-offset-4">
            Review &amp; request quote →
          </Link>
        </p>
      )}
    </div>
  );
}
