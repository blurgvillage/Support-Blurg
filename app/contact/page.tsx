import { Mail, Clock, MessageCircle, Video, MapPin } from "lucide-react";
import { siteInfo } from "@/content/support-content";

export const metadata = {
  title: `Contact Support | ${siteInfo.supportName}`,
  description: "Get in touch with the Blurgvillage support team.",
};

export default function ContactPage() {
  const whatsappHref = `https://wa.me/${siteInfo.whatsapp.replace(/[^\d]/g, "")}`;

  return (
    <div>
      <section className="border-b border-line bg-paper px-6 py-12">
        <div className="mx-auto max-w-6xl">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-ink-3">
            Contact Support
          </p>
          <h1 className="mt-3 max-w-xl text-3xl font-bold text-ink sm:text-4xl">
            Talk to our team.
          </h1>
          <p className="mt-3 max-w-lg text-ink-2">
            Have a question we haven&apos;t answered yet? Email us or message us
            on WhatsApp and we&apos;ll get back to you shortly.
          </p>
        </div>
      </section>

      <section className="px-6 py-12">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 lg:grid-cols-[1fr_280px]">
          <div className="space-y-6">
            <div className="rounded-2xl border border-line bg-paper p-6 shadow-sm sm:p-8">
              <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-tan text-ink">
                <Mail size={18} />
              </span>
              <h2 className="mt-4 text-xl font-bold text-ink">Email us</h2>
              <p className="mt-2 text-sm text-ink-2">
                Email is the fastest way to reach us. Our team actively checks
                the support inbox.
              </p>
              <a
                href={`mailto:${siteInfo.email}`}
                className="mt-4 inline-block break-all text-lg font-semibold text-ink underline underline-offset-4"
              >
                {siteInfo.email}
              </a>

              <div className="mt-6 rounded-xl bg-tan/60 p-4">
                <p className="flex items-center gap-2 text-sm font-semibold text-ink">
                  <Video size={16} />
                  For returns, exchanges, or wrong/damaged items, include:
                </p>
                <ul className="mt-3 list-disc space-y-1 pl-6 text-sm text-ink-2">
                  <li>Your order number</li>
                  <li>
                    Your unboxing video (mandatory), recorded continuously from
                    the sealed package to the product
                  </li>
                  <li>Photos of the product and its label</li>
                </ul>
              </div>
            </div>

            <div className="rounded-2xl border border-line bg-paper p-6 shadow-sm sm:p-8">
              <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-tan text-ink">
                <MessageCircle size={18} />
              </span>
              <h2 className="mt-4 text-xl font-bold text-ink">WhatsApp</h2>
              <p className="mt-2 text-sm text-ink-2">
                You can also message us on WhatsApp. Please include your order
                number.
              </p>
              <a
                href={whatsappHref}
                target="_blank"
                rel="noreferrer"
                className="mt-4 inline-block text-lg font-semibold text-ink underline underline-offset-4"
              >
                {siteInfo.whatsapp}
              </a>
            </div>

            <p className="text-sm text-ink-3">
              (Please avoid Instagram DMs and Facebook Messenger for support
              requests. Our team actively checks emails, so email is the best
              way to reach us.)
            </p>
          </div>

          <aside className="space-y-4">
            <div className="rounded-2xl border border-line bg-paper p-6 shadow-sm">
              <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-tan text-ink">
                <Clock size={18} />
              </span>
              <h3 className="mt-4 text-base font-bold text-ink">Response time</h3>
              <p className="mt-2 text-sm text-ink-2">{siteInfo.responseTime}</p>
            </div>

            <div className="rounded-2xl border border-line bg-paper p-6 shadow-sm">
              <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-tan text-ink">
                <MapPin size={18} />
              </span>
              <h3 className="mt-4 text-base font-bold text-ink">Our address</h3>
              <address className="mt-2 text-sm not-italic leading-relaxed text-ink-2">
                {siteInfo.addressLines.map((line) => (
                  <span key={line} className="block">
                    {line}
                  </span>
                ))}
                <span className="mt-1 block text-ink-3">({siteInfo.addressLandmark})</span>
              </address>
            </div>
          </aside>
        </div>
      </section>
    </div>
  );
}
