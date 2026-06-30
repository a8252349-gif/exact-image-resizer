# Privacy Implementation

## Local image path

The application does not implement an image-upload endpoint. Selected files are decoded with browser APIs, rendered to Canvas or OffscreenCanvas, and returned as local Blob objects. Filenames and image bytes are not deliberately sent to an image-processing API, database, or analytics event.

## Local storage

Only preferences are stored:

- recent output dimensions;
- format;
- quality;
- target value and unit;
- filename suffix;
- language choice;
- local consent preferences when Google CMP is not enabled.

Actual image data is not stored in `localStorage`.

## Metadata

Canvas re-encoding normally strips EXIF and similar metadata. This can remove GPS coordinates and other sensitive fields, but Image Resizer is not presented as a forensic metadata scrubber. Users should inspect sensitive outputs with a dedicated tool when that assurance is required.

## Advertising and consent

AdSense scripts are off by default. When enabled, Google and third parties may use cookies, web beacons, IP addresses, and consent signals. The production privacy and cookie pages must remain consistent with the enabled services.

`NEXT_PUBLIC_GOOGLE_CMP_ENABLED=true` suppresses the project’s simple preferences dialog so a configured Google-certified CMP can be the primary consent interface. When Google CMP is off, advertising scripts and manual slots remain blocked until the user saves advertising consent in the local dialog. The dialog opens on first visit, traps keyboard focus, and closes with Escape.

## Security controls

- React escapes displayed filenames.
- Filename sanitization removes path and reserved characters.
- ZIP entries use generated safe names and do not reproduce user-controlled paths.
- Object URLs are cleaned up.
- Error messages do not include image bytes.
- The code checks decode success rather than trusting the extension alone.
- No image data is placed in a URL query string.

## Residual risks

Browser extensions, malware, shared-device downloads, operating-system thumbnails, browser caches, and user-selected analytics or advertising services are outside the image-processing function. A user handling sensitive material should use a trusted device and browser profile, keep the original secure, and close the page after use.
