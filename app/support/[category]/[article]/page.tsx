import Link from "next/link";
import { notFound } from "next/navigation";
import TrackOrderCard from "@/components/TrackOrderCard";
import { ChevronRight, ArrowRight } from "lucide-react";
import { categories, getArticle } from "@/content/support-content";
import HelpfulWidget from "@/components/HelpfulWidget";

export function generateStaticParams() {
  return categories.flatMap((category) =>
    category.articles.map((article) => ({
      category: category.slug,
      article: article.slug,
    }))
  );
}

export function generateMetadata({
  params,
}: {
  params: { category: string; article: string };
}) {
  const entry = getArticle(params.category, params.article);
  if (!entry) return {};
  return {
    title: `${entry.article.title} | Help Center`,
    description: entry.article.excerpt,
  };
}

export default function ArticlePage({
  params,
}: {
  params: { category: string; article: string };
}) {
  const entry = getArticle(params.category, params.article);
  if (!entry) notFound();
  const { category, article } = entry;

  const related = category.articles.filter((a) => a.slug !== article.slug).slice(0, 3);

  return (
    <section className="px-6 py-12">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-wrap items-center gap-2 text-sm text-ink-2">
          <Link href="/" className="hover:text-ink">
            Help Center
          </Link>
          <ChevronRight size={14} />
          <Link href={`/support/${category.slug}`} className="hover:text-ink">
            {category.title}
          </Link>
          <ChevronRight size={14} />
          <span className="font-medium text-ink">{article.title}</span>
        </div>

        <div className="mt-6 grid grid-cols-1 gap-10 lg:grid-cols-[1fr_280px]">
          <article className="rounded-2xl border border-line bg-paper p-8 shadow-sm sm:p-10">
            <span className="inline-block rounded-md bg-tan px-3 py-1 text-xs font-semibold uppercase tracking-wide text-ink-2">
              {category.title}
            </span>
            <h1 className="mt-5 text-3xl font-bold text-ink sm:text-4xl">
              {article.title}
            </h1>
            <p className="mt-2 text-sm text-ink-3">Updated {article.updated}</p>

            <p className="mt-8 text-base leading-relaxed text-ink-2">
              {article.intro}
            </p>

            {article.steps && (
              <ul className="mt-6 space-y-3">
                {article.steps.map((step, i) => (
                  <li key={i} className="flex gap-3 text-base leading-relaxed text-ink-2">
                    <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-md bg-tan text-xs font-semibold text-ink-2">
                      {i + 1}
                    </span>
                    {step}
                  </li>
                ))}
              </ul>
            )}

            {article.note && (
              <div className="mt-8 rounded-lg bg-cream p-5">
                <p className="text-sm text-ink-2">
                  <span className="font-semibold text-ink">Note: </span>
                  {article.note}
                </p>
              </div>
            )}

            <div className="mt-12 border-t border-line pt-8">
              <p className="text-sm font-semibold text-ink">Was this article helpful?</p>
              <div className="mt-4">
                <HelpfulWidget />
              </div>
            </div>
          </article>

          <aside className="space-y-4">
            <div className="rounded-2xl border border-line bg-paper p-6 shadow-sm">
              <p className="text-xs font-semibold uppercase tracking-widest text-ink-3">
                Related articles
              </p>
              <div className="mt-4 space-y-3">
                {related.map((rel) => (
                  <Link
                    key={rel.slug}
                    href={`/support/${category.slug}/${rel.slug}`}
                    className="flex items-center justify-between gap-2 text-sm font-medium text-ink-2 hover:text-ink"
                  >
                    {rel.title}
                    <ArrowRight size={14} className="shrink-0 text-ink-3" />
                  </Link>
                ))}
              </div>
            </div>

            <div className="rounded-2xl border border-line bg-paper p-6 shadow-sm">
              <h3 className="text-base font-bold text-ink">Still need help?</h3>
              <p className="mt-2 text-sm text-ink-2">
                Our care team responds within a few hours.
              </p>
              <Link
                href="/contact"
                className="mt-5 inline-flex w-full items-center justify-center gap-1.5 rounded-lg bg-ink px-5 py-2.5 text-sm font-semibold text-cream transition hover:bg-terracotta-dark"
              >
                Contact Support
                <ArrowRight size={15} />
              </Link>
            </div>

            <TrackOrderCard />
          </aside>
        </div>
      </div>
    </section>
  );
}
