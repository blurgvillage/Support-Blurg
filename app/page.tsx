import Link from "next/link";
import { Headphones } from "lucide-react";
import { categories, quickLinks, siteInfo, allArticlesFlat } from "@/content/support-content";
import SearchBar from "@/components/SearchBar";
import CategoryCard from "@/components/CategoryCard";
import FaqAccordion from "@/components/FaqAccordion";
import TrackOrderButton from "@/components/TrackOrderButton";

export default function Home() {
  return (
    <div>
      <section className="border-b border-line bg-paper px-6 py-20">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-ink-3">
            {siteInfo.heroEyebrow}
          </p>
          <h1 className="mt-4 text-4xl font-extrabold leading-tight tracking-tight text-ink sm:text-5xl">
            We&apos;re here to help you.
          </h1>
          <p className="mx-auto mt-4 max-w-lg text-ink-2">{siteInfo.heroSubtitle}</p>

          <div className="mx-auto mt-8 max-w-xl">
            <SearchBar />
          </div>

          <div className="mx-auto mt-5 flex max-w-xl flex-wrap justify-center gap-2">
            {quickLinks.map((link) => (
              <Link
                key={link.label}
                href={`/support/${link.categorySlug}${link.articleSlug ? `/${link.articleSlug}` : ""}`}
                className="rounded-full border border-line px-3.5 py-1.5 text-xs font-medium text-ink-2 transition hover:border-ink hover:text-ink"
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <TrackOrderButton />
            <Link
              href="/contact"
              className="inline-flex items-center gap-1.5 rounded-lg border border-ink bg-paper px-6 py-3 text-sm font-semibold text-ink transition hover:bg-ink hover:text-cream"
            >
              <Headphones size={15} />
              Contact Support
            </Link>
          </div>
        </div>
      </section>

      <section id="categories" className="px-6 py-16">
        <div className="mx-auto max-w-6xl">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-ink-3">
            Help Topics
          </p>
          <h2 className="mt-2 text-2xl font-bold text-ink">Browse by category</h2>
          <p className="mt-2 max-w-xl text-sm text-ink-2">{siteInfo.introBody}</p>

          <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {categories.map((category) => (
              <CategoryCard key={category.slug} category={category} />
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-line bg-paper px-6 py-16">
        <div className="mx-auto max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-ink-3">
            FAQs
          </p>
          <h2 className="mt-2 text-2xl font-bold text-ink">Frequently asked questions</h2>
          <p className="mt-2 text-sm text-ink-2">
            {allArticlesFlat.length} answers to our most common questions.
          </p>

          <div className="mt-8">
            <FaqAccordion items={allArticlesFlat} />
          </div>
        </div>
      </section>
    </div>
  );
}
