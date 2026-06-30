"use client";
import { useMemo, useState } from "react";
import type { Locale } from "@/config/site";

const labels = {
  en: {
    width: "Width",
    height: "Height",
    newWidth: "New width",
    newHeight: "New height",
    lock: "Keep aspect ratio",
    pixels: "Pixels",
    mp: "Megapixels",
    ratio: "Aspect ratio",
    decimal: "Decimal ratio",
    nearest: "Closest common ratio",
    format: "Format",
    quality: "Quality",
    type: "Image type",
    estimate: "Estimated range",
    dpi: "DPI / PPI",
    inch: "Inches",
    cm: "Centimeters",
    warning:
      "This is an estimate. Real file size depends on visual complexity, noise, transparency, metadata, and the browser encoder.",
    photo: "Photo", graphic: "Graphic", screenshot: "Screenshot",
  },
  ko: {
    width: "가로",
    height: "세로",
    newWidth: "새 가로",
    newHeight: "새 세로",
    lock: "비율 유지",
    pixels: "픽셀 수",
    mp: "메가픽셀",
    ratio: "가로세로 비율",
    decimal: "소수 비율",
    nearest: "가장 가까운 대표 비율",
    format: "형식",
    quality: "품질",
    type: "이미지 유형",
    estimate: "예상 범위",
    dpi: "DPI / PPI",
    inch: "인치",
    cm: "센티미터",
    warning:
      "추정값입니다. 실제 용량은 이미지 복잡도, 노이즈, 투명도, 메타데이터, 브라우저 인코더에 따라 달라집니다.",
    photo: "사진", graphic: "그래픽", screenshot: "스크린샷",
  },
  ja: {
    width: "幅",
    height: "高さ",
    newWidth: "新しい幅",
    newHeight: "新しい高さ",
    lock: "縦横比を維持",
    pixels: "ピクセル数",
    mp: "メガピクセル",
    ratio: "縦横比",
    decimal: "小数比",
    nearest: "近い代表比率",
    format: "形式",
    quality: "品質",
    type: "画像タイプ",
    estimate: "推定範囲",
    dpi: "DPI / PPI",
    inch: "インチ",
    cm: "センチ",
    warning:
      "推定値です。実際の容量は画像の複雑さ、ノイズ、透明度、メタデータ、ブラウザのエンコーダーで変わります。",
    photo: "写真", graphic: "グラフィック", screenshot: "画面キャプチャ",
  },
  es: {
    width: "Ancho",
    height: "Alto",
    newWidth: "Ancho nuevo",
    newHeight: "Alto nuevo",
    lock: "Mantener proporción",
    pixels: "Píxeles",
    mp: "Megapíxeles",
    ratio: "Proporción",
    decimal: "Relación decimal",
    nearest: "Proporción común cercana",
    format: "Formato",
    quality: "Calidad",
    type: "Tipo de imagen",
    estimate: "Intervalo estimado",
    dpi: "DPI / PPI",
    inch: "Pulgadas",
    cm: "Centímetros",
    warning:
      "Es una estimación. El peso real depende de complejidad, ruido, transparencia, metadatos y codificador del navegador.",
    photo: "Fotografía", graphic: "Gráfico", screenshot: "Captura de pantalla",
  },
};
function gcd(a: number, b: number): number {
  return b ? gcd(b, a % b) : Math.abs(a);
}
export function ResourceTool({
  tool,
  locale,
}: {
  tool: string;
  locale: Locale;
}) {
  const l = labels[locale];
  const [w, setW] = useState(4032),
    [h, setH] = useState(3024),
    [nw, setNw] = useState(1200),
    [nh, setNh] = useState(900),
    [lock, setLock] = useState(true),
    [format, setFormat] = useState("JPEG"),
    [quality, setQuality] = useState(85),
    [imageType, setImageType] = useState("photo"),
    [dpi, setDpi] = useState(300);
  const ratio = useMemo(() => {
    const d = gcd(w, h);
    return `${Math.round(w / d)}:${Math.round(h / d)}`;
  }, [w, h]);
  const nearest = useMemo(() => {
    const options: [[number, number, string]] | any = [
      [1, 1, "1:1"],
      [4, 3, "4:3"],
      [3, 2, "3:2"],
      [16, 9, "16:9"],
      [4, 5, "4:5"],
      [9, 16, "9:16"],
    ];
    return options.sort(
      (a: any, b: any) =>
        Math.abs(w / h - a[0] / a[1]) - Math.abs(w / h - b[0] / b[1]),
    )[0][2];
  }, [w, h]);
  const updateWidth = (v: number) => {
    setNw(v);
    if (lock) setNh(Math.max(1, Math.round((v * h) / w)));
  };
  const updateHeight = (v: number) => {
    setNh(v);
    if (lock) setNw(Math.max(1, Math.round((v * w) / h)));
  };
  if (tool === "dimensions-calculator")
    return (
      <div className="calculator">
        <div className="calcGrid">
          <label>
            {l.width}
            <input
              type="number"
              min="1"
              value={w}
              onChange={(e) => setW(Number(e.target.value))}
            />
          </label>
          <label>
            {l.height}
            <input
              type="number"
              min="1"
              value={h}
              onChange={(e) => setH(Number(e.target.value))}
            />
          </label>
          <label>
            {l.newWidth}
            <input
              type="number"
              min="1"
              value={nw}
              onChange={(e) => updateWidth(Number(e.target.value))}
            />
          </label>
          <label>
            {l.newHeight}
            <input
              type="number"
              min="1"
              value={nh}
              onChange={(e) => updateHeight(Number(e.target.value))}
            />
          </label>
        </div>
        <label className="checkRow">
          <input
            type="checkbox"
            checked={lock}
            onChange={(e) => setLock(e.target.checked)}
          />
          {l.lock}
        </label>
        <Result
          rows={[
            [l.ratio, ratio],
            [l.pixels, (nw * nh).toLocaleString()],
            [l.mp, ((nw * nh) / 1e6).toFixed(2)],
          ]}
        />
      </div>
    );
  if (tool === "aspect-ratio-calculator")
    return (
      <div className="calculator">
        <div className="calcGrid">
          <label>
            {l.width}
            <input
              type="number"
              min="1"
              value={w}
              onChange={(e) => setW(Number(e.target.value))}
            />
          </label>
          <label>
            {l.height}
            <input
              type="number"
              min="1"
              value={h}
              onChange={(e) => setH(Number(e.target.value))}
            />
          </label>
        </div>
        <Result
          rows={[
            [l.ratio, ratio],
            [l.decimal, (w / h).toFixed(4)],
            [l.nearest, nearest],
          ]}
        />
        <div className="ratioBars">
          {[
            ["1:1", 1],
            ["4:3", 4 / 3],
            ["3:2", 1.5],
            ["16:9", 16 / 9],
            ["4:5", 0.8],
            ["9:16", 9 / 16],
          ].map(([n, r]) => (
            <div key={n as string}>
              <span>{n}</span>
              <meter min="0" max="2" value={r as number} />
            </div>
          ))}
        </div>
      </div>
    );
  if (tool === "file-size-estimator") {
    const px = w * h;
    const complexity =
      imageType === "graphic" ? 0.7 : imageType === "screenshot" ? 1.05 : 1;
    const ff = format === "PNG" ? 1.8 : format === "WebP" ? 0.32 : 0.48;
    const center = px * ff * complexity * (0.35 + (quality / 100) * 0.65);
    return (
      <div className="calculator">
        <div className="calcGrid">
          <label>
            {l.width}
            <input
              type="number"
              value={w}
              min="1"
              onChange={(e) => setW(Number(e.target.value))}
            />
          </label>
          <label>
            {l.height}
            <input
              type="number"
              value={h}
              min="1"
              onChange={(e) => setH(Number(e.target.value))}
            />
          </label>
          <label>
            {l.format}
            <select value={format} onChange={(e) => setFormat(e.target.value)}>
              <option>JPEG</option>
              <option>PNG</option>
              <option>WebP</option>
            </select>
          </label>
          <label>
            {l.type}
            <select
              value={imageType}
              onChange={(e) => setImageType(e.target.value)}
            >
              <option value="photo">{l.photo}</option>
              <option value="graphic">{l.graphic}</option>
              <option value="screenshot">{l.screenshot}</option>
            </select>
          </label>
          <label>
            {l.quality}
            <input
              type="number"
              min="5"
              max="100"
              value={quality}
              onChange={(e) => setQuality(Number(e.target.value))}
            />
          </label>
        </div>
        <Result
          rows={[
            [l.estimate, `${human(center * 0.55)} – ${human(center * 1.6)}`],
          ]}
        />
        <p className="notice">{l.warning}</p>
      </div>
    );
  }
  if (tool === "print-size-calculator")
    return (
      <div className="calculator">
        <div className="calcGrid">
          <label>
            {l.width}
            <input
              type="number"
              min="1"
              value={w}
              onChange={(e) => setW(Number(e.target.value))}
            />
          </label>
          <label>
            {l.height}
            <input
              type="number"
              min="1"
              value={h}
              onChange={(e) => setH(Number(e.target.value))}
            />
          </label>
          <label>
            {l.dpi}
            <input
              type="number"
              min="1"
              value={dpi}
              onChange={(e) => setDpi(Number(e.target.value))}
            />
          </label>
        </div>
        <Result
          rows={[
            [l.inch, `${(w / dpi).toFixed(2)} × ${(h / dpi).toFixed(2)}`],
            [
              l.cm,
              `${((w / dpi) * 2.54).toFixed(1)} × ${((h / dpi) * 2.54).toFixed(1)}`,
            ],
            [l.mp, ((w * h) / 1e6).toFixed(2)],
          ]}
        />
      </div>
    );
  return <SocialTable locale={locale} />;
}
function Result({ rows }: { rows: [string, string][] }) {
  return (
    <dl className="resultPanel">
      {rows.map(([a, b]) => (
        <div key={a}>
          <dt>{a}</dt>
          <dd>{b}</dd>
        </div>
      ))}
    </dl>
  );
}
function human(n: number) {
  return n < 1048576
    ? `${Math.round(n / 1024)} KB`
    : `${(n / 1048576).toFixed(1)} MB`;
}
const socialCopy = {
  en: {
    checked: "Last checked",
    change:
      "Platform requirements can change; confirm the official help page before a campaign.",
    headers: ["Use", "Dimensions", "Ratio / note", "Official source"],
    notice:
      "Platforms may re-compress or crop uploads. Keep important text and faces away from the edges.",
    rows: [
      [
        "Instagram feed photo",
        "1080 px wide",
        "1.91:1 to 3:4",
        "Meta Help Center",
        "https://www.facebook.com/help/1631821640426723/",
      ],
      [
        "Instagram Reel",
        "up to 9:16",
        "minimum 720 px",
        "Meta Help Center",
        "https://www.facebook.com/help/1038071743007909",
      ],
      [
        "LinkedIn Page logo",
        "400 × 400 px recommended",
        "1:1",
        "LinkedIn Help",
        "https://www.linkedin.com/help/linkedin/answer/a563309/image-specifications-for-your-linkedin-pages-and-career-pages?lang=en",
      ],
      [
        "X profile photo",
        "400 × 400 px recommended",
        "1:1",
        "X Help Center",
        "https://help.x.com/en/managing-your-account/how-to-customize-your-profile",
      ],
      [
        "X header",
        "1500 × 500 px recommended",
        "3:1",
        "X Help Center",
        "https://help.x.com/en/managing-your-account/how-to-customize-your-profile",
      ],
      [
        "YouTube custom thumbnail",
        "3840 × 2160 px recommended",
        "16:9; minimum width 640 px",
        "YouTube Help",
        "https://support.google.com/youtube/answer/72431?hl=en",
      ],
    ],
  },
  ko: {
    checked: "마지막 확인일",
    change:
      "플랫폼 규격은 변경될 수 있으므로 캠페인 전에 공식 도움말을 다시 확인하세요.",
    headers: ["용도", "규격", "비율·참고", "공식 출처"],
    notice:
      "플랫폼은 업로드 후 이미지를 다시 압축하거나 크롭할 수 있습니다. 중요한 글자와 얼굴은 가장자리에서 충분히 떨어뜨리세요.",
    rows: [
      [
        "인스타그램 피드 사진",
        "가로 1080px",
        "1.91:1~3:4",
        "Meta 도움말",
        "https://www.facebook.com/help/1631821640426723/",
      ],
      [
        "인스타그램 릴스",
        "최대 9:16",
        "최소 720px",
        "Meta 도움말",
        "https://www.facebook.com/help/1038071743007909",
      ],
      [
        "LinkedIn 페이지 로고",
        "400 × 400px 권장",
        "1:1",
        "LinkedIn 도움말",
        "https://www.linkedin.com/help/linkedin/answer/a563309/image-specifications-for-your-linkedin-pages-and-career-pages?lang=en",
      ],
      [
        "X 프로필 사진",
        "400 × 400px 권장",
        "1:1",
        "X 도움말",
        "https://help.x.com/en/managing-your-account/how-to-customize-your-profile",
      ],
      [
        "X 헤더",
        "1500 × 500px 권장",
        "3:1",
        "X 도움말",
        "https://help.x.com/en/managing-your-account/how-to-customize-your-profile",
      ],
      [
        "YouTube 맞춤 썸네일",
        "3840 × 2160px 권장",
        "16:9, 최소 가로 640px",
        "YouTube 도움말",
        "https://support.google.com/youtube/answer/72431?hl=ko",
      ],
    ],
  },
  ja: {
    checked: "最終確認日",
    change:
      "プラットフォームの仕様は変わるため、公開前に公式ヘルプを再確認してください。",
    headers: ["用途", "サイズ", "比率・注意", "公式情報"],
    notice:
      "アップロード後に再圧縮や切り抜きが行われる場合があります。重要な文字や顔は端から離してください。",
    rows: [
      [
        "Instagramフィード写真",
        "幅1080px",
        "1.91:1〜3:4",
        "Metaヘルプ",
        "https://www.facebook.com/help/1631821640426723/",
      ],
      [
        "Instagramリール",
        "最大9:16",
        "最小720px",
        "Metaヘルプ",
        "https://www.facebook.com/help/1038071743007909",
      ],
      [
        "LinkedInページロゴ",
        "400 × 400px推奨",
        "1:1",
        "LinkedInヘルプ",
        "https://www.linkedin.com/help/linkedin/answer/a563309/image-specifications-for-your-linkedin-pages-and-career-pages?lang=en",
      ],
      [
        "Xプロフィール画像",
        "400 × 400px推奨",
        "1:1",
        "Xヘルプ",
        "https://help.x.com/en/managing-your-account/how-to-customize-your-profile",
      ],
      [
        "Xヘッダー",
        "1500 × 500px推奨",
        "3:1",
        "Xヘルプ",
        "https://help.x.com/en/managing-your-account/how-to-customize-your-profile",
      ],
      [
        "YouTubeカスタムサムネイル",
        "3840 × 2160px推奨",
        "16:9、最小幅640px",
        "YouTubeヘルプ",
        "https://support.google.com/youtube/answer/72431?hl=ja",
      ],
    ],
  },
  es: {
    checked: "Última comprobación",
    change:
      "Las especificaciones pueden cambiar; revisa la ayuda oficial antes de una campaña.",
    headers: ["Uso", "Dimensiones", "Proporción / nota", "Fuente oficial"],
    notice:
      "Las plataformas pueden recomprimir o recortar la imagen. Mantén textos y rostros importantes lejos de los bordes.",
    rows: [
      [
        "Foto del feed de Instagram",
        "1080 px de ancho",
        "de 1,91:1 a 3:4",
        "Ayuda de Meta",
        "https://www.facebook.com/help/1631821640426723/",
      ],
      [
        "Reel de Instagram",
        "hasta 9:16",
        "mínimo 720 px",
        "Ayuda de Meta",
        "https://www.facebook.com/help/1038071743007909",
      ],
      [
        "Logotipo de página de LinkedIn",
        "400 × 400 px recomendado",
        "1:1",
        "Ayuda de LinkedIn",
        "https://www.linkedin.com/help/linkedin/answer/a563309/image-specifications-for-your-linkedin-pages-and-career-pages?lang=es",
      ],
      [
        "Foto de perfil de X",
        "400 × 400 px recomendado",
        "1:1",
        "Centro de ayuda de X",
        "https://help.x.com/es/managing-your-account/how-to-customize-your-profile",
      ],
      [
        "Cabecera de X",
        "1500 × 500 px recomendado",
        "3:1",
        "Centro de ayuda de X",
        "https://help.x.com/es/managing-your-account/how-to-customize-your-profile",
      ],
      [
        "Miniatura personalizada de YouTube",
        "3840 × 2160 px recomendado",
        "16:9; ancho mínimo 640 px",
        "Ayuda de YouTube",
        "https://support.google.com/youtube/answer/72431?hl=es",
      ],
    ],
  },
} as const;

function SocialTable({ locale }: { locale: Locale }) {
  const copy = socialCopy[locale];
  return (
    <div className="tableWrap">
      <p>
        <strong>{copy.checked}:</strong> 2026-06-29. {copy.change}
      </p>
      <table>
        <thead>
          <tr>
            {copy.headers.map((header) => (
              <th key={header} scope="col">
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {copy.rows.map((row) => (
            <tr key={row[0]}>
              <td>{row[0]}</td>
              <td>{row[1]}</td>
              <td>{row[2]}</td>
              <td>
                <a href={row[4]} rel="noreferrer">
                  {row[3]}
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <p className="notice">{copy.notice}</p>
    </div>
  );
}
