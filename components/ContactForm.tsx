"use client";

import { useState } from "react";
import { Send, CheckCircle2 } from "lucide-react";
import { categories } from "@/content/support-content";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  if (submitted) {
    return (
      <div className="flex flex-col items-center gap-3 rounded-2xl border border-line bg-paper p-12 text-center shadow-sm">
        <CheckCircle2 size={36} className="text-ink" />
        <h3 className="text-xl font-bold text-ink">Message sent</h3>
        <p className="max-w-sm text-sm text-ink-2">
          Thanks for reaching out. Our support team will get back to you within a few
          hours.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setSubmitted(true);
      }}
      className="space-y-5 rounded-2xl border border-line bg-paper p-8 shadow-sm"
    >
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div>
          <label className="text-sm font-medium text-ink" htmlFor="name">
            Full name
          </label>
          <input
            id="name"
            required
            type="text"
            placeholder="Jane Doe"
            className="mt-2 w-full rounded-md border border-line px-4 py-2.5 text-sm text-ink placeholder:text-ink-3 focus:border-terracotta focus:outline-none"
          />
        </div>
        <div>
          <label className="text-sm font-medium text-ink" htmlFor="email">
            Email address
          </label>
          <input
            id="email"
            required
            type="email"
            placeholder="you@example.com"
            className="mt-2 w-full rounded-md border border-line px-4 py-2.5 text-sm text-ink placeholder:text-ink-3 focus:border-terracotta focus:outline-none"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div>
          <label className="text-sm font-medium text-ink" htmlFor="order">
            Order number (optional)
          </label>
          <input
            id="order"
            type="text"
            placeholder="e.g. BV-10234"
            className="mt-2 w-full rounded-md border border-line px-4 py-2.5 text-sm text-ink placeholder:text-ink-3 focus:border-terracotta focus:outline-none"
          />
        </div>
        <div>
          <label className="text-sm font-medium text-ink" htmlFor="topic">
            Topic
          </label>
          <select
            id="topic"
            className="mt-2 w-full rounded-md border border-line bg-paper px-4 py-2.5 text-sm text-ink focus:border-terracotta focus:outline-none"
          >
            {categories.map((category) => (
              <option key={category.slug} value={category.slug}>
                {category.title}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label className="text-sm font-medium text-ink" htmlFor="message">
          Message
        </label>
        <textarea
          id="message"
          required
          rows={5}
          placeholder="Tell us how we can help..."
          className="mt-2 w-full resize-none rounded-md border border-line px-4 py-2.5 text-sm text-ink placeholder:text-ink-3 focus:border-terracotta focus:outline-none"
        />
      </div>

      <button
        type="submit"
        className="inline-flex items-center gap-2 rounded-lg bg-ink px-6 py-3 text-sm font-semibold text-cream transition hover:bg-terracotta-dark"
      >
        Send message
        <Send size={15} />
      </button>
    </form>
  );
}
