import Link from "next/link";
import { Phone, Mail } from "lucide-react";
import { categories, siteInfo } from "@/content/support-content";
import InstagramIcon from "@/components/InstagramIcon";

export default function Footer() {
  return (
    <footer className="bg-ink text-cream">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-4">
          <div>
            <div className="flex items-center gap-2.5">
              <span className="flex h-8 w-8 items-center justify-center rounded-md bg-terracotta text-sm font-bold text-cream">
                B
              </span>
              <span className="text-lg font-bold">{siteInfo.brandName}</span>
            </div>

            <div className="mt-6 space-y-3 text-sm text-cream-muted">
              <a
                href={`tel:${siteInfo.phone.replace(/\s/g, "")}`}
                className="flex items-center gap-2 hover:text-cream"
              >
                <Phone size={16} />
                {siteInfo.phone}
              </a>
              <a
                href={`mailto:${siteInfo.email}`}
                className="flex items-center gap-2 hover:text-cream"
              >
                <Mail size={16} />
                {siteInfo.email}
              </a>
            </div>

            <a
              href={siteInfo.instagram}
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
              className="mt-6 inline-flex items-center justify-center rounded-md border border-cream/25 p-2.5 text-cream-muted transition hover:border-cream hover:text-cream"
            >
              <InstagramIcon size={18} />
            </a>
          </div>

          <div>
            <p className="text-sm font-semibold">Help Center</p>
            <ul className="mt-4 space-y-3 text-sm text-cream-muted">
              <li>
                <Link href="/" className="hover:text-cream">
                  Help Center Home
                </Link>
              </li>
              <li>
                <Link href="/support/orders" className="hover:text-cream">
                  Track Order
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-cream">
                  Contact Support
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <p className="text-sm font-semibold">Categories</p>
            <ul className="mt-4 space-y-3 text-sm text-cream-muted">
              {categories.map((category) => (
                <li key={category.slug}>
                  <Link href={`/support/${category.slug}`} className="hover:text-cream">
                    {category.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-sm font-semibold">Policies</p>
            <ul className="mt-4 space-y-3 text-sm text-cream-muted">
              <li>
                <a href={siteInfo.storeUrl} target="_blank" rel="noreferrer" className="hover:text-cream">
                  Visit Store
                </a>
              </li>
              <li>
                <Link href="/support/returns-refunds" className="hover:text-cream">
                  Refund Policy
                </Link>
              </li>
              <li>
                <Link href="/support/shipping-delivery" className="hover:text-cream">
                  Shipping Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-cream/10 pt-8 text-xs text-cream-muted sm:flex-row">
          <p>&copy; {new Date().getFullYear()} {siteInfo.brandName}. All rights reserved.</p>
          <p>Made with care, for every customer.</p>
        </div>
      </div>
    </footer>
  );
}
