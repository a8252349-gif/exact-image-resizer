import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const outDir = path.join(root, 'src/content');
const imgDir = path.join(root, 'public/guide-images');
fs.mkdirSync(outDir, { recursive: true });
fs.mkdirSync(imgDir, { recursive: true });

const topics = [
  ['image-resizer-online','Image Resizer Online: A Complete Guide to Resizing Photos','온라인 이미지 크기 조절 완전 가이드: 사진 크기와 용량 줄이기','オンライン画像リサイズ完全ガイド：写真サイズ変更の基本','Redimensionar imágenes online: guía completa para cambiar tamaño y peso','image resizer online','resizing a 4032×3024 phone photo for a 1200-pixel web article','4032×3024 휴대전화 사진을 긴 변 1200px의 웹 이미지로 바꾸는 작업','4032×3024のスマートフォン写真を長辺1200pxのWeb画像にする作業','convertir una foto móvil de 4032×3024 en una imagen web de 1200 píxeles'],
  ['exact-dimensions-without-distortion','How to Resize an Image to Exact Dimensions Without Distortion','이미지를 왜곡 없이 정확한 가로·세로로 바꾸는 방법','画像を歪ませずに正確な縦横サイズへ変更する方法','Cómo redimensionar una imagen a medidas exactas sin deformarla','exact dimensions','placing a 3:2 photo inside a 1200×800, 1080×1080, or 1200×628 frame','3:2 사진을 1200×800, 1080×1080 또는 1200×628 프레임에 맞추는 작업','3:2写真を1200×800、1080×1080、1200×628の枠に合わせる作業','colocar una foto 3:2 dentro de marcos de 1200×800, 1080×1080 o 1200×628'],
  ['target-file-size-kb','How to Reduce an Image to a Target File Size in KB','이미지를 목표 KB 이하로 줄이는 방법','画像を目標KB以下に圧縮する方法','Cómo reducir una imagen a un tamaño objetivo en KB','target file size','compressing a passport-style photo below 100 KB while preserving readable facial detail','증명사진을 얼굴 디테일이 보이도록 유지하면서 100KB 이하로 압축하는 작업','証明写真の顔の細部を保ちながら100KB以下に圧縮する作業','comprimir una foto de identificación por debajo de 100 KB manteniendo el detalle facial'],
  ['batch-resize-images','How to Batch Resize Multiple Images at Once','여러 이미지 크기를 한 번에 일괄 조절하는 방법','複数画像を一括でリサイズする方法','Cómo redimensionar varias imágenes por lotes','batch image resizer','standardizing twenty product photos and downloading them as one ZIP archive','상품 사진 20장을 같은 규격으로 맞춘 뒤 ZIP 파일 하나로 내려받는 작업','20枚の商品写真を同じ規格にそろえてZIPで保存する作業','normalizar veinte fotos de producto y descargarlas en un solo archivo ZIP'],
  ['without-losing-quality','How to Resize Images Without Losing Visible Quality','눈에 띄는 화질 저하 없이 이미지 크기를 바꾸는 방법','見た目の品質を落とさずに画像をリサイズする方法','Cómo redimensionar imágenes sin perder calidad visible','visible quality','downscaling a 6000-pixel photograph for a 1600-pixel display without creating halos or blur','6000px 사진을 번짐이나 흐림 없이 1600px 표시 영역에 맞추는 작업','6000pxの写真をにじみやぼけを抑えて1600px表示用に縮小する作業','reducir una fotografía de 6000 píxeles para una visualización de 1600 sin halos ni desenfoque'],
  ['jpeg-png-webp','JPEG vs PNG vs WebP: Which Format Should You Use?','JPEG·PNG·WebP 비교: 어떤 형식을 선택해야 할까','JPEG・PNG・WebP比較：どの形式を選ぶべきか','JPEG vs PNG vs WebP: qué formato conviene usar','JPEG PNG WebP','choosing between a photograph, a transparent logo, and a screenshot with small text','일반 사진, 투명 로고, 작은 글자가 있는 스크린샷의 출력 형식을 고르는 작업','写真、透明ロゴ、小さな文字を含むスクリーンショットの形式を選ぶ作業','elegir formato para una fotografía, un logotipo transparente y una captura con texto pequeño'],
  ['website-core-web-vitals','How to Resize Images for Faster Websites and Core Web Vitals','빠른 웹사이트와 Core Web Vitals를 위한 이미지 최적화','高速なWebサイトとCore Web Vitalsのための画像最適化','Cómo redimensionar imágenes para sitios rápidos y Core Web Vitals','website performance','preparing a hero image for a 1440-pixel desktop slot and smaller responsive variants','데스크톱 1440px 히어로 영역과 작은 반응형 화면용 이미지를 준비하는 작업','幅1440pxのヒーロー画像と小さいレスポンシブ画像を準備する作業','preparar una imagen hero para un espacio de 1440 píxeles y variantes responsivas menores'],
  ['email-attachments','How to Resize Photos for Email Attachments','이메일 첨부용 사진을 알맞게 줄이는 방법','メール添付用の写真を適切に縮小する方法','Cómo reducir fotos para adjuntarlas por correo','email attachments','sending twelve phone photos without creating an oversized message or unreadable documents','휴대전화 사진 12장을 메일 용량 초과나 문서 판독 저하 없이 보내는 작업','スマートフォン写真12枚を容量超過や読みにくさなく送る作業','enviar doce fotos del móvil sin crear un mensaje enorme ni volver ilegibles los documentos'],
  ['product-photos-same-size','How to Resize Product Photos to the Same Size','상품 사진을 같은 크기와 구도로 맞추는 방법','商品写真を同じサイズと構図にそろえる方法','Cómo igualar el tamaño de las fotos de producto','product photos','placing differently shaped products inside consistent square canvases with controlled padding','형태가 다른 상품을 일정한 여백의 정사각형 캔버스 안에 배치하는 작업','形の異なる商品を一定の余白で正方形キャンバスに配置する作業','colocar productos de formas distintas en lienzos cuadrados con márgenes uniformes'],
  ['profile-pictures-headshots','How to Resize Profile Pictures and Headshots Correctly','프로필 사진과 인물 사진 크기를 올바르게 조절하는 방법','プロフィール写真とヘッドショットを正しくリサイズする方法','Cómo redimensionar correctamente fotos de perfil y retratos','profile pictures','creating consistent square staff portraits that remain safe inside circular profile masks','원형 프로필 마스크에서도 얼굴이 잘리지 않는 정사각형 직원 사진을 만드는 작업','円形プロフィールでも顔が切れない正方形の社員写真を作る作業','crear retratos cuadrados coherentes que funcionen dentro de máscaras circulares'],
  ['social-media-workflow','Social Media Image Sizes and Safe Resizing Workflow','소셜미디어 이미지 규격과 안전한 리사이즈 작업 흐름','SNS画像サイズと安全なリサイズ手順','Tamaños de imagen para redes sociales y flujo seguro','social media images','deriving square, portrait, landscape, and vertical versions from one master image','한 장의 원본으로 정사각형·세로형·가로형·스토리형 이미지를 만드는 작업','1枚の原稿から正方形・縦長・横長・ストーリー用を作る作業','obtener versiones cuadradas, verticales, horizontales y de historia desde una imagen maestra'],
  ['dpi-ppi-print-size','DPI, PPI and Print Size Explained for Image Resizing','이미지 리사이즈를 위한 DPI·PPI·인쇄 크기 이해','画像リサイズのためのDPI・PPI・印刷サイズ解説','DPI, PPI y tamaño de impresión explicados','print size','checking whether a 3000×2400 image can make a sharp 10×8-inch print at 300 PPI','3000×2400 이미지가 300PPI 기준 10×8인치 인화에 충분한지 확인하는 작업','3000×2400画像が300PPIで10×8インチ印刷に足りるか確認する作業','comprobar si una imagen de 3000×2400 alcanza para una impresión de 10×8 pulgadas a 300 PPI'],
  ['high-resolution-phone-photos','How to Resize High-Resolution Photos on a Phone','휴대전화에서 고해상도 사진을 안전하게 줄이는 방법','スマートフォンで高解像度写真を安全に縮小する方法','Cómo reducir fotos de alta resolución en el móvil','phone photos','processing large HEIC or JPEG camera files without exhausting mobile memory','대용량 HEIC 또는 JPEG 사진을 모바일 메모리 부족 없이 처리하는 작업','大きなHEICやJPEGをモバイルメモリ不足なく処理する作業','procesar archivos HEIC o JPEG grandes sin agotar la memoria del móvil'],
  ['transparent-png','How to Resize Transparent PNG Images Without Losing Edges','투명 PNG의 가장자리를 손상하지 않고 크기를 조절하는 방법','透明PNGの輪郭を損なわずにリサイズする方法','Cómo redimensionar PNG transparentes sin dañar los bordes','transparent PNG','resizing a logo with soft antialiased edges and exporting it with transparency intact','부드러운 반투명 가장자리가 있는 로고를 투명도를 유지해 출력하는 작업','半透明の滑らかな輪郭を持つロゴを透明のまま出力する作業','redimensionar un logotipo con bordes suavizados manteniendo intacta la transparencia'],
  ['browser-privacy','How Browser-Based Image Resizing Protects Your Privacy','서버 업로드 없는 이미지 크기 조절이 개인정보를 보호하는 방식','ブラウザ内画像リサイズがプライバシーを守る仕組み','Cómo protege tu privacidad el redimensionado en el navegador','browser privacy','editing a sensitive family or identification photo without uploading the file to a remote server','민감한 가족사진이나 신분증 사진을 외부 서버에 올리지 않고 편집하는 작업','家族写真や身分証写真を外部サーバーへ送らずに編集する作業','editar una foto familiar o de identificación sensible sin subirla a un servidor remoto']
];

const locales = ['en','ko','ja','es'];
const titles = { en:1, ko:2, ja:3, es:4 };

const focusByLocale = {
  en: ['image resizer','exact image dimensions','reduce image file size','batch image resizer','resize image without losing quality','JPEG PNG WebP comparison','website image optimization','resize photos for email','resize product images','resize profile pictures','social media image sizes','pixel to print size','resize phone photos','resize transparent PNG','private image resizer'],
  ko: ['이미지 크기 조절','이미지 정확한 크기 변경','이미지 용량 줄이기','이미지 일괄 크기 조절','화질 저하 없이 이미지 줄이기','JPEG PNG WebP 비교','웹 이미지 최적화','이메일 사진 용량 줄이기','상품 사진 크기 통일','프로필 사진 크기 조절','소셜미디어 이미지 크기','픽셀 인쇄 크기 계산','휴대폰 사진 용량 줄이기','투명 PNG 크기 조절','서버 업로드 없는 이미지 크기 조절'],
  ja: ['画像リサイズ','画像サイズ変更','画像圧縮','画像一括リサイズ','画質を保って画像縮小','JPEG PNG WebP 比較','Web画像最適化','メール写真圧縮','商品画像サイズ統一','プロフィール画像リサイズ','SNS画像サイズ','ピクセル印刷サイズ','スマホ写真圧縮','透過PNGリサイズ','アップロード不要画像リサイズ'],
  es: ['redimensionar imagen','cambiar tamaño de imagen','comprimir imagen','redimensionar imágenes por lotes','reducir imagen sin perder calidad','comparar JPEG PNG WebP','optimizar imágenes web','reducir fotos para correo','igualar fotos de producto','redimensionar foto de perfil','tamaños de imagen para redes sociales','calcular tamaño de impresión','comprimir fotos del móvil','redimensionar PNG transparente','redimensionar imagen sin subirla']
};

const serviceByLocale = {
  en: 'Image Resizer',
  ko: '이미지 크기 조절',
  ja: '画像リサイズ',
  es: 'Redimensionar Imagen'
};

const scenario = { en:6, ko:7, ja:8, es:9 };

const lex = {
  en: {
    desc:(t,f)=>`${t} explains practical settings, trade-offs, calculations, privacy limits, and a repeatable workflow for ${f}.`,
    intro:(f,s)=>[
      `A reliable ${f} workflow begins with a clear destination rather than a random quality slider. This guide uses ${s} as its running example and separates dimensions, aspect ratio, format, and encoded file size so each decision has a measurable purpose.`,
      `The browser can do most of this work locally. The image editor decodes the selected file, draws pixels to a canvas, and creates a new Blob without sending the image to an application server. That design improves privacy, but it does not remove the need to keep your original or to verify the exported result.`,
      `This guide focuses on decisions that are easy to miss: whether enlargement is sensible, when padding is safer than cropping, why a target kilobyte value is not a visual-quality guarantee, and how to check the final image before it leaves your device.`
    ],
    heads:['Start with the output requirement','Dimensions and bytes solve different problems','Choose a fit method deliberately','A practical calculation','Format and quality decisions','Recommended settings by situation','A repeatable browser workflow','Quality-control checks','Common mistakes and corrections','Limits that should remain visible'],
    para:(h,f,s,_i,j)=>{
      const variants=[
        `For ${f}, write down the destination dimensions, accepted format, and maximum file size before opening the tool. In the case of ${s}, the destination matters more than the camera's original numbers. A web slot, print order, profile mask, or upload form can reject an otherwise attractive image when one requirement is overlooked.`,
        `Pixel dimensions describe the raster grid, while bytes describe the encoded package. Reducing width from 4000 to 2000 pixels removes about three quarters of the pixel count because both axes shrink. The resulting byte reduction is not fixed: texture, noise, transparency, encoder, and quality level still change the result.`,
        `Contain preserves every visible part and adds unused space; cover fills the frame and removes overflow; stretch forces both dimensions and can distort shapes. The safest choice for ${f} depends on whether the subject can be cropped. Product edges, logos, documents, and headroom usually deserve more protection than decorative backgrounds.`,
        `Consider a 4032×3024 source. Scaling the width to 1200 while preserving the 4:3 ratio gives 1200×900 because 3024 ÷ 4032 × 1200 = 900. Placing that image in a 1200×800 frame requires either a 100-pixel vertical crop in total, a 100-pixel letterbox difference, or distortion. The arithmetic makes the trade-off explicit.`,
        `JPEG is usually efficient for photographs, PNG protects transparency and crisp flat graphics, and WebP can combine small photographic output with transparency support. Quality 85 is a sensible preview point, not a universal optimum. Examine faces, fine text, gradients, and high-contrast edges at the intended display size before lowering it further.`,
        `A conservative starting preset for ${f} is to disable enlargement, use contain when nothing may be lost, use cover only with an adjustable focal point, and keep the original file separately. For photographic JPEG or WebP, test 82–88 quality; for transparent artwork, retain PNG or transparent WebP and inspect edge pixels against light and dark backgrounds.`,
        `Select files, confirm their decoded dimensions, choose a global preset, and override only the exceptions. Run a small sample before processing twenty items. After encoding, compare original and output dimensions, byte size, percentage reduction, and crop position. Download one result first, open it outside the browser, then create the ZIP for the remaining files.`,
        `Quality control for ${f} should include the real destination. Zooming to 400 percent can reveal encoder artifacts that nobody sees in normal use, while a small thumbnail can hide damaged text. Check at 100 percent, at the intended display size, and—when relevant—inside the target platform or print preview.`,
        `A frequent mistake is chasing a tiny byte target using quality alone. When the minimum useful quality still exceeds the limit, modestly reduce resolution and encode again. Another mistake is repeatedly saving the same lossy file; return to the best available original for every new derivative to avoid cumulative damage.`,
        `Browser results can vary because codecs and color handling differ across engines and operating systems. Canvas re-encoding normally removes EXIF fields such as GPS, capture time, and camera model, and may normalize color toward the browser's sRGB pipeline. Exact byte equality is not promised, especially for PNG, animated files, or unsupported HEIC variants.`
      ];
      return variants[j];
    },
    checklist:['Confirm the destination width, height, format, and byte limit.','Keep a copy of the best original file.','Choose contain, cover, or stretch intentionally.','Disable enlargement unless the destination truly requires it.','Inspect the exported image at its real use size.','Verify transparency, crop position, filename, and downloaded file.'],
    faq:(f,s)=>[
      [`Can ${f} preserve every detail?`,`Downscaling can look excellent, but discarded pixels cannot be restored. Use the original for future exports and inspect the output at the intended size.`],
      [`Why is the result not exactly the requested number of kilobytes?`,`Encoders produce discrete sizes based on image complexity. The tool searches for the highest quality below the target, but exact byte equality is not guaranteed.`],
      [`Should I choose contain or cover for ${s}?`,`Use contain when the entire subject must remain visible. Use cover when filling the frame is more important and the crop can be positioned safely.`],
      [`Does processing upload my image?`,`The editing path runs in the browser and creates local Blobs. The site does not send selected image bytes or filenames to an image-processing server.`],
      [`Why did metadata disappear?`,`Canvas re-encoding creates a new raster file and normally omits EXIF, GPS, camera, and editing metadata. Preserve the source if those fields matter.`]
    ],
    table:['Decision','Recommended starting point','What to verify']
  },
  es: {
    desc:(t,f)=>`${t} explica ajustes prácticos, cálculos, límites de privacidad y un flujo repetible para ${f}.`,
    intro:(f,s)=>[
      `Un proceso fiable para ${f} empieza por definir el resultado, no por mover al azar un control de calidad. Esta guía utiliza ${s} como caso continuo y separa dimensiones, proporción, formato y peso codificado para que cada elección tenga una finalidad comprobable.`,
      `El navegador puede realizar el trabajo de forma local. El editor de imágenes decodifica el archivo, dibuja sus píxeles en un lienzo y crea un Blob nuevo sin enviar la imagen a un servidor de procesamiento. Esa arquitectura mejora la privacidad, aunque sigue siendo necesario conservar el original y revisar la exportación.`,
      `Esta guía presta atención a decisiones que suelen pasar desapercibidas: cuándo evitar la ampliación, por qué el relleno puede ser mejor que el recorte, qué significa realmente un objetivo en KB y cómo validar el archivo antes de utilizarlo.`
    ],
    heads:['Definir el resultado antes de editar','Dimensiones y bytes no son lo mismo','Elegir entre contener, cubrir o estirar','Cálculo práctico paso a paso','Formato y calidad de salida','Ajustes recomendados según el caso','Flujo de trabajo en el navegador','Control visual y técnico','Errores habituales y soluciones','Límites que conviene conocer'],
    para:(h,f,s,_i,j)=>{
      const v=[
        `Para ${f}, anota primero las dimensiones de destino, el formato admitido y el máximo de bytes. En ${s}, las reglas del destino son más importantes que las cifras originales de la cámara. Un formulario, una plantilla, un perfil circular o una imprenta pueden rechazar una imagen correcta si falta un requisito.`,
        `Las dimensiones expresan la cuadrícula de píxeles; los bytes expresan el paquete codificado. Pasar de 4000 a 2000 píxeles de ancho reduce aproximadamente tres cuartas partes de los píxeles cuando también baja la altura. El peso final todavía depende de textura, ruido, transparencia, formato y calidad.`,
        `Contener conserva todo y añade espacio; cubrir llena el marco y recorta el exceso; estirar fuerza ambas medidas y puede deformar. La elección para ${f} depende de si el sujeto admite recorte. Logotipos, documentos, productos y rostros suelen necesitar mayor protección que un fondo decorativo.`,
        `Imagina un original de 4032×3024. Al fijar 1200 de ancho y mantener 4:3, la altura es 900 porque 3024 ÷ 4032 × 1200 = 900. Para entrar en 1200×800 habrá que recortar 100 píxeles verticales en total, añadir espacio equivalente o deformar. El cálculo permite decidir con claridad.`,
        `JPEG suele ser eficaz para fotografías, PNG conserva transparencia y gráficos planos, y WebP puede reducir fotos o mantener alfa. Una calidad 85 es un punto de prueba, no una promesa universal. Revisa piel, letras pequeñas, degradados y bordes contrastados al tamaño real de uso.`,
        `Como inicio prudente para ${f}, desactiva la ampliación, usa contener cuando no debe perderse nada y reserva cubrir para casos con punto focal ajustable. En JPEG o WebP fotográfico prueba 82–88; para arte transparente conserva PNG o WebP con alfa y comprueba los bordes sobre fondos claros y oscuros.`,
        `Selecciona los archivos, confirma sus medidas decodificadas, aplica un ajuste global y modifica solo las excepciones. Procesa primero una muestra pequeña. Después compara medidas, peso, reducción y encuadre; abre un archivo descargado fuera del navegador antes de crear el ZIP del lote completo.`,
        `El control de ${f} debe hacerse en el destino real. Un zoom del 400 % puede exagerar defectos invisibles, mientras que una miniatura oculta texto estropeado. Revisa al 100 %, al tamaño de presentación y, cuando corresponda, dentro de la plataforma o vista previa de impresión.`,
        `Un error común es intentar alcanzar un peso diminuto solo bajando calidad. Si la calidad mínima útil sigue superando el límite, reduce moderadamente la resolución y vuelve a codificar. Otro error es guardar muchas veces el mismo JPEG; crea cada variante desde el mejor original para evitar pérdidas acumuladas.`,
        `Los resultados pueden variar entre navegadores por diferencias de códec y color. La recodificación con Canvas suele quitar EXIF, GPS, fecha y modelo de cámara, y puede normalizar el color hacia sRGB. No se promete igualdad exacta de bytes, especialmente en PNG, animaciones o variantes HEIC no compatibles.`
      ];
      return v[j];
    },
    checklist:['Confirmar ancho, alto, formato y límite de peso.','Guardar el mejor archivo original.','Elegir contener, cubrir o estirar de forma consciente.','Evitar ampliar salvo que sea imprescindible.','Revisar la exportación al tamaño real de uso.','Comprobar transparencia, recorte, nombre y descarga.'],
    faq:(f,s)=>[
      [`¿Puede ${f} conservar todos los detalles?`,`La reducción puede verse muy bien, pero los píxeles descartados no se recuperan. Conserva el original y revisa el resultado al tamaño final.`],
      [`¿Por qué el archivo no pesa exactamente los KB solicitados?`,`Los codificadores generan tamaños discretos según la complejidad. La búsqueda elige la mayor calidad por debajo del objetivo, sin garantizar igualdad de bytes.`],
      [`¿Conviene contener o cubrir para ${s}?`,`Usa contener si todo el sujeto debe verse; usa cubrir si llenar el marco es prioritario y el recorte puede colocarse con seguridad.`],
      [`¿La imagen se sube durante el proceso?`,`La edición se ejecuta en el navegador y crea Blobs locales. El sitio no envía los bytes ni el nombre del archivo a un servidor de imágenes.`],
      [`¿Por qué desaparecieron los metadatos?`,`Canvas crea un archivo raster nuevo y normalmente omite EXIF, GPS, cámara y datos de edición. Conserva el original si son importantes.`]
    ],
    table:['Decisión','Punto de partida','Comprobación final']
  },
  ko: {
    desc:(t,f)=>`${t}에서 ${f} 작업에 필요한 설정, 계산, 화질 판단, 개인정보 보호와 실제 한계를 자세히 설명합니다.`,
    intro:(f,s)=>[
      `${f} 작업을 안정적으로 끝내려면 품질 슬라이더부터 움직이기보다 결과물이 사용될 곳의 조건을 먼저 정해야 합니다. 이 글은 ${s}을 중심 사례로 삼아 픽셀 크기, 가로세로 비율, 파일 형식, 저장 용량을 각각 구분해 설명합니다.`,
      `이 이미지 편집기의 핵심 처리 과정은 브라우저 안에서 진행됩니다. 선택한 파일을 해석하고 Canvas에 다시 그린 뒤 새로운 Blob을 만들기 때문에 이미지 파일을 별도의 처리 서버로 올리지 않습니다. 다만 브라우저 처리라는 이유만으로 원본 보관이나 결과 검수가 필요 없어지는 것은 아닙니다.`,
      `이 글에서는 확대를 피해야 하는 경우, 크롭보다 여백이 안전한 이유, 목표 KB가 화질 보증과 다른 이유, 다운로드한 파일을 실제 사용 환경에서 확인하는 절차까지 놓치기 쉬운 판단을 다룹니다. 작업을 시작하기 전에 최종 사용처의 규격을 확인하면 불필요한 반복 저장과 화질 손상을 줄일 수 있습니다. 특히 ${s}처럼 여러 조건이 겹치는 작업은 먼저 대표 이미지 한 장을 처리해 ${f} 결과를 확인한 뒤 나머지 파일에 같은 기준을 적용하는 편이 안전합니다.`
    ],
    heads:['결과 조건부터 정리하기','픽셀 크기와 파일 용량 구분하기','전체 표시·영역 채우기·강제 맞춤 선택하기','숫자로 확인하는 실제 계산','출력 형식과 품질 설정','상황별 권장 시작값','브라우저에서 처리하는 순서','결과물을 검수하는 방법','자주 생기는 실수와 해결법','도구가 보장할 수 없는 한계'],
    para:(h,f,s,_i,j)=>{
      const v=[
        `${f}을 시작하기 전에는 최종 가로와 세로, 허용 형식, 최대 파일 용량을 한 줄로 적어 두는 편이 좋습니다. ${s}에서는 카메라 원본의 숫자보다 업로드 폼이나 화면 영역의 조건이 우선입니다. 크기가 예뻐 보여도 한 가지 제한을 놓치면 업로드가 거부되거나 중요한 피사체가 잘릴 수 있습니다.`,
        `픽셀 크기는 이미지가 가진 격자의 수이고 파일 용량은 그 격자를 어떤 방식으로 저장했는지 나타내는 결과입니다. 가로 4000px 이미지를 2000px로 줄이고 세로도 같은 비율로 줄이면 전체 픽셀 수는 약 4분의 1이 됩니다. 하지만 최종 바이트는 노이즈, 질감, 투명도, 형식, 품질에 따라 달라집니다.`,
        `전체 표시는 모든 내용을 보존하면서 남는 공간을 여백으로 채우고, 영역 채우기는 프레임을 가득 채우는 대신 넘치는 부분을 잘라냅니다. 강제 맞춤은 가로와 세로를 강제로 맞춰 형태가 왜곡될 수 있습니다. ${f}에서는 로고, 문서, 상품 외곽선, 얼굴처럼 잘리면 안 되는 요소가 있는지를 먼저 판단해야 합니다.`,
        `4032×3024 원본을 예로 들면 가로를 1200px로 줄이면서 4:3 비율을 유지할 때 세로는 3024 ÷ 4032 × 1200 = 900px입니다. 이를 1200×800 프레임에 넣으려면 세로 방향에서 총 100px을 크롭하거나, 같은 차이만큼 여백을 만들거나, 형태를 늘여야 합니다. 계산을 해 보면 선택의 대가가 분명해집니다.`,
        `JPEG는 일반 사진에 효율적이고 PNG는 투명 배경과 평면 그래픽을 보존하는 데 유리합니다. WebP는 사진 용량을 줄이면서 투명도를 지원할 수 있습니다. 품질 85는 비교를 시작하기 좋은 값일 뿐 모든 이미지의 정답은 아닙니다. 얼굴, 작은 글자, 그라데이션, 강한 경계선을 실제 표시 크기에서 확인해야 합니다.`,
        `${f}의 무난한 시작값은 확대 금지, 내용 손실이 허용되지 않을 때 전체 표시, 초점 위치를 조절할 수 있을 때만 영역 채우기를 사용하는 것입니다. 사진형 JPEG 또는 WebP는 품질 82~88에서 먼저 비교하고, 투명 이미지는 PNG나 투명 WebP로 출력해 밝은 배경과 어두운 배경 양쪽에서 가장자리를 살펴보는 것이 좋습니다.`,
        `파일을 선택한 뒤 해석된 가로와 세로가 예상과 맞는지 확인하고 전체 설정을 적용합니다. 예외 파일만 개별 설정으로 수정한 다음, 20장을 한꺼번에 처리하기 전에 1~2장으로 시험합니다. 처리 후에는 원본과 결과의 크기, 용량, 감소율, 크롭 위치를 비교하고 개별 파일을 먼저 열어 본 뒤 ZIP을 만드는 순서가 안전합니다.`,
        `${f} 결과는 실제 사용 위치에서 검수해야 합니다. 400% 확대 화면은 평소 보이지 않는 압축 흔적을 과장할 수 있고, 너무 작은 미리보기는 손상된 글자를 숨길 수 있습니다. 100% 보기, 실제 표시 크기, 최종 업로드 화면 또는 인쇄 미리보기의 세 단계로 확인하면 과도한 압축과 불필요한 고용량을 함께 피할 수 있습니다.`,
        `가장 흔한 실수는 아주 작은 목표 용량을 품질 저하만으로 맞추려는 것입니다. 쓸 수 있는 최소 품질에서도 목표를 넘는다면 해상도를 조금씩 줄여 다시 인코딩해야 합니다. 또 손실 압축된 파일을 반복 저장하면 손상이 누적되므로, 새로운 규격을 만들 때마다 가능한 한 가장 좋은 원본에서 시작해야 합니다.`,
        `브라우저와 운영체제에 따라 코덱과 색상 처리 결과가 조금 달라질 수 있습니다. Canvas 재인코딩 과정에서는 GPS, 촬영 날짜, 카메라 모델, 편집 정보 등의 EXIF가 보통 제거되고 색상이 브라우저의 sRGB 처리 환경에 맞춰질 수 있습니다. PNG, 애니메이션, 일부 HEIC에서는 정확히 같은 바이트를 보장할 수 없습니다.`
      ];
      return v[j];
    },
    checklist:['최종 가로·세로·형식·용량 제한을 확인합니다.','가장 좋은 원본 파일을 따로 보관합니다.','전체 표시·영역 채우기·강제 맞춤 방식을 의도적으로 선택합니다.','꼭 필요한 경우가 아니면 확대를 막습니다.','결과물을 실제 사용 크기에서 확인합니다.','투명도·크롭·파일명·다운로드 파일을 검수합니다.'],
    faq:(f,s)=>[
      [`${f}을 하면 원본의 모든 디테일이 유지되나요?`,`축소 결과는 매우 자연스러울 수 있지만 버린 픽셀을 되돌릴 수는 없습니다. 원본을 보관하고 최종 사용 크기에서 결과를 확인해야 합니다.`],
      [`왜 요청한 KB와 정확히 같은 파일이 나오지 않나요?`,`인코더는 이미지 복잡도에 따라 불연속적인 파일 크기를 만듭니다. 도구는 목표 이하에서 가장 높은 품질을 찾지만 정확한 바이트 일치를 보장하지 않습니다.`],
      [`${s}에는 전체 표시와 영역 채우기 중 무엇이 좋나요?`,`피사체 전체가 보여야 하면 전체 표시, 프레임을 가득 채우는 것이 중요하고 자를 위치를 안전하게 조절할 수 있으면 영역 채우기가 적합합니다.`],
      [`처리할 때 이미지가 서버로 업로드되나요?`,`편집 과정은 브라우저에서 실행되고 로컬 Blob을 만듭니다. 이 사이트는 선택한 이미지 바이트나 파일명을 이미지 처리 서버로 보내지 않습니다.`],
      [`메타데이터가 사라진 이유는 무엇인가요?`,`Canvas는 새로운 래스터 파일을 만들기 때문에 EXIF, GPS, 카메라, 편집 정보가 일반적으로 빠집니다. 해당 정보가 필요하면 원본을 보관해야 합니다.`]
    ],
    table:['판단 항목','권장 시작값','최종 확인 사항']
  },
  ja: {
    desc:(t,f)=>`${t}では、${f}に必要な設定、計算、品質判断、プライバシーと実際の限界を詳しく説明します。`,
    intro:(f,s)=>[
      `${f}を安定して行うには、品質スライダーを動かす前に出力先の条件を決める必要があります。本ガイドは${s}を継続例として、ピクセル寸法、縦横比、形式、ファイル容量を分けて考えます。`,
      `この画像編集ツールの主要な処理はブラウザ内で行われます。選択ファイルをデコードし、Canvasへ描画して新しいBlobを作るため、画像を専用処理サーバーへ送信しません。ただし、原本の保存と出力確認は引き続き必要です。`,
      `本ガイドでは、拡大を避ける場面、切り抜きより余白が安全な理由、目標KBと画質保証の違い、ダウンロード後の確認手順まで、見落としやすい判断を扱います。`
    ],
    heads:['出力条件を先に整理する','ピクセル寸法と容量を分ける','全体表示・枠を埋める・強制変形を選ぶ','数値で確認する計算例','形式と品質の決め方','用途別の推奨初期値','ブラウザでの作業手順','出力品質の確認方法','よくある失敗と修正','明示すべき技術的限界'],
    para:(h,f,s,_i,j)=>{
      const v=[
        `${f}を始める前に、最終の幅と高さ、使用可能な形式、最大容量を書き出します。${s}では、カメラ原本の数値よりアップロード先や表示枠の条件が優先されます。見た目が良くても、条件を一つ逃すと拒否や重要部分の欠落につながります。`,
        `ピクセル寸法は画像の格子数、ファイル容量はその格子を保存した結果です。幅4000pxを2000pxへ縮小し、高さも同率で下げると総ピクセル数は約4分の1になります。しかし最終バイト数は質感、ノイズ、透明度、形式、品質値によって変わります。`,
        `全体表示は画像全体を残して空きを余白にし、枠を埋める方法は枠を満たす代わりにはみ出しを切り取ります。強制変形は両寸法を合わせるため、形を歪めることがあります。${f}では、ロゴ、文書、商品輪郭、顔など切れてはいけない要素を先に確認します。`,
        `4032×3024の原本で幅を1200pxにし、4:3を保つと高さは3024 ÷ 4032 × 1200 = 900pxです。1200×800枠へ入れるには縦方向を合計100px切る、同量の余白を作る、または変形する必要があります。計算で選択の影響が明確になります。`,
        `JPEGは写真に効率的で、PNGは透明背景や平面的な図形に適し、WebPは写真の容量削減と透明度を両立できます。品質85は比較開始点であり万能値ではありません。顔、小文字、階調、強い輪郭を実際の表示サイズで確認します。`,
        `${f}の無難な初期値は拡大禁止、欠落不可なら全体表示、焦点位置を調整できる場合だけ枠を埋める方法です。写真のJPEGやWebPは品質82～88から比較し、透明素材はPNGまたは透過WebPで出力して明暗両方の背景で輪郭を確認します。`,
        `ファイルを選択し、デコード後の幅と高さを確認して全体設定を適用します。例外だけ個別変更し、20枚処理の前に1～2枚を試します。処理後は寸法、容量、削減率、切り抜き位置を比較し、単体ファイルを開いてからZIPを作ると安全です。`,
        `${f}の結果は実際の利用場所で確認します。400%拡大は通常見えない圧縮痕を誇張し、小さなサムネイルは壊れた文字を隠します。100%表示、実寸表示、最終プラットフォームまたは印刷プレビューの三段階で確認します。`,
        `よくある失敗は極端に小さい容量を品質だけで達成しようとすることです。実用下限の品質でも超える場合は、解像度を少しずつ下げて再圧縮します。また損失圧縮ファイルの反復保存を避け、新しい派生画像は最良の原本から作ります。`,
        `ブラウザやOSによりコーデックと色処理が異なります。Canvas再エンコードではGPS、撮影日、カメラ機種、編集情報などのEXIFが通常除かれ、色がブラウザのsRGB処理へ寄る場合があります。PNG、アニメーション、一部HEICでは完全なバイト一致を保証できません。`
      ];
      return v[j];
    },
    checklist:['最終の幅・高さ・形式・容量制限を確認する。','最良の原本を別に保存する。','全体表示・枠を埋める・強制変形を意図して選ぶ。','必要がなければ拡大を禁止する。','実際の利用サイズで出力を確認する。','透明度・切り抜き・名前・保存ファイルを検証する。'],
    faq:(f,s)=>[
      [`${f}で細部をすべて維持できますか？`,`縮小は良好に見えても、捨てたピクセルは戻りません。原本を保存し、最終利用サイズで出力を確認してください。`],
      [`指定KBと完全に同じにならないのはなぜですか？`,`エンコーダーは複雑さに応じて離散的な容量を生成します。目標以下の最高品質を探索しますが、完全なバイト一致は保証しません。`],
      [`${s}には全体表示と枠を埋める方法のどちらが適切ですか？`,`全体を残すなら全体表示、枠を満たすことが重要で切り抜きを安全に調整できるなら枠を埋める方法です。`],
      [`処理中に画像はアップロードされますか？`,`編集はブラウザで実行され、ローカルBlobを作ります。このサイトは画像バイトやファイル名を処理サーバーへ送りません。`],
      [`メタデータが消える理由は何ですか？`,`Canvasが新しいラスターファイルを作るため、EXIF、GPS、カメラ、編集情報は通常含まれません。必要なら原本を保持してください。`]
    ],
    table:['判断項目','推奨初期値','最終確認']
  }
};


const descriptorByLocale={
  en:['general image-resizing workflow','exact-dimension workflow','target-size compression workflow','batch-resizing workflow','visible-quality workflow','format-selection workflow','website-image workflow','email-attachment workflow','product-photo workflow','portrait-framing workflow','social-media workflow','print-size workflow','mobile-photo workflow','transparent-PNG workflow','private browser workflow'],
  es:['flujo general de redimensionado','flujo de medidas exactas','flujo de compresión por tamaño','flujo de redimensionado por lotes','flujo de calidad visible','flujo de selección de formato','flujo de imágenes web','flujo de adjuntos de correo','flujo de fotos de producto','flujo de encuadre de retratos','flujo para redes sociales','flujo de tamaño de impresión','flujo de fotos móviles','flujo de PNG transparente','flujo privado en el navegador'],
  ko:['일반 이미지 크기 조절 과정','정확한 크기 맞춤 과정','목표 용량 압축 과정','이미지 일괄 처리 과정','화질 유지 과정','파일 형식 선택 과정','웹 이미지 최적화 과정','이메일 첨부 준비 과정','상품 사진 통일 과정','프로필 사진 구도 조절 과정','소셜미디어 이미지 제작 과정','인쇄 크기 계산 과정','모바일 사진 처리 과정','투명 PNG 처리 과정','브라우저 로컬 처리 과정'],
  ja:['一般的な画像リサイズ手順','正確な寸法調整手順','目標容量への圧縮手順','画像一括処理手順','見た目の品質を守る手順','画像形式の選択手順','Web画像最適化手順','メール添付準備手順','商品画像統一手順','プロフィール写真調整手順','SNS画像作成手順','印刷サイズ計算手順','モバイル写真処理手順','透過PNG処理手順','ブラウザ内ローカル処理手順']
};
function uniqueParagraph(locale,i,d,h,f,s,n){
  const en=[
    `A ${d} treats “${h}” as a destination specification, not a decorative option. For ${f}, the ${d} records the requested value, tests it against ${s}, and keeps the original available for another derivative. The ${d} then opens the downloaded file, measures the actual dimensions and bytes, and notes any crop, padding, metadata, or color change before calling the result complete.`,
    `Geometry leads this ${d}. The question “${h}” is answered by comparing source ratio, output ratio, and the protected subject area during ${s}. A ${d} never hides the trade-off behind an automatic preset: it identifies which pixels may disappear, which empty area may be added, and whether enlargement would create a larger grid without creating new detail.`,
    `The ${d} evaluates “${h}” through a byte budget. In ${s}, every quality change is tied to ${f}, and every extra compression step is checked at the real display size. The ${d} prefers the highest acceptable quality below the limit, lowers resolution gradually only when necessary, and documents when the target remains impossible without an unreasonable visual loss.`,
    `For “${h},” the ${d} separates repeatable settings from image-specific exceptions. While ${s}, shared dimensions, format, suffix, and byte goals belong to the batch preset; unusual orientation, subject position, transparency, or crop safety belongs to an override. The ${d} validates two samples first, prevents filename collisions, and packages only reviewed outputs into the final ZIP.`,
    `A ${d} judges “${h}” by visible evidence rather than by a single percentage. During ${s}, the ${d} compares 100-percent pixels, intended display size, fine hair, text, gradients, and contrast boundaries. It avoids repeated lossy saves, refuses unnecessary enlargement, and chooses a smaller pixel grid before pushing quality below the point where ${f} no longer serves the viewer.`,
    `The ${d} frames “${h}” as a content-format match. For ${s}, the ${d} asks whether the raster is photographic, transparent, flat-colored, text-heavy, or destined for an older environment. It then tests JPEG, PNG, or WebP according to those facts, verifies alpha edges on light and dark backgrounds, and rejects a smaller file when the conversion damages the purpose of ${f}.`,
    `A ${d} connects “${h}” to the rendered slot. In ${s}, the ${d} compares intrinsic dimensions with CSS display size, prepares responsive variants, reserves width and height to prevent layout movement, and chooses a modern format only when a dependable fallback strategy exists. The ${d} measures the delivered asset rather than assuming that a high-resolution source automatically improves ${f}.`,
    `The ${d} answers “${h}” from the recipient’s constraints. While ${s}, the ${d} counts every attachment, preserves readable document text, and chooses a long-edge limit before sacrificing quality. It confirms the final message size, removes unnecessary metadata through re-encoding when appropriate, and keeps sensitive originals outside the mail workflow unless the recipient genuinely needs them.`,
    `A ${d} makes “${h}” consistent without pretending that identical canvases guarantee identical composition. For ${s}, the ${d} aligns product scale, padding, background, and focal position, then checks transparent edges and small-source enlargement. It uses the batch preset for the frame but reserves an override for products whose shape would otherwise look smaller, clipped, or visually off-center.`,
    `The ${d} handles “${h}” around facial safety. During ${s}, the ${d} protects headroom, eye line, shoulders, and the circular-mask area before choosing the final square. It compares every staff portrait at the same rendered size, avoids aggressive upscaling, and treats consistent lighting and framing as separate problems from the pixel dimensions required for ${f}.`,
    `A ${d} converts “${h}” into a master-and-derivatives plan. For ${s}, the ${d} starts with a source that has safe margins, then creates square, portrait, landscape, and vertical outputs without chaining one lossy export into the next. It checks current official platform help, anticipates additional recompression, and keeps text or faces away from uncertain crop boundaries.`,
    `The ${d} resolves “${h}” with physical arithmetic. In ${s}, the ${d} divides pixel dimensions by the intended PPI, converts inches to centimeters when needed, and distinguishes pixel density from printer DPI terminology. It refuses to claim that changing a metadata number creates detail, and it recommends a smaller print or a greater viewing distance when ${f} lacks sufficient source pixels.`,
    `A ${d} approaches “${h}” through decoded-memory cost. While ${s}, the ${d} remembers that a compressed phone file expands into a much larger pixel buffer, limits the number of simultaneous items, and uses browser-local conversion for supported HEIC variants. It verifies the mobile download destination, preserves the camera original, and retries with a smaller batch when the device cannot sustain ${f}.`,
    `The ${d} examines “${h}” at the alpha boundary. For ${s}, the ${d} checks premultiplied-looking halos, soft antialiasing, transparent padding, and the background that will sit behind the asset. It keeps PNG when lossless edges are essential, tests transparent WebP when smaller delivery matters, and never converts to JPEG before choosing a deliberate matte color.`,
    `A ${d} makes “${h}” a data-flow question. During ${s}, the ${d} confirms that selected bytes are decoded and re-encoded locally, that filenames and pixels are not sent to an image-processing API, and that only preferences enter localStorage. It still considers browser extensions, device security, downloads, metadata loss, and the need to close the page after sensitive work.`
  ];
  const es=[
    `Una ${d} convierte «${h}» en una especificación del destino. Para ${f}, la ${d} registra el valor solicitado, lo prueba al ${s} y conserva el original para futuras variantes. Después abre la descarga, mide dimensiones y bytes reales y anota cualquier recorte, margen, metadato o cambio de color antes de dar el resultado por terminado.`,
    `La geometría dirige esta ${d}. «${h}» se resuelve comparando proporción de origen, proporción de salida y zona protegida al ${s}. La ${d} no esconde el compromiso tras un valor automático: identifica qué píxeles pueden desaparecer, qué espacio puede añadirse y si ampliar solo crea una cuadrícula mayor sin detalle nuevo.`,
    `Esta ${d} estudia «${h}» mediante un presupuesto de bytes. Al ${s}, cada cambio de calidad se relaciona con ${f} y se revisa al tamaño real. La ${d} busca la mayor calidad aceptable bajo el límite, reduce resolución poco a poco cuando hace falta y documenta cuándo el objetivo exige una pérdida visual poco razonable.`,
    `Para «${h}», la ${d} separa ajustes repetibles de excepciones. Al ${s}, medidas, formato, sufijo y objetivo pertenecen al lote; orientación, posición, transparencia o seguridad del recorte pertenecen a cada archivo. La ${d} valida dos muestras, evita nombres repetidos y añade al ZIP solo salidas revisadas.`,
    `Una ${d} valora «${h}» con evidencia visible y no con un porcentaje aislado. Durante ${s}, compara píxeles al cien por cien, tamaño de presentación, cabello, texto, degradados y bordes. Evita guardados con pérdida repetidos, rechaza ampliaciones inútiles y reduce la cuadrícula antes de bajar la calidad hasta perjudicar ${f}.`,
    `La ${d} plantea «${h}» como correspondencia entre contenido y formato. Para ${s}, pregunta si el raster es fotográfico, transparente, plano, con texto o destinado a un entorno antiguo. Prueba JPEG, PNG o WebP según esos hechos, revisa alfa en fondos claros y oscuros y descarta una conversión menor que dañe ${f}.`,
    `Una ${d} conecta «${h}» con el espacio renderizado. Al ${s}, compara medidas intrínsecas y visuales, prepara variantes responsivas, reserva ancho y alto para evitar saltos y usa formatos modernos con una estrategia fiable. La ${d} mide el recurso entregado y no supone que un origen enorme mejora automáticamente ${f}.`,
    `La ${d} responde «${h}» desde los límites del destinatario. Al ${s}, cuenta adjuntos, protege la lectura de documentos y fija primero un lado largo razonable. Comprueba el tamaño del mensaje, elimina metadatos innecesarios cuando procede y mantiene los originales sensibles fuera del correo salvo necesidad real.`,
    `Una ${d} uniforma «${h}» sin confundir lienzo idéntico con composición idéntica. Para ${s}, alinea escala, margen, fondo y foco, y revisa transparencia y ampliación. Usa un marco común, pero reserva ajustes individuales para productos que quedarían pequeños, cortados o desplazados.`,
    `La ${d} organiza «${h}» alrededor de la seguridad facial. Al ${s}, protege aire superior, ojos, hombros y máscara circular antes del cuadrado final. Compara retratos al mismo tamaño, evita ampliar demasiado y separa iluminación y encuadre de las dimensiones exigidas para ${f}.`,
    `Una ${d} transforma «${h}» en un plan de maestro y derivados. Para ${s}, parte de un origen con márgenes seguros y crea cuadrados, verticales, horizontales e historias desde ese maestro. Consulta ayuda oficial actual, prevé recompresión y aleja texto y rostros de bordes inciertos.`,
    `La ${d} resuelve «${h}» con aritmética física. Al ${s}, divide píxeles por PPI, convierte pulgadas a centímetros y distingue densidad de imagen de DPI de impresora. No afirma que cambiar metadatos cree detalle y propone menor impresión o mayor distancia cuando faltan píxeles para ${f}.`,
    `Una ${d} aborda «${h}» desde el coste de memoria decodificada. Al ${s}, recuerda que el archivo comprimido se expande, limita elementos simultáneos y usa conversión local para HEIC compatible. Verifica la descarga móvil, guarda el original y reduce el lote si el dispositivo no sostiene ${f}.`,
    `La ${d} inspecciona «${h}» en el límite alfa. Para ${s}, revisa halos, antialiasing, margen transparente y fondo final. Mantiene PNG cuando los bordes sin pérdida son esenciales, prueba WebP transparente para entrega compacta y no convierte a JPEG sin elegir antes un color de fondo.`,
    `Una ${d} convierte «${h}» en una pregunta sobre flujo de datos. Al ${s}, confirma que bytes y píxeles se procesan localmente, que nombres e imagen no van a una API y que localStorage guarda preferencias. También considera extensiones, seguridad del dispositivo, descargas, pérdida de metadatos y cierre tras trabajo sensible.`
  ];
  const ko=[
    `${d}에서는 ‘${h}’을 장식 옵션이 아니라 사용처 규격으로 봅니다. ${f} 작업에서 ${d} 기준은 요청값을 기록하고 ${s} 상황에 대입한 뒤 원본을 다음 파생 파일을 위해 보관합니다. 다운로드한 결과를 직접 열어 실제 크기와 바이트를 재고 크롭, 여백, 메타데이터, 색상 변화를 기록해야 완료됩니다.`,
    `${d}의 출발점은 기하 관계입니다. ${s} 때 ‘${h}’은 원본 비율, 출력 비율, 보호할 피사체 영역을 비교해 결정합니다. ${d}는 자동값 뒤에 손실을 숨기지 않고 어떤 픽셀이 사라지는지, 어떤 공간이 추가되는지, 확대가 새 디테일 없이 격자만 늘리는지 분명히 표시합니다.`,
    `${d}는 ‘${h}’을 바이트 예산으로 분석합니다. ${s} 과정에서 품질 변경은 ${f} 목적과 연결하고 실제 표시 크기에서 확인합니다. ${d}는 목표 이하에서 가장 높은 허용 품질을 찾고 꼭 필요할 때만 해상도를 단계적으로 낮추며 과도한 손상 없이는 목표가 불가능한 경우도 기록합니다.`,
    `${d}에서 ‘${h}’은 반복 설정과 개별 예외를 나누는 문제입니다. ${s} 때 공통 크기, 형식, 접미사, 용량은 전체 설정으로 두고 방향, 피사체 위치, 투명도, 안전 크롭은 개별 설정으로 둡니다. ${d}는 먼저 두 장을 시험하고 파일명 충돌을 막은 뒤 검수된 결과만 ZIP에 넣습니다.`,
    `${d}는 ‘${h}’을 숫자 하나가 아니라 눈에 보이는 근거로 판단합니다. ${s} 과정에서 100% 픽셀, 실제 표시 크기, 머리카락, 작은 글자, 그라데이션, 경계선을 비교합니다. 반복 손실 저장과 불필요한 확대를 피하고 ${f} 목적을 해칠 정도로 품질을 낮추기 전에 픽셀 크기를 조절합니다.`,
    `${d}는 ‘${h}’을 내용과 형식의 궁합으로 봅니다. ${s} 때 사진형인지, 투명한지, 평면 그래픽인지, 글자가 많은지, 오래된 환경에서 쓰는지를 확인합니다. 그 사실에 따라 JPEG·PNG·WebP를 시험하고 밝고 어두운 배경에서 알파 가장자리를 검수하며 ${f} 목적을 손상하는 변환은 선택하지 않습니다.`,
    `${d}는 ‘${h}’을 실제 표시 영역과 연결합니다. ${s} 과정에서 원본 크기와 CSS 표시 크기를 비교하고 반응형 파생 이미지를 준비하며 레이아웃 이동을 막기 위해 가로와 세로를 예약합니다. ${d}는 큰 원본이 자동으로 ${f} 성능을 높인다고 가정하지 않고 실제 전달 파일을 측정합니다.`,
    `${d}는 수신자의 제한에서 ‘${h}’을 결정합니다. ${s} 때 첨부 개수를 세고 문서 글자의 판독성을 보호하며 품질을 지나치게 낮추기 전에 긴 변 제한을 정합니다. 최종 메일 용량을 확인하고 필요할 때 불필요한 메타데이터를 줄이며 민감한 원본은 꼭 필요한 경우가 아니면 메일 흐름에서 제외합니다.`,
    `${d}는 ‘${h}’을 같은 캔버스만 만드는 일로 오해하지 않습니다. ${s} 때 상품의 상대 크기, 여백, 배경, 초점 위치를 맞추고 투명 가장자리와 작은 원본 확대를 확인합니다. 공통 프레임은 전체 설정으로 적용하되 형태 때문에 작아 보이거나 잘리는 상품은 개별 설정으로 조정합니다.`,
    `${d}는 얼굴 안전을 중심으로 ‘${h}’을 처리합니다. ${s} 과정에서 머리 위 여백, 눈높이, 어깨, 원형 마스크 영역을 보호한 뒤 정사각형을 정합니다. 직원 사진을 같은 표시 크기로 비교하고 과한 확대를 피하며 조명과 구도 문제를 ${f}에 필요한 픽셀 크기와 구분합니다.`,
    `${d}는 ‘${h}’을 원본 한 장과 여러 파생본의 계획으로 바꿉니다. ${s} 때 안전 여백이 있는 원본에서 정사각형, 세로형, 가로형, 스토리형을 각각 만들고 손실 결과를 다시 저장해 다음 결과를 만들지 않습니다. 최신 공식 도움말을 확인하고 재압축을 예상하며 글자와 얼굴을 불확실한 가장자리에서 떼어 둡니다.`,
    `${d}는 물리 계산으로 ‘${h}’을 해결합니다. ${s} 때 픽셀을 목표 PPI로 나누고 인치와 센티미터를 변환하며 이미지 밀도와 프린터 DPI 용어를 구분합니다. 메타데이터 숫자를 바꾼다고 디테일이 생긴다고 말하지 않고 ${f}에 픽셀이 부족하면 인쇄 크기나 관람 거리를 조정합니다.`,
    `${d}는 해석된 픽셀 메모리 비용으로 ‘${h}’을 봅니다. ${s} 과정에서 압축된 휴대전화 파일이 훨씬 큰 픽셀 버퍼로 펼쳐진다는 점을 고려해 동시 처리 개수를 제한하고 지원되는 HEIC만 로컬에서 변환합니다. 모바일 다운로드 위치를 확인하고 원본을 보관하며 기기가 ${f} 작업을 버티지 못하면 묶음을 줄입니다.`,
    `${d}는 알파 경계에서 ‘${h}’을 확인합니다. ${s} 때 흰 테두리처럼 보이는 번짐, 부드러운 가장자리, 투명 여백, 최종 배경을 함께 검수합니다. 무손실 경계가 중요하면 PNG를 유지하고 용량이 중요하면 투명 WebP를 시험하며 배경색을 정하기 전에 JPEG로 바꾸지 않습니다.`,
    `${d}는 ‘${h}’을 데이터 이동 경로의 문제로 다룹니다. ${s} 과정에서 선택한 바이트가 브라우저 안에서 해석되고 재인코딩되는지, 파일명과 픽셀이 처리 API로 가지 않는지, localStorage에는 설정만 들어가는지 확인합니다. 브라우저 확장 프로그램, 기기 보안, 다운로드, 메타데이터 손실, 민감 작업 후 페이지 종료도 함께 고려합니다.`
  ];
  const ja=[
    `${d}では「${h}」を装飾ではなく利用先の仕様として扱います。${f}では要求値を記録し、${s}場合へ当てはめ、原本を別の派生画像のために保持します。保存した出力を開き、実寸法、バイト数、切り抜き、余白、メタデータ、色の変化を記録して完了です。`,
    `${d}は幾何関係から始まります。${s}場合、「${h}」は原本比率、出力比率、保護する被写体領域を比較して決めます。自動設定で損失を隠さず、消えるピクセル、加わる空間、拡大が新しい細部なしで格子だけを増やす可能性を示します。`,
    `${d}は「${h}」を容量予算として分析します。${s}過程で品質変更を${f}の目的へ結び付け、実際の表示サイズで確認します。目標以下の最高許容品質を探し、必要時だけ解像度を段階的に下げ、過度な損失なしでは不可能な場合も記録します。`,
    `${d}における「${h}」は共通設定と個別例外を分ける問題です。${s}とき、寸法、形式、接尾辞、容量は一括設定にし、向き、位置、透明度、安全な切り抜きは個別設定にします。先に2枚を試し、名前衝突を防ぎ、確認済み出力だけをZIPへ入れます。`,
    `${d}は「${h}」を一つの数値ではなく見える証拠で判断します。${s}過程で100%表示、実寸表示、髪、文字、階調、輪郭を比較します。損失保存の反復と不要な拡大を避け、${f}を損なう品質まで下げる前にピクセル寸法を調整します。`,
    `${d}は「${h}」を内容と形式の適合として考えます。${s}場合、写真、透明素材、平面図形、文字中心、古い環境のどれかを確認します。JPEG・PNG・WebPを事実に基づいて試し、明暗両方の背景でアルファ輪郭を確認し、${f}を壊す変換を選びません。`,
    `${d}は「${h}」を実際の表示枠へ結び付けます。${s}とき、原寸とCSS表示寸法を比較し、レスポンシブ派生画像を用意し、レイアウト移動防止のため幅と高さを確保します。大きな原本が自動的に${f}を改善すると考えず、配信ファイルを測ります。`,
    `${d}は受信者の制限から「${h}」を決めます。${s}場合、添付数を数え、文書文字の可読性を守り、品質を過度に下げる前に長辺上限を設定します。最終メール容量を確認し、不要なメタデータを減らし、必要のない機密原本をメールへ入れません。`,
    `${d}は「${h}」を同じキャンバスだけの問題と誤解しません。${s}とき、商品スケール、余白、背景、焦点を整え、透明輪郭と小原稿の拡大を確認します。共通枠は一括設定にし、形状により小さく見える、切れる、ずれる商品は個別調整します。`,
    `${d}は顔の安全を中心に「${h}」を処理します。${s}過程で頭上余白、目線、肩、円形マスク領域を守ってから正方形を決めます。同じ表示サイズで人物を比較し、過度な拡大を避け、照明と構図を${f}のピクセル要件と分けます。`,
    `${d}は「${h}」を1枚の原稿と複数派生版の計画へ変えます。${s}場合、安全余白のある原本から正方形、縦長、横長、ストーリー用を作り、損失出力から次を作りません。最新公式情報を確認し、再圧縮を想定し、文字と顔を不確実な端から離します。`,
    `${d}は物理計算で「${h}」を解決します。${s}とき、ピクセルをPPIで割り、インチとセンチを変換し、画像密度とプリンターDPIを区別します。メタデータ変更で細部が増えるとは言わず、${f}に不足する場合は印刷寸法や観覧距離を調整します。`,
    `${d}は展開後のメモリ費用から「${h}」を見ます。${s}過程で圧縮された携帯画像が大きなピクセルバッファになる点を考え、同時処理数を制限し、対応HEICだけをローカル変換します。保存先を確認し、原本を保持し、端末が${f}を維持できなければ枚数を減らします。`,
    `${d}はアルファ境界で「${h}」を確認します。${s}場合、白い縁、滑らかな輪郭、透明余白、最終背景を検証します。無損失輪郭が重要ならPNGを保ち、小容量が必要なら透明WebPを試し、背景色を決める前にJPEGへ変換しません。`,
    `${d}は「${h}」をデータ経路の問題として扱います。${s}過程で選択バイトがブラウザ内でデコード・再エンコードされるか、名前とピクセルが処理APIへ送られないか、localStorageに設定だけが入るか確認します。拡張機能、端末安全、保存、メタデータ損失、作業後の終了も考慮します。`
  ];
  const arr=locale==='en'?en:locale==='es'?es:locale==='ko'?ko:ja;
  const base=arr[i];
  if(n===0)return base;
  const variant=(i+n)%4;
  const extraByLocale={
    en:[
      `Before processing ${s}, make one baseline export with conservative settings. Record its actual width, height, format, and byte size, then change only the variable that blocks ${f}. This prevents a quality change from being confused with a crop, format conversion, or resolution change. Keep the baseline and the best candidate open side by side at the intended display size, not only in a heavily zoomed preview.`,
      `When several settings could work for ${s}, rank them by what must be protected: complete subject visibility, readable text, transparent edges, a strict byte ceiling, or exact frame coverage. Choose the setting that protects the highest-priority requirement for ${f}, then verify the compromise on the downloaded file. A smaller file is not an improvement when the important content is clipped, distorted, or no longer readable.`,
      `Use the downloaded result—not only the editor preview—to finish ${s}. Confirm that the file opens in another viewer, has the expected extension and dimensions, stays below any upload limit, and preserves the intended crop or padding. If ${f} will be used on a website, email service, print workflow, or social platform, perform one test upload because that destination may recompress or crop the image again.`,
      `Decide the failure signs before starting ${s}. Stop and revise the settings when faces or text become unclear, the subject leaves the safe area, transparency gains a halo, the destination rejects the format, or the file still exceeds its limit. Change one factor at a time—first fit, then dimensions, then format, then quality—so you can identify which adjustment actually improves ${f}.`
    ],
    es:[
      `Antes de ${s}, crea una exportación de referencia con ajustes prudentes. Anota su ancho, alto, formato y peso reales, y modifica únicamente la variable que impide cumplir ${f}. Así no confundirás un cambio de calidad con un recorte, una conversión de formato o una reducción de resolución. Compara la referencia y la mejor alternativa lado a lado al tamaño de uso previsto, no solo con un zoom exagerado.`,
      `Si varias configuraciones sirven para ${s}, ordénalas según lo que deba protegerse: sujeto completo, texto legible, bordes transparentes, límite estricto de bytes o marco totalmente cubierto. Elige la opción que preserve la prioridad principal de ${f} y comprueba el compromiso en el archivo descargado. Un archivo menor no es mejor si corta, deforma o vuelve ilegible el contenido importante.`,
      `Termina ${s} usando el archivo descargado y no únicamente la vista previa. Comprueba que se abre en otro visor, que la extensión y las dimensiones son correctas, que respeta el límite de carga y que mantiene el recorte o relleno previsto. Si ${f} se utilizará en una web, correo, impresión o red social, realiza una carga de prueba porque el destino puede volver a comprimir o recortar.`,
      `Define antes las señales de fallo para ${s}. Revisa los ajustes si el rostro o el texto pierden claridad, el sujeto sale de la zona segura, la transparencia crea un halo, el destino rechaza el formato o el archivo supera el límite. Cambia un factor cada vez—encuadre, dimensiones, formato y calidad—para saber qué modificación mejora realmente ${f}.`
    ],
    ko:[
      `${s}을 시작하기 전에 무난한 설정으로 기준 결과물 한 장을 먼저 만드세요. 실제 가로, 세로, 형식, 파일 용량을 적어 둔 뒤 ${f} 목적을 충족하지 못하게 하는 항목만 하나씩 바꾸는 것이 좋습니다. 이렇게 하면 품질 변화와 크롭, 형식 변환, 해상도 감소의 영향을 섞어서 판단하지 않게 됩니다. 기준 결과와 최종 후보는 과도하게 확대된 화면이 아니라 실제 사용 크기에서 나란히 비교하세요.`,
      `${s}에 여러 설정을 적용할 수 있다면 보호해야 할 항목의 우선순위를 정하세요. 피사체 전체 표시, 작은 글자 판독, 투명 가장자리, 엄격한 용량 제한, 프레임 가득 채우기 가운데 ${f}에서 가장 중요한 조건을 먼저 지켜야 합니다. 다운로드 파일에서 손실 범위를 확인하고, 중요한 부분이 잘리거나 왜곡되거나 읽기 어려워졌다면 파일이 작아졌더라도 좋은 결과로 보지 않는 것이 안전합니다.`,
      `${s}은 편집기 미리보기만 보지 말고 다운로드 파일을 기준으로 마무리하세요. 다른 이미지 뷰어에서 열리는지, 확장자와 픽셀 크기가 맞는지, 업로드 용량 제한 이하인지, 의도한 크롭과 여백이 유지되는지 확인해야 합니다. ${f} 결과를 웹사이트, 이메일, 인쇄 서비스, 소셜미디어에 사용할 예정이라면 한 장을 실제로 올려 보세요. 사용처가 이미지를 다시 압축하거나 자를 수 있습니다.`,
      `${s}을 처리하기 전에 실패 기준을 정해 두세요. 얼굴이나 글자가 흐려지고, 피사체가 안전 영역을 벗어나고, 투명 경계에 테두리가 생기고, 사용처가 형식을 거부하거나 용량 제한을 넘으면 설정을 다시 조정해야 합니다. 맞춤 방식, 픽셀 크기, 파일 형식, 품질 순서로 한 번에 한 항목만 바꾸면 어떤 변화가 ${f} 결과를 실제로 개선했는지 구분하기 쉽습니다.`
    ],
    ja:[
      `${s}前に、無理のない設定で基準となる出力を1枚作ります。実際の幅、高さ、形式、容量を記録し、${f}を満たさない原因だけを一つずつ変更してください。これにより、品質変更と切り抜き、形式変換、解像度低下の影響を混同せずに済みます。基準画像と最終候補は、極端な拡大表示ではなく実際の利用サイズで並べて比較します。`,
      `${s}に複数の設定が使える場合は、守る項目へ優先順位を付けます。被写体全体、文字の可読性、透明な輪郭、厳しい容量上限、枠を完全に埋めることのうち、${f}で最重要の条件を先に守ります。保存ファイルで妥協点を確認し、重要部分が切れる、歪む、読めなくなる場合は、容量が小さくても良い結果とは判断しません。`,
      `${s}は編集画面のプレビューだけでなく、保存したファイルで完了を判断します。別のビューアーで開けるか、拡張子と寸法が正しいか、アップロード上限以下か、意図した切り抜きや余白が保たれているかを確認してください。${f}をWeb、メール、印刷、SNSで使う場合は、利用先が再圧縮や再切り抜きを行う可能性があるため1枚を試します。`,
      `${s}を始める前に失敗条件を決めます。顔や文字が不鮮明、被写体が安全領域外、透明輪郭に縁が出る、利用先が形式を拒否、容量上限を超える場合は設定を見直します。表示方法、寸法、形式、品質の順に一度に一項目だけ変更すると、どの調整が${f}を改善したか判断しやすくなります。`
    ]
  };
  return extraByLocale[locale][variant];
}

function sectionApplication(locale,index,f,s){
  const applications={
    en:[
      `For ${s}, place the destination width, height, format, and byte ceiling beside the editor so ${f} can be checked without relying on memory.`,
      `During ${s}, compare the original pixel count with the exported pixel count and treat file size as a separate measurement for ${f}.`,
      `Before committing to ${s}, mark the subject area that cannot be cropped and use it to choose contain, cover, or stretch for ${f}.`,
      `Repeat the ratio calculation with the exact numbers required by ${s}; rounding should happen only after the proportional dimension for ${f} is calculated.`,
      `For ${s}, export two candidates when the format choice is unclear and compare transparency, fine detail, and byte size before selecting the ${f} result.`,
      `Use the suggested values as a starting point for ${s}, then adjust only after viewing the ${f} output at its intended size.`,
      `When ${s} involves a batch, process one representative image first and copy the verified ${f} settings only after the download opens correctly.`,
      `Review ${s} at 100 percent and at the real destination size so the ${f} decision reflects both pixel defects and normal viewing conditions.`,
      `If ${s} fails, return to the original and change one setting at a time; this makes the cause of any ${f} improvement visible.`,
      `Keep the source used for ${s} because browser encoding, metadata removal, and format support can change the final ${f} file between environments.`
    ],
    ko:[
      `${s} 작업에서는 최종 가로, 세로, 형식, 용량 상한을 편집 화면 옆에 적어 두고 ${f} 결과를 기억에 의존하지 않고 확인하세요.`,
      `${s}을 처리할 때 원본과 출력의 전체 픽셀 수를 비교하고, 파일 용량은 ${f}의 별도 측정값으로 판단해야 합니다.`,
      `${s} 전에 절대 잘리면 안 되는 피사체 영역을 표시하고 그 범위를 기준으로 ${f}의 전체 표시, 영역 채우기, 강제 맞춤을 선택하세요.`,
      `${s}에 필요한 실제 숫자로 비율 계산을 다시 하고, ${f}의 비례 크기를 구한 뒤 마지막 단계에서만 반올림하세요.`,
      `${s}에서 형식 선택이 애매하면 결과 두 개를 내려받아 투명도, 작은 디테일, 용량을 비교한 뒤 ${f}에 맞는 파일을 고르세요.`,
      `권장값은 ${s}의 시작점으로만 사용하고, 실제 사용 크기에서 ${f} 결과를 본 뒤 필요한 항목만 조절하세요.`,
      `${s}이 여러 장 작업이라면 대표 이미지 한 장을 먼저 처리하고 다운로드가 정상적으로 열릴 때만 검증된 ${f} 설정을 나머지에 적용하세요.`,
      `${s} 결과는 100% 보기와 실제 사용 크기에서 모두 확인해야 픽셀 결함과 일반적인 시청 조건을 함께 반영한 ${f} 판단이 가능합니다.`,
      `${s} 결과가 실패하면 원본으로 돌아가 한 번에 한 설정만 바꾸세요. 그래야 어떤 변화가 ${f} 결과를 개선했는지 알 수 있습니다.`,
      `브라우저 인코딩, 메타데이터 제거, 형식 지원은 환경에 따라 달라질 수 있으므로 ${s}에 사용한 원본을 보관해 ${f} 파일을 다시 만들 수 있게 하세요.`
    ],
    ja:[
      `${s}では、最終の幅、高さ、形式、容量上限を編集画面の近くに記録し、記憶に頼らず${f}の出力を確認します。`,
      `${s}の際は原本と出力の総ピクセル数を比較し、ファイル容量は${f}の別の測定値として判断します。`,
      `${s}前に切れてはいけない被写体領域を決め、その範囲を基準に${f}の全体表示、枠を埋める方法、強制変形を選びます。`,
      `${s}で必要な実数値を使って比率を計算し、${f}の比例寸法を求めた後の最後だけ丸めます。`,
      `${s}で形式選択に迷う場合は2種類を保存し、透明度、細部、容量を比較して${f}に合う方を選びます。`,
      `推奨値は${s}の開始点として使い、実際の利用サイズで${f}を確認してから必要な項目だけ調整します。`,
      `${s}が複数画像なら代表1枚を先に処理し、保存ファイルが正常に開くことを確認してから${f}設定を残りへ適用します。`,
      `${s}は100%表示と実際の利用サイズの両方で確認し、ピクセル欠陥と通常の見え方を含めて${f}を判断します。`,
      `${s}が失敗したら原本へ戻り、一度に一設定だけ変更すると、どの変更が${f}を改善したか分かります。`,
      `ブラウザのエンコード、メタデータ削除、形式対応は環境で変わるため、${s}に使った原本を保管して${f}を再作成できるようにします。`
    ],
    es:[
      `Para ${s}, coloca junto al editor el ancho, alto, formato y límite de bytes del destino para comprobar ${f} sin depender de la memoria.`,
      `Durante ${s}, compara el número total de píxeles del origen y la salida, y trata el peso del archivo como una medida independiente de ${f}.`,
      `Antes de ${s}, marca la zona del sujeto que no puede recortarse y úsala para elegir contener, cubrir o estirar en ${f}.`,
      `Repite el cálculo de proporción con los valores exactos de ${s} y redondea solo después de obtener la dimensión proporcional para ${f}.`,
      `Si el formato no está claro en ${s}, exporta dos opciones y compara transparencia, detalle fino y peso antes de elegir el resultado de ${f}.`,
      `Usa los valores sugeridos como inicio para ${s} y ajusta únicamente después de ver ${f} al tamaño real de uso.`,
      `Si ${s} incluye un lote, procesa primero una imagen representativa y aplica los ajustes comprobados de ${f} cuando la descarga se abra correctamente.`,
      `Revisa ${s} al cien por cien y al tamaño del destino para que la decisión sobre ${f} considere tanto defectos de píxel como la visualización normal.`,
      `Si ${s} falla, vuelve al original y cambia un ajuste cada vez; así podrás identificar qué modificación mejora realmente ${f}.`,
      `Conserva el origen de ${s}, porque la codificación, la eliminación de metadatos y el soporte de formatos pueden cambiar el archivo final de ${f} entre entornos.`
    ]
  };
  return applications[locale][index];
}

function wordCount(text){ return text.trim().split(/\s+/u).filter(Boolean).length; }
function charCount(text){ return text.replace(/\s/gu,'').length; }
function slugify(s){ return s.replace(/[^a-z0-9-]/g,''); }

const db = {};
const stats=[];
for(const locale of locales){
  db[locale]={};
  fs.mkdirSync(path.join(imgDir,locale),{recursive:true});
  topics.forEach((topic,i)=>{
    const slug=topic[0], title=topic[titles[locale]], focus=focusByLocale[locale][i], scen=topic[scenario[locale]];
    const L=lex[locale];
    const descriptor=descriptorByLocale[locale][i];
    const intro=L.intro(focus,scen);
    const sections=[];
    const indices=L.heads.map((_,index)=>index);
    // Rotate complete heading-and-content pairs so every heading remains matched to its explanation.
    const shift=i%indices.length;
    const rotatedIndices=indices.slice(shift).concat(indices.slice(0,shift));
    rotatedIndices.forEach((contentIndex,j)=>{
      const heading=L.heads[contentIndex];
      const paragraphs = [L.para(heading, focus, scen, i, contentIndex), sectionApplication(locale,contentIndex,focus,scen)];
      const sec={id:`section-${j+1}`,heading,paragraphs};
      if(j===2){
        const rowsByLocale={
          en:[
            ['Dimensions','Preserve the source ratio first','Confirm final width and height'],
            ['Fit method','Contain for a complete subject','Inspect crop or padding'],
            ['Format','JPEG for photos; PNG for transparency; WebP for compact output','Open the downloaded file'],
            ['File-size target','Use the highest acceptable quality below the limit','Allow a small tolerance']
          ],
          ko:[
            ['픽셀 크기','원본 비율을 먼저 유지','최종 가로와 세로 확인'],
            ['맞춤 방식','피사체 전체가 필요하면 전체 표시','잘린 부분과 여백 확인'],
            ['파일 형식','사진은 JPEG, 투명 이미지는 PNG, 작은 용량은 WebP부터 비교','다운로드 파일 직접 열기'],
            ['목표 용량','제한 이하에서 가능한 높은 품질 사용','소폭의 용량 오차 허용']
          ],
          ja:[
            ['ピクセル寸法','最初に元の縦横比を維持','保存後の幅と高さを確認'],
            ['表示方法','全体を残すなら全体表示','切り抜きと余白を確認'],
            ['形式','写真はJPEG、透明画像はPNG、小容量はWebPから比較','保存ファイルを開く'],
            ['目標容量','上限以下で可能な最高品質を使用','小さな容量差を許容']
          ],
          es:[
            ['Dimensiones','Conservar primero la proporción original','Confirmar ancho y alto finales'],
            ['Encuadre','Contener cuando debe verse todo','Revisar recorte o relleno'],
            ['Formato','JPEG para fotos, PNG para transparencia y WebP para menor peso','Abrir el archivo descargado'],
            ['Peso objetivo','Usar la mayor calidad aceptable bajo el límite','Permitir una tolerancia pequeña']
          ]
        };
        sec.table={headers:L.table,rows:rowsByLocale[locale]};
      }
      if(j===7) sec.list=L.checklist;
      sections.push(sec);
    });
    const topicNote = uniqueParagraph(locale,i,descriptor,L.heads[i%L.heads.length],focus,scen,0);
    const noteHeading = locale==='en'?'Practical recommendation for this task':locale==='ko'?'이 작업에 맞는 실전 권장사항':locale==='ja'?'この作業に合う実践的な推奨事項':'Recomendación práctica para esta tarea';
    sections.push({id:'practical-recommendation',heading:noteHeading,paragraphs:[topicNote, uniqueParagraph(locale,i,descriptor,L.heads[(i+3)%L.heads.length],focus,scen,1), uniqueParagraph(locale,i,descriptor,L.heads[(i+6)%L.heads.length],focus,scen,2), uniqueParagraph(locale,i,descriptor,L.heads[(i+8)%L.heads.length],focus,scen,3)]});
    const faqs=L.faq(focus,scen).map(([question,answer])=>({question,answer}));
    const related=[topics[(i+1)%15][0],topics[(i+5)%15][0],topics[(i+10)%15][0]];
    const body=[...intro,...sections.flatMap(s=>[s.heading,...s.paragraphs,...(s.list||[]),...(s.table?.rows.flat()||[])]),...L.checklist,...faqs.flatMap(f=>[f.question,f.answer])].join(' ');
    const guide={
      slug,locale,title,description:L.desc(title,focus),keywords:[focus, ...focusByLocale[locale].filter((_,index)=>index!==i).slice(0,2)],intro,sections,checklist:L.checklist,faqs,related,
      svg:`/guide-images/${locale}/${slug}.svg`,lastReviewed:'2026-06-30',
      reviewStandard:locale==='en'?'Recommendations are checked against current browser behavior and the image formats described on this page. Verify the downloaded file for your own destination.':locale==='ko'?'현재 브라우저 동작과 이 페이지에서 설명한 이미지 형식을 기준으로 내용을 확인했습니다. 실제 사용처에 올리기 전 다운로드 파일을 직접 열어 크기, 용량, 잘린 영역과 화질을 검수하세요.':locale==='ja'?'現在のブラウザ動作と本ページで説明する画像形式を基準に確認しています。利用先へ送る前に保存ファイルを確認してください。':'Las recomendaciones se revisan según el comportamiento actual del navegador y los formatos descritos. Comprueba el archivo descargado antes de usarlo.',
      sources: slug==='social-media-workflow' ? [
        {label:'Instagram Help Center',url:'https://help.instagram.com/1631821640426723'},
        {label:'LinkedIn Help',url:'https://www.linkedin.com/help/linkedin/answer/a564226'},
        {label:'X Help Center',url:'https://help.x.com/en/managing-your-account/common-issues-when-uploading-profile-photo'}
      ]:[],
      wordCount:wordCount(body),characterCountNoSpaces:charCount(body)
    };
    db[locale][slug]=guide;
    stats.push({locale,slug,wordCount:guide.wordCount,characterCountNoSpaces:guide.characterCountNoSpaces});
    const hue=(i*29 + locales.indexOf(locale)*67)%360;
    const svg=`<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="675" viewBox="0 0 1200 675" role="img" aria-labelledby="t d"><title id="t">${title.replaceAll('&','&amp;')}</title><desc id="d">${locale==='en'?'A source image and a resized output frame':locale==='ko'?'원본 이미지와 크기를 조절한 결과 프레임':locale==='ja'?'元画像とサイズ変更後の出力枠':'Una imagen original y un marco de salida redimensionado'}</desc><rect width="1200" height="675" fill="#f7f8fb"/><rect x="70" y="88" width="430" height="360" rx="28" fill="#fff" stroke="hsl(${hue} 58% 42%)" stroke-width="8"/><rect x="700" y="138" width="420" height="270" rx="28" fill="#fff" stroke="#172033" stroke-width="8"/><path d="M520 268h145m-35-35 35 35-35 35" fill="none" stroke="hsl(${hue} 58% 42%)" stroke-width="14" stroke-linecap="round" stroke-linejoin="round"/><circle cx="220" cy="210" r="58" fill="hsl(${hue} 70% 82%)"/><path d="M105 410l120-125 92 88 85-108 63 145" fill="none" stroke="#172033" stroke-width="18" stroke-linejoin="round"/><text x="70" y="520" font-family="system-ui,sans-serif" font-size="32" fill="#172033">${locale==='en'?'IMAGE GUIDE':locale==='ko'?'이미지 가이드':locale==='ja'?'画像ガイド':'GUÍA DE IMAGEN'} ${String(i+1).padStart(2,'0')}</text><text x="70" y="575" font-family="system-ui,sans-serif" font-size="42" font-weight="700" fill="#172033">${focus.replaceAll('&','&amp;')}</text><text x="70" y="625" font-family="system-ui,sans-serif" font-size="25" fill="#4c5870">${serviceByLocale[locale]} · ${locale==='en'?'processed in your browser':locale==='ko'?'브라우저에서 처리':locale==='ja'?'ブラウザ内で処理':'procesado en tu navegador'}</text></svg>`;
    fs.writeFileSync(path.join(imgDir,locale,`${slugify(slug)}.svg`),svg);
  });
}
fs.writeFileSync(path.join(outDir,'guides.generated.json'),JSON.stringify(db,null,2));
fs.writeFileSync(path.join(outDir,'guide-stats.json'),JSON.stringify(stats,null,2));
console.log(`Generated ${stats.length} localized guides.`);
console.log(stats.reduce((a,x)=>{a[x.locale]=a[x.locale]||{minWords:Infinity,minChars:Infinity};a[x.locale].minWords=Math.min(a[x.locale].minWords,x.wordCount);a[x.locale].minChars=Math.min(a[x.locale].minChars,x.characterCountNoSpaces);return a;},{}));

// Generate static discovery files from the same route inventory used by the quality checks.
const siteUrl=(process.env.NEXT_PUBLIC_SITE_URL||'https://example.com').replace(/\/$/,'');
const fixed=['','resizer','guides','resources','how-it-works','faq','about','contact','privacy','terms','cookies','accessibility','editorial-policy','compression-methodology'];
const tools=['dimensions-calculator','aspect-ratio-calculator','file-size-estimator','print-size-calculator','social-media-sizes'];
const routeKeys=[...fixed,...topics.map(t=>`guides/${t[0]}`),...tools.map(t=>`resources/${t}`)];
const urls=locales.flatMap(locale=>routeKeys.map(key=>`/${locale}/${key?`${key}/`:''}`));
const esc=s=>s.replaceAll('&','&amp;').replaceAll('<','&lt;').replaceAll('>','&gt;').replaceAll('"','&quot;').replaceAll("'",'&apos;');
const sitemapEntries=urls.map(u=>{
  const match=u.match(/^\/(en|ko|ja|es)\/(.*)$/);let alts='';
  if(match){const key=match[2];alts=locales.map(l=>`    <xhtml:link rel="alternate" hreflang="${l}" href="${esc(`${siteUrl}/${l}/${key}`)}"/>`).join('\n')+`\n    <xhtml:link rel="alternate" hreflang="x-default" href="${esc(`${siteUrl}/en/${key}`)}"/>`;}
  return `  <url>\n    <loc>${esc(siteUrl+u)}</loc>\n    <lastmod>2026-06-30</lastmod>${alts?`\n${alts}`:''}\n  </url>`;
}).join('\n');
fs.writeFileSync(path.join(root,'public/sitemap.xml'),`<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">\n${sitemapEntries}\n</urlset>\n`);
fs.writeFileSync(path.join(root,'public/sitemap.txt'),urls.map(u=>siteUrl+u).join('\n')+'\n');
fs.writeFileSync(path.join(root,'public/robots.txt'),`User-agent: *\nAllow: /\n\nSitemap: ${siteUrl}/sitemap.xml\n`);
const english=Object.values(db.en).sort((a,b)=>a.title.localeCompare(b.title));
const rssItems=english.map(g=>`<item><title>${esc(g.title)}</title><link>${esc(`${siteUrl}/en/guides/${g.slug}/`)}</link><guid>${esc(`${siteUrl}/en/guides/${g.slug}/`)}</guid><description>${esc(g.description)}</description><pubDate>Tue, 30 Jun 2026 00:00:00 GMT</pubDate></item>`).join('');
fs.writeFileSync(path.join(root,'public/feed.xml'),`<?xml version="1.0" encoding="UTF-8"?><rss version="2.0"><channel><title>Image Resizer Guides</title><link>${esc(siteUrl+'/en/guides/')}</link><description>Image resizing and compression guides</description>${rssItems}</channel></rss>`);
const atomEntries=english.map(g=>`<entry><title>${esc(g.title)}</title><id>${esc(`${siteUrl}/en/guides/${g.slug}/`)}</id><link href="${esc(`${siteUrl}/en/guides/${g.slug}/`)}"/><updated>2026-06-30T00:00:00Z</updated><summary>${esc(g.description)}</summary></entry>`).join('');
fs.writeFileSync(path.join(root,'public/atom.xml'),`<?xml version="1.0" encoding="UTF-8"?><feed xmlns="http://www.w3.org/2005/Atom"><title>Image Resizer Guides</title><id>${esc(siteUrl+'/')}</id><updated>2026-06-30T00:00:00Z</updated><link href="${esc(siteUrl+'/atom.xml')}" rel="self"/>${atomEntries}</feed>`);
fs.writeFileSync(path.join(outDir,'route-inventory.json'),JSON.stringify({siteUrl,urls},null,2));
console.log(`Generated ${urls.length} sitemap URLs.`);
