"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { Search, ArrowRight } from "lucide-react";
import { allArticlesFlat, siteInfo } from "@/content/support-content";

export default function SearchBar() {
  const [query, setQuery] = useState("");
  const [focused, setFocused] = useState(false);

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return [];
    return allArticlesFlat
      .filter(
        ({ article }) =>
          article.title.toLowerCase().includes(q) ||
          article.excerpt.toLowerCase().includes(q)
      )
      .slice(0, 5);
  }, [query]);

  const showResults = focused && query.trim().length > 0;

  return (
    <div className="relative">
      <div className="flex items-center gap-3 rounded-xl border border-line bg-paper px-5 py-4 shadow-sm">
        <Search className="shrink-0 text-ink-3" size={20} />
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onFocus={() => setFocused(true)}
          onBlur={() => setTimeout(() => setFocused(false), 150)}
          placeholder={siteInfo.searchPlaceholder}
          className="w-full bg-transparent text-base text-ink placeholder:text-ink-3 focus:outline-none"
        />
      </div>

      {showResults && (
        <div className="absolute left-0 right-0 top-full z-20 mt-2 overflow-hidden rounded-xl border border-line bg-paper text-left shadow-md">
          {results.length > 0 ? (
            results.map(({ category, article }) => (
              <Link
                key={article.slug}
                href={`/support/${category.slug}/${article.slug}`}
                className="flex items-center justify-between gap-3 border-b border-line px-5 py-3 last:border-b-0 hover:bg-cream"
              >
                <div>
                  <p className="text-sm font-medium text-ink">{article.title}</p>
                  <p className="text-xs text-ink-3">{category.title}</p>
                </div>
                <ArrowRight size={15} className="shrink-0 text-ink-3" />
              </Link>
            ))
          ) : (
            <p className="px-5 py-4 text-sm text-ink-3">
              No results for &ldquo;{query}&rdquo;. Try another term or contact support.
            </p>
          )}
        </div>
      )}
    </div>
  );
}
