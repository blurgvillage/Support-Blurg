"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronDown, ArrowUpRight } from "lucide-react";
import type { Article, Category } from "@/content/support-content";

export default function FaqAccordion({
  items,
}: {
  items: { category: Category; article: Article }[];
}) {
  const [openSlug, setOpenSlug] = useState<string | null>(items[0]?.article.slug ?? null);

  return (
    <div className="overflow-hidden rounded-2xl border border-line bg-paper shadow-sm">
      {items.map(({ category, article }) => {
        const isOpen = openSlug === article.slug;

        return (
          <div key={article.slug} className="border-b border-line last:border-b-0">
            <button
              type="button"
              onClick={() => setOpenSlug(isOpen ? null : article.slug)}
              aria-expanded={isOpen}
              className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left transition hover:bg-cream"
            >
              <div className="flex flex-wrap items-center gap-3">
                <h3 className="text-base font-semibold text-ink">{article.title}</h3>
                <span className="rounded-md bg-tan px-2.5 py-0.5 text-[11px] font-medium uppercase tracking-wide text-ink-2">
                  {category.title}
                </span>
              </div>
              <ChevronDown
                size={18}
                className={`shrink-0 text-ink-3 transition-transform duration-200 ${
                  isOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            {isOpen && (
              <div className="px-6 pb-6">
                <p className="text-sm leading-relaxed text-ink-2">{article.intro}</p>

                {article.steps && (
                  <ul className="mt-4 space-y-2.5">
                    {article.steps.map((step, i) => (
                      <li
                        key={i}
                        className="flex gap-3 text-sm leading-relaxed text-ink-2"
                      >
                        <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-md bg-tan text-[11px] font-semibold text-ink-2">
                          {i + 1}
                        </span>
                        {step}
                      </li>
                    ))}
                  </ul>
                )}

                {article.note && (
                  <div className="mt-4 rounded-lg bg-cream p-4">
                    <p className="text-sm text-ink-2">
                      <span className="font-semibold text-ink">Note: </span>
                      {article.note}
                    </p>
                  </div>
                )}

                <Link
                  href={`/support/${category.slug}/${article.slug}`}
                  className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-ink hover:underline"
                >
                  View full article
                  <ArrowUpRight size={14} />
                </Link>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
