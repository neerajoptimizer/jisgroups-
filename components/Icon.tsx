import {
  ArrowUpDown,
  Briefcase,
  Building2,
  GraduationCap,
  HardHat,
  Headset,
  Hospital,
  Hotel,
  Landmark,
  ShieldCheck,
  Sparkles,
  Store,
  Users,
  type LucideProps,
} from "lucide-react";

const icons = {
  shield: ShieldCheck,
  sparkles: Sparkles,
  building: Building2,
  users: Users,
  arrowUpDown: ArrowUpDown,
  headset: Headset,
  briefcase: Briefcase,
  hotel: Hotel,
  hardHat: HardHat,
  graduationCap: GraduationCap,
  hospital: Hospital,
  store: Store,
  landmark: Landmark,
};

export type IconKey = keyof typeof icons;

export function Icon({ name, ...props }: { name: IconKey } & LucideProps) {
  const C = icons[name];
  return <C aria-hidden="true" {...props} />;
}
