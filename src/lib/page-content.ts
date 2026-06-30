import type { Locale } from '@/config/site';

export type ContentSection = { heading: string; paragraphs: string[]; bullets?: string[] };

type HomeContent = { title: string; description: string; hero: string; sub: string; sections: ContentSection[] };

const homeCopy: Record<Locale, HomeContent> = {
  en: {
    title: 'Image Resizer Online – Resize and Compress Images',
    description: 'Resize images to exact pixels, reduce photos toward a target file size, convert formats, and process batches locally in your browser.',
    hero: 'Resize images to exact dimensions and target file sizes',
    sub: 'Choose photos, set precise pixels or a maximum KB value, compare the result, and download individual files or a ZIP. Your images stay in this browser.',
    sections: [
      { heading: 'One editor for dimensions, format, and file size', paragraphs: [
        'Image Resizer combines dimension changes, aspect-ratio fitting, format conversion, quality control, and target-size compression in one browser tool. The same workflow can prepare a website hero image, standardize product photographs, shrink email attachments, or create a profile picture without making several temporary copies in different applications.',
        'The editor displays the original dimensions and bytes beside the planned and final output. This matters because pixel dimensions and file size are related but not interchangeable. Two photographs can both measure 1200×800 pixels yet have very different file sizes because detail, noise, transparency, format, and encoder quality all affect the result.'
      ]},
      { heading: 'Exact dimensions are different from ordinary reduction', paragraphs: [
        'Ordinary reduction usually preserves the original aspect ratio. Exact dimensions introduce another decision: what should happen when the source ratio and destination ratio do not match? Contain keeps the entire source and adds padding. Cover fills the frame and crops overflow. Stretch forces the requested width and height and can distort people, circles, text, or products.',
        'The fit choice is shown rather than hidden behind an automatic crop. You can choose a background color or transparency for padding and adjust the focal position used by cover mode. Small originals are not enlarged by default because a larger pixel grid cannot recreate detail that was not captured in the source.'
      ]},
      { heading: 'How target-KB compression works', paragraphs: [
        'For JPEG and WebP, the tool first renders the requested dimensions and tests the selected quality. It then searches the encoder quality range for the highest result below the target. Browser encoders return discrete file sizes, so the result can be close to the requested value without matching every byte exactly.',
        'If the lowest practical quality is still too large, optional resolution reduction makes gradual attempts rather than one severe jump. PNG follows a different path because normal browser PNG encoding is lossless. A complex PNG may need smaller dimensions or conversion to WebP or JPEG before it can meet a small file-size limit.'
      ]},
      { heading: 'Images are processed locally in the browser', paragraphs: [
        'Selected image bytes are decoded and re-encoded on your device. You do not need an account, and the resizing workflow does not send the image or filename to a remote image-processing service. Local processing is useful for family photographs, identification pictures, internal product assets, and work files that should not be copied to an unknown server merely to change dimensions.',
        'Local processing still depends on the security of your browser and device. The operating system controls decoding, color management, memory, and downloads, while installed browser extensions may have their own permissions. Keep the original, use a trusted device, and close the page after handling sensitive material.'
      ]},
      { heading: 'Choose JPEG, PNG, or WebP according to the image', paragraphs: [
        'JPEG is usually efficient for photographs and target-size work but cannot preserve transparency. PNG is appropriate for logos, interface graphics, diagrams, and screenshots where transparency or crisp flat edges matter. WebP supports photographic compression and transparency in modern browsers and often produces compact files.',
        'Format conversion should follow the content. Turning a transparent logo into JPEG requires a deliberate background color. Turning a noisy phone photograph into PNG can create a much larger file without a visible advantage. Compare the downloaded result rather than assuming that one format is always superior.'
      ]},
      { heading: 'Batch resizing creates repeatable output', paragraphs: [
        'A batch can use one shared preset or individual overrides. Shared settings are efficient for catalog photos, staff portraits, event galleries, classroom documents, and website migrations. Individual settings remain useful when one image is portrait, another is panoramic, or a face needs a different crop anchor.',
        'Files can be reordered, selected, removed, retried after a failure, and downloaded individually or in a ZIP. A safe batch workflow starts with one or two samples, verifies a downloaded result outside the browser, and only then processes the complete set. Filename suffixes and automatic collision numbering help prevent accidental overwriting.'
      ]},
      { heading: 'The interface is designed for desktop and mobile use', paragraphs: [
        'On desktop, drag and drop supports quick selection while numeric fields make exact values easy to enter. The preview accepts mouse-wheel zoom without moving the whole page. On touch devices, the layout uses larger controls, vertical image cards, collapsible settings, and pinch zoom inside the preview.',
        'High-resolution phone photographs can use much more memory after decoding than their compressed HEIC or JPEG file size suggests. The file-count and session limits reduce the risk of freezing the browser, but older phones may still work more reliably when images are processed in smaller groups.'
      ]},
      { heading: 'Re-encoding can remove metadata', paragraphs: [
        'Canvas re-encoding creates a new raster file. EXIF fields such as capture time, GPS coordinates, camera model, orientation notes, and editing-software information are normally not copied. Some color-profile information may also be normalized through the browser’s usual sRGB-oriented output path.',
        'Metadata removal can improve privacy and reduce bytes, but this editor is not a specialized forensic metadata scrubber. If legal, archival, medical, or professional work requires specific metadata, keep the source and use an application designed to preserve and inspect those fields.'
      ]},
      { heading: 'Check the result at the size where it will be used', paragraphs: [
        'Inspect an output at 100 percent and at the actual display size. Faces, fine hair, small text, gradients, and high-contrast boundaries reveal different problems. A heavily zoomed view can exaggerate artifacts that are invisible in normal use, while a tiny thumbnail can hide damaged text or an unsafe crop.',
        'Open the downloaded file instead of relying only on the preview. Confirm the extension, dimensions, transparency, crop, byte size, and ability to open it in another application. When the destination is a social platform or upload form, make a test upload because the platform may apply additional resizing or compression.'
      ]},
      { heading: 'Calculators help plan the output before editing', paragraphs: [
        'The resources section includes a dimensions calculator, aspect-ratio calculator, file-size estimator, print-size calculator, and social-media image reference. These tools answer planning questions before you select a file and clearly distinguish estimates from measured output.',
        'The social-media reference includes a verification date and links to official help pages because platform specifications can change. The print calculator converts pixels and PPI into physical dimensions without suggesting that changing a PPI number alone creates additional image detail.'
      ]},
      { heading: 'Use the guides when the destination has special requirements', paragraphs: [
        'Fifteen guides cover exact dimensions, target-KB compression, batch work, visible quality, image formats, website performance, email, product photos, headshots, social media, print, mobile photographs, transparent PNG files, and browser privacy. Each guide includes a calculation, comparison table, checklist, limitations, and task-specific questions.',
        'Related links connect adjacent problems without creating a separate page for every byte preset. The target-size guide, for example, explains 20 KB, 50 KB, 100 KB, 200 KB, and 500 KB situations together because the same decisions about dimensions, format, and acceptable quality apply to all of them.'
      ]}
    ]
  },
  ko: {
    title: '이미지 크기 조절 – 사진 용량 줄이기 온라인 도구',
    description: '이미지 크기 조절과 사진 용량 줄이기를 브라우저에서 바로 처리하세요. 정확한 픽셀, 목표 KB, JPG·PNG·WebP 변환과 일괄 작업을 지원합니다.',
    hero: '이미지를 정확한 크기와 목표 용량으로 변경하세요',
    sub: '사진을 선택하고 픽셀 또는 최대 KB를 설정한 뒤 결과를 비교해 개별 파일이나 ZIP으로 내려받을 수 있습니다. 이미지는 브라우저 밖으로 전송되지 않습니다.',
    sections: [
      { heading: '크기·형식·용량을 한 화면에서 조절할 수 있습니다', paragraphs: ['이미지 크기 조절 도구에서는 가로와 세로 변경, 비율 맞춤, 파일 형식 변환, 품질 조절, 목표 용량 압축을 한 번에 처리할 수 있습니다. 웹사이트 이미지, 상품 사진, 이메일 첨부 사진, 프로필 사진처럼 사용 목적이 달라도 같은 흐름으로 작업할 수 있습니다.', '원본의 가로·세로와 파일 용량을 결과 값과 나란히 확인할 수 있습니다. 픽셀 크기가 같아도 사진의 디테일, 노이즈, 투명도, 파일 형식과 품질에 따라 실제 용량은 달라질 수 있습니다.'],},
      { heading: '정확한 크기 변경은 일반 축소와 다릅니다', paragraphs: ['일반 축소는 보통 원본 비율을 유지합니다. 정확한 가로와 세로를 지정할 때는 원본 비율이 출력 비율과 다르면 어떻게 처리할지 선택해야 합니다. 전체 표시는 사진 전체를 남기고 여백을 추가하며, 영역 채우기는 프레임을 채우고 넘치는 부분을 자릅니다. 강제 맞춤은 가로와 세로를 그대로 맞추기 때문에 형태가 왜곡될 수 있습니다.', '맞춤 방식과 초점 위치를 직접 선택할 수 있어 얼굴이나 상품이 의도하지 않게 잘리는 일을 줄일 수 있습니다. 작은 원본은 크게 만들어도 새로운 디테일이 생기지 않으므로 확대는 기본적으로 꺼져 있습니다.']},
      { heading: '목표 KB 압축은 품질과 해상도를 함께 판단합니다', paragraphs: ['JPEG와 WebP는 지정한 크기로 이미지를 만든 뒤 선택한 품질을 시험하고 목표 이하에서 가능한 높은 품질을 찾습니다. 인코더는 모든 바이트 값을 연속적으로 만들지 않기 때문에 목표와 가까운 값은 만들 수 있어도 정확히 같은 바이트를 보장하지는 않습니다.', '품질을 낮춰도 목표보다 크면 해상도 자동 감소를 허용한 경우에만 가로와 세로를 단계적으로 줄여 다시 저장합니다. PNG는 무손실 방식이므로 복잡한 파일은 해상도를 낮추거나 WebP·JPEG로 변환해야 작은 용량에 맞출 수 있습니다.']},
      { heading: '선택한 이미지는 브라우저 안에서 처리됩니다', paragraphs: ['이미지와 파일명은 별도의 이미지 처리 서버로 전송되지 않습니다. 가족사진, 신분 확인용 사진, 업무 자료, 내부 상품 이미지처럼 외부 업로드가 부담스러운 파일을 크기만 바꾸고 싶을 때 사용할 수 있습니다.', '다만 브라우저와 기기의 보안까지 도구가 대신 보장하는 것은 아닙니다. 신뢰할 수 있는 기기를 사용하고, 민감한 파일은 원본을 안전하게 보관하며, 작업이 끝나면 페이지를 닫는 것이 좋습니다.']},
      { heading: '사진 특성에 맞춰 JPEG·PNG·WebP를 선택하세요', paragraphs: ['JPEG는 일반 사진과 목표 용량 압축에 적합하지만 투명 배경을 지원하지 않습니다. PNG는 로고, 아이콘, 스크린샷처럼 투명도나 또렷한 경계가 중요한 이미지에 유리합니다. WebP는 사진 용량을 줄이면서 투명 배경도 지원할 수 있습니다.', '투명 로고를 JPEG로 바꿀 때는 배경색을 직접 정해야 합니다. 노이즈가 많은 휴대전화 사진을 PNG로 바꾸면 화질 이점 없이 용량만 커질 수 있으므로 다운로드 결과를 비교해 선택하는 것이 안전합니다.']},
      { heading: '일괄 처리는 같은 규격을 반복해서 만들 때 유용합니다', paragraphs: ['상품 사진, 직원 프로필, 행사 사진, 문서 이미지처럼 여러 장을 같은 크기로 맞출 때 전체 설정을 적용할 수 있습니다. 방향이나 피사체 위치가 다른 사진은 개별 설정으로 크롭 위치와 형식을 따로 바꿀 수 있습니다.', '많은 파일을 한꺼번에 처리하기 전에 1~2장을 먼저 시험하고 다운로드한 파일을 직접 열어 보세요. 파일명 접미사와 자동 번호 기능을 이용하면 같은 이름의 결과물이 덮어써지는 일을 피할 수 있습니다.']},
      { heading: 'PC와 모바일에서 모두 사용할 수 있습니다', paragraphs: ['PC에서는 드래그 앤 드롭과 숫자 입력으로 빠르게 설정할 수 있고, 미리보기에서는 마우스 휠로 확대할 수 있습니다. 모바일에서는 세로 카드 구조와 큰 버튼을 사용하고 미리보기 안에서 손가락으로 확대할 수 있습니다.', '고해상도 휴대전화 사진은 압축 파일보다 브라우저 메모리를 훨씬 많이 사용할 수 있습니다. 오래된 기기에서 화면이 느려지면 한 번에 처리하는 사진 수를 줄이는 것이 좋습니다.']},
      { heading: '다시 저장하면 메타데이터가 달라질 수 있습니다', paragraphs: ['Canvas를 이용해 새 파일을 만들면 촬영 시간, GPS 위치, 카메라 모델, 방향 정보, 편집 프로그램 정보 등의 EXIF가 일반적으로 복사되지 않습니다. 일부 색상 프로필도 브라우저의 처리 방식에 따라 sRGB 환경에 맞춰질 수 있습니다.', '메타데이터가 줄어들면 개인정보 보호와 용량 감소에 도움이 될 수 있지만 전문적인 메타데이터 삭제 도구를 대신하지는 않습니다. 법률, 의료, 보존 업무처럼 원본 정보가 중요한 경우에는 반드시 원본을 별도로 보관하세요.']},
      { heading: '실제 사용할 크기에서 결과를 확인하세요', paragraphs: ['결과 이미지는 100% 보기와 실제 표시 크기에서 모두 확인하는 것이 좋습니다. 얼굴, 머리카락, 작은 글자, 그라데이션, 강한 경계선은 압축 문제를 발견하기 쉬운 부분입니다. 너무 크게 확대하면 보이지 않을 흔적이 과장되고, 너무 작은 미리보기는 글자 손상을 숨길 수 있습니다.', '미리보기만 보지 말고 다운로드한 파일의 확장자, 가로·세로, 투명도, 크롭, 용량을 확인하세요. 소셜미디어나 특정 업로드 사이트는 다시 압축할 수 있으므로 중요한 작업은 시험 업로드까지 해보는 것이 안전합니다.']},
      { heading: '계산 도구로 출력 조건을 미리 확인할 수 있습니다', paragraphs: ['이미지 크기 계산기, 가로세로 비율 계산기, 파일 용량 추정기, 인쇄 크기 계산기, 소셜미디어 규격표를 제공합니다. 이미지를 선택하기 전에 필요한 가로와 세로, 비율, 예상 용량과 인쇄 크기를 먼저 확인할 수 있습니다.', '파일 용량은 실제 사진의 복잡도에 따라 달라지므로 추정값으로 표시합니다. 소셜미디어 규격은 바뀔 수 있어 확인 날짜와 공식 도움말 링크를 함께 제공합니다.']},
      { heading: '특별한 사용 목적은 심층 가이드에서 확인하세요', paragraphs: ['정확한 크기, 목표 KB, 일괄 처리, 화질, 파일 형식, 웹사이트 속도, 이메일, 상품 사진, 프로필 사진, 소셜미디어, 인쇄, 휴대전화 사진, 투명 PNG, 개인정보 보호를 주제로 15개 가이드를 제공합니다.', '20KB, 50KB, 100KB처럼 용량 숫자만 다른 얇은 페이지를 따로 만들지 않고 하나의 목표 용량 가이드에서 공통 원리와 상황별 설정을 함께 설명합니다.']}
    ]
  },
  ja: {
    title: '画像リサイズ – 画像サイズ変更・圧縮をオンラインで',
    description: '画像を正確なピクセルへ変更し、目標容量へ圧縮し、複数ファイルをブラウザ内で処理します。',
    hero: '画像リサイズで寸法とファイル容量を正確に調整',
    sub: '画像を選び、ピクセルまたは最大KBを設定して結果を比較し、個別またはZIPで保存できます。画像はブラウザ内で処理されます。',
    sections: [
      {heading:'寸法・形式・容量を一つの画面で調整',paragraphs:['幅と高さ、縦横比の合わせ方、形式変換、品質、目標容量を一つの編集画面で設定できます。Web画像、商品写真、メール添付、プロフィール画像など、異なる用途にも同じ流れで対応できます。','元の寸法と容量を出力結果と並べて確認できます。同じ1200×800ピクセルでも、細部、ノイズ、透明度、形式、品質によってファイル容量は変わります。']},
      {heading:'正確な寸法と通常の縮小の違い',paragraphs:['通常の縮小は原本の比率を保ちます。正確な幅と高さを指定する場合、比率が合わなければ全体表示で余白を加える、枠を埋める方法で余分を切る、強制変形で幅と高さを合わせる方法から選びます。','切り抜き位置を自分で決められるため、顔や商品が意図せず切れるのを防ぎやすくなります。小さな原本を拡大しても新しい細部は増えないため、拡大は初期設定で無効です。']},
      {heading:'目標KBへ近づける方法',paragraphs:['JPEGとWebPは指定寸法で描画し、目標以下で最も高い品質を探します。エンコーダーが作る容量は連続していないため、目標に近づけても完全に同じバイト数とは限りません。','最低品質でも大きい場合は、許可されているときだけ解像度を段階的に下げます。PNGは無損失のため、小さな目標には寸法低下やWebP・JPEG変換が必要なことがあります。']},
      {heading:'画像はブラウザ内で処理',paragraphs:['選択した画像とファイル名を画像処理サーバーへ送信しません。家族写真、身分証用画像、社内資料などを外部へアップロードせずに寸法変更できます。','端末やブラウザ自体の安全性は利用者が確認する必要があります。信頼できる端末を使い、原本を保存し、機密性の高い作業後はページを閉じてください。']},
      {heading:'JPEG・PNG・WebPを使い分ける',paragraphs:['JPEGは写真と容量削減、PNGはロゴ、画面キャプチャ、透明背景、WebPは軽量な写真と透明Web素材に向いています。','透明ロゴをJPEGへ変換する場合は背景色が必要です。ノイズの多い写真をPNGにすると見た目の利点なく容量だけ増える場合があります。']},
      {heading:'一括処理で出力をそろえる',paragraphs:['商品写真、社員写真、イベント画像などに共通設定を適用し、例外だけ個別に切り抜きや形式を変更できます。','大量処理前に少数を試し、保存したファイルを開いて確認してください。接尾辞と重複番号により、同名ファイルの上書きを防げます。']},
      {heading:'パソコンとスマートフォンに対応',paragraphs:['デスクトップではドラッグ操作と数値入力、モバイルでは大きな操作領域と縦型カード、ピンチ拡大を利用できます。','高解像度写真は展開後に多くのメモリを使います。古い端末で動作が重い場合は、少ない枚数に分けて処理してください。']},
      {heading:'再保存でメタデータが変わる',paragraphs:['Canvasで新しい画像を作ると、撮影時刻、GPS、カメラ機種、向き、編集情報などのEXIFは通常コピーされません。色プロファイルもブラウザにより変わる場合があります。','専門的なメタデータ管理が必要な法務、医療、保存用途では原本を保持し、専用ソフトを利用してください。']},
      {heading:'実際の利用サイズで品質を確認',paragraphs:['100%表示と実際の表示サイズで、顔、髪、細かい文字、階調、輪郭を確認します。極端な拡大は通常見えない痕跡を誇張し、小さなサムネイルは問題を隠します。','保存したファイルの形式、寸法、透明度、切り抜き、容量を確認し、SNSなどでは試しにアップロードして再圧縮後の見え方も確認してください。']},
      {heading:'計算ツールで出力を事前に計画',paragraphs:['寸法、縦横比、推定容量、印刷サイズ、SNS画像仕様を確認する計算ツールがあります。画像を選ぶ前に必要な値を整理できます。','容量は画像内容で変わるため推定として表示します。SNS仕様には確認日と公式ヘルプへのリンクを掲載します。']},
      {heading:'用途別ガイドで詳しく確認',paragraphs:['正確寸法、目標KB、一括処理、画質、形式、Web性能、メール、商品写真、プロフィール、SNS、印刷、スマートフォン、透過PNG、プライバシーのガイドを用意しています。','容量の数値だけを変えたページを増やさず、一つのガイドで共通する判断と複数の目標例を説明します。']}
    ]
  },
  es: {
    title: 'Redimensionar Imagen Online – Cambiar Tamaño y Comprimir',
    description: 'Cambia imágenes a píxeles exactos, comprímelas hacia un peso objetivo y procesa lotes localmente en el navegador.',
    hero: 'Redimensionar imagen a medidas exactas y reducir su peso',
    sub: 'Elige fotos, fija píxeles o un máximo en KB, compara el resultado y descarga archivos individuales o un ZIP. Las imágenes permanecen en el navegador.',
    sections: [
      {heading:'Dimensiones, formato y peso en un solo editor',paragraphs:['Puedes cambiar ancho y alto, elegir cómo encajar la proporción, convertir el formato, ajustar la calidad y buscar un peso objetivo desde una sola pantalla. El mismo flujo sirve para imágenes web, productos, correo o perfiles.','Se muestran las dimensiones y los bytes originales junto al resultado. Dos imágenes de 1200×800 pueden pesar distinto por el detalle, ruido, transparencia, formato y calidad.']},
      {heading:'Las medidas exactas no son una reducción normal',paragraphs:['Una reducción normal conserva la proporción. Cuando el destino exige ancho y alto exactos, Contener conserva todo y añade margen, cubrir llena el marco y recorta, y estirar fuerza ambas medidas y puede deformar personas, textos o productos.','Puedes elegir el punto de enfoque para evitar recortes inesperados. La ampliación está desactivada porque una cuadrícula mayor no recupera detalle ausente en el original.']},
      {heading:'Cómo se busca un objetivo en KB',paragraphs:['Para JPEG y WebP se renderizan las dimensiones elegidas y se busca la mejor calidad por debajo del objetivo. Los codificadores producen tamaños discretos, por lo que no se promete igualdad exacta de bytes.','Si la calidad mínima práctica sigue siendo demasiado grande, la reducción automática de resolución baja las dimensiones paso a paso. PNG es sin pérdida y puede necesitar dimensiones menores o conversión.']},
      {heading:'Procesamiento local en el navegador',paragraphs:['La imagen y su nombre no se envían a un servidor de procesamiento. Esto resulta útil para fotos familiares, documentos, productos internos o archivos de trabajo que no quieres subir solo para cambiar sus medidas.','La seguridad también depende del dispositivo, navegador y extensiones instaladas. Conserva el original, usa un equipo de confianza y cierra la página después de trabajar con material sensible.']},
      {heading:'Elegir entre JPEG, PNG y WebP',paragraphs:['JPEG suele funcionar bien para fotografías y límites de peso. PNG es apropiado para logotipos, capturas y transparencia. WebP puede ofrecer fotos compactas y también transparencia.','Al convertir un logotipo transparente a JPEG debes elegir un fondo. Convertir una foto con ruido a PNG puede aumentar mucho el peso sin mejorar su aspecto.']},
      {heading:'Procesamiento por lotes coherente',paragraphs:['Los ajustes comunes sirven para catálogos, retratos de personal, galerías o migraciones web. Las excepciones pueden usar su propio recorte, formato o punto de enfoque.','Prueba una o dos imágenes antes del lote completo y abre una descarga fuera del navegador. Los sufijos y números automáticos evitan sobrescribir nombres repetidos.']},
      {heading:'Uso en ordenador y móvil',paragraphs:['En escritorio puedes arrastrar archivos e introducir valores exactos. En móvil se utilizan tarjetas verticales, controles grandes y zoom táctil dentro de la vista previa.','Las fotos de alta resolución ocupan mucha memoria al decodificarse. En teléfonos antiguos conviene trabajar con grupos pequeños.']},
      {heading:'Los metadatos pueden desaparecer',paragraphs:['Al crear un archivo nuevo con Canvas normalmente no se copian la fecha, GPS, cámara, orientación ni datos de edición. Parte del perfil de color también puede normalizarse.','Para usos legales, médicos, documentales o de archivo donde los metadatos sean necesarios, conserva el original y utiliza una aplicación especializada.']},
      {heading:'Comprueba el resultado en el tamaño real',paragraphs:['Revisa al 100% y al tamaño de uso. Rostros, cabello, texto pequeño, degradados y bordes muestran problemas distintos. Un zoom extremo exagera defectos y una miniatura puede ocultarlos.','Abre el archivo descargado y confirma extensión, dimensiones, transparencia, recorte y peso. Haz una subida de prueba cuando la plataforma pueda volver a comprimir.']},
      {heading:'Calculadoras para planificar la salida',paragraphs:['Puedes calcular dimensiones, proporción, peso estimado, tamaño de impresión y consultar referencias de redes sociales antes de seleccionar un archivo.','Las estimaciones se identifican claramente. Las tablas de plataformas incluyen fecha de revisión y enlaces oficiales porque las reglas pueden cambiar.']},
      {heading:'Guías para necesidades concretas',paragraphs:['Las guías cubren medidas exactas, objetivo en KB, lotes, calidad, formatos, rendimiento web, correo, productos, retratos, redes, impresión, móvil, PNG transparente y privacidad.','Los objetivos de 20, 50, 100, 200 y 500 KB se explican juntos porque comparten las mismas decisiones sobre dimensiones, formato y calidad aceptable.']}
    ]
  }
};

export function homeContent(locale: Locale): HomeContent { return homeCopy[locale]; }

export const resourceTools = [
  ['dimensions-calculator','Image Dimensions Calculator','이미지 크기 계산기','画像サイズ計算機','Calculadora de dimensiones'],
  ['aspect-ratio-calculator','Aspect Ratio Calculator','가로세로 비율 계산기','アスペクト比計算機','Calculadora de proporción'],
  ['file-size-estimator','Target File Size Estimator','목표 파일 크기 추정기','ファイル容量推定ツール','Estimador de tamaño'],
  ['print-size-calculator','Pixel to Print Size Calculator','인쇄 크기 계산기','印刷サイズ計算機','Calculadora de impresión'],
  ['social-media-sizes','Social Media Image Size Reference','소셜미디어 이미지 규격표','SNS画像サイズ表','Tamaños para redes sociales']
] as const;

const staticTitles = {
  'how-it-works':['How Image Resizer Works','이미지 크기 조절 작동 방식','画像リサイズの仕組み','Cómo funciona Redimensionar Imagen'],
  faq:['Frequently Asked Questions','자주 묻는 질문','よくある質問','Preguntas frecuentes'],
  about:['About Image Resizer','이미지 크기 조절 도구 소개','画像リサイズについて','Acerca de Redimensionar Imagen'],
  contact:['Contact','문의','お問い合わせ','Contacto'],
  privacy:['Privacy Policy','개인정보처리방침','プライバシーポリシー','Política de privacidad'],
  terms:['Terms of Service','이용약관','利用規約','Términos de servicio'],
  cookies:['Cookie Policy','쿠키 정책','Cookieポリシー','Política de cookies'],
  accessibility:['Accessibility Statement','접근성 안내','アクセシビリティ方針','Declaración de accesibilidad'],
  'editorial-policy':['Editorial Policy','콘텐츠 작성 원칙','編集方針','Política editorial'],
  'compression-methodology':['Compression Methodology','이미지 압축 방식','圧縮方法','Metodología de compresión']
} as const;

type StaticSlug = keyof typeof staticTitles;
const localeIndex: Record<Locale, number> = { en:0, ko:1, ja:2, es:3 };

const staticDescriptions: Record<Locale, Record<StaticSlug,string>> = {
  en: {
    'how-it-works':'Learn what happens from file selection to download, including resizing, compression, metadata changes, and browser limitations.', faq:'Answers about supported files, dimensions, target sizes, privacy, batch processing, downloads, and common errors.', about:'Why this image resizer exists, what problems it is designed to solve, and which limitations users should understand.', contact:'How to report a problem without sharing private image data and how contact availability is displayed.', privacy:'How image data, saved preferences, cookies, advertising services, consent, and privacy choices are handled.', terms:'Rules for using the service, user responsibilities, availability limits, and permitted use.', cookies:'What necessary, preference, analytics, and advertising storage may be used and how choices can be changed.', accessibility:'Keyboard, screen-reader, contrast, motion, touch-target, and feedback information for using the site.', 'editorial-policy':'How guides are prepared, sources are checked, translations are reviewed, and corrections are handled.', 'compression-methodology':'How Canvas rendering, quality search, target tolerance, resolution reduction, PNG handling, color, and metadata work.'
  },
  ko: {
    'how-it-works':'파일을 선택한 순간부터 크기 변경, 압축, 메타데이터 변화, 다운로드까지 어떤 과정으로 처리되는지 설명합니다.', faq:'지원 파일, 크기와 비율, 목표 용량, 개인정보 보호, 일괄 처리, 다운로드와 오류 해결 방법을 안내합니다.', about:'이미지 크기 조절 도구를 만든 목적과 해결하려는 문제, 사용 전에 알아둘 한계를 설명합니다.', contact:'개인 이미지 데이터를 보내지 않고 문제를 알리는 방법과 현재 문의 가능 여부를 안내합니다.', privacy:'이미지 데이터, 저장 설정, 쿠키, 광고 서비스, 동의와 개인정보 선택권을 어떻게 다루는지 설명합니다.', terms:'서비스 이용 범위, 사용자의 책임, 제공 한계와 금지되는 사용 방법을 안내합니다.', cookies:'필수·환경설정·분석·광고 저장 항목과 동의 선택을 변경하는 방법을 설명합니다.', accessibility:'키보드, 스크린리더, 색상 대비, 모션, 터치 영역과 접근성 의견 전달 방법을 안내합니다.', 'editorial-policy':'가이드 작성, 공식 자료 확인, 번역 검토, 광고와 콘텐츠 구분, 오류 수정 원칙을 설명합니다.', 'compression-methodology':'Canvas 처리, 품질 탐색, 목표 용량 오차, 해상도 감소, PNG 한계, 색상과 메타데이터 변화를 설명합니다.'
  },
  ja: {
    'how-it-works':'ファイル選択からリサイズ、圧縮、メタデータ変化、保存までの流れを説明します。',faq:'対応ファイル、寸法、目標容量、プライバシー、一括処理、保存、エラーについて回答します。',about:'画像リサイズツールの目的、解決する課題、利用前に知るべき制限を説明します。',contact:'個人画像を送らずに問題を報告する方法と問い合わせ可否を案内します。',privacy:'画像データ、保存設定、Cookie、広告、同意、プライバシー選択を説明します。',terms:'利用範囲、利用者の責任、提供上の制限、禁止事項を案内します。',cookies:'必須、設定、解析、広告の保存項目と選択変更方法を説明します。',accessibility:'キーボード、スクリーンリーダー、コントラスト、動き、タッチ領域について案内します。','editorial-policy':'ガイド作成、公式資料確認、翻訳、広告との区別、訂正方針を説明します。','compression-methodology':'Canvas処理、品質探索、容量許容差、解像度低下、PNG、色、メタデータを説明します。'
  },
  es: {
    'how-it-works':'Explica el proceso desde la selección hasta la descarga, incluido redimensionado, compresión, metadatos y límites.',faq:'Respuestas sobre archivos, dimensiones, peso objetivo, privacidad, lotes, descargas y errores.',about:'El propósito de esta herramienta para redimensionar imágenes, los problemas que resuelve y sus límites.',contact:'Cómo comunicar un problema sin enviar imágenes privadas y cómo se muestra la disponibilidad de contacto.',privacy:'Tratamiento de imágenes, preferencias, cookies, publicidad, consentimiento y controles de privacidad.',terms:'Reglas de uso, responsabilidades, límites de disponibilidad y usos permitidos.',cookies:'Almacenamiento necesario, de preferencias, analítica y publicidad, y cómo cambiar las decisiones.',accessibility:'Información sobre teclado, lectores de pantalla, contraste, movimiento, controles táctiles y comentarios.', 'editorial-policy':'Preparación de guías, verificación de fuentes, revisión de traducciones, separación publicitaria y correcciones.', 'compression-methodology':'Funcionamiento de Canvas, búsqueda de calidad, tolerancia, reducción de resolución, PNG, color y metadatos.'
  }
};

const headings: Record<Locale, Record<StaticSlug,string[]>> = {
  en: {
    'how-it-works':['File validation and decoding','Dimension and fit calculation','JPEG and WebP target search','Optional resolution reduction','Download and memory cleanup','What you should verify'],
    faq:['Supported files and browsers','Dimensions and aspect ratios','Target file sizes','Privacy and metadata','Batch processing and downloads','Troubleshooting'],
    about:['Why the tool exists','Problems it is designed to solve','Why images stay in the browser','How quality claims are described','Important limitations','Updates and feedback'],
    contact:['Available contact method','What to include in a report','Protecting privacy when reporting','What not to send','Security-related reports','Contact availability'],
    privacy:['Images processed in the browser','Preferences saved on the device','Metadata and downloaded files','Advertising and third parties','Consent and privacy controls','Policy updates'],
    terms:['Permitted use','No backup or storage service','Your responsibility for files','Availability and browser differences','Content and intellectual property','Changes to these terms'],
    cookies:['Necessary storage','Preference storage','Analytics choices','Advertising choices','Consent management','Changing your choices'],
    accessibility:['Accessibility goals','Keyboard operation','Screen-reader information','Contrast and reduced motion','Known limitations','Accessibility feedback'],
    'editorial-policy':['How guides are prepared','Use of official sources','Review and update dates','Translation review','Advertising separation','Corrections'],
    'compression-methodology':['Canvas rendering','Quality search','Target-size tolerance','Resolution reduction','PNG behavior','Color, metadata, and browser differences']
  },
  ko: {
    'how-it-works':['파일 확인과 이미지 해석','출력 크기와 맞춤 방식 계산','JPEG·WebP 목표 용량 탐색','필요할 때 해상도 줄이기','다운로드와 메모리 정리','사용자가 확인해야 할 결과'],
    faq:['지원 파일과 브라우저','크기와 가로세로 비율','목표 파일 용량','개인정보와 메타데이터','일괄 처리와 다운로드','오류 해결'],
    about:['도구를 만든 이유','해결하려는 이미지 작업','이미지를 서버로 보내지 않는 이유','화질을 과장하지 않는 원칙','사용 전에 알아둘 한계','업데이트와 의견'],
    contact:['현재 이용 가능한 문의 방법','오류 설명에 포함할 정보','문의할 때 개인정보 보호','보내지 말아야 할 자료','보안 문제 알림','문의 채널 상태'],
    privacy:['브라우저에서 처리되는 이미지','기기에 저장되는 환경설정','메타데이터와 다운로드 파일','광고와 제3자 서비스','동의와 개인정보 설정','정책 변경'],
    terms:['허용되는 이용 범위','백업·보관 서비스가 아님','파일에 대한 사용자 책임','브라우저 차이와 서비스 제공 한계','콘텐츠와 권리','약관 변경'],
    cookies:['필수 저장 항목','환경설정 저장','분석 선택','광고 선택','동의 관리','선택 변경 방법'],
    accessibility:['접근성 목표','키보드 이용','스크린리더 안내','색상 대비와 모션 감소','알려진 한계','접근성 의견 전달'],
    'editorial-policy':['가이드 작성 방식','공식 자료 확인','검토일과 업데이트','번역 검토','광고와 콘텐츠 구분','오류 수정'],
    'compression-methodology':['Canvas로 다시 그리는 과정','품질 탐색 방식','목표 용량 허용 오차','해상도 자동 감소','PNG의 특성','색상·메타데이터·브라우저 차이']
  },
  ja: {
    'how-it-works':['ファイル確認とデコード','出力寸法とフィット計算','JPEG・WebPの目標探索','必要時の解像度低下','保存とメモリ解放','利用者が確認する結果'],faq:['対応ファイルとブラウザ','寸法と縦横比','目標ファイル容量','プライバシーとメタデータ','一括処理と保存','問題解決'],about:['ツールを作った理由','解決する画像作業','画像を送信しない理由','品質を誇張しない方針','知っておくべき制限','更新と意見'],contact:['利用可能な問い合わせ方法','報告に含める情報','報告時のプライバシー','送信しない資料','セキュリティ報告','問い合わせ状況'],privacy:['ブラウザ内の画像処理','端末に保存する設定','メタデータと保存ファイル','広告と第三者','同意とプライバシー設定','方針の更新'],terms:['許可される利用','バックアップサービスではない','ファイルに対する責任','ブラウザ差と提供制限','コンテンツと権利','規約変更'],cookies:['必須保存','設定保存','解析の選択','広告の選択','同意管理','選択変更'],accessibility:['アクセシビリティ目標','キーボード操作','スクリーンリーダー','コントラストと動き','既知の制限','意見の送信'],'editorial-policy':['ガイド作成方法','公式資料の確認','確認日と更新','翻訳確認','広告との区別','訂正'],'compression-methodology':['Canvas描画','品質探索','容量許容差','解像度低下','PNGの特性','色・メタデータ・ブラウザ差']
  },
  es: {
    'how-it-works':['Validación y lectura del archivo','Cálculo de dimensiones y encaje','Búsqueda del objetivo en JPEG y WebP','Reducción opcional de resolución','Descarga y limpieza de memoria','Qué debe comprobar el usuario'],faq:['Archivos y navegadores compatibles','Dimensiones y proporciones','Peso objetivo','Privacidad y metadatos','Lotes y descargas','Solución de problemas'],about:['Por qué existe la herramienta','Problemas que resuelve','Por qué no se suben imágenes','Cómo se describen las mejoras de calidad','Límites importantes','Actualizaciones y comentarios'],contact:['Método de contacto disponible','Información útil en un informe','Privacidad al informar','Qué no debes enviar','Informes de seguridad','Disponibilidad de contacto'],privacy:['Imágenes procesadas en el navegador','Preferencias guardadas','Metadatos y descargas','Publicidad y terceros','Consentimiento y controles','Actualizaciones de la política'],terms:['Uso permitido','No es un servicio de copia de seguridad','Responsabilidad sobre los archivos','Disponibilidad y diferencias del navegador','Contenido y propiedad intelectual','Cambios en las condiciones'],cookies:['Almacenamiento necesario','Preferencias','Analítica','Publicidad','Gestión del consentimiento','Cambiar tus opciones'],accessibility:['Objetivos de accesibilidad','Uso con teclado','Lectores de pantalla','Contraste y movimiento reducido','Limitaciones conocidas','Comentarios de accesibilidad'],'editorial-policy':['Preparación de las guías','Fuentes oficiales','Fechas de revisión','Revisión de traducciones','Separación de publicidad','Correcciones'],'compression-methodology':['Renderizado con Canvas','Búsqueda de calidad','Tolerancia del objetivo','Reducción de resolución','Comportamiento de PNG','Color, metadatos y navegadores']
  }
};

const staticDetails: Record<Locale, Record<StaticSlug, string[]>> = {
  en: {
    'how-it-works': [
      'When you choose a file, the browser checks its type and size, decodes the image, and reads the pixel dimensions. A file extension alone is not treated as proof that the image can be processed.',
      'The requested resize mode determines the output dimensions. When the source and destination ratios differ, the selected fit method decides whether the image is padded, cropped, or reshaped.',
      'For JPEG and WebP target-size compression, the encoder is tested at different quality values. The tool keeps the highest result it can find below the selected limit rather than claiming an exact byte match.',
      'When quality reduction is not enough and automatic dimension reduction is enabled, width and height are lowered in controlled steps. The final dimensions are shown before download.',
      'Processed files are held in temporary browser memory. Object URLs, temporary canvases, and worker resources are released when they are no longer needed or when the editor is cleared.',
      'Open at least one downloaded file and confirm its dimensions, bytes, crop, transparency, color, and readability. Keep the source because re-encoding can remove metadata and cannot restore discarded pixels.'
    ],
    faq: [
      'JPEG, PNG, WebP, BMP, the first frame of GIF, and browser-readable HEIC or HEIF files can be selected. Support for HEIC varies by browser, operating system, and file variant.',
      'Width-only, height-only, percentage, long-edge, maximum-width, maximum-height, and megapixel modes preserve the source ratio. Exact width and height require a deliberate fit choice.',
      'A target such as 100 KB is an upper limit, not a promise of identical bytes. Detail, noise, transparency, output dimensions, format, and encoder behavior all affect the result.',
      'The editing path runs on the device, but browser extensions and the operating system still have their own permissions. Canvas export normally removes EXIF, GPS, and camera information.',
      'Up to 20 files can share one preset or use individual overrides. Test a small sample before creating a ZIP, especially on a phone with limited memory.',
      'Unreadable files, memory pressure, an unreachable target, or an unsupported HEIC variant produce a plain-language message. Try fewer files, a smaller output, or conversion to JPEG, PNG, or WebP.'
    ],
    about: [
      'This tool exists for people who need exact pixels and practical file-size control without installing an app or sending photos to an unknown processing server.',
      'Typical tasks include website images, product catalogs, profile photographs, email attachments, application forms, transparent logos, print planning, and consistent batch output.',
      'Local processing reduces unnecessary data transfer. Selected image bytes and filenames are not sent to an image-processing API as part of the resize workflow.',
      'The site does not describe enlargement as detail recovery or promise lossless results for lossy formats. Recommendations distinguish measured output from estimates.',
      'Browser codecs, device memory, color handling, HEIC support, and platform recompression can change the result. Important files should be checked in their final destination.',
      'Guides and reference tables display review dates. Corrections should be based on reproducible behavior or an authoritative source rather than promotional claims.'
    ],
    contact: [
      'When a public contact address is available, it is shown on this page. If no address is displayed, there is currently no active email channel for support.',
      'A useful report includes the browser and operating system, input format, original dimensions, selected settings, expected result, and the exact message shown on screen.',
      'Describe the image instead of attaching a sensitive original. A simple test file with the same format and dimensions is usually enough to reproduce a technical problem.',
      'Do not send identity documents, private family photographs, medical images, confidential work files, account credentials, or payment information.',
      'A security report should explain the affected page, the steps that reproduce the issue, and the possible impact. Do not include copied private data from another person.',
      'Response availability depends on whether a contact method is published. The tool remains usable without an account, but individual troubleshooting cannot be promised.'
    ],
    privacy: [
      'Selected images are decoded, resized, encoded, and prepared for download in the browser. The site does not store those images in an application database.',
      'Recent dimensions, format, quality, target size, filename suffix, language, and consent choices may be saved on the device so the editor can restore preferences.',
      'Creating a new file through Canvas normally removes EXIF fields such as GPS, capture time, camera model, and editing history. Keep the original when metadata is important.',
      'If advertising is enabled, Google and its partners may use cookies, web beacons, IP addresses, or similar signals according to their own policies and the consent available in the region.',
      'Privacy and cookie choices can be reopened from the footer. When a configured Google consent platform is active, that platform manages the applicable choices.',
      'The review date indicates when this explanation was last checked. Material changes to processing, storage, analytics, or advertising should be reflected on this page.'
    ],
    terms: [
      'You may use the tool for lawful image resizing, compression, conversion, calculation, and personal or business preparation of files you are entitled to handle.',
      'The site is not a backup, archive, cloud drive, or evidence-preservation service. Keep your own original files and any required metadata before processing.',
      'You are responsible for the rights, confidentiality, accuracy, and suitability of the files you select and for checking the downloaded result before submission.',
      'Availability and output may differ across browsers and devices. Processing can fail because of memory limits, unsupported codecs, corrupted files, or network-dependent site assets.',
      'Site text, interface code, and original graphics remain subject to their applicable rights. Using the tool does not transfer rights in another person’s image or trademark.',
      'The terms may be updated when functionality, legal requirements, or third-party services change. The review date helps identify the current published version.'
    ],
    cookies: [
      'Necessary storage supports core choices such as consent state and security-related operation. Disabling it may prevent the site from remembering essential decisions.',
      'Preference storage can remember language and recent editor settings. It does not contain the selected image pixels or a copy of the uploaded file.',
      'Analytics storage is optional and should remain disabled until consent when consent is required. Analytics must not receive image bytes or filenames.',
      'Advertising storage is optional and is used only when advertising has been enabled and the required consent conditions have been met.',
      'A configured Google consent platform takes priority over the site’s simple preference dialog so users are not shown two competing consent interfaces.',
      'Use “Privacy & Cookie Settings” in the footer to review available choices. Browser controls can also remove local storage and cookies for the site.'
    ],
    accessibility: [
      'The interface aims to support keyboard, touch, mouse, and assistive-technology users with labeled controls, predictable reading order, and visible focus.',
      'File selection, settings, processing, cancellation, individual downloads, and language switching can be reached without relying only on drag and drop.',
      'Status changes use live regions and progress semantics. Icon-only actions have accessible names, and form controls are associated with labels.',
      'Text and controls are designed for WCAG AA contrast, touch targets are at least 44 pixels where practical, and reduced-motion preferences are respected.',
      'Canvas previews cannot communicate every visual detail through a screen reader. Text summaries provide dimensions, format, bytes, state, and errors as an alternative.',
      'When reporting an accessibility barrier, describe the page, browser, assistive technology, control, and expected action without sending a private image.'
    ],
    'editorial-policy': [
      'Guides are organized around real tasks such as exact dimensions, target bytes, email, print, product photos, transparency, mobile memory, and privacy.',
      'Platform specifications and browser behavior that can change are checked against official documentation when available. Unverified numbers are not presented as guarantees.',
      'Each guide shows a review date and explains the limits that remain relevant. A date does not mean every third-party platform will keep the same specification.',
      'Localized pages are written for the search language rather than produced by swapping a few keywords. Technical format names remain where they are necessary for accuracy.',
      'Advertising is visually and structurally separated from upload, processing, and download controls. Payment or ad interaction is not required to finish an edit.',
      'Corrections should replace inaccurate instructions, update the review date when the substance changes, and preserve a clear distinction between tests, estimates, and official rules.'
    ],
    'compression-methodology': [
      'The browser decodes the source and draws it to Canvas or OffscreenCanvas at the calculated output dimensions. This creates a new raster rather than modifying the source file.',
      'JPEG and WebP target-size mode tests encoder quality with a bounded search. The selected result is the highest tested quality below the limit when such a result exists.',
      'The default tolerance is used to avoid meaningless repeated attempts around encoder steps. The tool reports the actual bytes rather than claiming exact equality.',
      'If minimum useful quality remains too large and automatic reduction is allowed, the dimensions are reduced gradually with a minimum output boundary.',
      'Normal browser PNG export is lossless and does not expose a comparable lossy quality control. PNG may require smaller dimensions or conversion to another format.',
      'Canvas export normally removes metadata and may normalize color through the browser’s sRGB-oriented pipeline. Codec and color results can vary across browsers and operating systems.'
    ]
  },
  ko: {
    'how-it-works': [
      '파일을 선택하면 브라우저가 파일 형식과 용량을 확인하고 이미지를 해석해 실제 픽셀 크기를 읽습니다. 확장자만 맞는다고 처리 가능한 파일로 판단하지는 않습니다.',
      '선택한 크기 조절 방식에 따라 출력 가로와 세로를 계산합니다. 원본과 출력 비율이 다르면 전체 표시, 영역 채우기, 강제 맞춤 중 선택한 방식으로 여백이나 잘릴 영역을 결정합니다.',
      'JPEG와 WebP에서 목표 용량을 설정하면 여러 품질 값을 시험합니다. 목표 이하에서 확인된 결과 중 가능한 높은 품질을 선택하며 정확히 같은 바이트가 된다고 표현하지 않습니다.',
      '품질만 낮춰 목표를 맞출 수 없고 해상도 자동 감소를 허용했다면 가로와 세로를 단계적으로 줄입니다. 실제 최종 크기는 다운로드 전에 표시됩니다.',
      '처리한 파일은 브라우저의 임시 메모리에 머뭅니다. 더 이상 필요하지 않은 미리보기 주소, 캔버스와 작업 자원은 목록을 지우거나 화면을 닫을 때 정리됩니다.',
      '다운로드한 파일을 직접 열어 크기, 용량, 잘린 영역, 투명도, 색상과 글자 선명도를 확인하세요. 다시 저장하면 메타데이터가 빠질 수 있으므로 원본은 따로 보관해야 합니다.'
    ],
    faq: [
      'JPEG, PNG, WebP, BMP, GIF 첫 프레임과 브라우저에서 읽을 수 있는 HEIC·HEIF를 선택할 수 있습니다. HEIC 지원 범위는 브라우저와 운영체제에 따라 달라집니다.',
      '가로만, 세로만, 비율, 긴 변, 최대 가로·세로, 메가픽셀 방식은 원본 비율을 유지합니다. 정확한 가로와 세로를 지정하면 맞춤 방식을 직접 선택해야 합니다.',
      '100KB 같은 값은 상한선입니다. 이미지의 디테일, 노이즈, 투명도, 출력 크기, 형식과 인코더 결과가 달라 정확히 같은 바이트를 보장할 수 없습니다.',
      '편집 과정은 기기에서 실행되지만 브라우저 확장 프로그램과 운영체제에는 각자의 권한이 있습니다. 새 파일을 만들면 EXIF, GPS와 카메라 정보가 보통 제거됩니다.',
      '최대 20장에 같은 설정을 적용하거나 파일별 설정을 사용할 수 있습니다. 특히 모바일에서는 전체 작업 전에 1~2장으로 먼저 확인하는 편이 안전합니다.',
      '파일을 읽을 수 없거나 메모리가 부족하거나 목표 용량에 도달할 수 없으면 이해하기 쉬운 안내를 표시합니다. 파일 수나 출력 크기를 줄이거나 JPG·PNG·WebP로 바꿔 다시 시도하세요.'
    ],
    about: [
      '이 도구는 앱을 설치하거나 사진을 알 수 없는 처리 서버에 보내지 않고 정확한 픽셀과 실용적인 파일 용량을 맞추려는 사용자를 위해 만들었습니다.',
      '웹사이트 이미지, 상품 사진, 프로필 사진, 이메일 첨부, 지원서 사진, 투명 로고, 인쇄 크기 계산과 여러 이미지 규격 통일에 사용할 수 있습니다.',
      '브라우저 로컬 처리는 불필요한 데이터 전송을 줄입니다. 크기 조절 과정에서 선택한 이미지 바이트와 파일명을 외부 이미지 처리 API로 보내지 않습니다.',
      '확대를 원본 복원처럼 설명하거나 손실 압축 결과를 무손실이라고 표현하지 않습니다. 실제 측정값과 예상값을 구분하고 결과 파일 확인을 권장합니다.',
      '브라우저 코덱, 기기 메모리, 색상 처리, HEIC 지원과 플랫폼의 추가 압축에 따라 결과가 달라질 수 있습니다. 중요한 파일은 실제 사용처에서 확인해야 합니다.',
      '가이드와 규격표에는 검토 날짜를 표시합니다. 수정은 광고 문구가 아니라 재현 가능한 동작이나 공식 자료를 기준으로 반영합니다.'
    ],
    contact: [
      '공개된 문의 이메일이 있을 때만 이 페이지에 주소를 표시합니다. 주소가 보이지 않는다면 현재 이용할 수 있는 이메일 문의 채널이 없는 상태입니다.',
      '오류를 설명할 때는 브라우저와 운영체제, 원본 형식과 크기, 선택한 설정, 예상한 결과, 화면에 표시된 문구를 함께 적어 주세요.',
      '민감한 원본 이미지를 첨부하지 말고 사진의 특징을 글로 설명하세요. 같은 형식과 크기의 단순한 시험 파일만으로도 대부분의 기술 문제를 확인할 수 있습니다.',
      '신분증, 가족사진, 의료 이미지, 회사 비밀 자료, 로그인 정보와 결제 정보는 보내지 마세요.',
      '보안 문제는 영향을 받는 페이지, 재현 순서와 예상되는 영향을 설명해야 합니다. 다른 사람의 개인정보를 복사해 보내서는 안 됩니다.',
      '문의 가능 여부는 공개된 연락 방법에 따라 달라집니다. 계정 없이 도구를 사용할 수 있지만 개별 기술 지원이나 답변을 항상 제공한다고 보장하지는 않습니다.'
    ],
    privacy: [
      '선택한 이미지는 브라우저에서 해석하고 크기를 바꾸고 다시 저장한 뒤 다운로드할 수 있게 준비합니다. 실제 이미지를 서비스 데이터베이스에 저장하지 않습니다.',
      '최근 크기, 형식, 품질, 목표 용량, 파일명 접미사, 언어와 동의 선택은 다음 사용을 위해 기기에 저장될 수 있습니다.',
      '캔버스로 새 파일을 만들면 GPS, 촬영 시간, 카메라 모델과 편집 기록 같은 EXIF 정보가 보통 제거됩니다. 메타데이터가 필요하면 원본을 보관하세요.',
      '광고가 활성화된 경우 Google과 파트너는 각자의 정책과 지역별 동의 상태에 따라 쿠키, 웹 비콘, IP 주소와 유사한 신호를 사용할 수 있습니다.',
      '푸터의 개인정보 및 쿠키 설정에서 선택을 다시 열 수 있습니다. Google 동의 관리 기능이 설정된 경우에는 해당 화면이 관련 선택을 관리합니다.',
      '검토 날짜는 이 안내를 마지막으로 확인한 시점을 뜻합니다. 처리, 저장, 분석 또는 광고 방식이 크게 바뀌면 내용을 함께 수정해야 합니다.'
    ],
    terms: [
      '직접 처리할 권한이 있는 이미지의 합법적인 크기 조절, 압축, 형식 변환, 계산과 개인·업무용 파일 준비에 이용할 수 있습니다.',
      '이 사이트는 백업, 보관, 클라우드 저장소나 증거 보존 서비스가 아닙니다. 처리 전에 원본과 필요한 메타데이터를 직접 보관하세요.',
      '선택한 파일의 권리, 기밀성, 정확성과 사용 적합성은 사용자에게 있으며 제출 전에 다운로드 결과를 확인해야 합니다.',
      '브라우저와 기기에 따라 이용 가능 여부와 결과가 달라질 수 있습니다. 메모리 부족, 지원되지 않는 코덱, 손상 파일이나 필요한 웹 자원 문제로 처리가 실패할 수 있습니다.',
      '사이트의 글, 화면 구성 코드와 자체 그래픽에는 각 권리가 적용됩니다. 도구를 이용한다고 다른 사람의 사진이나 상표에 대한 권리가 생기지는 않습니다.',
      '기능, 법적 요구사항 또는 제3자 서비스가 바뀌면 약관을 수정할 수 있습니다. 검토 날짜로 현재 공개된 버전을 확인할 수 있습니다.'
    ],
    cookies: [
      '필수 저장 항목은 동의 상태와 기본 동작에 필요한 선택을 유지합니다. 이를 차단하면 중요한 결정을 기억하지 못할 수 있습니다.',
      '환경설정 저장 항목에는 선택 언어와 최근 편집 설정이 포함될 수 있습니다. 선택한 이미지 픽셀이나 파일 사본은 저장하지 않습니다.',
      '분석 저장은 선택 사항이며 동의가 필요한 지역에서는 동의 전까지 비활성화됩니다. 분석 서비스로 이미지 바이트나 파일명을 보내지 않습니다.',
      '광고 저장은 광고 기능을 켜고 필요한 동의 조건을 충족한 경우에만 사용됩니다.',
      'Google의 동의 관리 기능을 사용하는 경우 자체 설정 창보다 우선해 서로 다른 동의 화면이 동시에 나타나지 않게 합니다.',
      '푸터의 개인정보 및 쿠키 설정에서 이용 가능한 선택을 다시 확인할 수 있습니다. 브라우저 설정에서도 사이트 저장 정보와 쿠키를 삭제할 수 있습니다.'
    ],
    accessibility: [
      '키보드, 터치, 마우스와 보조 기술 사용자가 레이블이 있는 조작 요소, 자연스러운 읽기 순서와 분명한 포커스를 이용할 수 있도록 구성합니다.',
      '드래그 앤 드롭을 사용하지 않아도 파일 선택, 설정, 처리, 취소, 개별 다운로드와 언어 변경을 키보드로 이동할 수 있습니다.',
      '상태 변화는 실시간 안내 영역과 진행률 의미 구조를 사용합니다. 아이콘만 있는 버튼에는 접근 가능한 이름을 넣고 입력 요소에는 레이블을 연결합니다.',
      '텍스트와 조작 요소는 WCAG AA 대비를 목표로 하며 가능한 곳에서 44픽셀 이상의 터치 영역을 사용하고 모션 감소 설정을 존중합니다.',
      '캔버스 미리보기의 모든 시각 정보를 스크린리더로 전달하기는 어렵습니다. 크기, 형식, 용량, 처리 상태와 오류를 글로 함께 제공합니다.',
      '접근성 문제를 알릴 때는 개인정보 이미지 대신 페이지, 브라우저, 보조 기술, 문제가 있는 조작 요소와 기대한 동작을 설명해 주세요.'
    ],
    'editorial-policy': [
      '가이드는 정확한 크기, 목표 용량, 이메일, 인쇄, 상품 사진, 투명 이미지, 모바일 메모리와 개인정보처럼 실제 작업을 중심으로 구성합니다.',
      '변경될 수 있는 플랫폼 규격과 브라우저 동작은 가능한 경우 공식 문서를 확인합니다. 확인하지 못한 숫자를 보장값처럼 표시하지 않습니다.',
      '각 가이드에는 검토 날짜와 남아 있는 한계를 표시합니다. 검토 날짜가 모든 제3자 플랫폼의 규격이 계속 같다는 뜻은 아닙니다.',
      '각 언어 페이지는 단어 몇 개만 바꾸는 방식이 아니라 해당 검색 언어에 맞게 작성합니다. 형식명처럼 정확성에 필요한 기술 용어는 그대로 사용할 수 있습니다.',
      '광고는 업로드, 처리와 다운로드 조작 요소에서 시각적·구조적으로 분리합니다. 광고를 클릭하거나 결제해야 편집을 끝내는 구조를 사용하지 않습니다.',
      '오류가 확인되면 안내를 고치고 내용이 실질적으로 변경된 경우 검토 날짜도 수정합니다. 시험 결과, 예상값과 공식 규정을 구분합니다.'
    ],
    'compression-methodology': [
      '브라우저가 원본을 해석한 뒤 계산된 출력 크기로 캔버스 또는 오프스크린 캔버스에 다시 그립니다. 원본을 수정하는 것이 아니라 새로운 래스터 파일을 만듭니다.',
      'JPEG와 WebP 목표 용량 모드는 제한된 범위에서 여러 품질을 시험합니다. 목표 아래 결과가 존재하면 시험한 값 중 가장 높은 품질을 선택합니다.',
      '기본 허용 오차는 인코더 단계 사이에서 의미 없는 반복을 줄이는 데 사용합니다. 정확히 같다고 주장하지 않고 실제 생성된 바이트를 표시합니다.',
      '실용적인 최저 품질에서도 파일이 너무 크고 자동 감소를 허용했다면 최소 출력 크기를 지키면서 가로와 세로를 단계적으로 줄입니다.',
      '일반적인 브라우저 PNG 저장은 무손실이며 JPEG와 같은 품질 조절 기능을 제공하지 않습니다. PNG는 크기를 줄이거나 다른 형식으로 바꿔야 할 수 있습니다.',
      '캔버스 출력은 보통 메타데이터를 제거하고 브라우저의 sRGB 중심 처리에 따라 색상을 정규화할 수 있습니다. 코덱과 색상 결과는 환경별로 달라질 수 있습니다.'
    ]
  },
  ja: {
    'how-it-works': [
      'ファイルを選ぶと、ブラウザが形式と容量を確認し、画像をデコードして実際のピクセル寸法を読み取ります。拡張子だけでは処理可能と判断しません。',
      '選択した変更方法から出力寸法を計算します。原本と出力の比率が異なる場合は、全体表示、枠を埋める方法、強制変形の選択により余白や切り抜き範囲が決まります。',
      'JPEGとWebPで目標容量を指定すると複数の品質値を試します。上限以下で確認できた結果のうち、可能な限り高い品質を選び、完全なバイト一致は約束しません。',
      '品質調整だけで達成できず、自動的な解像度低下を許可した場合は幅と高さを段階的に下げます。実際の最終寸法は保存前に表示されます。',
      '処理ファイルはブラウザの一時メモリに置かれます。不要になったプレビューURL、キャンバス、作業リソースは一覧を消したときや画面を閉じたときに解放されます。',
      '保存ファイルを開き、寸法、容量、切り抜き、透明度、色、文字の読みやすさを確認してください。再保存でメタデータが失われるため原本は別に保管します。'
    ],
    faq: [
      'JPEG、PNG、WebP、BMP、GIFの最初のフレーム、ブラウザが読めるHEIC・HEIFを選べます。HEIC対応はブラウザ、OS、ファイル種類で異なります。',
      '幅のみ、高さのみ、比率、長辺、最大幅・高さ、メガピクセルの各方法は原本比率を保ちます。正確な幅と高さでは表示方法を選びます。',
      '100KBなどの値は上限です。細部、ノイズ、透明度、出力寸法、形式、エンコーダーにより、完全に同じバイト数は保証できません。',
      '編集は端末で実行されますが、ブラウザ拡張機能やOSには別の権限があります。新しいファイルではEXIF、GPS、カメラ情報が通常削除されます。',
      '最大20枚に共通設定を使うか、画像ごとの設定を使えます。特にスマートフォンでは、全体処理の前に1～2枚で確認すると安全です。',
      '読めないファイル、メモリ不足、到達できない容量、非対応HEICには分かりやすい案内を表示します。枚数や寸法を減らすか、JPEG・PNG・WebPへ変換してください。'
    ],
    about: [
      'アプリを入れたり、写真を不明な処理サーバーへ送ったりせず、正確なピクセルと実用的な容量を整えたい人のためのツールです。',
      'Web画像、商品写真、プロフィール、メール添付、申請写真、透明ロゴ、印刷計画、複数画像の規格統一に利用できます。',
      'ブラウザ内処理は不要なデータ転送を減らします。サイズ変更中に選択画像のバイトやファイル名を外部の画像処理APIへ送りません。',
      '拡大を細部の復元と説明したり、損失圧縮を無損失と表示したりしません。測定結果と推定値を分け、保存後の確認を勧めます。',
      'ブラウザのコーデック、端末メモリ、色処理、HEIC対応、投稿先の再圧縮で結果は変わります。重要な画像は最終利用先で確認してください。',
      'ガイドと規格表には確認日を表示します。訂正は宣伝的な主張ではなく、再現可能な動作や公式資料に基づいて行います。'
    ],
    contact: [
      '公開できる問い合わせメールがある場合だけ本ページに表示します。アドレスがない場合、現在利用できるメール窓口はありません。',
      '報告にはブラウザ、OS、入力形式、原本寸法、選択設定、期待した結果、画面に表示された文言を含めてください。',
      '機密性の高い原本を添付せず、画像の特徴を文章で説明してください。同じ形式と寸法の単純な試験ファイルで多くの問題を再現できます。',
      '身分証、家族写真、医療画像、社外秘ファイル、ログイン情報、決済情報は送信しないでください。',
      'セキュリティ問題は対象ページ、再現手順、想定影響を説明します。他人の個人情報を複製して送ってはいけません。',
      '対応可否は公開中の連絡手段に依存します。アカウントなしで利用できますが、個別回答や技術支援を常に提供するとは限りません。'
    ],
    privacy: [
      '選択画像はブラウザ内でデコード、サイズ変更、再エンコードされ、保存用に準備されます。画像をサービスのデータベースへ保存しません。',
      '最近の寸法、形式、品質、目標容量、接尾辞、言語、同意選択は次回のため端末に保存される場合があります。',
      'Canvasで新しいファイルを作るとGPS、撮影時刻、カメラ機種、編集履歴などのEXIFは通常削除されます。必要なら原本を保管してください。',
      '広告が有効な場合、Googleとパートナーは各方針と地域の同意状況に従い、Cookie、Webビーコン、IPアドレスなどを利用することがあります。',
      'フッターのプライバシーとCookie設定から選択を見直せます。Googleの同意管理を設定した場合は、その画面が関連する選択を管理します。',
      '確認日は本説明を最後に見直した日です。処理、保存、解析、広告方法に重要な変更があれば本ページも更新します。'
    ],
    terms: [
      '扱う権利がある画像について、合法的なサイズ変更、圧縮、形式変換、計算、個人・業務用ファイル準備に利用できます。',
      '本サイトはバックアップ、保管、クラウドドライブ、証拠保存サービスではありません。処理前に原本と必要なメタデータを保管してください。',
      '選択ファイルの権利、機密性、正確性、適合性は利用者の責任であり、提出前に保存結果を確認する必要があります。',
      '利用可否と結果はブラウザや端末で異なります。メモリ不足、非対応コーデック、破損ファイル、必要なWeb資源の問題で失敗する場合があります。',
      'サイト文章、画面コード、独自画像には各権利が適用されます。ツール利用により他人の写真や商標の権利を得ることはありません。',
      '機能、法的要件、第三者サービスの変更に応じて規約を更新する場合があります。確認日で現在公開中の版を識別できます。'
    ],
    cookies: [
      '必須保存は同意状態や基本動作に必要な選択を保持します。遮断すると重要な決定を記憶できない場合があります。',
      '設定保存には言語と最近の編集設定が含まれます。選択画像のピクセルやファイルの複製は含みません。',
      '解析保存は任意で、同意が必要な地域では同意前に無効です。解析サービスへ画像バイトやファイル名を送りません。',
      '広告保存は広告を有効にし、必要な同意条件を満たした場合だけ使用されます。',
      'Googleの同意管理を使う場合は簡易設定画面より優先し、二つの同意画面が競合しないようにします。',
      'フッターのプライバシーとCookie設定で利用可能な選択を確認できます。ブラウザ設定から保存情報やCookieを削除することもできます。'
    ],
    accessibility: [
      'キーボード、タッチ、マウス、支援技術の利用者がラベル付き操作、自然な読み順、見えるフォーカスを使えるように設計します。',
      'ドラッグ操作を使わなくても、ファイル選択、設定、処理、取消、個別保存、言語変更へキーボードで移動できます。',
      '状態変化にはライブ領域と進行状況の意味構造を使います。アイコンだけのボタンには名前を付け、入力にはラベルを関連付けます。',
      '文字と操作はWCAG AAのコントラストを目標にし、可能な場所で44ピクセル以上のタッチ領域を使い、動きの軽減設定を尊重します。',
      'Canvasプレビューの視覚情報すべてを読み上げることは困難です。寸法、形式、容量、状態、エラーを文章でも提供します。',
      'アクセシビリティ問題を知らせる際は、私的画像の代わりにページ、ブラウザ、支援技術、対象操作、期待動作を説明してください。'
    ],
    'editorial-policy': [
      'ガイドは正確寸法、目標容量、メール、印刷、商品写真、透明画像、モバイルメモリ、プライバシーなど実際の作業を中心に構成します。',
      '変更される可能性がある規格やブラウザ動作は、可能な場合に公式資料で確認します。未確認の数値を保証値として表示しません。',
      '各ガイドに確認日と残る制限を示します。確認日はすべての第三者サービスが同じ仕様を維持する保証ではありません。',
      '各言語ページは数語だけ置き換えず、その検索言語に合わせて作成します。正確さに必要な形式名などはそのまま使います。',
      '広告は選択、処理、保存の操作から視覚的・構造的に分離します。広告操作や支払いを編集完了の条件にしません。',
      '誤りを確認したら説明を修正し、内容が実質的に変わった場合は確認日も更新します。試験、推定、公式規則を区別します。'
    ],
    'compression-methodology': [
      'ブラウザが原本をデコードし、計算した寸法でCanvasまたはOffscreenCanvasへ描き直します。原本を変更せず新しいラスターファイルを作ります。',
      'JPEGとWebPの目標容量では範囲内の品質値を試します。上限以下の結果があれば、試した中で最高の品質を選択します。',
      '既定の許容差はエンコーダーの段階間で意味のない反復を減らします。完全一致を主張せず、生成された実バイト数を表示します。',
      '実用的な最低品質でも大きく、自動低下を許可した場合は最小出力寸法を守りながら幅と高さを段階的に下げます。',
      '一般的なブラウザのPNG保存は無損失で、JPEGのような品質調整を提供しません。PNGは寸法縮小や別形式への変換が必要な場合があります。',
      'Canvas出力は通常メタデータを削除し、ブラウザのsRGB中心処理で色を正規化する場合があります。コーデックと色は環境により異なります。'
    ]
  },
  es: {
    'how-it-works': [
      'Al elegir un archivo, el navegador comprueba su tipo y peso, decodifica la imagen y lee las dimensiones reales. La extensión por sí sola no demuestra que el archivo sea procesable.',
      'El modo elegido calcula las dimensiones de salida. Si las proporciones no coinciden, contener, cubrir o estirar determina el margen, el recorte o la deformación.',
      'Para un objetivo en JPEG o WebP se prueban varias calidades. Se conserva la mayor calidad encontrada bajo el límite, sin afirmar que el resultado tendrá exactamente los mismos bytes.',
      'Si bajar la calidad no basta y permites reducir resolución, ancho y alto disminuyen en pasos controlados. Las dimensiones finales aparecen antes de descargar.',
      'Los archivos procesados permanecen en memoria temporal del navegador. Las direcciones de vista previa, los lienzos y los recursos de trabajo se liberan cuando dejan de ser necesarios.',
      'Abre una descarga y confirma dimensiones, peso, recorte, transparencia, color y legibilidad. Conserva el original porque la recodificación puede eliminar metadatos.'
    ],
    faq: [
      'Puedes seleccionar JPEG, PNG, WebP, BMP, el primer fotograma de GIF y HEIC o HEIF que el navegador pueda leer. HEIC depende del navegador, sistema y variante.',
      'Los modos de ancho, alto, porcentaje, lado largo, máximos y megapíxeles conservan la proporción. Las medidas exactas requieren elegir el encuadre.',
      'Un objetivo como 100 KB es un máximo. El detalle, ruido, transparencia, dimensiones, formato y codificador impiden garantizar exactamente los mismos bytes.',
      'La edición ocurre en el dispositivo, pero las extensiones y el sistema tienen sus propios permisos. La exportación suele quitar EXIF, GPS y datos de cámara.',
      'Hasta 20 archivos pueden compartir un ajuste o usar excepciones. Prueba una muestra antes del ZIP, sobre todo en un móvil con poca memoria.',
      'Los archivos ilegibles, la falta de memoria, un objetivo imposible o un HEIC no compatible muestran una explicación. Reduce el lote o convierte a JPEG, PNG o WebP.'
    ],
    about: [
      'La herramienta está pensada para ajustar píxeles y peso sin instalar una aplicación ni enviar fotos a un servidor de procesamiento desconocido.',
      'Sirve para imágenes web, catálogos, perfiles, correo, formularios, logotipos transparentes, planificación de impresión y lotes consistentes.',
      'El procesamiento local reduce transferencias innecesarias. Los bytes y nombres seleccionados no se envían a una API de imágenes durante el redimensionado.',
      'No se presenta la ampliación como recuperación de detalle ni la compresión con pérdida como un proceso sin pérdida. Se separan mediciones y estimaciones.',
      'Los códecs, la memoria, el color, HEIC y la recompresión de la plataforma pueden cambiar el resultado. Revisa los archivos importantes en su destino.',
      'Las guías y tablas muestran fecha de revisión. Las correcciones se basan en comportamiento reproducible o fuentes oficiales, no en afirmaciones promocionales.'
    ],
    contact: [
      'El correo de contacto solo aparece cuando existe un canal público activo. Si no ves una dirección, actualmente no hay soporte por correo disponible.',
      'Un informe útil incluye navegador, sistema, formato, dimensiones originales, ajustes, resultado esperado y el mensaje exacto mostrado.',
      'Describe la imagen en vez de adjuntar un original sensible. Un archivo de prueba sencillo con el mismo formato y dimensiones suele bastar para reproducir el problema.',
      'No envíes documentos de identidad, fotos familiares privadas, imágenes médicas, archivos confidenciales, credenciales ni datos de pago.',
      'Un informe de seguridad debe indicar página afectada, pasos de reproducción e impacto posible. No incluyas datos privados copiados de otra persona.',
      'La posibilidad de respuesta depende del método publicado. La herramienta funciona sin cuenta, pero no se promete asistencia individual.'
    ],
    privacy: [
      'Las imágenes se decodifican, redimensionan, codifican y preparan para descargar dentro del navegador. No se guardan en una base de datos de la aplicación.',
      'Dimensiones, formato, calidad, objetivo, sufijo, idioma y consentimiento recientes pueden guardarse en el dispositivo para restaurar preferencias.',
      'Crear un archivo nuevo con Canvas suele quitar GPS, fecha, cámara e historial de edición. Conserva el original cuando los metadatos sean importantes.',
      'Si se activa publicidad, Google y sus socios pueden usar cookies, balizas, IP u otras señales según sus políticas y el consentimiento disponible.',
      'Puedes reabrir las opciones desde el pie. Cuando se configura la plataforma de consentimiento de Google, esa plataforma gestiona las decisiones aplicables.',
      'La fecha indica la última revisión. Cualquier cambio material en procesamiento, almacenamiento, analítica o publicidad debe reflejarse aquí.'
    ],
    terms: [
      'Puedes usar la herramienta para redimensionar, comprimir, convertir, calcular y preparar de forma legal archivos que tengas derecho a tratar.',
      'El sitio no es una copia de seguridad, archivo, unidad en la nube ni servicio de conservación de pruebas. Guarda tus originales y metadatos necesarios.',
      'Eres responsable de los derechos, la confidencialidad, la exactitud y la idoneidad de los archivos, y de revisar la descarga antes de enviarla.',
      'La disponibilidad y el resultado varían entre navegadores y dispositivos. La memoria, códecs no compatibles, archivos dañados o recursos web pueden causar fallos.',
      'Los textos, el código de interfaz y los gráficos originales conservan los derechos aplicables. Usar la herramienta no concede derechos sobre imágenes o marcas ajenas.',
      'Las condiciones pueden cambiar por funciones, requisitos legales o servicios de terceros. La fecha de revisión identifica la versión publicada.'
    ],
    cookies: [
      'El almacenamiento necesario mantiene decisiones esenciales como el consentimiento y el funcionamiento básico. Bloquearlo puede impedir que el sitio recuerde esas decisiones.',
      'Las preferencias pueden guardar idioma y ajustes recientes. No contienen los píxeles seleccionados ni una copia del archivo.',
      'La analítica es opcional y permanece desactivada hasta el consentimiento cuando este sea obligatorio. No recibe bytes ni nombres de imágenes.',
      'El almacenamiento publicitario solo se usa cuando se activa la publicidad y se cumplen las condiciones de consentimiento.',
      'Una plataforma de consentimiento de Google configurada tiene prioridad sobre el diálogo sencillo para evitar dos interfaces distintas.',
      'Usa “Privacidad y configuración de cookies” en el pie para revisar opciones. El navegador también permite borrar almacenamiento y cookies.'
    ],
    accessibility: [
      'La interfaz busca admitir teclado, tacto, ratón y tecnologías de apoyo mediante controles etiquetados, orden de lectura lógico y foco visible.',
      'La selección, los ajustes, el proceso, la cancelación, las descargas y el idioma se pueden usar sin depender únicamente de arrastrar archivos.',
      'Los cambios de estado utilizan regiones en vivo y semántica de progreso. Los iconos tienen nombres accesibles y los campos están asociados a etiquetas.',
      'El texto y los controles buscan contraste WCAG AA, objetivos táctiles de al menos 44 píxeles cuando es posible y respeto por movimiento reducido.',
      'Una vista Canvas no puede comunicar todos los detalles visuales a un lector. Se ofrecen dimensiones, formato, bytes, estado y errores como texto alternativo.',
      'Para informar de una barrera, indica página, navegador, tecnología de apoyo, control y acción esperada sin enviar una imagen privada.'
    ],
    'editorial-policy': [
      'Las guías se organizan por tareas reales: medidas exactas, peso, correo, impresión, producto, transparencia, memoria móvil y privacidad.',
      'Las especificaciones y conductas cambiantes se comprueban con documentación oficial cuando existe. Las cifras no verificadas no se presentan como garantías.',
      'Cada guía muestra fecha y limitaciones. La fecha no garantiza que una plataforma externa mantenga siempre la misma especificación.',
      'Las páginas se escriben para cada idioma de búsqueda en lugar de sustituir unas palabras. Los nombres técnicos se mantienen cuando son necesarios.',
      'La publicidad se separa visual y estructuralmente de selección, proceso y descarga. No se exige interacción publicitaria ni pago para terminar.',
      'Las correcciones sustituyen instrucciones inexactas y actualizan la fecha cuando cambia el contenido. Se distinguen pruebas, estimaciones y reglas oficiales.'
    ],
    'compression-methodology': [
      'El navegador decodifica el origen y lo dibuja en Canvas u OffscreenCanvas con las dimensiones calculadas. Crea un raster nuevo sin modificar el original.',
      'El modo objetivo de JPEG y WebP prueba calidades dentro de un rango. Si hay resultados bajo el límite, elige la mayor calidad probada.',
      'La tolerancia evita intentos sin valor entre pasos del codificador. Se muestran los bytes reales en lugar de prometer igualdad exacta.',
      'Si la calidad útil mínima sigue siendo grande y permites reducción automática, las dimensiones bajan gradualmente respetando un mínimo.',
      'La exportación PNG normal del navegador es sin pérdida y no ofrece el mismo control de calidad. Puede exigir menos dimensiones u otro formato.',
      'Canvas suele quitar metadatos y puede normalizar color hacia sRGB. Los códecs y el color pueden variar entre navegadores y sistemas.'
    ]
  }
};

const safetyBullets: Record<Locale,string[]> = {
  en:['Keep the original file before editing.','Check dimensions, crop, transparency, and file size after download.','Do not send private source images when reporting a problem.'],
  ko:['편집하기 전에 원본 파일을 따로 보관합니다.','다운로드 후 크기, 잘린 영역, 투명도와 파일 용량을 확인합니다.','오류를 문의할 때 개인정보가 포함된 원본 이미지는 보내지 않습니다.'],
  ja:['編集前に原本を保存します。','保存後に寸法、切り抜き、透明度、容量を確認します。','問題報告時に個人情報を含む原本画像を送らないでください。'],
  es:['Conserva el original antes de editar.','Revisa dimensiones, recorte, transparencia y peso después de descargar.','No envíes imágenes privadas al comunicar un problema.']
};

export function staticPageContent(slug: StaticSlug, locale: Locale) {
  const title = staticTitles[slug][localeIndex[locale]];
  const description = staticDescriptions[locale][slug];
  const details = staticDetails[locale][slug];
  const sections = headings[locale][slug].map((heading, index) => ({
    heading,
    paragraphs: [details[index]],
    bullets: index === 2 ? safetyBullets[locale] : undefined
  }));
  return { title, description, sections };
}
