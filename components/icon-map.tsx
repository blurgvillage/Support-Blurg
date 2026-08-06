import {
  Package,
  Truck,
  RefreshCcw,
  CreditCard,
  Sparkles,
  MessageCircle,
  type LucideIcon,
} from "lucide-react";
import type { IconName } from "@/content/support-content";

export const iconMap: Record<IconName, LucideIcon> = {
  package: Package,
  truck: Truck,
  refresh: RefreshCcw,
  card: CreditCard,
  sparkles: Sparkles,
  message: MessageCircle,
};
