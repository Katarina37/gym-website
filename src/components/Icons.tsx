import type { ReactNode, SVGProps, ReactElement } from "react";
import type { IconName } from "../types";

type Props = SVGProps<SVGSVGElement>;

const Svg = ({ children, ...rest }: Props & { children: ReactNode }) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
    {...rest}
  >
    {children}
  </svg>
);

export const Dumbbell = (p: Props) => (
  <Svg {...p}><path d="M6.5 6.5v11M17.5 6.5v11M3 9v6M21 9v6M6.5 12h11" /></Svg>
);
export const Chart = (p: Props) => (
  <Svg {...p}><path d="M5 20V10M12 20V4M19 20v-7" /></Svg>
);
export const Heart = (p: Props) => (
  <Svg {...p}><path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1-1.1a5.5 5.5 0 0 0-7.8 7.8l1 1.1L12 21l7.8-7.5 1-1.1a5.5 5.5 0 0 0 0-7.8z" /></Svg>
);
export const Trophy = (p: Props) => (
  <Svg {...p}><path d="M8 21h8M12 17v4M7 4h10v5a5 5 0 0 1-10 0zM17 5h3v2a3 3 0 0 1-3 3M7 5H4v2a3 3 0 0 0 3 3" /></Svg>
);
export const Bolt = (p: Props) => (
  <Svg {...p}><path d="M13 2 4 14h7l-1 8 9-12h-7z" /></Svg>
);
export const Users = (p: Props) => (
  <Svg {...p}><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM22 21v-2a4 4 0 0 0-3-3.9M16 3.1a4 4 0 0 1 0 7.8" /></Svg>
);
export const Flame = (p: Props) => (
  <Svg {...p}><path d="M12 22c4 0 7-2.8 7-6.8 0-3-1.8-5-3.5-7C14.5 7 14 5 14 3c-3 1.5-6 5-6 9 0 .8.2 1.5.5 2-1-.4-1.5-1.3-1.5-2.5C5.3 13 5 14.2 5 15.2 5 19.2 8 22 12 22z" /></Svg>
);
export const Target = (p: Props) => (
  <Svg {...p}><circle cx="12" cy="12" r="9" /><circle cx="12" cy="12" r="5" /><circle cx="12" cy="12" r="1" /></Svg>
);
export const Check = (p: Props) => (
  <Svg {...p}><path d="m5 12 5 5L20 7" /></Svg>
);
export const Arrow = (p: Props) => (
  <Svg {...p}><path d="M5 12h14M13 6l6 6-6 6" /></Svg>
);
export const Play = (p: Props) => (
  <Svg {...p} fill="currentColor"><path d="M7 4.5v15l12-7.5z" /></Svg>
);
export const Pin = (p: Props) => (
  <Svg {...p}><path d="M12 21s7-6.2 7-11a7 7 0 0 0-14 0c0 4.8 7 11 7 11z" /><circle cx="12" cy="10" r="2.5" /></Svg>
);
export const Clock = (p: Props) => (
  <Svg {...p}><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" /></Svg>
);
export const Phone = (p: Props) => (
  <Svg {...p}><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2z" /></Svg>
);

export const Mail = (p: Props) => (
  <Svg {...p}><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m3 7 9 6 9-6" /></Svg>
);

export const Menu = (p: Props) => (
  <Svg {...p}><path d="M4 7h16M4 12h16M4 17h16" /></Svg>
);
export const Close = (p: Props) => (
  <Svg {...p}><path d="M6 6l12 12M18 6 6 18" /></Svg>
);
export const Plus = (p: Props) => (
  <Svg {...p}><path d="M12 5v14M5 12h14" /></Svg>
);
export const Instagram = (p: Props) => (
  <Svg {...p}><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.5" cy="6.5" r="0.6" fill="currentColor" /></Svg>
);
export const Facebook = (p: Props) => (
  <Svg {...p}><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></Svg>
);
export const Youtube = (p: Props) => (
  <Svg {...p}><rect x="2" y="5" width="20" height="14" rx="4" /><path d="m10 9 5 3-5 3z" fill="currentColor" /></Svg>
);

const map: Record<IconName, (p: Props) => ReactElement> = {
  dumbbell: Dumbbell,
  chart: Chart,
  heart: Heart,
  trophy: Trophy,
  bolt: Bolt,
  users: Users,
  flame: Flame,
  target: Target,
};

export const Icon = ({ name, ...rest }: { name: IconName } & Props) => {
  const C = map[name];
  return <C {...rest} />;
};
