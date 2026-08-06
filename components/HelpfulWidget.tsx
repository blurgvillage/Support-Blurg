"use client";

import { useState } from "react";
import { ThumbsUp, ThumbsDown, Check } from "lucide-react";

export default function HelpfulWidget() {
  const [choice, setChoice] = useState<"yes" | "no" | null>(null);

  if (choice) {
    return (
      <div className="flex items-center gap-2 text-sm font-medium text-ink-2">
        <Check size={16} />
        Thanks for your feedback!
      </div>
    );
  }

  return (
    <div className="flex flex-wrap gap-3">
      <button
        onClick={() => setChoice("yes")}
        className="inline-flex items-center gap-2 rounded-lg border border-line px-5 py-2.5 text-sm font-medium text-ink shadow-sm transition hover:border-ink"
      >
        <ThumbsUp size={16} />
        Yes, this helped
      </button>
      <button
        onClick={() => setChoice("no")}
        className="inline-flex items-center gap-2 rounded-lg border border-line px-5 py-2.5 text-sm font-medium text-ink shadow-sm transition hover:border-ink"
      >
        <ThumbsDown size={16} />
        Not really
      </button>
    </div>
  );
}
