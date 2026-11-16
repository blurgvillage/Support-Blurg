import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin } from "lucide-react";
import { categories, siteInfo } from "@/content/support-content";
import InstagramIcon from "@/components/InstagramIcon";

const helpLinks = [
  { label: "Help Center Home", href: "/" },
  { label: "Track Order", href: "/support/orders/how-do-i-track-my-order" },
  { label: "Contact Support", href: "/contact" },
];

const policyLinks = [
  { label: "Refund Policy", href: "/support/returns-refunds" },
  { label: "Shipping Policy", href: "/support/shipping-delivery" },
];

const headingClass = "text-xs font-semibold uppercase tracking-[0.18em] text-cream";
const listClass = "mt-5 space-y-3 text-sm text-cream-muted";
const linkClass = "transition hover:text-cream";

export default function Footer() {
  return (
    <footer className="bg-ink text-cream">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid grid-cols-2 gap-x-8 gap-y-10 sm:gap-y-12 sm:grid-cols-3 lg:grid-cols-12">
          {/* Brand */}
          <div className="col-span-2 sm:col-span-3 lg:col-span-3">
            <Image
              src={siteInfo.logo}
              alt={siteInfo.brandName}
              width={100}
              height={40}
              className="h-12 w-auto invert"
            />
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-cream-muted">
              Lead with confidence. Own your journey.
            </p>
            <a
              href={siteInfo.instagram}
              target="_blank"
              rel="noreferrer"
              className="mt-6 inline-flex items-center gap-2 rounded-md border border-cream/25 px-3 py-2 text-sm text-cream-muted transition hover:border-cream hover:text-cream"
            >
              <InstagramIcon size={16} />
              @blurgvillage
            </a>
          </div>

          {/* Help Center */}
          <div className="lg:col-span-2">
            <p className={headingClass}>Help Center</p>
            <ul className={listClass}>
              {helpLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className={linkClass}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Categories — on phones it spans two rows so Policies sits directly under Help Center */}
          <div className="row-span-2 sm:row-span-1 lg:col-span-2">
            <p className={headingClass}>Categories</p>
            <ul className={listClass}>
              {categories.map((category) => (
                <li key={category.slug}>
                  <Link href={`/support/${category.slug}`} className={linkClass}>
                    {category.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Policies */}
          <div className="lg:col-span-2">
            <p className={headingClass}>Policies</p>
            <ul className={listClass}>
              {policyLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className={linkClass}>
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <a href={siteInfo.storeUrl} target="_blank" rel="noreferrer" className={linkClass}>
                  Visit Store
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="col-span-2 sm:col-span-3 lg:col-span-3">
            <p className={headingClass}>Get in touch</p>
            <ul className={listClass}>
              <li>
                <a href={`mailto:${siteInfo.email}`} className={`flex items-center gap-3 ${linkClass}`}>
                  <Mail size={16} className="shrink-0" />
                  {siteInfo.email}
                </a>
              </li>
              <li>
                <a
                  href={`tel:${siteInfo.phone.replace(/\s/g, "")}`}
                  className={`flex items-center gap-3 ${linkClass}`}
                >
                  <Phone size={16} className="shrink-0" />
                  {siteInfo.phone}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={16} className="mt-0.5 shrink-0" />
                <address className="not-italic leading-relaxed">
                  {siteInfo.addressLines.map((line) => (
                    <span key={line} className="block">
                      {line}
                    </span>
                  ))}
                  <span className="mt-1 block text-xs text-cream-muted/70">
                    ({siteInfo.addressLandmark})
                  </span>
                </address>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-3 border-t border-cream/10 pt-8 text-xs text-cream-muted sm:flex-row">
          <p>&copy; {new Date().getFullYear()} {siteInfo.brandName}. All rights reserved.</p>
          <p>Made with care, for every customer.</p>
        </div>
      </div>
    </footer>
  );
}
