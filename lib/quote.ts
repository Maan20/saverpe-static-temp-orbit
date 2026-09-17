import { useSyncExternalStore } from "react";
import type { BrandPrice } from "@/lib/brands";

/*
 * Client-side quote list: a company can add many brands, each with one or more
 * denomination × quantity lines, then submit everything via Contact Sales.
 * Persisted in localStorage so it survives navigation between catalog and form.
 */

export interface QuoteBrand {
  slug: string;
  name: string;
  logo: string | null;
  category: string;
  price: BrandPrice;
}

export interface QuoteLine {
  id: string;
  slug: string;
  name: string;
  logo: string | null;
  denomination: number;
  quantity: number;
}

const KEY = "orbit-quote-v1";
const EVENT = "orbit-quote-change";
const EMPTY: QuoteLine[] = [];

let cacheRaw: string | null = null;
let cacheValue: QuoteLine[] = EMPTY;

function read(): QuoteLine[] {
  let raw: string | null = null;
  try {
    raw = window.localStorage.getItem(KEY);
  } catch {
    return cacheValue;
  }
  if (raw === cacheRaw) return cacheValue;
  cacheRaw = raw;
  try {
    const parsed = raw ? (JSON.parse(raw) as QuoteLine[]) : EMPTY;
    cacheValue = Array.isArray(parsed) ? parsed.filter((l) => l && l.slug && l.quantity > 0 && l.denomination > 0) : EMPTY;
  } catch {
    cacheValue = EMPTY;
  }
  return cacheValue;
}

function write(lines: QuoteLine[]) {
  cacheValue = lines;
  cacheRaw = JSON.stringify(lines);
  try {
    window.localStorage.setItem(KEY, cacheRaw);
  } catch {
    // Storage unavailable (private mode) — keep in-memory state only.
  }
  window.dispatchEvent(new Event(EVENT));
}

function subscribe(callback: () => void) {
  const onStorage = (e: StorageEvent) => e.key === KEY && callback();
  window.addEventListener(EVENT, callback);
  window.addEventListener("storage", onStorage);
  return () => {
    window.removeEventListener(EVENT, callback);
    window.removeEventListener("storage", onStorage);
  };
}

export function useQuote() {
  return useSyncExternalStore(subscribe, read, () => EMPTY);
}

export function addToQuote(brand: Pick<QuoteBrand, "slug" | "name" | "logo">, denomination: number, quantity: number) {
  const lines = read();
  const existing = lines.find((l) => l.slug === brand.slug && l.denomination === denomination);
  if (existing) {
    write(lines.map((l) => (l === existing ? { ...l, quantity: l.quantity + quantity } : l)));
  } else {
    write([...lines, { id: `${brand.slug}-${denomination}-${Date.now()}`, slug: brand.slug, name: brand.name, logo: brand.logo, denomination, quantity }]);
  }
}

export function updateLine(id: string, patch: Partial<Pick<QuoteLine, "denomination" | "quantity">>) {
  write(read().map((l) => (l.id === id ? { ...l, ...patch } : l)));
}

export function removeLine(id: string) {
  write(read().filter((l) => l.id !== id));
}

export function clearQuote() {
  write(EMPTY);
}

export function quoteTotals(lines: QuoteLine[]) {
  const cards = lines.reduce((n, l) => n + l.quantity, 0);
  const value = lines.reduce((n, l) => n + l.quantity * l.denomination, 0);
  const brands = new Set(lines.map((l) => l.slug)).size;
  return { cards, value, brands };
}

/** Maps a total card count to the Contact Sales "Estimated requirement" buckets. */
export function requirementBucket(cards: number) {
  if (cards <= 0) return "";
  if (cards < 50) return "<50";
  if (cards <= 500) return "50-500";
  if (cards <= 5000) return "500-5000";
  return "5000+";
}

/** Suggested denominations for a brand's price configuration. */
export function denominationOptions(price: BrandPrice) {
  if (price.denominations?.length) return price.denominations;
  if (price.type === "range") {
    const min = price.min ?? 100;
    const max = price.max ?? 10000;
    const presets = [250, 500, 1000, 2000, 2500, 5000, 10000].filter((v) => v >= min && v <= max);
    return presets.length ? presets : [min];
  }
  return [];
}

export function isValidDenomination(price: BrandPrice, value: number) {
  if (!Number.isFinite(value) || value <= 0) return false;
  if (price.type === "slab") return price.denominations.length === 0 || price.denominations.includes(value);
  return (price.min == null || value >= price.min) && (price.max == null || value <= price.max);
}

const inr = new Intl.NumberFormat("en-IN", { style: "currency", currency: "INR", maximumFractionDigits: 0 });
export const formatInr = (v: number) => inr.format(v);
