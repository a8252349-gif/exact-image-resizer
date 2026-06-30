# Image Processing Method

## Decode and validation

The editor checks file count, individual size, session size, declared MIME type or extension, and actual decode success. JPEG, PNG, WebP, GIF first frame, and BMP rely on browser decoding. HEIC/HEIF attempts a dynamically imported, browser-local `heic2any` conversion when the original cannot be used directly.

A successful MIME or extension check is not treated as proof that the file is valid. `createImageBitmap` or the local converter must decode it.

## Dimension calculation

Available modes:

- exact width and height;
- width only;
- height only;
- percentage;
- maximum longest edge;
- maximum width;
- maximum height;
- maximum megapixels.

Exact mode keeps the requested output canvas. When enlargement is disabled, the source drawing scale is capped at 1, so a small source is centered with available background rather than enlarged. Ratio-preserving modes keep a small source at its original dimensions when enlargement is disabled.

## Fit modes

- **Contain:** scale to fit the complete image; unused canvas area uses the selected background or transparency.
- **Cover:** scale to fill the canvas; overflow is cropped using horizontal and vertical focal percentages.
- **Stretch:** fill exact dimensions without preserving ratio. When enlargement is disabled and the source is smaller, it is centered without enlarging.

## Encoding

JPEG and WebP accept a quality value from 5 to 100. PNG uses the browser’s standard lossless encoder. The editor creates a new Blob and therefore normally omits source EXIF metadata.

## Target-size search

For JPEG and WebP:

1. Render at the requested output dimensions.
2. Encode at the selected quality.
3. If the result is above the target plus tolerance, search quality between 0.05 and the selected maximum.
4. Perform up to 12 binary-search iterations.
5. Keep the highest quality result at or below the target.
6. If no acceptable quality meets the target and automatic resolution reduction is enabled, calculate a bounded dimension-reduction ratio and retry.
7. Stop after a maximum number of attempts or before crossing the minimum output dimension.

The default tolerance is two percent. Encoders return discrete results, so exact byte equality is not promised.

## PNG behavior

The browser PNG encoder is lossless and does not expose the same lossy quality continuum. A complex PNG that exceeds a target can be kept, resized further, or converted to transparent WebP or JPEG with a chosen matte background.

## Worker and fallback

`public/image-worker.js` uses `createImageBitmap` and `OffscreenCanvas` where supported. Progress is sent to the main UI. A main-thread Canvas fallback is included for browsers without the worker canvas path.

## Memory cleanup

- Object URLs are revoked when items are removed, replaced, or the editor unmounts.
- ImageBitmap objects are closed after processing.
- Workers are terminated on completion, failure, cancellation, or unmount.
- ZIP and temporary download URLs are revoked after use.

## Color and metadata limitations

Browsers and operating systems may decode or encode colors differently. Canvas output often follows an sRGB-oriented browser pipeline. EXIF, GPS, capture time, camera model, editing history, and some profile data are normally removed. Image Resizer does not claim archival, forensic, or metadata-preserving output.
