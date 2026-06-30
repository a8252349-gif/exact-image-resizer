import type { Locale } from '@/config/site';

export const uiCopy = {
  en: {
    skip: 'Skip to main content',
    primaryNav: 'Primary navigation',
    footerNav: 'Footer navigation',
    chooseLanguage: 'Choose language',
    footerDescription: 'Resize, compress, and convert images directly in your browser.',
    copyright: 'Images are processed locally in your browser.',
    ad: 'Advertisement',
    home: {
      eyebrow: 'Private · precise · browser based',
      primary: 'Resize Images', secondary: 'How it works',
      trust: ['No server upload', 'Up to 20 images', 'JPEG · PNG · WebP'],
      quickTitle: 'Start with the full image resizer',
      quickBody: 'Set exact pixels, aim for a target file size, process batches, and download individual files or a ZIP from one editor.',
      quickButton: 'Open the tool', resourcesEyebrow: 'Resources', resourcesTitle: 'Calculate before you export', resourcesAll: 'All resources', calculatorOpen: 'Open calculator',
      guidesEyebrow: 'In-depth guides', guidesTitle: 'Practical help for specific image tasks', guidesAll: 'All 15 guides',
      faqTitle: 'Common questions',
      faqs: [
        ['Are images uploaded to a server?', 'No. Selected images are decoded and re-encoded in your browser. The image data is not stored in browser preference storage.'],
        ['Can every image be made exactly 100 KB?', 'The tool searches for the highest practical quality below the target. Exact byte equality is not guaranteed, and PNG may require smaller dimensions or conversion.'],
        ['Does resizing preserve metadata?', 'Canvas re-encoding normally removes EXIF data such as GPS, capture time, camera details, and some color-profile information.']
      ]
    },
    guides: {
      indexTitle: 'Image resizing guides', indexMetaTitle: '15 In-Depth Image Resizing Guides',
      indexDescription: 'Detailed guidance for exact dimensions, target file sizes, formats, batch processing, privacy, websites, print, and social images.',
      indexEyebrow: '15 guides · regularly reviewed', indexIntro: 'Each guide addresses a distinct task with calculations, tables, checklists, limitations, FAQs, and related tools.',
      home: 'Home', guides: 'Guides', lastReviewed: 'Last reviewed', wordUnit: 'words', toc: 'On this page',
      ctaTitle: 'Apply these settings to your own images', ctaBody: 'The editor processes your files locally in the browser.', ctaButton: 'Open Image Resizer',
      checklist: 'Final checklist', faq: 'Frequently asked questions', sources: 'Sources and verification', review: 'How this guide was checked', related: 'Related guides', diagramAlt: 'Illustration for'
    },
    resources: {
      metaTitle: 'Image Size Calculators and Reference Tools', metaDescription: 'Calculate dimensions, aspect ratios, estimated file sizes, print sizes, and review current social image specifications.',
      eyebrow: '5 practical tools', title: 'Image sizing resources', intro: 'Plan dimensions, ratios, estimated bytes, and print output before processing a file. Estimates are clearly labeled, and platform specifications include a verification date.',
      cardBody: 'Interactive browser calculator with explanations, examples, and related guide links.', open: 'Open tool',
      lastReviewed: 'Last reviewed', relatedTitle: 'Related image-resizing guides', editorTitle: 'Ready to process an image?', editorBody: 'Use the full editor to apply the calculated values to your own files.', editorButton: 'Open Image Resizer'
    },
    resizer: {
      eyebrow: 'No upload · browser processing · batch ZIP',
      sections: [
        ['How to resize to exact pixel dimensions', ['Choose the exact-dimensions mode, enter the required width and height, and decide how a different source ratio should fit. Contain keeps the whole image and adds padding. Cover fills the frame and crops overflow. Stretch forces both measurements and can distort shapes.', 'Width-only, height-only, percentage, longest-edge, maximum-width, maximum-height, and megapixel modes preserve the original ratio. Enlargement is disabled by default because adding pixels does not create new detail.']],
        ['How target file-size compression works', ['For JPEG and WebP, the tool tests the selected quality and searches for the highest result below the target. If the file remains too large and automatic resolution reduction is enabled, it lowers the dimensions gradually and tries again.', 'PNG uses lossless browser encoding. A complex transparent PNG may need smaller dimensions or conversion to WebP or JPEG. Results vary with image detail and file structure, so an exact byte count cannot be guaranteed.']],
        ['Choose JPEG, PNG, or WebP', ['JPEG is usually best for photographs and small target sizes. PNG is useful for logos, screenshots, and transparency. WebP can provide compact photographic files and also supports transparency in modern browsers.']],
        ['Metadata, privacy, and color', ['The selected image stays in the browser during editing. Re-encoding normally removes EXIF data such as GPS, capture time, camera model, and editing-software information. Some color-profile information may be normalized by the browser.']],
        ['Batch-processing tips', ['Test one or two files before processing a large batch.', 'Use shared settings for consistency and individual settings for exceptions.', 'Keep the originals and open at least one downloaded result outside the browser.', 'Use smaller batches on older phones to reduce memory pressure.', 'Choose a clear filename suffix before creating a ZIP.']],
        ['Tool limitations', ['HEIC support varies by browser, operating system, and file variant. Animated GIF files are processed as a still first frame. Browser encoders can produce slightly different sizes and colors, so always check the downloaded result before important use.']],
        ['Resizer FAQ', ['Why can an image miss the requested KB target?', 'The image may contain too much detail for the selected dimensions and minimum quality. Allow gradual resolution reduction or use JPEG or WebP.', 'Why is a small original not enlarged?', 'Enlargement is disabled by default because it can make softness and pixelation more visible.', 'Are my settings saved?', 'Recent dimensions, format, quality, target value, suffix, language, and consent choices may be stored. The image itself is not stored.']]
      ],
      tableHeaders: ['Format', 'Best for', 'Transparency', 'Target-size behavior'],
      tableRows: [['JPEG', 'Photographs', 'No', 'Flexible quality control'], ['PNG', 'Logos, screenshots, flat graphics', 'Yes', 'Lossless and often larger'], ['WebP', 'Photos and transparent web assets', 'Yes', 'Efficient lossy compression']]
    }
  },
  ko: {
    skip: '본문으로 바로가기', primaryNav: '주요 메뉴', footerNav: '하단 메뉴', chooseLanguage: '언어 선택',
    footerDescription: '이미지 크기 변경, 압축, 형식 변환을 브라우저에서 처리합니다.', copyright: '이미지는 브라우저 안에서 처리됩니다.', ad: '광고',
    home: {
      eyebrow: '서버 업로드 없음 · 정확한 설정 · 브라우저 처리', primary: '이미지 크기 변경', secondary: '작동 방식',
      trust: ['서버 업로드 없음', '최대 20장', 'JPEG · PNG · WebP'],
      quickTitle: '이미지 크기 조절 도구로 바로 시작하세요', quickBody: '정확한 픽셀, 목표 용량, 일괄 처리, 개별 다운로드와 ZIP 다운로드를 하나의 편집기에서 이용할 수 있습니다.', quickButton: '도구 열기',
      resourcesEyebrow: '계산 도구', resourcesTitle: '이미지를 처리하기 전에 먼저 계산해 보세요', resourcesAll: '모든 계산 도구', calculatorOpen: '계산기 열기',
      guidesEyebrow: '심층 가이드', guidesTitle: '상황별 이미지 크기 변경 방법', guidesAll: '가이드 15개 전체 보기',
      faqTitle: '자주 묻는 질문', faqs: [
        ['이미지가 서버로 업로드되나요?', '아니요. 선택한 이미지는 브라우저에서 해석하고 다시 저장합니다. 실제 이미지 데이터는 브라우저의 설정 저장소에 보관하지 않습니다.'],
        ['모든 이미지를 정확히 100KB로 만들 수 있나요?', '도구는 목표 이하에서 가능한 높은 품질을 찾습니다. 정확히 같은 바이트를 보장하지 않으며, PNG는 해상도 축소나 형식 변환이 필요할 수 있습니다.'],
        ['리사이즈하면 메타데이터가 유지되나요?', 'Canvas로 다시 저장하면 GPS, 촬영 시간, 카메라 정보와 일부 색상 프로필 같은 EXIF 정보가 일반적으로 제거됩니다.']
      ]
    },
    guides: {
      indexTitle: '이미지 크기 조절 가이드', indexMetaTitle: '이미지 크기 조절 심층 가이드 15개', indexDescription: '정확한 크기, 목표 용량, 파일 형식, 일괄 처리, 개인정보 보호, 웹사이트, 인쇄, 소셜미디어 이미지 작업을 자세히 설명합니다.',
      indexEyebrow: '상황별 가이드 15개', indexIntro: '각 가이드는 서로 다른 작업을 다루며 계산 예시, 비교표, 체크리스트, 한계, 자주 묻는 질문과 관련 도구를 제공합니다.',
      home: '홈', guides: '가이드', lastReviewed: '마지막 검토일', wordUnit: '단어', toc: '이 페이지의 내용', ctaTitle: '내 이미지에 같은 설정을 적용해 보세요', ctaBody: '편집기는 이미지를 서버로 보내지 않고 브라우저에서 처리합니다.', ctaButton: '이미지 크기 조절 열기', checklist: '최종 체크리스트', faq: '자주 묻는 질문', sources: '출처와 확인 자료', review: '안내 내용 확인 기준', related: '관련 가이드', diagramAlt: '설명 이미지:'
    },
    resources: {
      metaTitle: '이미지 크기 계산기와 규격 자료', metaDescription: '이미지 크기, 가로세로 비율, 예상 파일 용량, 인쇄 크기를 계산하고 소셜미디어 이미지 규격을 확인할 수 있습니다.', eyebrow: '실용 계산 도구 5개', title: '이미지 크기 계산 도구', intro: '파일을 처리하기 전에 크기, 비율, 예상 용량과 인쇄 결과를 계산할 수 있습니다. 추정값은 구분해서 표시하며 플랫폼 규격에는 확인 날짜를 함께 제공합니다.', cardBody: '설명과 예시, 관련 가이드를 함께 제공하는 브라우저 계산 도구입니다.', open: '도구 열기', lastReviewed: '마지막 검토일', relatedTitle: '관련 이미지 크기 조절 가이드', editorTitle: '계산한 값으로 이미지를 처리해 보세요', editorBody: '전체 편집기에서 내 이미지에 크기와 형식 설정을 적용할 수 있습니다.', editorButton: '이미지 크기 조절 열기'
    },
    resizer: {
      eyebrow: '서버 업로드 없음 · 브라우저 처리 · 일괄 ZIP', sections: [
        ['정확한 픽셀 크기로 변경하는 방법', ['정확한 가로·세로 모드를 선택하고 필요한 값을 입력한 뒤 원본과 출력 비율이 다를 때 어떻게 맞출지 결정합니다. 전체 표시 방식은 이미지를 모두 보존하고 여백을 추가합니다. 영역 채우기 방식은 프레임을 채우면서 넘치는 부분을 자릅니다. 강제 맞춤 방식은 가로와 세로를 그대로 맞추기 때문에 형태가 왜곡될 수 있습니다.', '가로만, 세로만, 비율, 긴 변, 최대 가로, 최대 세로, 메가픽셀 모드는 원본 비율을 유지합니다. 작은 이미지를 키워도 새로운 디테일이 생기지 않으므로 확대는 기본적으로 꺼져 있습니다.']],
        ['목표 파일 용량에 맞추는 원리', ['JPEG와 WebP는 선택한 품질을 먼저 시험한 뒤 목표 이하에서 가능한 높은 품질을 찾습니다. 품질을 낮춰도 파일이 너무 크고 해상도 자동 감소를 허용했다면 가로와 세로를 단계적으로 줄여 다시 저장합니다.', 'PNG는 브라우저에서 무손실 방식으로 저장됩니다. 복잡한 투명 PNG는 작은 목표 용량에 맞추기 어려우므로 해상도를 줄이거나 WebP 또는 JPEG로 바꿔야 할 수 있습니다. 이미지의 디테일과 구조가 다르기 때문에 정확히 같은 바이트를 보장하지 않습니다.']],
        ['JPEG·PNG·WebP 선택 기준', ['JPEG는 일반 사진과 작은 목표 용량에 적합합니다. PNG는 로고, 스크린샷, 투명 배경에 유리합니다. WebP는 사진 용량을 줄이면서 투명 배경도 지원할 수 있습니다.']],
        ['메타데이터와 개인정보 보호', ['편집 중 선택한 이미지는 브라우저 안에 머뭅니다. 다시 저장하는 과정에서 GPS, 촬영 시간, 카메라 모델, 편집 프로그램 정보 등의 EXIF가 일반적으로 제거되며 일부 색상 프로필도 브라우저 처리 방식에 따라 달라질 수 있습니다.']],
        ['일괄 처리할 때 확인할 점', ['많은 파일을 처리하기 전에 1~2장으로 먼저 시험합니다.', '공통 설정은 전체에 적용하고 예외 사진만 개별 설정을 사용합니다.', '원본을 보관하고 다운로드한 파일을 브라우저 밖에서도 열어 봅니다.', '오래된 휴대전화에서는 처리 장수를 줄여 메모리 부담을 낮춥니다.', 'ZIP을 만들기 전에 알아보기 쉬운 파일명 접미사를 정합니다.']],
        ['도구 사용 시 알아둘 한계', ['HEIC 지원 여부는 브라우저, 운영체제, 파일 종류에 따라 달라집니다. 움직이는 GIF는 첫 번째 프레임만 처리합니다. 브라우저 인코더에 따라 파일 용량과 색상이 조금 달라질 수 있으므로 중요한 용도라면 다운로드 결과를 직접 확인해야 합니다.']],
        ['리사이저 자주 묻는 질문', ['왜 목표 KB 이하로 줄어들지 않나요?', '선택한 해상도와 최소 품질에서 이미지의 디테일이 너무 많을 수 있습니다. 해상도 자동 감소를 허용하거나 JPEG·WebP를 선택해 보세요.', '왜 작은 원본은 자동으로 확대하지 않나요?', '확대하면 흐림과 픽셀이 더 눈에 띌 수 있어 기본값에서는 확대하지 않습니다.', '설정이 저장되나요?', '최근 크기, 형식, 품질, 목표 용량, 접미사, 언어와 동의 설정은 저장될 수 있지만 실제 이미지는 저장하지 않습니다.']]
      ],
      tableHeaders: ['형식', '적합한 이미지', '투명 배경', '목표 용량 조절'], tableRows: [['JPEG', '일반 사진', '지원하지 않음', '품질 조절이 쉬움'], ['PNG', '로고, 스크린샷, 단색 그래픽', '지원', '무손실이라 용량이 커질 수 있음'], ['WebP', '사진과 투명 웹 이미지', '지원', '효율적인 손실 압축 가능']]
    }
  },
  ja: {
    skip: '本文へ移動', primaryNav: 'メインナビゲーション', footerNav: 'フッターナビゲーション', chooseLanguage: '言語を選択', footerDescription: '画像のリサイズ、圧縮、形式変換をブラウザ内で行います。', copyright: '画像はブラウザ内で処理されます。', ad: '広告',
    home: { eyebrow: 'アップロード不要 · 正確な設定 · ブラウザ処理', primary: '画像をリサイズ', secondary: '仕組みを見る', trust: ['サーバーへ送信しない', '最大20枚', 'JPEG · PNG · WebP'], quickTitle: 'すべての機能を備えた画像リサイザーを使う', quickBody: '正確なピクセル、目標容量、一括処理、個別保存、ZIP保存を一つの編集画面で利用できます。', quickButton: 'ツールを開く', resourcesEyebrow: '計算ツール', resourcesTitle: '出力前にサイズを計算', resourcesAll: 'すべての計算ツール', calculatorOpen: '計算機を開く', guidesEyebrow: '詳しいガイド', guidesTitle: '用途別の画像リサイズ方法', guidesAll: '15本のガイドを見る', faqTitle: 'よくある質問', faqs: [['画像はサーバーへ送られますか？','いいえ。選択画像はブラウザ内でデコードして再保存します。画像データをブラウザの設定保存領域には保存しません。'],['すべての画像を正確に100KBにできますか？','目標以下で実用的な最高品質を探しますが、完全なバイト一致は保証しません。PNGは縮小や形式変換が必要な場合があります。'],['メタデータは残りますか？','Canvasで再保存すると、GPS、撮影時刻、カメラ情報、一部の色プロファイルなどが通常除かれます。']] },
    guides: { indexTitle:'画像リサイズガイド',indexMetaTitle:'画像リサイズ詳細ガイド15選',indexDescription:'正確な寸法、目標容量、形式、一括処理、プライバシー、Web、印刷、SNS画像を詳しく説明します。',indexEyebrow:'用途別ガイド15本',indexIntro:'各ガイドは異なる作業を扱い、計算例、比較表、チェックリスト、制限、FAQ、関連ツールを掲載します。',home:'ホーム',guides:'ガイド',lastReviewed:'最終確認日',wordUnit:'語',toc:'このページの内容',ctaTitle:'同じ設定を自分の画像に適用',ctaBody:'編集処理はブラウザ内で行われます。',ctaButton:'画像リサイザーを開く',checklist:'最終チェックリスト',faq:'よくある質問',sources:'出典と確認資料',review:'案内内容の確認基準',related:'関連ガイド',diagramAlt:'説明画像：' },
    resources: { metaTitle:'画像サイズ計算機と参考資料',metaDescription:'寸法、縦横比、推定ファイル容量、印刷サイズを計算し、SNS画像仕様を確認できます。',eyebrow:'実用ツール5種類',title:'画像サイズ計算ツール',intro:'処理前に寸法、比率、推定容量、印刷結果を計算できます。推定値は明記し、プラットフォーム仕様には確認日を表示します。',cardBody:'説明、例、関連ガイドを備えたブラウザ計算ツールです。',open:'ツールを開く',lastReviewed:'最終確認日',relatedTitle:'関連する画像リサイズガイド',editorTitle:'計算結果を画像へ適用',editorBody:'完全版の編集ツールで自分の画像に設定を適用できます。',editorButton:'画像リサイザーを開く' },
    resizer: { eyebrow:'アップロード不要 · ブラウザ処理 · 一括ZIP',sections:[['正確なピクセル寸法へ変更する方法',['正確な幅と高さを入力し、原本と出力の比率が違う場合の合わせ方を選びます。「全体を表示」は画像全体を残して余白を加えます。「枠を埋める」は枠からはみ出す部分を切り取り、「強制変形」は幅と高さを固定するため形が歪むことがあります。','幅のみ、高さのみ、比率、長辺、最大幅、最大高さ、メガピクセルの各モードは原本比率を維持します。拡大しても新しい細部は増えないため、初期設定では拡大しません。']],['目標ファイル容量へ近づける仕組み',['JPEGとWebPでは選択品質を試し、目標以下で最も高い品質を探します。それでも大きく、自動解像度低下を許可している場合は、寸法を段階的に下げて再保存します。','PNGはブラウザで無損失保存されます。複雑な透過PNGは小さな目標へ届かない場合があり、寸法低下またはWebP・JPEGへの変換が必要です。完全なバイト一致は保証しません。']],['JPEG・PNG・WebPの選び方',['JPEGは写真と小さな容量目標、PNGはロゴ、画面キャプチャ、透明背景、WebPは写真の軽量化と透明素材に向いています。']],['メタデータ、プライバシー、色',['編集中の画像はブラウザ内にとどまります。再保存によりGPS、撮影時刻、カメラ機種、編集情報などのEXIFが通常除かれ、一部の色プロファイルも変わる場合があります。']],['一括処理のコツ',['大量処理前に1～2枚を試します。','共通設定を全体へ適用し、例外だけ個別設定にします。','原本を保存し、ダウンロードした結果を別のアプリでも開きます。','古い端末では少ない枚数に分けます。','ZIP作成前に分かりやすい接尾辞を決めます。']],['利用前に知っておく制限',['HEIC対応はブラウザ、OS、ファイルの種類で異なります。アニメーションGIFは最初の静止フレームを処理します。重要な用途ではダウンロード結果を必ず確認してください。']],['リサイザーFAQ',['目標KB以下にならないのはなぜですか？','画像の情報量が多すぎる場合があります。解像度の段階的低下を許可するか、JPEG・WebPを選んでください。','小さい原本を自動拡大しない理由は？','拡大するとぼけやピクセル感が目立つためです。','設定は保存されますか？','最近の寸法、形式、品質、目標、接尾辞、言語、同意設定は保存される場合がありますが、画像自体は保存しません。']]],tableHeaders:['形式','適した画像','透明背景','目標容量の調整'],tableRows:[['JPEG','写真','非対応','品質調整がしやすい'],['PNG','ロゴ、画面キャプチャ、平面画像','対応','無損失で大きくなりやすい'],['WebP','写真と透過Web素材','対応','効率的な損失圧縮']] }
  },
  es: {
    skip:'Ir al contenido principal',primaryNav:'Navegación principal',footerNav:'Navegación del pie',chooseLanguage:'Elegir idioma',footerDescription:'Redimensiona, comprime y convierte imágenes directamente en el navegador.',copyright:'Las imágenes se procesan localmente en el navegador.',ad:'Publicidad',
    home:{eyebrow:'Sin subida · ajustes precisos · procesamiento local',primary:'Redimensionar imágenes',secondary:'Cómo funciona',trust:['Sin subir al servidor','Hasta 20 imágenes','JPEG · PNG · WebP'],quickTitle:'Empieza con el redimensionador completo',quickBody:'Define píxeles exactos, un peso objetivo, procesa lotes y descarga archivos individuales o un ZIP desde un solo editor.',quickButton:'Abrir la herramienta',resourcesEyebrow:'Herramientas',resourcesTitle:'Calcula antes de exportar',resourcesAll:'Todas las herramientas',calculatorOpen:'Abrir calculadora',guidesEyebrow:'Guías detalladas',guidesTitle:'Ayuda práctica para cada tipo de imagen',guidesAll:'Ver las 15 guías',faqTitle:'Preguntas frecuentes',faqs:[['¿Se suben las imágenes a un servidor?','No. Las imágenes se decodifican y se vuelven a guardar en el navegador. Los datos de la imagen no se almacenan en el almacenamiento de preferencias del navegador.'],['¿Se puede conseguir exactamente 100 KB con cualquier imagen?','La herramienta busca la mejor calidad práctica por debajo del objetivo. No garantiza el mismo número de bytes y PNG puede necesitar menos resolución o conversión.'],['¿Se conservan los metadatos?','Al volver a guardar con Canvas suelen eliminarse datos EXIF como GPS, fecha, cámara y parte de la información de color.']]},
    guides:{indexTitle:'Guías de redimensionado',indexMetaTitle:'15 guías detalladas de redimensionado',indexDescription:'Guías sobre dimensiones exactas, peso objetivo, formatos, lotes, privacidad, web, impresión y redes sociales.',indexEyebrow:'15 guías por tipo de tarea',indexIntro:'Cada guía resuelve una tarea distinta e incluye cálculos, tablas, listas de comprobación, límites, preguntas y herramientas relacionadas.',home:'Inicio',guides:'Guías',lastReviewed:'Última revisión',wordUnit:'palabras',toc:'Contenido de esta página',ctaTitle:'Aplica estos ajustes a tus imágenes',ctaBody:'El editor procesa los archivos localmente en el navegador.',ctaButton:'Abrir el redimensionador',checklist:'Lista de comprobación final',faq:'Preguntas frecuentes',sources:'Fuentes y verificación',review:'Cómo se comprobó esta guía',related:'Guías relacionadas',diagramAlt:'Ilustración para'},
    resources:{metaTitle:'Calculadoras de imagen y tablas de referencia',metaDescription:'Calcula dimensiones, proporciones, peso estimado, tamaño de impresión y consulta especificaciones para redes sociales.',eyebrow:'5 herramientas prácticas',title:'Herramientas de tamaño de imagen',intro:'Planifica medidas, proporciones, peso estimado e impresión antes de procesar un archivo. Las estimaciones se identifican claramente y las especificaciones incluyen fecha de revisión.',cardBody:'Calculadora interactiva con explicaciones, ejemplos y guías relacionadas.',open:'Abrir herramienta',lastReviewed:'Última revisión',relatedTitle:'Guías relacionadas de redimensionado',editorTitle:'¿Quieres aplicar el resultado?',editorBody:'Usa el editor completo para aplicar estos valores a tus imágenes.',editorButton:'Abrir el redimensionador'},
    resizer:{eyebrow:'Sin subida · procesamiento local · ZIP por lotes',sections:[['Cómo cambiar a dimensiones exactas',['Introduce el ancho y el alto y decide cómo adaptar una proporción distinta. Contener conserva toda la imagen y añade margen. Cubrir llena el marco y recorta lo que sobra. Estirar fuerza ambas medidas y puede deformar las formas.','Los modos de ancho, alto, porcentaje, lado largo, ancho máximo, alto máximo y megapíxeles conservan la proporción. La ampliación está desactivada porque añadir píxeles no crea detalle nuevo.']],['Cómo funciona el objetivo de tamaño',['Para JPEG y WebP se prueba la calidad elegida y se busca la mejor calidad por debajo del objetivo. Si todavía pesa demasiado y permites reducir resolución, las dimensiones bajan gradualmente y se vuelve a codificar.','PNG se guarda sin pérdida. Un PNG transparente complejo puede necesitar menos dimensiones o conversión a WebP o JPEG. No se garantiza un número exacto de bytes.']],['Elegir JPEG, PNG o WebP',['JPEG suele ser adecuado para fotografías, PNG para logotipos, capturas y transparencia, y WebP para archivos web compactos con o sin transparencia.']],['Metadatos, privacidad y color',['La imagen permanece en el navegador durante la edición. Al volver a guardarla suelen eliminarse GPS, fecha, modelo de cámara y otros datos EXIF. Parte de la información de color también puede cambiar.']],['Consejos para procesar lotes',['Prueba una o dos imágenes antes del lote completo.','Usa ajustes comunes y reserva los individuales para excepciones.','Conserva los originales y abre una descarga fuera del navegador.','En móviles antiguos, procesa menos archivos cada vez.','Elige un sufijo claro antes de crear el ZIP.']],['Límites de la herramienta',['La compatibilidad HEIC varía según navegador, sistema y archivo. Los GIF animados se tratan como un primer fotograma estático. Revisa siempre el resultado descargado antes de un uso importante.']],['Preguntas del redimensionador',['¿Por qué no alcanza el objetivo en KB?','Puede haber demasiado detalle para las dimensiones y calidad elegidas. Permite reducir resolución o usa JPEG o WebP.','¿Por qué no amplía automáticamente una imagen pequeña?','La ampliación puede hacer más visibles el desenfoque y los píxeles.','¿Se guardan mis ajustes?','Pueden guardarse dimensiones, formato, calidad, objetivo, sufijo, idioma y consentimiento, pero no la imagen.']]],tableHeaders:['Formato','Adecuado para','Transparencia','Control del tamaño'],tableRows:[['JPEG','Fotografías','No','Control flexible de calidad'],['PNG','Logotipos, capturas y gráficos planos','Sí','Sin pérdida y a menudo más grande'],['WebP','Fotos y recursos web transparentes','Sí','Compresión con pérdida eficiente']]}
  }
} as const;

export function getUiCopy(locale: Locale) { return uiCopy[locale]; }
