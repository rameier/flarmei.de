export const categories = {
  "systeme-struktur": "Systeme & Struktur",
  "produkt-software": "Produkt & Software",
  "ehrenamt-gemeinschaft": "Ehrenamt & Gemeinschaft",
  "selbstfuehrung-reflexion": "Selbstführung & Reflexion",
  "werkzeuge-ki-denken": "Werkzeuge, KI & Denken",
  meta: "Meta",
} as const;

export type CategoryKey = keyof typeof categories;

export const CATEGORY_KEYS = Object.keys(categories) as [
  CategoryKey,
  ...CategoryKey[]
];
