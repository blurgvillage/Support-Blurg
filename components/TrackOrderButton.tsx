"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { Truck, X, ExternalLink, Loader2 } from "lucide-react";

export const TRACK_ORDER_URL =
  "https://api.gokwik.co/kwikship/track?merchant_id=3qnl4ximn7cewdc";

type Variant = "primary" | "nav" | "outline";

const variantClass: Record<Variant, string> = {
  primary:
    "gap-2.5 overflow-hidden rounded-lg bg-ink px-6 py-3 text-sm font-semibold text-cream shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:bg-terracotta-dark hover:shadow-lg active:translate-y-0 active:scale-[0.98]",
  outline:
    "gap-2 overflow-hidden rounded-lg border border-ink bg-paper px-5 py-2.5 text-sm font-semibold text-ink transition-all duration-300 hover:-translate-y-0.5 hover:bg-ink hover:text-cream hover:shadow-lg active:translate-y-0 active:scale-[0.98]",
  nav: "gap-1.5 text-sm font-medium text-ink-2 transition hover:text-ink",
};

export default function TrackOrderButton({
  fullWidth = false,
  variant = "primary",
  label = "Track Order",
}: {
  fullWidth?: boolean;
  variant?: Variant;
  label?: string;
}) {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(true);

  // Close on Escape and lock background scroll while the modal is open.
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.addEventListener("keydown", onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [open]);

  const handleOpen = () => {
    setLoading(true);
    setOpen(true);
  };

  return (
    <>
      <button
        type="button"
        onClick={handleOpen}
        className={`${fullWidth ? "w-full justify-center" : ""} group relative inline-flex items-center ${variantClass[variant]}`}
      >
        {variant === "primary" && (
          <>
            {/* pulsing ring */}
            <span className="pointer-events-none absolute inset-0 rounded-lg ring-2 ring-ink/40 animate-pulse-ring" />
            {/* shine sweep on hover */}
            <span className="pointer-events-none absolute inset-y-0 -left-full w-1/2 skew-x-[-20deg] bg-gradient-to-r from-transparent via-white/25 to-transparent transition-all duration-700 group-hover:left-[150%]" />
          </>
        )}
        <Truck
          size={variant === "nav" ? 15 : 18}
          className={`relative ${variant === "nav" ? "group-hover:animate-truck-drive" : "animate-truck-drive"}`}
        />
        <span className="relative">{label}</span>
        {variant === "nav" && (
          <span className="absolute -bottom-1 left-0 h-px w-0 bg-terracotta transition-all group-hover:w-full" />
        )}
      </button>

      {open &&
        createPortal(
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50 p-4 backdrop-blur-sm animate-fade-in"
          onClick={() => setOpen(false)}
          role="dialog"
          aria-modal="true"
          aria-label="Track your order"
        >
          <div
            className="flex h-[85vh] w-full max-w-3xl flex-col overflow-hidden rounded-2xl bg-paper shadow-2xl animate-modal-in"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between border-b border-line px-5 py-3">
              <div className="flex items-center gap-2 text-sm font-semibold text-ink">
                <Truck size={16} />
                Track your order
              </div>
              <div className="flex items-center gap-1">
                <a
                  href={TRACK_ORDER_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 rounded-md px-2.5 py-1.5 text-xs font-medium text-ink-2 hover:bg-tan hover:text-ink"
                >
                  <ExternalLink size={14} />
                  New tab
                </a>
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  className="rounded-md p-1.5 text-ink-2 hover:bg-tan hover:text-ink"
                  aria-label="Close"
                >
                  <X size={18} />
                </button>
              </div>
            </div>

            <div className="relative flex-1">
              {loading && (
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 bg-paper text-sm text-ink-2">
                  <Loader2 size={28} className="animate-spin text-ink" />
                  Loading tracking…
                </div>
              )}
              <iframe
                src={TRACK_ORDER_URL}
                title="Order tracking"
                className="h-full w-full border-0"
                onLoad={() => setLoading(false)}
              />
            </div>
          </div>
        </div>,
          document.body
        )}
    </>
  );
}
