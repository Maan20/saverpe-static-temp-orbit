"use client";

import Link from "next/link";
import NextImage from "next/image";
import { useMemo, useState, type FormEvent } from "react";
import { CircleCheck, Plus, Search, Send, Trash, TriangleAlert, X } from "lucide-react";
import {
  addToQuote,
  clearQuote,
  denominationOptions,
  formatInr,
  isValidDenomination,
  quoteTotals,
  removeLine,
  requirementBucket,
  updateLine,
  useQuote,
  type QuoteBrand,
} from "@/lib/quote";

const COMPANY_SIZES = ["1-10", "11-50", "51-200", "201-500", "501-1000", "1001-5000", "5000+"];
const REQUIREMENTS = [
  { v: "<50", l: "Fewer than 50 cards" },
  { v: "50-500", l: "50 – 500 cards" },
  { v: "500-5000", l: "500 – 5,000 cards" },
  { v: "5000+", l: "5,000+ cards" },
];
const USE_CASES = ["Employee rewards & recognition", "Festive / bulk gifting", "Channel partner incentives", "Client & customer gifting", "Onboarding kits", "Sales incentives", "Customer loyalty program", "Other"];

// Mirrors DEFAULT_BRAND_IMAGE in lib/brands.ts.
const DEFAULT_BRAND_IMAGE = "/brands/default-e-gift-card.png";

type Status = { type: "success" | "error"; message: string } | null;

export default function ContactSalesForm({ brands }: { brands: QuoteBrand[] }) {
  const lines = useQuote();
  const totals = quoteTotals(lines);
  const [requirement, setRequirement] = useState("");
  const [status, setStatus] = useState<Status>(null);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitting, setSubmitting] = useState(false);
  const bySlug = useMemo(() => new Map(brands.map((b) => [b.slug, b])), [brands]);

  const suggested = requirementBucket(totals.cards);
  const effectiveRequirement = requirement || suggested;

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formEl = event.currentTarget;
    const data = new FormData(formEl);
    const get = (k: string) => String(data.get(k) ?? "").trim();

    const brandRequirements = lines.map((l) => ({ brand: l.name, slug: l.slug, denomination: l.denomination, quantity: l.quantity, subtotal: l.denomination * l.quantity }));
    const payload = {
      company_name: get("company_name"),
      contact_person: get("contact_person"),
      work_email: get("work_email"),
      company_size: get("company_size"),
      estimated_requirement: effectiveRequirement,
      use_case: get("use_case"),
      message: get("message"),
      brand_requirements: brandRequirements,
      selected_brands: brandRequirements.map((b) => `${b.brand} — ${b.quantity} × ${formatInr(b.denomination)}`).join("; "),
      total_cards: totals.cards,
      total_value: totals.value,
      website: get("website"),
    };

    const nextErrors: Record<string, string> = {};
    if (payload.company_name.length < 2) nextErrors.company_name = "Please enter your company name.";
    if (payload.contact_person.length < 2) nextErrors.contact_person = "Please enter your name.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(payload.work_email)) nextErrors.work_email = "Please enter a valid work email.";
    if (!payload.company_size) nextErrors.company_size = "Select your company size.";
    if (!payload.estimated_requirement) nextErrors.estimated_requirement = "Select an estimated requirement or add brands to your quote.";
    if (!payload.use_case) nextErrors.use_case = "Select a use case.";
    if (payload.message && payload.message.length < 10) nextErrors.message = "Add a little more detail (10+ characters) or leave blank.";
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length) {
      document.getElementById(Object.keys(nextErrors)[0])?.focus();
      return;
    }

    setSubmitting(true);
    setStatus(null);
    const apiUrl = process.env.NEXT_PUBLIC_LEADS_API_URL?.replace(/\/$/, "");
    try {
      if (!apiUrl) {
        // Mock mode for frontend-only development.
        await new Promise((r) => setTimeout(r, 700));
      } else {
        const res = await fetch(`${apiUrl}/saverpe/contact-sales/`, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(payload) });
        const body = await res.json().catch(() => null);
        if (!res.ok || body?.success === false) {
          if (body?.errors) setErrors(Object.fromEntries(Object.entries(body.errors as Record<string, string[]>).map(([k, v]) => [k, Array.isArray(v) ? String(v[0]) : String(v)])));
          throw new Error(body?.message ?? "We couldn't submit your request. Please try again.");
        }
      }
      formEl.reset();
      clearQuote();
      setRequirement("");
      setStatus({ type: "success", message: "Thank you! Your requirement has reached our sales team. Expect a response with a tailored quote within one business day." });
    } catch (err) {
      setStatus({ type: "error", message: err instanceof Error && err.message !== "Failed to fetch" ? err.message : "Network error — please email contact@saverpe.com directly." });
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <form onSubmit={onSubmit} noValidate className="space-y-8">
      {/* QUOTE BUILDER */}
      <section id="quote" className="card scroll-mt-28 overflow-hidden">
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-line bg-sand/60 px-6 py-4">
          <div>
            <h2 className="font-display text-xl font-extrabold">1. Build your brand mix</h2>
            <p className="text-sm text-muted">Add multiple brands — each with its own denominations and quantities.</p>
          </div>
          {lines.length > 0 && (
            <button type="button" onClick={clearQuote} className="inline-flex items-center gap-1 text-xs font-bold text-muted hover:text-accent">
              <X className="size-3.5" aria-hidden /> Clear all
            </button>
          )}
        </div>

        <div className="p-6">
          <BrandPicker brands={brands} />

          {lines.length === 0 ? (
            <p className="mt-6 rounded-2xl border border-dashed border-line p-6 text-center text-sm text-muted">
              No brands added yet. Search above, or browse the <Link href="/brands" className="font-bold text-brand-700 underline">brand catalog</Link>. You can also skip this step and just describe your needs below.
            </p>
          ) : (
            <div className="mt-6 overflow-x-auto">
              <table className="w-full min-w-[640px] text-left text-sm">
                <thead>
                  <tr className="text-xs uppercase tracking-wider text-muted">
                    <th className="pb-3 font-bold">Brand</th>
                    <th className="pb-3 font-bold">Denomination</th>
                    <th className="pb-3 font-bold">Quantity</th>
                    <th className="pb-3 text-right font-bold">Subtotal</th>
                    <th className="pb-3"><span className="sr-only">Remove</span></th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-line">
                  {lines.map((l) => {
                    const brand = bySlug.get(l.slug);
                    const opts = brand ? denominationOptions(brand.price) : [l.denomination];
                    const isRange = brand?.price.type === "range";
                    const valid = brand ? isValidDenomination(brand.price, l.denomination) : true;
                    return (
                      <tr key={l.id} className="align-middle">
                        <td className="py-3 pr-3">
                          <div className="flex items-center gap-3">
                            <span className="relative size-10 shrink-0 overflow-hidden rounded-xl bg-brand-50">
                              <NextImage src={l.logo ?? DEFAULT_BRAND_IMAGE} alt="" fill sizes="40px" className="object-cover object-top" />
                            </span>
                            <span className="font-bold">{l.name}</span>
                          </div>
                        </td>
                        <td className="py-3 pr-3">
                          {isRange ? (
                            <input
                              type="number"
                              inputMode="numeric"
                              value={l.denomination}
                              onChange={(e) => updateLine(l.id, { denomination: Math.max(0, Math.floor(Number(e.target.value) || 0)) })}
                              aria-label={`${l.name} denomination`}
                              list={`denoms-${l.id}`}
                              className={`field !w-32 !py-2 ${valid ? "" : "!border-accent"}`}
                            />
                          ) : (
                            <select value={l.denomination} onChange={(e) => updateLine(l.id, { denomination: Number(e.target.value) })} aria-label={`${l.name} denomination`} className="field !w-32 !py-2">
                              {opts.map((d) => (
                                <option key={d} value={d}>
                                  {formatInr(d)}
                                </option>
                              ))}
                            </select>
                          )}
                          {isRange && (
                            <datalist id={`denoms-${l.id}`}>
                              {opts.map((d) => <option key={d} value={d} />)}
                            </datalist>
                          )}
                          {!valid && brand?.price.type === "range" && <p className="mt-1 text-[11px] font-semibold text-accent">Allowed {formatInr(brand.price.min ?? 0)}–{formatInr(brand.price.max ?? 0)}</p>}
                        </td>
                        <td className="py-3 pr-3">
                          <input type="number" inputMode="numeric" min={1} value={l.quantity} onChange={(e) => updateLine(l.id, { quantity: Math.max(1, Math.floor(Number(e.target.value) || 1)) })} aria-label={`${l.name} quantity`} className="field !w-28 !py-2" />
                        </td>
                        <td className="py-3 text-right font-display font-bold">{formatInr(l.denomination * l.quantity)}</td>
                        <td className="py-3 pl-2 text-right">
                          <button type="button" onClick={() => removeLine(l.id)} aria-label={`Remove ${l.name}`} className="grid size-9 place-items-center rounded-full text-muted hover:bg-accent-soft hover:text-accent">
                            <Trash className="size-4" aria-hidden />
                          </button>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          )}

          {lines.length > 0 && (
            <dl className="mt-6 grid gap-3 rounded-2xl bg-orbit p-5 text-white sm:grid-cols-3">
              <div>
                <dt className="text-xs font-bold uppercase tracking-wider text-white/70">Brands</dt>
                <dd className="font-display text-2xl font-extrabold">{totals.brands}</dd>
              </div>
              <div>
                <dt className="text-xs font-bold uppercase tracking-wider text-white/70">Total cards</dt>
                <dd className="font-display text-2xl font-extrabold">{totals.cards.toLocaleString("en-IN")}</dd>
              </div>
              <div>
                <dt className="text-xs font-bold uppercase tracking-wider text-white/70">Total face value</dt>
                <dd className="font-display text-2xl font-extrabold">{formatInr(totals.value)}</dd>
              </div>
            </dl>
          )}
          <p className="mt-3 text-xs text-muted">Face value is indicative. Final pricing, applicable discounts and invoicing are confirmed in your formal quote.</p>
        </div>
      </section>

      {/* COMPANY DETAILS */}
      <section className="card p-6 sm:p-8">
        <h2 className="font-display text-xl font-extrabold">2. Tell us about your company</h2>
        <div className="mt-6 grid gap-5 sm:grid-cols-2">
          <Field id="company_name" label="Company name" error={errors.company_name}>
            <input id="company_name" name="company_name" autoComplete="organization" className="field" placeholder="Acme Technologies Pvt Ltd" />
          </Field>
          <Field id="contact_person" label="Your name" error={errors.contact_person}>
            <input id="contact_person" name="contact_person" autoComplete="name" className="field" placeholder="Ananya Rao" />
          </Field>
          <Field id="work_email" label="Work email" error={errors.work_email}>
            <input id="work_email" name="work_email" type="email" autoComplete="email" className="field" placeholder="ananya@company.com" />
          </Field>
          <Field id="company_size" label="Company size" error={errors.company_size}>
            <select id="company_size" name="company_size" defaultValue="" className="field">
              <option value="" disabled>Select employees</option>
              {COMPANY_SIZES.map((s) => <option key={s} value={s}>{s} employees</option>)}
            </select>
          </Field>
          <Field id="estimated_requirement" label="Estimated requirement" error={errors.estimated_requirement}>
            <select id="estimated_requirement" name="estimated_requirement" value={effectiveRequirement} onChange={(e) => setRequirement(e.target.value)} className="field">
              <option value="" disabled>Select volume</option>
              {REQUIREMENTS.map((r) => <option key={r.v} value={r.v}>{r.l}</option>)}
            </select>
            {suggested && !requirement && <p className="mt-1.5 text-xs text-muted">Auto-selected from your brand mix ({totals.cards.toLocaleString("en-IN")} cards).</p>}
          </Field>
          <Field id="use_case" label="Primary use case" error={errors.use_case}>
            <select id="use_case" name="use_case" defaultValue="" className="field">
              <option value="" disabled>Select use case</option>
              {USE_CASES.map((u) => <option key={u} value={u}>{u}</option>)}
            </select>
          </Field>
        </div>
        <div className="mt-5">
          <Field id="message" label="Anything else? (optional)" error={errors.message}>
            <textarea id="message" name="message" rows={5} maxLength={3000} className="field resize-y" placeholder="Timelines, delivery dates, number of recipients, invoicing needs, custom denominations…" />
          </Field>
        </div>
        <div aria-hidden className="absolute -left-[9999px]">
          <label>
            Website <input name="website" tabIndex={-1} autoComplete="off" />
          </label>
        </div>
      </section>

      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-xs text-muted">No phone calls unless you ask. We reply by email from contact@saverpe.com.</p>
        <button type="submit" disabled={submitting} className="btn-primary !px-8 !py-4 text-base disabled:opacity-60">
          {submitting ? "Sending…" : lines.length ? `Request quote for ${totals.cards.toLocaleString("en-IN")} cards` : "Contact sales"} <Send className="size-4" aria-hidden />
        </button>
      </div>

      {status && (
        <div role="status" className={`flex items-start gap-3 rounded-2xl p-4 text-sm font-semibold ${status.type === "success" ? "bg-mint-soft" : "bg-accent-soft"}`}>
          {status.type === "success" ? <CircleCheck className="size-5 shrink-0 text-mint" aria-hidden /> : <TriangleAlert className="size-5 shrink-0 text-accent" aria-hidden />}
          {status.message}
        </div>
      )}
    </form>
  );
}

function BrandPicker({ brands }: { brands: QuoteBrand[] }) {
  const [query, setQuery] = useState("");
  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    return q ? brands.filter((b) => b.name.toLowerCase().includes(q)).slice(0, 8) : [];
  }, [brands, query]);

  return (
    <div className="relative">
      <label htmlFor="brand-search" className="sr-only">Search brands to add</label>
      <Search className="pointer-events-none absolute left-4 top-1/2 size-4 -translate-y-1/2 text-muted" aria-hidden />
      <input id="brand-search" type="search" autoComplete="off" value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search 290+ brands to add — Amazon, Swiggy, Tanishq…" className="field !rounded-full !pl-11" />
      {results.length > 0 && (
        <ul className="absolute inset-x-0 top-full z-20 mt-2 max-h-80 overflow-y-auto rounded-2xl border border-line bg-white p-2 shadow-xl">
          {results.map((b) => {
            const first = denominationOptions(b.price);
            const denom = first[Math.min(1, first.length - 1)] ?? (b.price.type === "range" ? (b.price.min ?? 500) : 500);
            return (
              <li key={b.slug}>
                <button
                  type="button"
                  onClick={() => {
                    addToQuote(b, denom, 50);
                    setQuery("");
                  }}
                  className="flex w-full items-center gap-3 rounded-xl px-3 py-2 text-left hover:bg-brand-50"
                >
                  <span className="relative size-9 shrink-0 overflow-hidden rounded-lg bg-brand-50"><NextImage src={b.logo ?? DEFAULT_BRAND_IMAGE} alt="" fill sizes="36px" className="object-cover object-top" /></span>
                  <span className="flex-1">
                    <span className="block text-sm font-bold">{b.name}</span>
                    <span className="text-xs text-muted">{b.price.type === "slab" ? `${first.length} fixed denominations` : `${formatInr(b.price.min ?? 0)} – ${formatInr(b.price.max ?? 0)}`}</span>
                  </span>
                  <span className="inline-flex items-center gap-1 rounded-full bg-brand px-2.5 py-1 text-xs font-bold text-white">
                    <Plus className="size-3" aria-hidden /> Add
                  </span>
                </button>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}

function Field({ id, label, error, children }: { id: string; label: string; error?: string; children: React.ReactNode }) {
  return (
    <div>
      <label htmlFor={id} className="mb-2 block text-sm font-bold text-ink">
        {label}
      </label>
      {children}
      {error && <p className="mt-1.5 text-xs font-semibold text-accent">{error}</p>}
    </div>
  );
}
