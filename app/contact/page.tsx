import { Phone, Mail, Clock } from "lucide-react";
import { siteInfo } from "@/content/support-content";
import ContactForm from "@/components/ContactForm";
import InstagramIcon from "@/components/InstagramIcon";

export const metadata = {
  title: `Contact Support | ${siteInfo.supportName}`,
  description: "Get in touch with the Blurgvillage support team.",
};

export default function ContactPage() {
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
            Have a question we haven&apos;t answered yet? Send us a message and
            we&apos;ll get back to you shortly.
          </p>
        </div>
      </section>

      <section className="px-6 py-12">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 lg:grid-cols-[1fr_280px]">
          <ContactForm />

          <aside className="space-y-4">
            <div className="rounded-2xl border border-line bg-paper p-6 shadow-sm">
              <p className="text-xs font-semibold uppercase tracking-widest text-ink-3">
                Other ways to reach us
              </p>

              <div className="mt-5 space-y-4 text-sm">
                <a
                  href={`tel:${siteInfo.phone.replace(/\s/g, "")}`}
                  className="flex items-center gap-3 text-ink-2 hover:text-ink"
                >
                  <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-tan text-ink">
                    <Phone size={16} />
                  </span>
                  {siteInfo.phone}
                </a>
                <a
                  href={`mailto:${siteInfo.email}`}
                  className="flex items-center gap-3 text-ink-2 hover:text-ink"
                >
                  <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-tan text-ink">
                    <Mail size={16} />
                  </span>
                  {siteInfo.email}
                </a>
                <a
                  href={siteInfo.instagram}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-3 text-ink-2 hover:text-ink"
                >
                  <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-tan text-ink">
                    <InstagramIcon size={16} />
                  </span>
                  @blurgvillage
                </a>
              </div>
            </div>

            <div className="rounded-2xl border border-line bg-paper p-6 shadow-sm">
              <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-tan text-ink">
                <Clock size={18} />
              </span>
              <h3 className="mt-4 text-base font-bold text-ink">Response time</h3>
              <p className="mt-2 text-sm text-ink-2">{siteInfo.responseTime}</p>
            </div>
          </aside>
        </div>
      </section>
    </div>
  );
}
