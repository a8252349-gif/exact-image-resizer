import type { Locale } from "@/config/site";

export type GuideSection = {
  id: string;
  heading: string;
  paragraphs: string[];
  list?: string[];
  table?: { headers: string[]; rows: string[][] };
};

export type GuideFaq = { question: string; answer: string };

export type Guide = {
  slug: string;
  locale: Locale;
  title: string;
  description: string;
  keywords: string[];
  intro: string[];
  sections: GuideSection[];
  checklist: string[];
  faqs: GuideFaq[];
  related: string[];
  svg: string;
  lastReviewed: string;
  reviewStandard: string;
  sources?: { label: string; url: string }[];
  wordCount: number;
  characterCountNoSpaces: number;
};

export type GuideDatabase = Record<Locale, Record<string, Guide>>;
