"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { categories, siteInfo } from "@/content/support-content";

const navItems = [
  { label: "Help Center", href: "/" },
  ...categories.slice(0, 3).map((c) => ({ label: c.navLabel, href: `/support/${c.slug}` })),
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-paper">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center" aria-label={`${siteInfo.brandName} Support home`}>
          <Image
            src={siteInfo.logo}
            alt={siteInfo.brandName}
            width={100}
            height={40}
            priority
            className="h-10 w-auto"
          />
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="group relative text-sm font-medium text-ink-2 transition hover:text-ink"
            >
              {item.label}
              <span className="absolute -bottom-1 left-0 h-px w-0 bg-terracotta transition-all group-hover:w-full" />
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            href="/contact"
            className="hidden items-center gap-1.5 rounded-md bg-terracotta px-4 py-2 text-sm font-semibold text-cream transition hover:bg-terracotta-dark md:inline-flex"
          >
            Contact Support
            <ArrowUpRight size={15} />
          </Link>
          <button
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
            className="inline-flex items-center justify-center rounded-md border border-line p-2 text-ink md:hidden"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-line bg-paper px-6 py-4 md:hidden">
          <nav className="flex flex-col gap-4">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="text-sm font-medium text-ink-2 hover:text-ink"
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="inline-flex w-fit items-center gap-1.5 rounded-md bg-terracotta px-4 py-2 text-sm font-semibold text-cream"
            >
              Contact Support
              <ArrowUpRight size={15} />
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
