export const locales = ["en", "ko", "ja", "es"] as const;
export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "en";

export const localizedSite = {
  en: {
    name: "Image Resizer",
    shortName: "Image Resizer",
    primaryKeyword: "image resizer",
    secondaryKeywords: ["resize image", "image compressor", "reduce image size"],
    description: "Resize and compress images to exact dimensions or a target file size directly in your browser."
  },
  ko: {
    name: "이미지 크기 조절",
    shortName: "이미지 크기 조절",
    primaryKeyword: "이미지 크기 조절",
    secondaryKeywords: ["이미지 용량 줄이기", "사진 크기 조절", "사진 용량 줄이기"],
    description: "이미지 크기와 용량을 브라우저에서 바로 조절하고 JPG·PNG·WebP로 저장하세요."
  },
  ja: {
    name: "画像リサイズ",
    shortName: "画像リサイズ",
    primaryKeyword: "画像リサイズ",
    secondaryKeywords: ["画像サイズ変更", "画像圧縮", "写真リサイズ"],
    description: "画像の寸法とファイル容量をブラウザ内で調整し、JPEG・PNG・WebPで保存できます。"
  },
  es: {
    name: "Redimensionar Imagen",
    shortName: "Redimensionar Imagen",
    primaryKeyword: "redimensionar imagen",
    secondaryKeywords: ["cambiar tamaño de imagen", "comprimir imagen", "reducir tamaño de imagen"],
    description: "Redimensiona y comprime imágenes a medidas exactas o a un peso objetivo directamente en el navegador."
  }
} as const satisfies Record<Locale, {
  name: string;
  shortName: string;
  primaryKeyword: string;
  secondaryKeywords: readonly string[];
  description: string;
}>;

export const siteConfig = {
  internalName: "Image Resizer",
  description: localizedSite.en.description,
  siteUrl: (process.env.NEXT_PUBLIC_SITE_URL || "https://example.com").replace(/\/$/, ""),
  contactEmail: process.env.NEXT_PUBLIC_CONTACT_EMAIL || "",
  publisherId: process.env.NEXT_PUBLIC_ADSENSE_CLIENT || "ca-pub-9328837907414732",
  lastUpdated: "2026-06-30",
  defaultLocale
} as const;

export function serviceName(locale: Locale) {
  return localizedSite[locale].name;
}

export function serviceDescription(locale: Locale) {
  return localizedSite[locale].description;
}

export const adsConfig = {
  scriptEnabled: process.env.NEXT_PUBLIC_ADSENSE_SCRIPT_ENABLED === "true",
  manualAdsEnabled: process.env.NEXT_PUBLIC_ADSENSE_MANUAL_ADS_ENABLED === "true",
  showPlaceholders: process.env.NEXT_PUBLIC_SHOW_AD_PLACEHOLDERS === "true",
  googleCmpEnabled: process.env.NEXT_PUBLIC_GOOGLE_CMP_ENABLED === "true",
  slots: {
    home: process.env.NEXT_PUBLIC_ADSENSE_HOME_SLOT || "",
    content: process.env.NEXT_PUBLIC_ADSENSE_CONTENT_SLOT || "",
    guide: process.env.NEXT_PUBLIC_ADSENSE_GUIDE_SLOT || "",
    toolBottom: process.env.NEXT_PUBLIC_ADSENSE_TOOL_BOTTOM_SLOT || ""
  }
} as const;

export function absoluteUrl(path = "/") {
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return `${siteConfig.siteUrl}${normalized}`;
}

export function isLocale(value: string): value is Locale {
  return locales.includes(value as Locale);
}
