export type IconName = "dumbbell" | "chart" | "heart" | "trophy" | "bolt" | "users" | "flame" | "target";

export interface Feature {
  icon: IconName;
  title: string;
  text: string;
}

export interface Program {
  id: string;
  icon: IconName;
  title: string;
  text: string;
  level: string;
  duration: string;
}

export interface ClassSlot {
  time: string;
  title: string;
  trainer: string;
  level: string;
  spots: number;
}

export interface Trainer {
  name: string;
  role: string;
  bio: string;
  tags: string[];
}

export interface Plan {
  id: string;
  name: string;
  monthly: number;
  description: string;
  features: string[];
  highlight?: boolean;
}

export interface Period {
  id: string;
  label: string;
  months: number;
  discount: number;
}

export interface Testimonial {
  name: string;
  result: string;
  quote: string;
  photo?: string;
}

export interface Faq {
  q: string;
  a: string;
}

export interface GalleryItem {
  title: string;
  text: string;
  photo: string;
  size?: "big" | "wide";
}

export interface GalleryStat {
  value: string;
  label: string;
}
