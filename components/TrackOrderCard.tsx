import { Truck } from "lucide-react";
import TrackOrderButton from "@/components/TrackOrderButton";

export default function TrackOrderCard() {
  return (
    <div className="rounded-2xl border border-line bg-paper p-6 shadow-sm">
      <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-tan text-ink">
        <Truck size={18} />
      </span>
      <h3 className="mt-4 text-base font-bold text-ink">Where&apos;s my order?</h3>
      <p className="mt-2 text-sm text-ink-2">
        Check the live status of your shipment in seconds.
      </p>
      <div className="mt-5">
        <TrackOrderButton fullWidth />
      </div>
    </div>
  );
}
