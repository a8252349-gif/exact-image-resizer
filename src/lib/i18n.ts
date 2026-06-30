import type { Locale } from "@/config/site";

const translations = {
  en: {
    languageName: "English",
    nav: { resizer: "Image Resizer", guides: "Guides", resources: "Resources", how: "How It Works", faq: "FAQ" },
    common: {
      chooseImages: "Choose Images",
      resizeImages: "Resize Images",
      startTool: "Open the image resizer",
      readGuide: "Read guide",
      lastReviewed: "Last reviewed",
      relatedGuides: "Related guides",
      privacySettings: "Privacy & Cookie Settings",
      home: "Home",
      localProcessing: "Images stay on your device",
      tableOfContents: "On this page"
    },
    footer: {
      about: "About", contact: "Contact", privacy: "Privacy", terms: "Terms", cookies: "Cookies",
      accessibility: "Accessibility", editorial: "Editorial Policy", methodology: "Compression Methodology",
      guides: "Guides", resources: "Resources"
    }
  },
  ko: {
    languageName: "한국어",
    nav: { resizer: "이미지 크기 조절", guides: "가이드", resources: "계산 도구", how: "작동 방식", faq: "자주 묻는 질문" },
    common: {
      chooseImages: "이미지 선택",
      resizeImages: "이미지 크기 변경",
      startTool: "이미지 크기 조절 열기",
      readGuide: "가이드 읽기",
      lastReviewed: "마지막 검토일",
      relatedGuides: "관련 가이드",
      privacySettings: "개인정보 및 쿠키 설정",
      home: "홈",
      localProcessing: "이미지는 기기 밖으로 전송되지 않습니다",
      tableOfContents: "이 페이지의 내용"
    },
    footer: {
      about: "소개", contact: "문의", privacy: "개인정보처리방침", terms: "이용약관", cookies: "쿠키 정책",
      accessibility: "접근성", editorial: "편집 정책", methodology: "압축 방법론", guides: "가이드", resources: "계산 도구"
    }
  },
  ja: {
    languageName: "日本語",
    nav: { resizer: "画像リサイズ", guides: "ガイド", resources: "計算ツール", how: "仕組み", faq: "よくある質問" },
    common: {
      chooseImages: "画像を選択",
      resizeImages: "画像をリサイズ",
      startTool: "画像リサイズを開く",
      readGuide: "ガイドを読む",
      lastReviewed: "最終確認日",
      relatedGuides: "関連ガイド",
      privacySettings: "プライバシーとCookie設定",
      home: "ホーム",
      localProcessing: "画像は端末内で処理されます",
      tableOfContents: "このページの内容"
    },
    footer: {
      about: "概要", contact: "お問い合わせ", privacy: "プライバシー", terms: "利用規約", cookies: "Cookieポリシー",
      accessibility: "アクセシビリティ", editorial: "編集方針", methodology: "圧縮方法", guides: "ガイド", resources: "計算ツール"
    }
  },
  es: {
    languageName: "Español",
    nav: { resizer: "Redimensionar imágenes", guides: "Guías", resources: "Herramientas", how: "Cómo funciona", faq: "Preguntas frecuentes" },
    common: {
      chooseImages: "Elegir imágenes",
      resizeImages: "Redimensionar imágenes",
      startTool: "Abrir Redimensionar Imagen",
      readGuide: "Leer la guía",
      lastReviewed: "Última revisión",
      relatedGuides: "Guías relacionadas",
      privacySettings: "Privacidad y configuración de cookies",
      home: "Inicio",
      localProcessing: "Las imágenes permanecen en tu dispositivo",
      tableOfContents: "Contenido de esta página"
    },
    footer: {
      about: "Acerca de", contact: "Contacto", privacy: "Privacidad", terms: "Términos", cookies: "Cookies",
      accessibility: "Accesibilidad", editorial: "Política editorial", methodology: "Metodología de compresión",
      guides: "Guías", resources: "Herramientas"
    }
  }
} as const;

export function t(locale: Locale) {
  return translations[locale];
}

export const languageLabels: Record<Locale, string> = {
  en: "English",
  ko: "한국어",
  ja: "日本語",
  es: "Español"
};
