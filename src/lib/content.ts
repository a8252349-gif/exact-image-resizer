import guideDatabase from "@/content/guides.generated.json";
import type { Locale } from "@/config/site";
import type { Guide, GuideDatabase } from "@/types/content";

const database = guideDatabase as GuideDatabase;

export function getGuide(locale: Locale, slug: string): Guide | undefined {
  return database[locale]?.[slug];
}

export function getGuides(locale: Locale): Guide[] {
  return Object.values(database[locale] || {});
}

export function getGuideSlugs(): string[] {
  return Object.keys(database.en || {});
}

export function getAllGuides(): Guide[] {
  return Object.values(database).flatMap((entries) => Object.values(entries));
}
