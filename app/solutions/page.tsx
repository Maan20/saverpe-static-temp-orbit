import Link from "next/link";
import { ArrowRight, CircleCheck } from "lucide-react";
import Image from "@/components/Image";
import JsonLd from "@/components/JsonLd";
import { CtaBand, PageHero } from "@/components/ui";
import { solutionIcons } from "@/components/icons";
import { solutions } from "@/content/solutions";
import { itemListJsonLd, pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "Corporate Gifting Solutions — Rewards, Incentives & More",
  description: "Explore Orbit solutions: employee rewards, channel partner incentives, festive bulk gifting, onboarding kits, client gifting and customer loyalty with e-gift cards.",
  path: "/solutions",
});

export default function SolutionsPage() {
  return (
    <>
      <JsonLd data={itemListJsonLd("Orbit corporate gifting solutions", solutions.map((s) => ({ name: s.name, path: `/solutions/${s.slug}` })))} />
      <PageHero
        breadcrumbs={[{ name: "Solutions", path: "/solutions" }]}
        eyebrow={`${solutions.length} solutions`}
        title={<>Gifting programs for <span className="text-gradient">every business goal</span></>}
        intro="Whether you want to retain talent, move channel inventory, welcome new hires or thank key clients — Orbit brings 290+ brands and a consolidated ordering workflow to every program."
      />
      <section className="container-page mt-12 space-y-8">
        {solutions.map((s, i) => {
          const Icon = solutionIcons[s.icon];
          return (
            <article key={s.slug} className="card grid gap-8 overflow-hidden p-6 lg:grid-cols-2 lg:items-center lg:p-10">
              <div className={i % 2 ? "lg:order-2" : ""}>
                <span className="grid size-14 place-items-center rounded-2xl bg-orbit text-white"><Icon className="size-7" aria-hidden /></span>
                <h2 className="h-section mt-5">{s.name}</h2>
                <p className="mt-3 text-lg leading-8 text-muted">{s.summary}</p>
                <ul className="mt-5 grid gap-2 sm:grid-cols-2">
                  {s.programs.slice(0, 4).map((p) => (
                    <li key={p.title} className="flex items-center gap-2 text-sm font-semibold"><CircleCheck className="size-4 text-mint" aria-hidden /> {p.title}</li>
                  ))}
                </ul>
                <Link href={`/solutions/${s.slug}`} className="btn-primary mt-7">Explore {s.shortName.toLowerCase()} <ArrowRight className="size-4" aria-hidden /></Link>
              </div>
              <Image GeminiPrompt={s.image.prompt} alt={s.image.alt} file={`solution-${s.slug}`} />
            </article>
          );
        })}
      </section>
      <CtaBand title="Not sure which program fits?" text="Tell us your goal and audience — we'll recommend a structure, brand menu and budget." primary={{ href: "/contact-sales", label: "Talk to our team" }} secondary={{ href: "/case-studies", label: "See examples" }} />
    </>
  );
}
