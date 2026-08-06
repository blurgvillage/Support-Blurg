import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Category } from "@/content/support-content";
import { iconMap } from "@/components/icon-map";

export default function CategoryCard({ category }: { category: Category }) {
  const Icon = iconMap[category.icon];

  return (
    <Link
      href={`/support/${category.slug}`}
      className="group flex flex-col justify-between rounded-2xl border border-line bg-paper p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
    >
      <div>
        <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-tan text-ink">
          <Icon size={20} />
        </span>

        <h3 className="mt-5 line-clamp-2 text-lg font-bold text-ink">{category.title}</h3>
        <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-ink-2">
          {category.description}
        </p>
      </div>

      <div className="mt-6 flex items-center justify-between">
        <span className="text-xs font-medium text-ink-3">
          {category.articles.length} articles
        </span>
        <ArrowRight
          size={16}
          className="text-ink-3 transition group-hover:translate-x-1 group-hover:text-ink"
        />
      </div>
    </Link>
  );
}
