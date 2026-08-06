import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Article, Category } from "@/content/support-content";

export default function ArticleCard({
  article,
  category,
}: {
  article: Article;
  category: Category;
}) {
  return (
    <Link
      href={`/support/${category.slug}/${article.slug}`}
      className="group flex flex-col justify-between rounded-2xl border border-line bg-paper p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
    >
      <div>
        <h3 className="line-clamp-2 text-base font-bold text-ink">{article.title}</h3>
        <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-ink-2">
          {article.excerpt}
        </p>
      </div>

      <div className="mt-6 flex items-center justify-end">
        <ArrowRight
          size={16}
          className="text-ink-3 transition group-hover:translate-x-1 group-hover:text-ink"
        />
      </div>
    </Link>
  );
}
