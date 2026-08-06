import Link from "next/link";
import { notFound } from "next/navigation";
import { ChevronRight, ArrowRight, MessageCircle } from "lucide-react";
import { categories, getCategory } from "@/content/support-content";
import { iconMap } from "@/components/icon-map";
import ArticleCard from "@/components/ArticleCard";

export function generateStaticParams() {
  return categories.map((category) => ({ category: category.slug }));
}

export function generateMetadata({ params }: { params: { category: string } }) {
  const category = getCategory(params.category);
  if (!category) return {};
  return {
    title: `${category.title} | Help Center`,
    description: category.description,
  };
}

export default function CategoryPage({ params }: { params: { category: string } }) {
  const category = getCategory(params.category);
  if (!category) notFound();

  const Icon = iconMap[category.icon];
  const otherCategories = categories.filter((c) => c.slug !== category.slug);

  return (
    <div>
      <section className="border-b border-line bg-paper px-6 py-12">
        <div className="mx-auto max-w-6xl">
          <div className="flex items-center gap-2 text-sm text-ink-2">
            <Link href="/" className="hover:text-ink">
              Help Center
            </Link>
            <ChevronRight size={14} />
            <span className="font-medium text-ink">{category.title}</span>
          </div>

          <div className="mt-6 flex items-center gap-4">
            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-tan text-ink">
              <Icon size={22} />
            </span>
            <div>
              <h1 className="text-2xl font-bold text-ink sm:text-3xl">{category.title}</h1>
              <p className="mt-1 text-sm text-ink-2">{category.description}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-12">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-10 lg:grid-cols-[1fr_280px]">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-ink-3">
              {category.articles.length} articles in this category
            </p>

            <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2">
              {category.articles.map((article) => (
                <ArticleCard key={article.slug} article={article} category={category} />
              ))}
            </div>
          </div>

          <aside className="space-y-4">
            <div className="rounded-2xl border border-line bg-paper p-6 shadow-sm">
              <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-tan text-ink">
                <MessageCircle size={18} />
              </span>
              <h3 className="mt-4 text-base font-bold text-ink">Still need help?</h3>
              <p className="mt-2 text-sm text-ink-2">
                Can&apos;t find your answer? Our support team responds within a few hours.
              </p>
              <Link
                href="/contact"
                className="mt-5 inline-flex w-full items-center justify-center gap-1.5 rounded-lg bg-ink px-5 py-2.5 text-sm font-semibold text-cream transition hover:bg-terracotta-dark"
              >
                Contact Support
                <ArrowRight size={15} />
              </Link>
            </div>

            <div className="rounded-2xl border border-line bg-paper p-6 shadow-sm">
              <p className="text-xs font-semibold uppercase tracking-widest text-ink-3">
                Other topics
              </p>
              <div className="mt-4 space-y-3">
                {otherCategories.map((other) => {
                  const OtherIcon = iconMap[other.icon];
                  return (
                    <Link
                      key={other.slug}
                      href={`/support/${other.slug}`}
                      className="flex items-center gap-3 text-sm font-medium text-ink-2 hover:text-ink"
                    >
                      <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-tan text-ink">
                        <OtherIcon size={15} />
                      </span>
                      {other.title}
                      <ArrowRight size={14} className="ml-auto text-ink-3" />
                    </Link>
                  );
                })}
              </div>
            </div>
          </aside>
        </div>
      </section>
    </div>
  );
}
