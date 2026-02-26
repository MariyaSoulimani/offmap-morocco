export type TripTheme =
  | "Sahara"
  | "Montagne"
  | "Mer"
  | "Nature"
  | "Digital Detox";

export type TripLevel = "Easy" | "Medium";

export type MoroccoImage = {
  id: string;
  url: string;
  alt: string;
  credit: string;
};

export type Trip = {
  slug: string;
  title: string;
  tagline: string;
  theme: TripTheme;
  level: TripLevel;
  durationDays: number;
  startDate: string;
  endDate: string;
  priceEur: number;
  placesTotal: number;
  placesRemaining: number;
  location: string;
  shortDescription: string;
  description: string;
  included: string[];
  toBring: string[];
  itinerary: string[];
  safetyRules: string[];
  imageIds: string[];
  tags: string[];
};
